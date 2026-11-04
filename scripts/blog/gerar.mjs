// Gera as páginas do blog (blog/index.html e blog/<slug>/index.html) a partir de artigos.mjs.
// Uso: node scripts/blog/gerar.mjs. O resultado é HTML puro; não edite as páginas geradas à mão.
import { mkdirSync, writeFileSync } from 'node:fs';
import { artigos } from './artigos.mjs';
import { arteDaCapa, TEMA_DA_CAPA } from './capas.mjs';
import { SPRITE_MARCA } from './marca.mjs';

const RAIZ = new URL('../../', import.meta.url).pathname.replace(/\/$/, '');
const SITE = 'https://lumesexperience.com.br';
const WA = 'https://wa.me/5531996154698?text=Ol%C3%A1%2C%20Lumes%20Experience!%20Vi%20o%20site%20e%20quero%20consultar%20uma%20data.%0AEvento%3A%20%0AData%3A%20%0ACidade%20e%20local%3A%20%0ACerim%C3%B4nia%3A%20%0AMomentos%20com%20m%C3%BAsica%3A%20';
// O mesmo ID da medição do index.html (GA4_ID). Vazio = nenhum script de terceiros.
const GA4_ID = '';
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const dataPorExtenso = (iso) => { const [a, m, d] = iso.split('-').map(Number); return `${d} de ${MESES[m - 1]} de ${a}`; };
const escapar = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Sem o número da dica no começo: id que começa com dígito não é seletor CSS válido.
const ancora = (texto) => texto.replace(/^\d+\.\s*/, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const minutosDeLeitura = (html) => Math.max(1, Math.round(html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200));

const ICONE = `<svg class="icones" width="0" height="0" aria-hidden="true">
    <symbol id="icone-whatsapp" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></symbol>
    ${SPRITE_MARCA}
  </svg>`;

const autoraJsonLd = { '@type': 'Person', '@id': `${SITE}/#delliz`, name: 'Delliz Christine', url: `${SITE}/#delliz`, jobTitle: 'Cantora', image: `${SITE}/assets/img/delliz-christine-cantando-720.jpg`, sameAs: ['https://www.instagram.com/dellizchristine/'] };
const editoraJsonLd = { '@type': ['MusicGroup', 'LocalBusiness'], '@id': `${SITE}/#lumes`, name: 'Lumes Experience', url: `${SITE}/`, logo: `${SITE}/assets/img/icon-512.png` };

function cabeca({ titulo, tituloOg = titulo, descricao, url, imagem, imagemAlt, tipoOg, jsonLd, raiz }) {
  return `<!doctype html>
${AVISO}
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${escapar(titulo)}</title>
  <meta name="description" content="${escapar(descricao)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="Delliz Christine">
  <link rel="canonical" href="${url}">

  <meta property="og:type" content="${tipoOg}">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="Lumes Experience">
  <meta property="og:title" content="${escapar(tituloOg)}">
  <meta property="og:description" content="${escapar(descricao)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${imagem}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${escapar(imagemAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#F6E5D2">
  <meta name="color-scheme" content="only light">

  <link rel="icon" href="${raiz}assets/img/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="${raiz}assets/img/favicon-48.png" sizes="48x48" type="image/png">
  <link rel="apple-touch-icon" href="${raiz}assets/img/apple-touch-icon.png">

  <link rel="preload" href="${raiz}assets/fonts/bodoni-moda.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="${raiz}assets/fonts/manrope.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${raiz}assets/css/blog.css">

  <!-- Todo fato aqui precisa estar escrito, igual, no texto visível da página (regra do Google). -->
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2).replace(/^/gm, '  ')}
  </script>
</head>`;
}

function topo(raiz, { faixa = false } = {}) {
  return `  <a class="pular" href="#principal">Pular para o conteúdo</a>

  ${ICONE}

  ${faixa ? '<div class="topo-faixa">\n  ' : ''}<header class="topo conteudo">
    <a class="marca" href="${raiz}" aria-label="Lumes Experience, página inicial"><svg viewBox="0 0 1745 594" aria-hidden="true"><use href="#marca-logo"/></svg></a>
    <nav class="topo__nav" aria-label="Seções">
      <a class="so-largo" href="${raiz}#delliz">Delliz</a>
      <a href="${raiz}#eventos">Eventos</a>
      <a href="${raiz}#perguntas">Perguntas</a>
      <a href="${raiz}blog/" aria-current="page">Blog</a>
    </nav>
    <a class="botao botao--compacto" data-cta="topo" target="_blank" rel="noopener" href="${WA}">
      <svg aria-hidden="true"><use href="#icone-whatsapp"/></svg>Consultar a data
    </a>
  </header>${faixa ? '\n  </div>' : ''}`;
}

function fim({ raiz, dataModificada, leiaTambem, script = '' }) {
  const outros = leiaTambem.length ? `
      <section class="leia-tambem conteudo" aria-labelledby="titulo-leia">
        <h2 id="titulo-leia">Leia também</h2>
        <ul>
${leiaTambem.map((a) => `          <li>
${capa(a, 'capa--mini').replace(/^/gm, '            ')}
            <div>
              <a href="${raiz}blog/${a.slug}/">${a.titulo}</a>
              <p>${a.assunto}, leitura de ${minutosDeLeitura(a.corpo)} minutos</p>
            </div>
          </li>`).join('\n')}
        </ul>
      </section>` : '';
  return `    <div class="anoitecer" aria-hidden="true"><svg class="anoitecer__estrela" viewBox="0 0 460 460"><use href="#marca-estrela"/></svg></div>
    <div class="noite">
      <section class="autora conteudo" aria-labelledby="titulo-autora">
        <div class="autora__cartao">
          <div class="autora__quem">
            <picture>
              <source type="image/webp" srcset="${raiz}assets/img/delliz-christine-rosto.webp">
              <img src="${raiz}assets/img/delliz-christine-rosto.jpg" width="192" height="192" loading="lazy" decoding="async" alt="">
            </picture>
            <div>
              <h2 id="titulo-autora">Delliz Christine</h2>
              <p>Cantora à frente do Lumes Experience</p>
            </div>
          </div>
          <p class="autora__bio">O Lumes Experience faz música ao vivo para casamentos, bodas e festas de 15 anos em Belo Horizonte e região: na cerimônia (católica, evangélica ou ecumênica, na igreja ou ao ar livre) e na festa, do coquetel à pista. Delliz também integra o Jeito Ágape, ministério de música católica de Belo Horizonte.</p>
          <div class="autora__acoes">
            <a class="botao botao--luz" data-cta="blog" target="_blank" rel="noopener" href="${WA}">
              <svg aria-hidden="true"><use href="#icone-whatsapp"/></svg>Consultar a data no WhatsApp
            </a>
            <a href="${raiz}">Conheça o Lumes Experience</a>
          </div>
        </div>
      </section>${outros}
    </div>
  </main>

  <footer class="noite">
    <div class="rodape conteudo">
      <a class="marca" href="${raiz}" aria-label="Lumes Experience, página inicial"><svg viewBox="0 0 1745 594" aria-hidden="true"><use href="#marca-logo"/></svg></a>
      <p>Lumes Experience, música ao vivo para casamentos, bodas e festas de 15 anos em Belo Horizonte e região.</p>
      <ul class="rodape__links">
        <li><a data-cta="rodape" target="_blank" rel="noopener" href="${WA}">WhatsApp (31) 99615-4698</a></li>
        <li><a href="${raiz}blog/">Blog</a></li>
        <li><a href="https://www.instagram.com/dellizchristine/" target="_blank" rel="noopener">Instagram da Delliz</a></li>
        <li><a href="https://jeitoagape.com.br/" target="_blank" rel="noopener">Jeito Ágape</a></li>
      </ul>
      <p>Delliz Christine é integrante do Jeito Ágape, ministério de música católica.</p>
      <p>© 2026 Lumes Experience. Atualizado em <time datetime="${dataModificada}">${dataModificada.split('-').reverse().join('/')}</time>.</p>
    </div>
  </footer>${script}${GA4_ID ? MEDICAO : ''}
</body>
</html>
`;
}

function assinatura(raiz, artigo) {
  const publicado = `Publicado em <time datetime="${artigo.data}">${dataPorExtenso(artigo.data)}</time>`;
  const atualizado = artigo.atualizado && artigo.atualizado !== artigo.data
    ? `, atualizado em <time datetime="${artigo.atualizado}">${dataPorExtenso(artigo.atualizado)}</time>` : '';
  return `        <div class="assinatura">
          <picture>
            <source type="image/webp" srcset="${raiz}assets/img/delliz-christine-rosto.webp">
            <img src="${raiz}assets/img/delliz-christine-rosto.jpg" width="192" height="192" decoding="async" alt="">
          </picture>
          <div>
            <p class="assinatura__nome">Por <a href="${raiz}#delliz" rel="author">Delliz Christine</a></p>
            <p class="assinatura__meta">${publicado}${atualizado}. Leitura de ${minutosDeLeitura(artigo.corpo)} minutos.</p>
          </div>
        </div>`;
}

function capa(artigo, classe) {
  const tema = artigo.tema || TEMA_DA_CAPA[artigo.capa] || 'terracota';
  return `<div class="capa capa--${tema}${classe ? ` ${classe}` : ''}">
  ${arteDaCapa(artigo.capa, tema)}${classe === 'capa--mini' ? '' : `
  <p class="capa__assunto">${artigo.assunto}</p>`}
</div>`;
}

function comAncoras(corpo) {
  const secoes = [];
  const html = corpo.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, titulo) => {
    const id = ancora(titulo);
    secoes.push({ id, titulo });
    return `<h2 id="${id}">${titulo}</h2>`;
  });
  return { html, secoes };
}

