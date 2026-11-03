---
name: Lumens
description: Música ao vivo para casamentos em BH. O dia da cerimônia vira a noite da festa, acesa em dourado e laranja.
colors:
  dia: "#EFE3D6"
  dia-2: "#F8F1E9"
  dia-linha: "#DDCBB9"
  tinta: "#2B2520"
  tinta-suave: "#5E5248"
  ouro: "#7A5C1E"
  ouro-linha: "#B08D45"
  verde: "#3E5A42"
  verde-escuro: "#2E4532"
  sobre-verde: "#F8F1E9"
  lume: "#D9732F"
  foco: "#B4521D"
  lume-escuro: "#9C4418"
  noite: "#17201A"
  noite-2: "#202B23"
  noite-linha: "#364539"
  noite-campo: "#7E8F80"
  noite-dica: "#9AA89B"
  luz: "#D9B26A"
  luz-clara: "#E8CB8E"
  noite-foco: "#E0844A"
  noite-texto: "#F2E9DE"
  noite-suave: "#CBC3B5"
  noite-resposta: "#E5DCCF"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni reserva, Bodoni reserva Georgia, Bodoni reserva Times, serif"
    fontSize: "clamp(2.75rem, 1.4rem + 5.6vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 48"
  headline-artigo:
    fontFamily: "Bodoni Moda, Bodoni reserva, Bodoni reserva Georgia, Bodoni reserva Times, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3.2vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "\"opsz\" 48"
  headline:
    fontFamily: "Bodoni Moda, Bodoni reserva, Bodoni reserva Georgia, Bodoni reserva Times, serif"
    fontSize: "clamp(2rem, 1.5rem + 2.2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.08
    fontVariation: "\"opsz\" 24"
  title:
    fontFamily: "Bodoni Moda, Bodoni reserva, Bodoni reserva Georgia, Bodoni reserva Times, serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.1
    fontVariation: "\"opsz\" 24"
  title-sm:
    fontFamily: "Bodoni Moda, Bodoni reserva, Bodoni reserva Georgia, Bodoni reserva Times, serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.25
    fontVariation: "\"opsz\" 14"
  numeral:
    fontFamily: "Bodoni Moda, Bodoni reserva, Bodoni reserva Georgia, Bodoni reserva Times, serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1
    fontFeature: "lnum"
    fontVariation: "\"opsz\" 14"
  lead:
    fontFamily: "Manrope, Manrope reserva, Manrope reserva Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.45vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Manrope, Manrope reserva, Manrope reserva Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Manrope reserva, Manrope reserva Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  meta:
    fontFamily: "Manrope, Manrope reserva, Manrope reserva Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  amostra: "2px"
  campo: "4px"
  caixa: "6px"
  pilula: "999px"
  arco: "50% 50% 0.375rem 0.375rem / 40% 40% 0.375rem 0.375rem"
  arco-faixa: "50% 50% 0.375rem 0.375rem / 62% 62% 0.375rem 0.375rem"
  balao: "1rem 1rem 0.25rem 1rem"
spacing:
  margem: "clamp(1rem, 4vw, 2.5rem)"
  largura: "72rem"
  leitura: "42rem"
  secao: "clamp(4rem, 3rem + 6vw, 7.5rem)"
  bloco: "2rem"
  passo: "1rem"
components:
  botao:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.sobre-verde}"
    typography: "{typography.label}"
    rounded: "{rounded.pilula}"
    padding: "0.8rem 1.5rem"
    height: "3rem"
  botao-hover:
    backgroundColor: "{colors.verde-escuro}"
  botao-luz:
    backgroundColor: "{colors.luz}"
    textColor: "{colors.noite}"
    typography: "{typography.label}"
    rounded: "{rounded.pilula}"
    padding: "0.8rem 1.5rem"
    height: "3rem"
  botao-luz-hover:
    backgroundColor: "{colors.luz-clara}"
  botao-compacto:
    rounded: "{rounded.pilula}"
    padding: "0.55rem 1.1rem"
    height: "2.75rem"
  capa-assunto:
    backgroundColor: "{colors.noite}"
    textColor: "{colors.luz-clara}"
    rounded: "{rounded.pilula}"
    padding: "0.3rem 0.85rem"
  caixa:
    backgroundColor: "{colors.dia-2}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.caixa}"
    padding: "1.25rem 1.5rem 1.5rem"
  consulta-form:
    backgroundColor: "{colors.noite-2}"
    textColor: "{colors.noite-texto}"
    rounded: "{rounded.caixa}"
    padding: "clamp(1.25rem, 1rem + 2vw, 2.5rem)"
  campo:
    backgroundColor: "{colors.noite}"
    textColor: "{colors.noite-texto}"
    rounded: "{rounded.campo}"
    padding: "0.65rem 0.85rem"
    height: "3rem"
  opcao:
    textColor: "{colors.noite-texto}"
    rounded: "{rounded.pilula}"
    padding: "0.4rem 1rem"
    height: "2.75rem"
