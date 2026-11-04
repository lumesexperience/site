// Copia os vetores da marca (scripts/blog/marca.mjs) para a página inicial, que é escrita à mão:
// o sprite do logo e da estrela (entre <!-- marca:inicio --> e <!-- marca:fim -->) e a arte da abertura animada
// (entre <!-- abertura:inicio --> e <!-- abertura:fim -->). Uso: node scripts/blog/marca-no-index.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { ARCO_DENTRO, ARCO_FORA, ESTRELA, ESTRELA_PEQUENA, EXPERIENCE, L, LINHA_1, LINHA_2, LUMES, RAIOS, SPRITE_MARCA } from './marca.mjs';

const ARQUIVO = new URL('../../index.html', import.meta.url).pathname;

// A abertura: o logo principal da identidade (arcos, L, estrelas, linhas e LUMES) com EXPERIENCE embaixo,
// no sistema de coordenadas do "Símbolo Secundário". Cada peça tem a sua classe para o CSS animar.
// A porta (.intro__porta) é o furo da máscara e .intro__luz-porta é a luz dentro dela: o JS desenha o arco de dentro em
// pixels e o leva aceso até os arcos da foto da Delliz, onde a luz se desfaz e o furo mostra a foto.
const ABERTURA = `<div class="intro" id="intro">
    <div class="intro__arte" aria-hidden="true">
      <svg class="intro__fundo"><defs><mask id="intro-mascara" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%"><rect width="100%" height="100%" fill="#fff"/><path class="intro__porta" d="M0 0"/></mask></defs><rect class="intro__cor" width="100%" height="100%" mask="url(#intro-mascara)"/><path class="intro__luz-porta" d="M0 0"/></svg>
      <svg class="intro__logo" viewBox="540 360 1063 1800">
        <defs><radialGradient id="intro-brilho"><stop offset="0" stop-color="#FFF8F0" stop-opacity=".95"/><stop offset=".38" stop-color="#F6DDBF" stop-opacity=".6"/><stop offset="1" stop-color="#F6DDBF" stop-opacity="0"/></radialGradient></defs>
        <circle class="intro__halo" cx="1267" cy="1290" r="380" fill="url(#intro-brilho)"/>
        <path class="intro__arco intro__arco--fora" pathLength="1" d="${ARCO_FORA}"/>
        <path class="intro__arco intro__arco--dentro" pathLength="1" d="${ARCO_DENTRO}"/>
        <path class="intro__l" d="${L}"/>
        <path class="intro__estrela-pequena" d="${ESTRELA_PEQUENA}"/>
        <path class="intro__raios" d="${RAIOS}"/>
        <path class="intro__estrela" d="${ESTRELA}"/>
        <path class="intro__linha intro__linha--1" d="${LINHA_1}"/>
        <g class="intro__nome">${LUMES.map((d, i) => `<path class="intro__letra" style="--i:${i}" d="${d}"/>`).join('')}</g>
        <path class="intro__linha intro__linha--2" d="${LINHA_2}"/>
        <g transform="translate(761.5 2080) scale(.5175) translate(-720 -1273)"><path class="intro__experience" d="${EXPERIENCE.join('')}"/></g>
      </svg>
      <p class="intro__frase">Casamentos, bodas e 15 anos em BH</p>
    </div>
    <button class="intro__pular" type="button">Pular abertura</button>
  </div>`;

let html = readFileSync(ARQUIVO, 'utf8');
const entre = (texto, marca, conteudo) => {
  const re = new RegExp(`(<!-- ${marca}:inicio[^>]*-->)[\\s\\S]*?(<!-- ${marca}:fim -->)`);
  if (!re.test(texto)) throw new Error(`faltam os marcadores <!-- ${marca}:inicio --> e <!-- ${marca}:fim --> no index.html`);
  return texto.replace(re, (_, a, b) => `${a}\n  ${conteudo}\n  ${b}`);
};
html = entre(html, 'marca', SPRITE_MARCA);
html = entre(html, 'abertura', ABERTURA);
writeFileSync(ARQUIVO, html);
console.log('index.html: sprite da marca e abertura atualizados');
