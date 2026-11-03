// Gera as imagens de compartilhamento (1200x630) da página inicial e de cada artigo, e os ícones a partir do favicon.svg,
// com o Chrome headless. Uso: com o site servido em http://localhost:4321 (python3 -m http.server 4321),
// rode node scripts/blog/imagens.mjs. Rode de novo sempre que mudar as cores, um título ou uma capa.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { abrir } from './chrome.mjs';
import { artigos } from './artigos.mjs';
import { arteDaCapa } from './capas.mjs';

const RAIZ = new URL('../../', import.meta.url).pathname.replace(/\/$/, '');
const TEMPORARIA = `${RAIZ}/.imagem-temp.html`;
const IMPECCABLE = `${RAIZ}/.claude/skills/impeccable/scripts/impeccable`;
const geradas = [];

const ESTILO_BASE = `html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{position:relative;box-sizing:border-box;background:var(--textura-dia),var(--dia)}
.texto{position:absolute;left:88px;top:72px;bottom:72px;width:640px;display:flex;flex-direction:column;justify-content:space-between}
.marca{font-size:40px;padding:0;margin:0}
.quem{display:flex;align-items:center;gap:20px;font:600 26px/1.3 var(--sans)}
.quem img{width:72px;height:72px;border-radius:50%}
.quem span{display:block;font-weight:400;color:var(--tinta-suave);font-size:22px}`;

const quem = (linha) => `<div class="quem"><img src="/assets/img/delliz-christine-rosto.jpg" alt=""><div>Delliz Christine<span>${linha}</span></div></div>`;

const paginaDoArtigo = (artigo) => `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="/assets/css/blog.css"><style>
${ESTILO_BASE}
h1{font-size:${artigo.titulo.length > 50 ? 60 : 72}px;line-height:1.05;letter-spacing:-.01em;font-variation-settings:"opsz" 48}
.capa{position:absolute;right:88px;top:64px;width:400px}
.capa__assunto{font-size:20px;bottom:28px;padding:6px 18px}
</style></head><body>
<div class="texto"><p class="marca">Lumens</p><h1>${artigo.titulo}</h1>${quem('Blog do Lumens')}</div>
<div class="capa">${arteDaCapa(artigo.capa)}<p class="capa__assunto">${artigo.assunto}</p></div>
</body></html>`;

const paginaInicial = () => `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="/assets/css/blog.css"><style>
${ESTILO_BASE}
.marca{font-size:132px;line-height:1;--opsz:48}
h1{font-size:36px;line-height:1.25;text-wrap:nowrap}
.voz{position:absolute;right:120px;top:70px;width:392px;aspect-ratio:4/5}
.voz::before{content:"";position:absolute;z-index:-1;left:50%;top:40%;width:190%;aspect-ratio:1;border-radius:50%;translate:-50% -50%;
  background:radial-gradient(circle,color-mix(in srgb,var(--lume) 34%,transparent) 0%,color-mix(in srgb,var(--luz) 30%,transparent) 26%,color-mix(in srgb,var(--luz) 12%,transparent) 46%,transparent 68%)}
.voz img{width:100%;height:100%;object-fit:cover;border-radius:50% 50% 6px 6px/40% 40% 6px 6px;box-shadow:0 28px 48px -24px rgb(43 37 32/.45)}
</style></head><body>
<div class="voz"><img src="/assets/img/delliz-christine-cantando-880.jpg" alt=""></div>
<div class="texto"><p class="marca">Lumens</p><h1>Música ao vivo para casamentos<br>em BH, do sim à pista.</h1>${quem('Cantora à frente do Lumens')}</div>
</body></html>`;

// O ícone da tela inicial do celular precisa ocupar o quadrado inteiro; o favicon mantém o canto arredondado.
const favicon = readFileSync(`${RAIZ}/assets/img/favicon.svg`, 'utf8');
const paginaDoIcone = (lado, cheio) => `<!doctype html><html><body style="margin:0;background:transparent">
<div style="width:${lado}px;height:${lado}px">${(cheio ? favicon.replace(/rx="\d+"/, 'rx="0"') : favicon).replace('<svg ', `<svg width="${lado}" height="${lado}" `)}</div></body></html>`;

const perfil = mkdtempSync(join(tmpdir(), 'lumens-chrome-'));
const b = await abrir(9500, perfil);

async function fotografar(html, largura, altura, destino, formato) {
  writeFileSync(TEMPORARIA, html);
  await b.tela(largura, altura, 1, false);
  await b.cmd('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });
  await b.ir(`http://localhost:4321/.imagem-temp.html?${Date.now()}`, 2000);
  const r = await b.cmd('Page.captureScreenshot', formato === 'jpeg' ? { format: 'jpeg', quality: 86 } : { format: 'png' });
  writeFileSync(`${RAIZ}/${destino}`, Buffer.from(r.result.data, 'base64'));
  geradas.push(destino);
}

for (const artigo of artigos) await fotografar(paginaDoArtigo(artigo), 1200, 630, `assets/img/blog/${artigo.slug}.jpg`, 'jpeg');
await fotografar(paginaInicial(), 1200, 630, 'assets/img/og-lumens.jpg', 'jpeg');
await fotografar(paginaDoIcone(512, true), 512, 512, 'assets/img/icon-512.png', 'png');
await fotografar(paginaDoIcone(180, true), 180, 180, 'assets/img/apple-touch-icon.png', 'png');
await fotografar(paginaDoIcone(48, false), 48, 48, 'assets/img/favicon-48.png', 'png');

b.fechar();
rmSync(TEMPORARIA, { force: true });

// A origem vai dentro de cada arquivo (exigência do impeccable): sem ela, a revisão de design não aceita a imagem.
if (existsSync(IMPECCABLE)) {
  const origem = 'Gerada por scripts/blog/imagens.mjs (Chrome headless) a partir de assets/css/blog.css, scripts/blog/capas.mjs e assets/img/favicon.svg; sem IA generativa.';
  for (const destino of geradas) execFileSync(IMPECCABLE, ['embed-prompt', `${RAIZ}/${destino}`, '--prompt', origem], { stdio: 'ignore' });
} else {
  console.log('aviso: impeccable não encontrado em .claude/skills; as imagens saíram sem a origem embutida.');
}
rmSync(perfil, { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
console.log('imagens geradas:', artigos.length + 1, 'de compartilhamento e 3 ícones');
