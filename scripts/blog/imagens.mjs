// Gera as imagens de compartilhamento (1200x630) da página inicial e de cada artigo, e os ícones a partir do favicon.svg,
// com o Chrome headless. Uso: com o site servido em http://localhost:4321 (python3 -m http.server 4321),
// rode node scripts/blog/imagens.mjs. Rode de novo sempre que mudar as cores, um título ou uma capa.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { abrir } from './chrome.mjs';
import { artigos } from './artigos.mjs';
import { arteDaCapa, TEMA_DA_CAPA } from './capas.mjs';
import { SUBMARCA } from './marca.mjs';

const RAIZ = new URL('../../', import.meta.url).pathname.replace(/\/$/, '');
const TEMPORARIA = `${RAIZ}/.imagem-temp.html`;
const IMPECCABLE = `${RAIZ}/.claude/skills/impeccable/scripts/impeccable`;
const geradas = [];

const ESTILO_BASE = `html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{position:relative;box-sizing:border-box;background:var(--textura-dia),var(--dia)}
.texto{position:absolute;left:88px;top:72px;bottom:72px;width:560px;display:flex;flex-direction:column;justify-content:space-between}
.marca{display:block;width:250px;height:auto}
.quem{display:flex;align-items:center;gap:20px;font:600 26px/1.3 var(--sans)}
.quem img{width:72px;height:72px;border-radius:50%}
.quem span{display:block;font-weight:400;color:var(--tinta-suave);font-size:22px}`;

const quem = (linha) => `<div class="quem"><img src="/assets/img/delliz-christine-rosto.jpg" alt=""><div>Delliz Christine<span>${linha}</span></div></div>`;

const paginaDoArtigo = (artigo) => `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="/assets/css/blog.css"><style>
${ESTILO_BASE}
/* A coluna do texto termina 64 px antes da capa: o título nunca encosta no arco. */
h1{font-size:${artigo.titulo.length > 44 ? 58 : 66}px;line-height:1.06;letter-spacing:-.01em;font-variation-settings:"opsz" 48;text-wrap:balance}
.capa{position:absolute;right:88px;top:64px;width:400px}
.capa__assunto{font-size:20px;bottom:28px;padding:6px 18px}
</style></head><body>
<div class="texto">${SUBMARCA('#BB7944', 'marca')}<h1>${artigo.titulo}</h1>${quem('Blog do Lumes Experience')}</div>
<div class="capa capa--${artigo.tema || TEMA_DA_CAPA[artigo.capa] || 'terracota'}">${arteDaCapa(artigo.capa, artigo.tema || TEMA_DA_CAPA[artigo.capa])}<p class="capa__assunto">${artigo.assunto}</p></div>
</body></html>`;

const paginaInicial = () => `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="/assets/css/blog.css"><style>
${ESTILO_BASE}
/* O mote manda, como no topo do site; o logo fica menor que ele. */
.marca{width:300px}
.arcos{position:absolute;z-index:-1;left:-12%;top:-17.6%;width:124%;height:122.4%;overflow:visible}
.arcos path{fill:none;stroke:var(--terracota-marca);stroke-width:.45}
h1{font-size:68px;line-height:1.04;letter-spacing:-.015em;text-wrap:nowrap;font-variation-settings:"opsz" 48}
.voz{position:absolute;right:130px;top:92px;width:352px;aspect-ratio:4/5}
.voz::before{content:"";position:absolute;z-index:-1;left:50%;top:40%;width:190%;aspect-ratio:1;border-radius:50%;translate:-50% -50%;
  background:radial-gradient(circle,color-mix(in srgb,var(--luz-clara) 70%,transparent) 0%,color-mix(in srgb,var(--luz) 42%,transparent) 26%,color-mix(in srgb,var(--luz) 14%,transparent) 46%,transparent 68%)}
.voz img{width:100%;height:100%;object-fit:cover;border-radius:50% 50% 6px 6px/40% 40% 6px 6px;box-shadow:0 28px 48px -24px rgb(51 32 15/.45)}
</style></head><body>
<div class="voz"><svg class="arcos" viewBox="-12 -22 124 153"><path d="M-10 129V40A60 60 0 0 1 110 40V129"/><path d="M-10 129V69.4A60 60 0 0 1 110 69.4V129"/></svg><img src="/assets/img/delliz-christine-cantando-880.jpg" alt=""></div>
<div class="texto">${SUBMARCA('#BB7944', 'marca')}<h1>Só resta a mim<br>cantar o amor.</h1>${quem('Cantora à frente do Lumes Experience')}</div>
</body></html>`;

// O ícone da tela inicial do celular precisa ocupar o quadrado inteiro; o favicon mantém o canto arredondado.
const favicon = readFileSync(`${RAIZ}/assets/img/favicon.svg`, 'utf8');
const paginaDoIcone = (lado, cheio) => `<!doctype html><html><body style="margin:0;background:transparent">
<div style="width:${lado}px;height:${lado}px">${(cheio ? favicon.replace(/rx="\d+"/, 'rx="0"') : favicon).replace('<svg ', `<svg width="${lado}" height="${lado}" `)}</div></body></html>`;

const perfil = mkdtempSync(join(tmpdir(), 'lumes-chrome-'));
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
await fotografar(paginaInicial(), 1200, 630, 'assets/img/og-lumes.jpg', 'jpeg');
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