---

# Design System: Lumens

## Overview

**Creative North Star: "O dia que vira noite"**

O casamento começa de dia e termina de noite, e o site segue essa passagem. A cerimônia acontece num nude claro de papel ao sol (`--dia`), com tinta marrom-escura e ações em verde. A festa acontece num verde quase preto (`--noite`), com o texto em creme e os botões acesos em dourado (`--luz`). Entre as duas, uma faixa de pôr do sol (`--anoitecer`) faz a única passagem larga de laranja, com as primeiras luzes acesas embaixo. Na página inicial essa passagem separa a cerimônia da recepção. No blog, ela fecha cada artigo, antes da Delliz e do WhatsApp.

O material é luz, sem ruído. O fundo do dia tem um sol baixo dourado no canto superior direito e um reflexo laranja à esquerda (`--textura-dia`). A noite tem um brilho dourado no alto e uma brasa laranja à direita (`--textura-noite`). São halos radiais suaves, posicionados em rem a partir do topo de cada bloco, nunca grão ou textura de papel. A forma recorrente é o arco de igreja. Ele emoldura a Delliz na abertura, todas as capas do blog e as miniaturas de "Leia também".

A densidade é de revista: colunas de leitura de 42rem, listas numeradas com fio de 1px e numerais Bodoni dourados, muito espaço entre seções. O tom é de convite, não de vitrine. O sistema recusa a página de banda com foto em tela cheia e lista de serviços, e recusa foto genérica no lugar de material que ainda não chegou: os espaços reservados das amostras são luzes desfocadas sobre a noite.

**Key Characteristics:**
- Dois mundos de fundo, dia e noite, e nenhum terceiro; a passagem entre eles é sempre o `--anoitecer`.
- Verde para agir no dia, dourado para agir na noite; laranja só em pontos de luz.
- Bodoni Moda com tamanho óptico fixo para títulos e numerais; Manrope para todo o resto.
- Textura "Luz": halos radiais suaves, sem ruído.
- O arco de igreja como silhueta de toda imagem e capa.

## Colors

Um nude quente de dia e um verde fechado de noite, ligados por dourado e por pontos de laranja: a luz do nome.

### Primary
- **Verde Cerimônia** (`--verde`): o botão principal sobre o dia, os links dentro do texto, o título das caixas, o círculo de marcar da lista de checagem, o item ativo do sumário e da navegação, o título "Na cerimônia". O hover escurece para **Verde Fechado** (`--verde-escuro`). O texto sobre o verde é `--sobre-verde`.
- **Luz Acesa** (`--luz`): o botão sobre a noite, os numerais dos passos e momentos da recepção, o ícone de tocar, o "+" das perguntas, o cursor e a marcação dos campos, a borda da opção marcada. O hover clareia para **Luz Clara** (`--luz-clara`), que também é a cor dos links e títulos na noite e do texto do chip de assunto das capas.

### Secondary
- **Ouro Velho** (`--ouro`): o brilho legível sobre o dia: numerais das listas, dos prazos e do roteiro da cerimônia, marcadores de lista. Escuro o bastante para texto.
- **Fio de Ouro** (`--ouro-linha`): fios e traços decorativos sobre o dia: o fio acima do "Em resumo", o traço antes do fecho do artigo, o anel do halo atrás da Delliz. Nunca texto.

