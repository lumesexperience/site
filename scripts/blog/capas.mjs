// Capas dos artigos, no formato das peças da identidade Lumes Experience: um desenho de traço sobre um campo chapado,
// dentro do arco da marca. Dois temas, como na identidade: "terracota" (campo #bb7944, traço creme) e "pessego"
// (campo #edc79b, traço terracota). O campo e a luz vêm do CSS (.capa--terracota / .capa--pessego); aqui só o desenho,
// em SVG inline, sem ids (a mesma arte pode aparecer mais de uma vez na página). As estrelas são a estrela do logo.
import { ESTRELA, RAIOS } from './marca.mjs';

const TEMAS = {
  terracota: { traco: '#FFF1E2', claro: '#FFFFFF', lume: '#FCE1C2' },
  pessego: { traco: '#A8642E', claro: '#8E5226', lume: '#BB7944' },
};
/** Tema padrão de cada desenho; um artigo pode trocar com `tema: 'terracota' | 'pessego'`. */
export const TEMA_DA_CAPA = { pauta: 'terracota', aliancas: 'pessego', varal: 'terracota' };

const num = (n) => Math.round(n * 10) / 10;
const quadratica = (p0, p1, p2, t) => (1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t ** 2 * p2;
const cubica = (p0, p1, p2, p3, t) => (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t ** 2 * p2 + t ** 3 * p3;
const brilho = (x, y, raio, cor) => `<circle cx="${num(x)}" cy="${num(y)}" r="${raio * 3}" fill="${cor}" opacity=".12"/><circle cx="${num(x)}" cy="${num(y)}" r="${raio * 1.8}" fill="${cor}" opacity=".22"/><circle cx="${num(x)}" cy="${num(y)}" r="${raio}" fill="${cor}"/>`;
// A estrela de quatro pontas do logo (miolo com meia-largura 155 em torno de 1268,1290), com os raios claros atrás.
const estrela = (x, y, r, cor) => `<g transform="translate(${x} ${y}) scale(${num(r / 155 * 1000) / 1000}) translate(-1268 -1290)">${r >= 9 ? `<path d="${RAIOS}" fill="${cor}" opacity=".45"/>` : ''}<path d="${ESTRELA}" fill="${cor}"/></g>`;

function aliancas({ traco: DOURADO, claro: DOURADO_CLARO, lume: LUME }) {
  return `<g fill="none" stroke="${DOURADO}">
      <circle cx="134" cy="218" r="56" stroke-width="3.5"/>
      <circle cx="134" cy="218" r="49" stroke-width="1" opacity=".55"/>
      <circle cx="188" cy="218" r="56" stroke-width="3.5"/>
      <circle cx="188" cy="218" r="49" stroke-width="1" opacity=".55"/>
    </g>
    <path d="M81.4 198.8A56 56 0 0 1 114.8 165.4M135.4 198.8A56 56 0 0 1 168.8 165.4" fill="none" stroke="${DOURADO_CLARO}" stroke-width="3.5" stroke-linecap="round"/>
    ${estrela(96, 158, 11, LUME)}${estrela(226, 286, 7, DOURADO_CLARO)}`;
}

function varal({ traco: DOURADO, claro: DOURADO_CLARO, lume: LUME }) {
  const fios = [
    { p: [[-10, 132], [160, 236], [330, 132]], lampadas: 7, raio: 4.5 },
    { p: [[-10, 218], [160, 312], [330, 218]], lampadas: 6, raio: 3.5 },
  ];
  return fios.map(({ p, lampadas, raio }, f) => {
    const [[x0, y0], [x1, y1], [x2, y2]] = p;
    const contas = Array.from({ length: lampadas }, (_, i) => {
      const t = (i + 1) / (lampadas + 1);
      const x = quadratica(x0, x1, x2, t);
      const y = quadratica(y0, y1, y2, t);
      const cor = (i + f) % 3 === 1 ? LUME : DOURADO_CLARO;
      return `<line x1="${num(x)}" y1="${num(y)}" x2="${num(x)}" y2="${num(y + 9)}" stroke="${DOURADO}" stroke-width="1"/>${brilho(x, y + 9 + raio, raio, cor)}`;
    }).join('');
    return `<path d="M${x0} ${y0}Q${x1} ${y1} ${x2} ${y2}" fill="none" stroke="${DOURADO}" stroke-width="1.2" opacity=".8"/>${contas}`;
  }).join('\n    ');
}

function pauta({ traco: DOURADO, claro: DOURADO_CLARO, lume: LUME }) {
  const curva = { x: [-10, 90, 230, 330], y: [178, 128, 258, 208] };
  const ESPACO = 12;
  const linhas = Array.from({ length: 5 }, (_, i) => {
    const y = curva.y.map((v) => v + i * ESPACO);
    return `<path d="M${curva.x[0]} ${y[0]}C${curva.x[1]} ${y[1]} ${curva.x[2]} ${y[2]} ${curva.x[3]} ${y[3]}" fill="none" stroke="${DOURADO}" stroke-width="1.1" opacity=".75"/>`;
  }).join('');
  const notas = [
    { t: 0.2, degrau: 3, cor: DOURADO_CLARO },
    { t: 0.38, degrau: 1.5, cor: DOURADO_CLARO },
    { t: 0.56, degrau: 2.5, cor: LUME },
    { t: 0.74, degrau: 0.5, cor: DOURADO_CLARO },
  ].map(({ t, degrau, cor }) => {
    const x = cubica(...curva.x, t);
    const y = cubica(...curva.y, t) + degrau * ESPACO;
    return `<ellipse cx="${num(x)}" cy="${num(y)}" rx="7.5" ry="5.2" transform="rotate(-22 ${num(x)} ${num(y)})" fill="${cor}"/><line x1="${num(x + 6.6)}" y1="${num(y - 2)}" x2="${num(x + 6.6)}" y2="${num(y - 40)}" stroke="${cor}" stroke-width="1.6"/>`;
  }).join('');
  return `${linhas}\n    ${notas}\n    ${estrela(250, 120, 9, LUME)}`;
}

const DESENHOS = { aliancas, varal, pauta };

export function arteDaCapa(nome, tema = TEMA_DA_CAPA[nome] || 'terracota') {
  return `<svg class="capa__arte" viewBox="0 0 320 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
    ${DESENHOS[nome](TEMAS[tema])}
  </svg>`;
}
