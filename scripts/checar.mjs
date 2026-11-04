// Confere o site antes de publicar: marcadores não preenchidos, arquivos citados, JSON-LD válido,
// fatos do schema iguais ao texto visível (exigência do Google) e o blog completo e sincronizado.
// Uso: node scripts/checar.mjs
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';

const raiz = new URL('..', import.meta.url);
const ler = (arquivo) => readFileSync(new URL(arquivo, raiz), 'utf8');

const artigosDoBlog = readdirSync(new URL('blog/', raiz))
  .filter((nome) => statSync(new URL(`blog/${nome}`, raiz)).isDirectory());
const PAGINAS = ['index.html', 'blog/index.html', ...artigosDoBlog.map((slug) => `blog/${slug}/index.html`)];
const ARQUIVOS_PUBLICADOS = [...PAGINAS, 'robots.txt', 'sitemap.xml', 'llms.txt'];
const MARCADORES_OBRIGATORIOS = [
  { texto: 'lumes.example', dica: 'troque pelo domínio real (ex.: https://www.seudominio.com.br)' },
  { texto: '55DDDNUMERO', dica: 'troque pelo WhatsApp do Lumes Experience só com dígitos (ex.: 5531999999999)' },
];

const erros = [];
const avisos = [];

for (const arquivo of ARQUIVOS_PUBLICADOS) {
  const conteudo = ler(arquivo);
  for (const { texto, dica } of MARCADORES_OBRIGATORIOS) {
    const ocorrencias = conteudo.split(texto).length - 1;
    if (ocorrencias > 0) erros.push(`${arquivo}: "${texto}" aparece ${ocorrencias}x, ${dica}`);
  }
}

const semComentarios = (html) => html.replace(/<!--[\s\S]*?-->/g, ' ');

const textoVisivel = (html) => semComentarios(html)
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  // Tags de texto em linha (um link no meio da frase) saem sem deixar espaço; as de bloco viram espaço.
  .replace(/<\/?(?:a|strong|em|b|i|span|time|abbr)\b[^>]*>/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ');

const grafoJsonLd = (pagina, html) => {
  const bloco = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!bloco) {
    erros.push(`${pagina}: bloco JSON-LD não encontrado`);
    return [];
  }
  try {
    return JSON.parse(bloco[1])['@graph'] ?? [];
  } catch (erro) {
    erros.push(`${pagina}: JSON-LD inválido (${erro.message})`);
    return [];
  }
};