function sumario(secoes) {
  return `        <nav class="sumario" aria-labelledby="titulo-sumario">
          <h2 id="titulo-sumario">Neste artigo</h2>
          <ul>
${secoes.map((s) => `            <li><a href="#${s.id}">${s.titulo}</a></li>`).join('\n')}
          </ul>
        </nav>`;
}

const MARCAR_SECAO = `
  <script>
    // Acende no sumário a seção que está sendo lida: o último título que já passou do terço de cima da tela.
    const titulosDasSecoes = [...document.querySelectorAll('.texto h2[id]')];
    const linksDoSumario = new Map([...document.querySelectorAll('.sumario a')].map((link) => [link.hash.slice(1), link]));
    function marcarSecao() {
      const lidos = titulosDasSecoes.filter((titulo) => titulo.getBoundingClientRect().top < innerHeight / 3);
      const idAtual = lidos.length ? lidos[lidos.length - 1].id : null;
      linksDoSumario.forEach((link, id) => (id === idAtual ? link.setAttribute('aria-current', 'true') : link.removeAttribute('aria-current')));
    }
    addEventListener('scroll', () => requestAnimationFrame(marcarSecao), { passive: true });
    marcarSecao();
  </script>`;

// Medição opcional, igual à da página inicial: o clique em qualquer [data-cta] vira whatsapp_click com cta_location.
const MEDICAO = `
  <script>
    addEventListener('load', () => {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA4_ID}';
      document.head.append(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() { dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', '${GA4_ID}');
    });
    document.addEventListener('click', (e) => {
      const c = e.target.closest('[data-cta]');
      if (c && window.gtag) gtag('event', 'whatsapp_click', { cta_location: c.dataset.cta });
    });
  </script>`;