### Tertiary
- **Lume** (`--lume`): o laranja da luz do nome, em pontos: o centro do halo atrás da Delliz e das capas, a luz que acende no trilho do sumário, a mistura de 8% no fundo da caixa de aviso. Na noite, o ponto laranja é **Lume da Noite** (`--noite-foco`), que também acende as lâmpadas e estrelas das capas.
- **Foco** (`--foco`): o anel de foco de teclado sobre o dia (3px, afastado 3px). Na noite, o anel passa a `--noite-foco`.
- **Lume Escuro** (`--lume-escuro`): o título da caixa de aviso; o único laranja usado como texto sobre o dia. Só existe no blog.

### Neutral
- **Dia** (`--dia`): o fundo da cerimônia, do corpo do blog e do topo de toda página.
- **Dia Claro** (`--dia-2`): o fundo das caixas de destaque e do sumário no celular.
- **Linha do Dia** (`--dia-linha`): fios de 1px entre itens de lista, bordas de caixas, linha da assinatura e das fontes.
- **Tinta** (`--tinta`): o texto principal sobre o dia e a base das sombras.
- **Tinta Suave** (`--tinta-suave`): linha fina, descrições, metadados, navegação em repouso, legendas.
- **Noite** (`--noite`): o fundo da recepção, do fechamento do blog e do rodapé; o fundo dos campos e do chip de assunto.
- **Noite Dois** (`--noite-2`): superfícies levantadas na noite: o formulário de consulta, o fundo dos espaços reservados.
- **Linha da Noite** (`--noite-linha`): fios de 1px entre itens na noite, borda do formulário e do rodapé.
- **Campo da Noite** (`--noite-campo`): a borda dos campos e das opções, mais clara que a linha para ser vista como controle.
- **Dica da Noite** (`--noite-dica`): o texto de exemplo dos campos.
- **Texto da Noite** (`--noite-texto`), **Noite Suave** (`--noite-suave`) e **Resposta** (`--noite-resposta`): o texto principal, o secundário e o das respostas e da prévia da mensagem, sobre a noite.

### Named Rules
**A Regra do Dia e da Noite.** Todo bloco pertence ao dia (`--dia` com `--tinta`) ou à noite (`--noite` com `--noite-texto`). Não existe um terceiro fundo, e a passagem do dia para a noite é sempre a faixa `--anoitecer`, nunca um corte seco.

**A Regra do Lume em Pontos.** O laranja (`--lume`, `--noite-foco`) aparece em pontos: foco, a luz do sumário, as lâmpadas das capas, o centro dos halos. O único campo largo de laranja é o `--anoitecer`, pedido pelo usuário como a luz do Lumens.

**A Regra da Cor que Age.** No dia, quem age é verde; na noite, quem age é dourado (`.botao--luz`). Dourado sobre o dia é brilho (numerais, fios), nunca botão. A barra fixa do celular segue a mesma regra: clara com botão verde sobre o dia, escura com botão dourado sobre a noite.

**A Regra do Root Único.** Os tokens de `:root` de `index.html` e de `assets/css/blog.css` são os mesmos; `scripts/checar.mjs` acusa qualquer divergência. Mude um, mude os dois.

## Typography

**Display Font:** Bodoni Moda (com Bodoni reserva: Noto Serif, Georgia ou Times com `size-adjust`)
**Body Font:** Manrope (com Manrope reserva: Roboto ou Arial com `size-adjust`)

**Character:** Um Bodoni de alto contraste, de convite de casamento, contra uma sans geométrica e calma que carrega todo o texto corrido, os botões e os metadados.

