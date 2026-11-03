// Chrome headless controlado pelo protocolo DevTools, sem dependências (Node 22+).
import { spawn } from 'node:child_process';
export const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
export async function abrir(porta, perfil, extras = []) {
  const chrome = spawn('google-chrome', ['--headless=new', '--no-sandbox', '--hide-scrollbars', `--remote-debugging-port=${porta}`, `--user-data-dir=${perfil}`, ...extras, 'about:blank'], { stdio: 'ignore' });
  let alvos;
  for (let i = 0; i < 60; i++) { try { alvos = await (await fetch(`http://127.0.0.1:${porta}/json`)).json(); break; } catch { await esperar(250); } }
  const ws = new WebSocket(alvos.find((a) => a.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pend = new Map(); const erros = [];
  ws.addEventListener('message', (e) => { const m = JSON.parse(e.data);
    if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') erros.push(m.params.exceptionDetails.exception?.description);
    if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error') erros.push(m.params.entry.text + ' ' + (m.params.entry.url || ''));
  });
  const cmd = (method, params = {}) => new Promise((r) => { const n = ++id; pend.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
  const av = async (x) => { const r = await cmd('Runtime.evaluate', { expression: x, awaitPromise: true, returnByValue: true }); if (r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails)); return r.result.result.value; };
  await cmd('Runtime.enable'); await cmd('Log.enable'); await cmd('Page.enable');
  const tela = (w, h, dpr = 1, mobile = false) => cmd('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: dpr, mobile });
  const ir = async (url, ms = 1500) => { await cmd('Page.navigate', { url }); await esperar(ms); };
  const foto = async (arquivo, clip) => { const { writeFileSync } = await import('node:fs'); const r = await cmd('Page.captureScreenshot', { format: 'png', ...(clip ? { clip: { ...clip, scale: 1 }, captureBeyondViewport: true } : {}) }); writeFileSync(arquivo, Buffer.from(r.result.data, 'base64')); };
  return { cmd, av, tela, ir, foto, erros, fechar: () => { ws.close(); chrome.kill(); } };
}