const AVISO = '<!-- Página gerada por scripts/blog/gerar.mjs: edite o artigo em scripts/blog/artigos/ e gere de novo. -->';

function paginaDoArtigo(artigo) {
  const raiz = '../../';
  const url = `${SITE}/blog/${artigo.slug}/`;
  const imagem = `${SITE}/assets/img/blog/${artigo.slug}.jpg`;
  const atualizado = artigo.atualizado ?? artigo.data;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', '@id': `${url}#artigo`, headline: artigo.titulo, description: artigo.descricao, image: imagem,
        datePublished: artigo.data, dateModified: atualizado, inLanguage: 'pt-BR', mainEntityOfPage: url,
        author: autoraJsonLd, publisher: editoraJsonLd, isPartOf: { '@type': 'Blog', '@id': `${SITE}/blog/#blog`, name: 'Blog do Lumes Experience' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Lumes Experience', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
          { '@type': 'ListItem', position: 3, name: artigo.titulo },
        ],
      },
    ],
  };
  const fontes = artigo.fontes.length ? `
        <section class="fontes" aria-labelledby="titulo-fontes">
          <h2 id="titulo-fontes">Fontes</h2>
          <ol>
${artigo.fontes.map((f) => `            <li><a href="${f.url}" target="_blank" rel="noopener">${f.texto}</a></li>`).join('\n')}
          </ol>
        </section>` : '';
  const corpo = comAncoras(artigo.corpo);
  const html = `${cabeca({ titulo: `${artigo.tituloCurto} | Blog do Lumes Experience`, tituloOg: artigo.titulo, descricao: artigo.descricao, url, imagem, imagemAlt: artigo.titulo, tipoOg: 'article', jsonLd, raiz })}
<body>
${topo(raiz)}

  <main id="principal">
    <article class="artigo" aria-labelledby="titulo">
      <header class="artigo__topo conteudo">
        <div class="artigo__abertura">
          <p class="trilha"><a href="${raiz}blog/">Blog do Lumes Experience</a></p>
          <h1 id="titulo">${artigo.titulo}</h1>
          <p class="linha-fina">${artigo.linhaFina}</p>
${assinatura(raiz, artigo).replace(/^(?=.)/gm, '  ')}
        </div>
${capa(artigo, 'capa--artigo').replace(/^/gm, '        ')}
      </header>

      <div class="artigo__corpo conteudo">
        <section class="resumo" aria-labelledby="titulo-resumo">
          <h2 id="titulo-resumo">Em resumo</h2>
          <ul>
${artigo.resumo.map((r) => `            <li>${r}</li>`).join('\n')}
          </ul>
        </section>

${sumario(corpo.secoes)}

        <div class="texto">
${corpo.html.trim().replace(/^(?=.)/gm, '          ')}
        </div>
${fontes.replace(/^(?=.)/gm, '  ')}
      </div>
    </article>

${fim({ raiz, dataModificada: atualizado, leiaTambem: artigos.filter((a) => a.slug !== artigo.slug), script: MARCAR_SECAO })}`;
  mkdirSync(`${RAIZ}/blog/${artigo.slug}`, { recursive: true });
  writeFileSync(`${RAIZ}/blog/${artigo.slug}/index.html`, html);
}