### Hierarchy
- **Display** (500, `clamp(2.75rem, 1.4rem + 5.6vw, 4.75rem)`, 1.02, `-0.015em`, opsz 48): só o h1 da abertura, com largura máxima de 8.5em.
- **Headline do artigo** (500, `clamp(2.25rem, 1.5rem + 3.2vw, 3.5rem)`, 1.05, opsz 48): o h1 dos artigos e da página do blog.
- **Headline** (500, `clamp(2rem, 1.5rem + 2.2vw, 3rem)`, 1.08): os h2 de seção da página inicial.
- **Title** (500, `clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem)`): os h2 dentro do texto do artigo; os h3 de parte, como "Na cerimônia", ficam entre 1.5rem e 2rem; títulos de cartão entre 1.5rem e 2rem, o destaque até 2.75rem com opsz 36.
- **Title pequeno** (500, 1.375rem, opsz 14 ou 12): "Em resumo", "Neste artigo", "Leia também", nomes dos momentos, perguntas, passos.
- **Numeral** (Bodoni, 1.5rem a 2.25rem, numerais alinhados): os números das listas, momentos, passos e prazos, em `--ouro` no dia e `--luz` na noite.
- **Lead** (400, `clamp(1.125rem, 1rem + 0.45vw, 1.3125rem)`): o texto de abertura e a linha fina dos artigos.
- **Body** (400, 1.0625rem, 1.65 na página inicial e 1.7 no blog; 1.125rem a partir de 64rem): o texto corrido, em coluna de até 42rem.
- **Label** (600, 1rem, 1.2): botões; 0.9375rem nos compactos, 0.8125rem no chip de assunto e nos controles das amostras.
- **Meta** (400, 0.875rem a 0.9375rem): trilha, assinatura, legendas, notas, fontes, rodapé.

### Named Rules
**A Regra do Tamanho Óptico Fixo.** O Bodoni nunca usa o tamanho óptico automático, que afina o traço demais abaixo de ~60px ("BH" vira "BII"). Todo título, numeral e marca declara `font-variation-settings: "opsz" var(--opsz)`: 48 no h1, 24 por padrão, 18 na marca, 14 em h3 e numerais, 12 nos nomes pequenos.

**A Regra da Fonte Reserva Medida.** Toda fonte da página tem reservas locais com `size-adjust` medido, para que a troca não mova linhas nem o botão principal.

**A Regra dos Numerais Dourados.** Sequência numerada é Bodoni dourado com numerais alinhados, cada item sobre um fio de 1px. É o mesmo desenho no roteiro da página inicial, nos passos e nas listas e prazos do blog.

## Layout

Uma coluna centralizada de até 72rem (`--largura`) com margem lateral fluida (`--margem`). O texto corrido nunca passa de 42rem (`--leitura`). As seções da página inicial respiram `clamp(4rem, 3rem + 6vw, 7.5rem)` em cima e embaixo; as variantes "emenda" e "seguida" tiram o espaço quando dois blocos continuam a mesma ideia.

A partir de 56rem, seções com título e texto usam duas colunas na proporção 1:2 (gap 4rem), a navegação do topo aparece e a barra fixa do WhatsApp some. A partir de 60rem, a abertura e o topo dos artigos viram duas colunas: texto à esquerda, o arco à direita (22rem na abertura, 19rem no artigo). Abaixo disso, na página inicial o arco vem depois do botão; no artigo, a capa vira uma faixa com o topo em arco acima da trilha.

No artigo, a partir de 64rem, o sumário ocupa uma segunda coluna de 15rem, fixa a 2rem do topo enquanto o texto rola. No celular ele é uma caixa entre o resumo e o texto. No blog, os cartões ficam em duas colunas a partir de 48rem, com o destaque ocupando a linha inteira (arco de 18rem ao lado do texto).

No celular, abaixo de 56rem, uma barra fixa com o botão do WhatsApp aparece embaixo, e a rolagem reserva 7rem no fim para que o foco de teclado nunca fique sob ela. Em telas abaixo de 23.5rem, os botões estreitam o padding e os rótulos longos encurtam.

## Elevation & Depth

O sistema é plano, e a profundidade vem da luz. O fundo do dia e o da noite carregam os halos radiais da textura "Luz"; o arco da Delliz tem um halo de dois anéis (um campo de lume e luz com 190% da largura, um anel de `--ouro-linha` a 45% com 122%) que acende uma vez ao carregar. As capas do blog brilham por dentro com um centro de lume e luz sobre um gradiente de verde-noite. Na noite, a textura fica só no começo; o rodapé é `--noite` liso, para não haver emenda.

### Shadow Vocabulary
- **Sombra do arco** (`box-shadow: 0 1.75rem 3rem -1.5rem color-mix(in srgb, var(--tinta) 45%, transparent)`): a foto da Delliz e as capas do blog. Difusa e baixa, faz o arco pousar no dia. As miniaturas não usam.
- **Sombra da barra** (`box-shadow: 0 -0.75rem 2rem -1rem color-mix(in srgb, var(--noite) 50%, transparent)`): a barra fixa do celular sobre a noite; sobre o dia, a mesma forma com `--tinta` a 25%.