// Todo caminho local citado (src, href, poster, srcset) precisa existir; pasta conta se tiver index.html.
const caminhosLocais = (html) => {
  const atributos = [...semComentarios(html).matchAll(/\s(src|href|poster|srcset)="([^"]+)"/g)];
  return atributos
    .flatMap(([, nome, valor]) => (nome === 'srcset' ? valor.split(',').map((parte) => parte.trim().split(/\s+/)[0]) : [valor]))
    .filter((caminho) => caminho && !/^(?:[a-z]+:|#|\/\/)/i.test(caminho))
    .map((caminho) => caminho.split(/[?#]/)[0])
    .filter(Boolean);
};

for (const pagina of PAGINAS) {
  const html = ler(pagina);
  const pastaDaPagina = new URL(pagina.replace(/[^/]*$/, ''), raiz);
  for (const caminho of new Set(caminhosLocais(html))) {
    const alvo = new URL(caminho, pastaDaPagina);
    const existe = caminho.endsWith('/') ? existsSync(new URL('index.html', alvo)) : existsSync(alvo);
    if (!existe) erros.push(`${pagina}: arquivo citado não existe: ${caminho}`);
  }
}

const html = ler('index.html');

const espacosReservados = html.match(/class="amostra [^"]*amostra--vazia/g) ?? [];
if (espacosReservados.length > 0) {
  avisos.push(`${espacosReservados.length} amostra(s) ainda sem foto ou vídeo real (veja o README)`);
}

const grafo = grafoJsonLd('index.html', html);
const visivel = textoVisivel(html);

const faq = grafo.find((no) => no['@type'] === 'FAQPage');
for (const pergunta of faq?.mainEntity ?? []) {
  if (!visivel.includes(pergunta.name)) erros.push(`FAQ no schema sem pergunta visível: "${pergunta.name}"`);
  if (!visivel.includes(pergunta.acceptedAnswer.text)) erros.push(`FAQ no schema com resposta diferente da visível: "${pergunta.name}"`);
}

const dataModificacao = grafo.find((no) => no['@type'] === 'WebPage')?.dateModified;
if (!html.includes(`<time datetime="${dataModificacao}"`)) {
  erros.push(`dateModified ${dataModificacao} não aparece como <time> visível na página`);
}
const sitemap = ler('sitemap.xml');
if (!sitemap.includes(`<lastmod>${dataModificacao}</lastmod>`)) {
  erros.push(`sitemap.xml: lastmod diferente do dateModified (${dataModificacao})`);
}
const llms = ler('llms.txt');
if (!llms.includes(dataModificacao)) {
  erros.push(`llms.txt: data de atualização diferente do dateModified (${dataModificacao})`);
}

// Cada artigo precisa estar na lista do blog, no sitemap e no llms.txt, com as datas do schema visíveis.
const listaDoBlog = ler('blog/index.html');
grafoJsonLd('blog/index.html', listaDoBlog);
for (const slug of artigosDoBlog) {
  const pagina = `blog/${slug}/index.html`;
  const artigo = ler(pagina);
  const post = grafoJsonLd(pagina, artigo).find((no) => no['@type'] === 'BlogPosting');
  if (!post) {
    erros.push(`${pagina}: falta o nó BlogPosting no JSON-LD`);
    continue;
  }
  for (const data of [post.datePublished, post.dateModified]) {
    if (!artigo.includes(`<time datetime="${data}"`)) erros.push(`${pagina}: a data ${data} do schema não aparece como <time>`);
  }
  if (!textoVisivel(artigo).includes(post.headline)) erros.push(`${pagina}: o headline do schema não é o título visível`);
  if (!listaDoBlog.includes(`href="${slug}/"`)) erros.push(`blog/index.html: falta o link para ${slug}/`);
  if (!sitemap.includes(`/blog/${slug}/</loc>`)) erros.push(`sitemap.xml: falta /blog/${slug}/`);
  if (!llms.includes(`/blog/${slug}/`)) erros.push(`llms.txt: falta /blog/${slug}/`);
}

// O blog repete os tokens de cor da página inicial; se um mudar sozinho, o site perde a unidade.
const tokens = (css) => Object.fromEntries([...css.matchAll(/^\s*(--[\w-]+):\s*([^;]+);/gm)].map(([, nome, valor]) => [nome, valor.replace(/\s+/g, ' ').trim()]));
const tokensDaPagina = tokens(html.match(/:root\s*{([\s\S]*?)}/)[1]);
const tokensDoBlog = tokens(ler('assets/css/blog.css').match(/:root\s*{([\s\S]*?)}/)[1]);
// Exceção decidida pelo dono em 04/11/2026: os títulos da página inicial são em Gilda Display; o blog segue em Bodoni.
const PODEM_DIFERIR = new Set(['--serif']);
for (const [nome, valor] of Object.entries(tokensDoBlog)) {
  if (nome in tokensDaPagina && tokensDaPagina[nome] !== valor && !PODEM_DIFERIR.has(nome)) {
    erros.push(`assets/css/blog.css: ${nome} está diferente de index.html (${valor} × ${tokensDaPagina[nome]})`);
  }
}

avisos.forEach((aviso) => console.log(`aviso: ${aviso}`));
erros.forEach((erro) => console.log(`ERRO:  ${erro}`));

if (erros.length > 0) {
  console.log(`\n${erros.length} erro(s): não publique ainda.`);
  process.exit(1);
}
console.log('\nTudo certo para publicar.');