function paginaDoBlog() {
  const raiz = '../';
  const url = `${SITE}/blog/`;
  const maisRecente = artigos.map((a) => a.atualizado ?? a.data).sort().at(-1);
  const descricao = 'Textos da cantora Delliz Christine, do Lumes Experience, para quem está planejando o casamento em BH: cartório e igreja, orçamento, cronograma e a música de cada momento.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': 'Blog', '@id': `${url}#blog`, name: 'Blog do Lumes Experience', url, description: descricao, inLanguage: 'pt-BR',
      author: autoraJsonLd, publisher: editoraJsonLd,
      blogPost: artigos.map((a) => ({ '@type': 'BlogPosting', headline: a.titulo, url: `${url}${a.slug}/`, datePublished: a.data, dateModified: a.atualizado ?? a.data, author: { '@id': `${SITE}/#delliz` } })),
    }],
  };
  const cartoes = artigos.map((a) => `        <li class="cartao">
${capa(a).replace(/^/gm, '          ')}
          <div class="cartao__texto">
            <h2 class="cartao__titulo"><a href="${a.slug}/">${a.titulo}</a></h2>
            <p>${a.descricao}</p>
            <p class="cartao__meta"><time datetime="${a.data}">${dataPorExtenso(a.data)}</time>. Leitura de ${minutosDeLeitura(a.corpo)} minutos.</p>
          </div>
        </li>`).join('\n');
  const html = `${cabeca({ titulo: 'Blog do Lumes Experience: dicas para quem vai casar', descricao, url, imagem: `${SITE}/assets/img/og-lumes.jpg`, imagemAlt: 'Lumes Experience, música ao vivo para casamentos em Belo Horizonte', tipoOg: 'website', jsonLd, raiz })}
<body>
${topo(raiz, { faixa: true })}

  <main id="principal">
    <header class="blog__faixa">
      <div class="blog__topo conteudo">
        <div class="blog__abertura">
          <h1 id="titulo">Blog do Lumes Experience</h1>
          <p class="linha-fina">Textos da cantora Delliz Christine para quem está planejando o casamento: do cartório à pista.</p>
          <div class="assinatura">
            <picture>
              <source type="image/webp" srcset="${raiz}assets/img/delliz-christine-rosto.webp">
              <img src="${raiz}assets/img/delliz-christine-rosto.jpg" width="192" height="192" decoding="async" alt="">
            </picture>
            <div>
              <p class="assinatura__nome">Por <a href="${raiz}#delliz" rel="author">Delliz Christine</a></p>
              <p class="assinatura__meta">Cantora à frente do Lumes Experience</p>
            </div>
          </div>
        </div>
        <svg class="blog__simbolo" viewBox="0 0 1063 1440" aria-hidden="true"><use href="#marca-simbolo"/></svg>
      </div>
    </header>
    <section class="blog conteudo" aria-label="Artigos">
      <ul class="cartoes">
${cartoes}
      </ul>
    </section>

${fim({ raiz, dataModificada: maisRecente, leiaTambem: [] })}`;
  mkdirSync(`${RAIZ}/blog`, { recursive: true });
  writeFileSync(`${RAIZ}/blog/index.html`, html);
}

artigos.forEach(paginaDoArtigo);
paginaDoBlog();
console.log('gerado:', artigos.map((a) => `blog/${a.slug}/ (${minutosDeLeitura(a.corpo)} min)`).join(', '));