### Named Rules
**A Regra da Luz no Lugar da Sombra.** Caixas, cartões, formulário e campos não têm sombra; separam-se por fio de 1px e por tom (`--dia-2` no dia, `--noite-2` na noite). Só o arco e a barra fixa projetam sombra.

**A Regra do Halo Sem Ruído.** A textura é feita só de gradientes radiais suaves e transparentes. Nada de grão, ruído ou imagem de papel.

## Shapes

A silhueta da marca é o arco de igreja: topo semicircular e base quase reta (`border-radius: 50% 50% 0.375rem 0.375rem / 40% 40% 0.375rem 0.375rem`, em 4:5). Em faixas largas (capa do artigo no celular, cartões do blog), o arco abre na horizontal com 62% de raio vertical, em 2:1. Ação é pílula (999px): botões, chip de assunto, opções do formulário, botão "Ouvir a Delliz", controles das amostras. Caixas, sumário e formulário têm cantos de 6px; campos, 4px; amostras de mídia, 2px. A prévia da mensagem é um balão de conversa com o canto inferior direito quase reto. Retratos de assinatura e da autora são círculos. Fios são sempre de 1px; a única borda mais grossa é o círculo de marcar da checagem (1.5px).

## Components

### Buttons
Pílulas firmes e cheias, uma cor por mundo.
- **Shape:** pílula (999px), altura mínima de 3rem, ícone SVG do WhatsApp a 1.2em à esquerda.
- **Primary (dia):** `--verde` com texto `--sobre-verde`, padding 0.8rem 1.5rem, Manrope 600 a 1rem.
- **Luz (noite):** `--luz` com texto `--noite`; usado no formulário, no fechamento do blog e na barra fixa sobre a noite.
- **Hover / Focus:** o fundo muda em 0.2s (`--verde-escuro` ou `--luz-clara`); foco com anel de 3px em `--foco` (dia) ou `--noite-foco` (noite), afastado 3px.
- **Compacto:** altura 2.75rem, padding 0.55rem 1.1rem, 0.9375rem; o botão do topo.

### Chips
- **Assunto da capa:** pílula `--noite` com borda de 1px em `--luz` a 45% e texto `--luz-clara` (600, 0.8125rem), centralizada na base da capa. Some nas miniaturas.
- **Opção do formulário:** pílula com borda `--noite-campo`, rádio ou caixa em `--luz`; marcada, a borda vira `--luz` e o fundo recebe 12% de `--luz`.

### Cards / Containers
- **Caixa de destaque (blog):** `--dia-2`, borda de 1px `--dia-linha`, cantos de 6px, padding de 1.25rem em cima e 1.5rem embaixo. Título em `--verde` (650). Variantes: **igreja** (a norma em citação Bodoni de 1.19 a 1.375rem), **aviso** (borda e fundo com lume: 40% na borda, 8% no fundo; título em `--lume-escuro`), **checagem** (círculos verdes vazios para marcar à mão) e **prazos** (prazo em numeral Bodoni dourado, explicação em meta, duas colunas a partir de 36rem). A fonte do dado vem embaixo, em meta.
- **Cartão do blog:** sem fundo nem borda; arco em cima, título Bodoni, resumo em `--tinta-suave`. O cartão inteiro é clicável; no hover, a arte da capa cresce 4% em 0.6s e o título sublinha.
- **Formulário de consulta:** `--noite-2`, borda `--noite-linha`, cantos de 6px.

### Inputs / Fields
- **Style:** fundo `--noite`, borda de 1px `--noite-campo`, cantos de 4px, altura mínima de 3rem, cursor em `--luz`, exemplo em `--noite-dica`. Rótulo acima, 600 a 0.9375rem.
- **Focus:** o anel de foco da noite (`--noite-foco`).
- **Prévia:** o texto que vai para o WhatsApp, num balão `--noite` alinhado à direita, em `--noite-resposta`.

### Navigation
- **Topo:** a marca "Lumens" em Bodoni 500 a 1.75rem à esquerda, os links em Manrope 0.9375rem `--tinta-suave` e o botão compacto à direita. Hover e página atual em `--verde` sublinhado. Abaixo de 56rem os links somem e fica só a marca e o botão; abaixo de 22.5rem o botão perde o rótulo.
- **Sumário do artigo:** no computador, um trilho de 1px `--dia-linha` à esquerda dos itens; a seção que está sendo lida fica `--verde` em 600 e acende um ponto `--lume` de 7px sobre o trilho. No celular, uma caixa `--dia-2`.
- **Trilha:** um link em meta acima do h1, com área de toque ampliada.
- **Rodapé:** na noite lisa, marca em `--noite-texto`, links com 2.75rem de altura.

### Arco da voz (assinatura)
A Delliz num arco 4:5 com a foto em `object-fit: cover`, o halo de lume e luz atrás e um anel de ouro em volta, que acendem juntos (`acender`, 2.4s, de 82% a 100% de escala). Na base, a pílula translúcida "Ouvir a Delliz" (`--noite` a 72%, desfoque de 8px) com o triângulo em `--luz`. No hover, a foto cresce 3%.

### Capa do artigo (assinatura)
O arco sobre um gradiente de verde-noite com um brilho de lume e luz no centro, e um desenho em traço dourado em SVG inline (`scripts/blog/capas.mjs`): alianças, um varal de lâmpadas ou uma pauta musical, com estrelas e lâmpadas em lume. O mesmo desenho sai na imagem de compartilhamento. Em 4:5 no computador; em faixa 2:1 no celular e nos cartões, com a arte ampliada 30%.

### Anoitecer e fechamento
A faixa `--anoitecer` (de 9 a 16rem na página inicial, de 6 a 10rem no blog) desce do nude ao verde-noite passando por pêssego, laranja e bronze, com as luzes `--luzes-do-anoitecer` acesas na metade de baixo. No blog, ela abre o bloco da autora (retrato de 4rem, bio, botão de luz) e o "Leia também", que lista os outros artigos em Bodoni de 1.25rem com miniatura do arco de 4.5rem.

### Listas numeradas e roteiro
Cada item sobre um fio de 1px, o numeral Bodoni à esquerda. No roteiro da página inicial, a partir de 56rem, o item vira três colunas: número (4rem), nome do momento em Bodoni (17rem) e descrição. A contagem da recepção continua a da cerimônia.

### Perguntas
`details` com fio de 1px entre itens, pergunta em Bodoni de 1.2 a 1.4rem, um "+" desenhado em dois traços de 1.5px em `--luz` que gira 45° ao abrir (0.25s).

## Do's and Don'ts

### Do:
- **Do** manter cada bloco no dia ou na noite e passar de um para o outro pela faixa `--anoitecer`.
- **Do** usar `.botao` (verde) sobre o dia e `.botao--luz` (dourado) sobre a noite, com altura mínima de 3rem (2.75rem no compacto).
- **Do** declarar `--opsz` em todo texto em Bodoni: 48 em h1, 14 em h3 e numerais, 12 em nomes pequenos.
- **Do** emoldurar toda foto da Delliz e toda capa no arco de igreja, abrindo para 62% em faixas largas.
- **Do** separar itens de lista e seções com fios de 1px (`--dia-linha` no dia, `--noite-linha` na noite) em vez de cartões com sombra.
- **Do** manter os `:root` de `index.html` e `assets/css/blog.css` iguais, e rodar `scripts/checar.mjs` depois de mudar uma cor.
- **Do** citar a fonte de cada dado numa caixa de destaque, em meta, no fim da caixa.
- **Do** desligar animações e transições com `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** usar laranja em campos largos além do `--anoitecer`; o lume é ponto de luz.
- **Don't** usar dourado como botão sobre o dia nem verde como botão sobre a noite.
- **Don't** pôr grão, ruído ou imagem de papel na textura; a textura "Luz" é só halo radial.
- **Don't** pôr foto genérica no lugar de material que ainda não chegou; o espaço reservado é feito de luzes desfocadas sobre `--noite-2`.
- **Don't** dar sombra a caixas, cartões, campos ou formulário; só o arco e a barra fixa projetam sombra.
- **Don't** deixar a textura da noite correr para o rodapé; o rodapé é `--noite` liso.
- **Don't** usar `--ouro-linha` como cor de texto; para texto dourado sobre o dia, use `--ouro`.
