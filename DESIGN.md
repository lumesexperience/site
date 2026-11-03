---
name: Lumes Experience
description: Música ao vivo para casamentos em BH. A identidade Lumes Experience (terracota e pêssego, os dois arcos, o L e a estrela) leva o dia da cerimônia à noite da festa.
colors:
  dia: "#F6E5D2"
  dia-2: "#FCF3E8"
  dia-linha: "#E5C9AA"
  pessego: "#EDC79B"
  tinta: "#33200F"
  tinta-suave: "#6A4A33"
  terracota: "#8E5226"
  terracota-funda: "#6F3E1B"
  sobre-terracota: "#FFF8F0"
  terracota-marca: "#BB7944"
  lume: "#BB7944"
  foco: "#8E5226"
  lume-escuro: "#8E5226"
  noite: "#2B1A0F"
  noite-2: "#3A2416"
  noite-linha: "#5C3B25"
  noite-campo: "#9C7A60"
  noite-dica: "#C2A388"
  luz: "#EDC79B"
  luz-clara: "#F6DDBF"
  noite-foco: "#E9A86F"
  noite-texto: "#F8EBDD"
  noite-suave: "#DCC4AD"
  noite-resposta: "#EAD6C2"
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
  caixa-alta:
    fontFamily: "Manrope, Manrope reserva, Manrope reserva Arial, sans-serif"
    fontSize: "clamp(0.75rem, 0.7rem + 0.3vw, 0.875rem)"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.24em"
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
    backgroundColor: "{colors.terracota}"
    textColor: "{colors.sobre-terracota}"
    typography: "{typography.label}"
    rounded: "{rounded.pilula}"
    padding: "0.8rem 1.5rem"
    height: "3rem"
  botao-hover:
    backgroundColor: "{colors.terracota-funda}"
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
  botao-abertura:
    backgroundColor: "{colors.dia-2}"
    textColor: "{colors.terracota}"
    typography: "{typography.label}"
    rounded: "{rounded.pilula}"
    padding: "0.5rem 1.1rem"
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

# Design System: Lumes Experience

## Overview

**Creative North Star: "A porta acesa"**

A identidade Lumes Experience (entregue pelo dono em 03/11/2026, pasta "Lumes - Identidade Visual") tem duas cores, terracota `#bb7944` e pêssego `#edc79b`, e um símbolo: dois arcos de igreja de mesmo raio, o de dentro mais baixo, e dentro deles um L de alto contraste com uma estrela pequena em cima e uma estrela de quatro pontas acesa ao lado, com oito raios claros atrás. O nome vem em caixa alta geométrica, LUMES, com EXPERIENCE embaixo.

O site leva esse símbolo para a passagem do casamento. A primeira visita abre com o logo se desenhando no pêssego da marca, e o arco de dentro vira uma porta que se abre para a página. A cerimônia acontece num pêssego claro (`--dia`), com tinta marrom e ações em terracota. A festa acontece num marrom-terracota fechado (`--noite`), com texto creme e botões acesos em pêssego (`--luz`). Entre os dois, a faixa `--anoitecer` desce do pêssego ao terracota e à noite, e a estrela do logo acende no meio dela, como a primeira estrela da noite.

O material é luz, sem ruído: halos radiais suaves de pêssego e terracota (`--textura-dia`, `--textura-noite`), nunca grão. A forma recorrente é o arco: o logo, a foto da Delliz dentro dos dois arcos, o retrato, as capas do blog e as miniaturas. A densidade é de revista: colunas de leitura de 42rem, listas numeradas com fio de 1px e numerais Bodoni em terracota. O tom é de convite. O sistema recusa a página de banda com foto em tela cheia e recusa foto genérica no lugar de material que ainda não chegou.

**Key Characteristics:**
- Dois mundos de fundo, dia (pêssego claro) e noite (terracota fechado); a passagem é sempre o `--anoitecer`. O pêssego pleno da marca (`--pessego`) aparece na abertura.
- Terracota para agir no dia, pêssego para agir na noite.
- O terracota da marca (`--terracota-marca`) fica no logo e nos detalhes (arcos, fios, estrelas); texto e botões usam o terracota fechado (`--terracota`), que passa no contraste.
- Bodoni Moda com tamanho óptico fixo para títulos e numerais; Manrope para o resto.
- Os dois arcos e a estrela como assinatura.

## Colors

O terracota e o pêssego da identidade, abertos em tons de uso: um pêssego claro para ler, um terracota fechado para agir e um marrom quase preto para a noite.

### Primary
- **Terracota** (`--terracota`, #8E5226): o botão principal sobre o dia, os links no texto, o título das caixas, os numerais das listas e do roteiro, o círculo de marcar da checagem, o item ativo do sumário e da navegação, o título "Na cerimônia", o botão "Ver a abertura com música". O hover fecha para **Terracota Funda** (`--terracota-funda`), que também é o texto da frase e do "Pular abertura" sobre o pêssego. O texto sobre o terracota é `--sobre-terracota`. Contrastes: 5,0:1 sobre `--dia`, 5,9:1 com `--sobre-terracota`.
- **Luz** (`--luz`, o pêssego da marca): o botão sobre a noite, os numerais da recepção, o ícone de tocar, o "+" das perguntas, a marcação dos campos, o logo no rodapé. O hover clareia para **Luz Clara** (`--luz-clara`), que também é a cor dos links e títulos na noite e da estrela do anoitecer.

### Secondary
- **Terracota da Marca** (`--terracota-marca`, #BB7944): o logo do topo, os traços da abertura, os dois arcos em volta da Delliz, os fios decorativos (o fio do "Em resumo", o traço do fecho). Nunca texto nem botão: tem 2,9:1 sobre o dia, abaixo do mínimo para texto. Logotipo e ornamento ficam fora da regra de contraste.
- **Pêssego** (`--pessego`, #EDC79B): o fundo da abertura, como nas peças da identidade.

### Tertiary
- **Lume** (`--lume`): o terracota da marca em pontos de luz: o centro dos halos, a luz que acende no trilho do sumário, a mistura no fundo da caixa de aviso. Na noite, o ponto é **Lume da Noite** (`--noite-foco`), que também acende as lâmpadas e estrelas das capas.
- **Foco** (`--foco`): o anel de foco de teclado sobre o dia (3px, afastado 3px). Na noite, `--noite-foco`.
- **Lume Escuro** (`--lume-escuro`): o título da caixa de aviso. Só existe no blog.

### Neutral
- **Dia** (`--dia`): o fundo da cerimônia, do corpo do blog e do topo de toda página.
- **Dia Claro** (`--dia-2`): caixas de destaque, sumário no celular, o botão da abertura.
- **Linha do Dia** (`--dia-linha`): fios de 1px, bordas de caixas.
- **Tinta** (`--tinta`) e **Tinta Suave** (`--tinta-suave`): o texto principal e o secundário sobre o dia.
- **Noite** (`--noite`), **Noite Dois** (`--noite-2`), **Linha da Noite** (`--noite-linha`), **Campo da Noite** (`--noite-campo`), **Dica da Noite** (`--noite-dica`): o fundo da recepção e do rodapé, as superfícies levantadas, os fios, as bordas de controle e o texto de exemplo.
- **Texto da Noite** (`--noite-texto`), **Noite Suave** (`--noite-suave`) e **Resposta** (`--noite-resposta`): os textos sobre a noite.

### Named Rules
**A Regra do Dia e da Noite.** Todo bloco pertence ao dia (`--dia` com `--tinta`) ou à noite (`--noite` com `--noite-texto`). A passagem é sempre a faixa `--anoitecer`, nunca um corte seco. A única exceção é a abertura, no pêssego pleno da marca.

**A Regra das Duas Terracotas.** O terracota da marca (#bb7944) é para o logo e os ornamentos; o terracota fechado (#8E5226) é para texto e ação. Nunca troque um pelo outro.

**A Regra da Cor que Age.** No dia, quem age é terracota; na noite, quem age é pêssego (`.botao--luz`). A barra fixa do celular segue a mesma regra.

**A Regra do Root Único.** Os tokens de `:root` de `index.html` e de `assets/css/blog.css` são os mesmos; `scripts/checar.mjs` acusa qualquer divergência. Mude um, mude os dois.

## Typography

**Display Font:** Bodoni Moda (com Bodoni reserva: Noto Serif, Georgia ou Times com `size-adjust`)
**Body Font:** Manrope (com Manrope reserva: Roboto ou Arial com `size-adjust`)

**Character:** O Bodoni de alto contraste conversa com o L da identidade; a Manrope, geométrica e calma, carrega o texto, os botões e os metadados. O LUMES e o EXPERIENCE do logo não são fonte: são vetores traçados da identidade (`scripts/blog/marca.mjs`).

### Hierarchy
- **Display** (500, `clamp(2.75rem, 1.4rem + 5.6vw, 4.75rem)`, 1.02, `-0.015em`, opsz 48): só o h1 do topo, com largura máxima de 8.5em.
- **Headline do artigo** (500, `clamp(2.25rem, 1.5rem + 3.2vw, 3.5rem)`, 1.05, opsz 48): o h1 dos artigos e do blog.
- **Headline** (500, `clamp(2rem, 1.5rem + 2.2vw, 3rem)`, 1.08): os h2 de seção.
- **Title** (500, `clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem)`): os h2 do artigo; os h3 de parte entre 1.5rem e 2rem.
- **Title pequeno** (500, 1.375rem, opsz 14 ou 12): "Em resumo", "Neste artigo", "Leia também", momentos, perguntas, passos.
- **Numeral** (Bodoni, 1.5rem a 2.25rem, numerais alinhados): em `--terracota` no dia e `--luz` na noite.
- **Lead** (400, `clamp(1.125rem, 1rem + 0.45vw, 1.3125rem)`): o texto do topo e a linha fina dos artigos.
- **Body** (400, 1.0625rem, 1.65 na página inicial e 1.7 no blog; 1.125rem a partir de 64rem): o texto corrido, em até 42rem.
- **Label** (600, 1rem, 1.2): botões; 0.9375rem nos compactos, 0.8125rem no chip de assunto.
- **Caixa alta** (600, 0.75 a 0.875rem, espaçamento 0.24em): só a frase da abertura, no espírito do EXPERIENCE.
- **Meta** (400, 0.875rem a 0.9375rem): trilha, assinatura, legendas, notas, rodapé.

### Named Rules
**A Regra do Tamanho Óptico Fixo.** O Bodoni nunca usa o tamanho óptico automático, que afina o traço demais abaixo de ~60px ("BH" vira "BII"). Todo título e numeral declara `font-variation-settings: "opsz" var(--opsz)`: 48 no h1, 24 por padrão, 14 em h3 e numerais, 12 nos nomes pequenos.

**A Regra da Fonte Reserva Medida.** Toda fonte tem reservas locais com `size-adjust` medido, para que a troca não mova linhas nem o botão principal.

**A Regra dos Numerais em Terracota.** Sequência numerada é Bodoni em terracota com numerais alinhados, cada item sobre um fio de 1px: o roteiro, os passos e as listas e prazos do blog.

**A Regra do Texto Justificado.** Pedido do dono em 03/11/2026, ajustado na revisão impeccable do mesmo dia: o texto corrido é justificado só nas colunas largas e só a partir de 64rem. Na página inicial, a bio da Delliz, as introduções de seção e as respostas do FAQ; no blog, os parágrafos e listas do corpo do artigo, o resumo, o aviso e a bio da autora. Vai sempre com `hyphens: auto` (o `lang="pt-BR"` da página) e `hyphenate-limit-chars: 11 4 4`, que só quebra palavras de 11 letras ou mais, para nunca partir nomes como Delliz, Christine, Experience ou Horizonte. No celular e nas colunas estreitas (o texto do topo, a ficha de fatos, os passos, o roteiro, as notas, as legendas, os prazos, a checagem, as fontes, os cartões, as citações e o sumário), o texto fica alinhado à esquerda, porque a justificação abre buracos entre as palavras.

## Layout

Uma coluna centralizada de até 72rem (`--largura`) com margem fluida (`--margem`). O texto corrido nunca passa de 42rem. As seções respiram `clamp(4rem, 3rem + 6vw, 7.5rem)`; as variantes "emenda" e "seguida" tiram o espaço quando dois blocos continuam a mesma ideia.

A partir de 56rem, seções com título e texto usam duas colunas 1:2 (gap 4rem), a navegação do topo aparece e a barra fixa do WhatsApp some. A seção "A voz do Lumes Experience" põe o retrato na coluna estreita e o título com a bio ao lado. A partir de 60rem, o topo e os artigos viram duas colunas: texto à esquerda, o arco à direita (22rem no topo, 19rem no artigo). No celular, a foto do topo vem depois do botão, com 72vw no máximo para os arcos caberem.

No artigo, a partir de 64rem, o sumário ocupa uma segunda coluna de 15rem, fixa ao rolar. No blog, os cartões ficam em duas colunas a partir de 48rem. No celular, abaixo de 56rem, uma barra fixa com o botão do WhatsApp aparece embaixo.

## Elevation & Depth

O sistema é plano, e a profundidade vem da luz: os halos da textura "Luz" e o halo pêssego atrás da Delliz, que acende uma vez ao carregar (ou quando a porta da abertura se abre). As capas do blog brilham por dentro sobre um gradiente de marrom-terracota. O rodapé é `--noite` liso.

### Shadow Vocabulary
- **Sombra do arco** (`box-shadow: 0 1.75rem 3rem -1.5rem color-mix(in srgb, var(--tinta) 45%, transparent)`): a foto da Delliz, o retrato e as capas do blog.
- **Sombra da barra** (`box-shadow: 0 -0.75rem 2rem -1rem color-mix(in srgb, var(--noite) 50%, transparent)`): a barra fixa do celular.

### Named Rules
**A Regra da Luz no Lugar da Sombra.** Caixas, cartões, formulário e campos não têm sombra; separam-se por fio de 1px e por tom. Só o arco e a barra fixa projetam sombra.

**A Regra do Halo Sem Ruído.** A textura é feita só de gradientes radiais suaves. Nada de grão, ruído ou imagem de papel.

## Shapes

A silhueta da marca é o arco de igreja: topo semicircular e base quase reta (`border-radius: 50% 50% 0.375rem 0.375rem / 40% 40% 0.375rem 0.375rem`, em 4:5). Em faixas largas, o arco abre com 62% de raio vertical, em 2:1. O símbolo da identidade usa dois arcos de traço fino e mesmo raio, o de dentro deslocado para baixo em metade do raio. Ação é pílula (999px). Caixas, sumário e formulário têm cantos de 6px; campos, 4px; amostras, 2px. Retratos de assinatura são círculos. Fios são de 1px.

## Components

### Logo
A sub-marca horizontal da identidade (os dois arcos com o L e as estrelas, LUMES e EXPERIENCE) é um `<symbol id="marca-logo">` no sprite de cada página, usado com `<svg viewBox="0 0 1745 594"><use href="#marca-logo"/></svg>` (o viewBox de fora começa em 0, porque o símbolo já tem o seu). No topo, em `--terracota-marca`, com 2.35 a 2.85rem de altura; no rodapé, em `--luz`, com 3.25rem. Os arcos do símbolo têm traço que não escala (`vector-effect`), para não sumir em tamanho pequeno. Vetores em `scripts/blog/marca.mjs`; `scripts/blog/marca-no-index.mjs` copia para a página inicial.

### Abertura (a intro)
O logo principal se desenha no pêssego pleno, a 100 bpm (um tempo = 0,6 s). Primeiro os dois arcos, em colcheias. Depois cintila a estrela pequena e o L sobe por trás de um recorte. A estrela grande acende com os raios girando e um halo. As linhas se abrem do centro, LUMES entra letra a letra em semicolcheias e vêm EXPERIENCE e a frase em caixa alta. Os detalhes somem, o arco de dentro vira uma porta (o furo de uma máscara SVG, medido em pixels na tela) que se acende e se abre até cobrir a tela, e o logo cresce junto, com os traços dos arcos acompanhando a borda da porta. São cerca de 7 s. Clique, tecla, rolagem ou "Pular abertura" encerram na hora.
- **Quando roda sozinha:** na primeira visita da sessão (`sessionStorage`), sem âncora na URL e sem "reduzir movimento". A decisão sai de um script no `<head>`, antes da primeira pintura (classe `com-abertura`). `?abertura` força, para revisar.
- **Com música:** o botão "Ver a abertura com música", sob a foto do topo, repete a abertura com uma trilha sintetizada no navegador (Web Audio, nenhum arquivo): cordas em Ré maior (I–vi–IV–I), sinos para a luz dos arcos, harpa para o L e as letras, um grave e um sopro de ar na estrela e na porta, salão gerado na hora. Os tempos da animação e da música saem do mesmo objeto `T` no JS. A imagem espera a latência de saída da placa de som.
- **Movimento reduzido:** não roda sozinha; pelo botão, o logo aparece parado, a música toca e a tela esmaece no tempo da porta.
- **Segurança:** se o JS falhar, a abertura some sozinha em 9 s. A luz e os arcos da foto do topo esperam a porta abrir para acender.

### Buttons
- **Shape:** pílula, altura mínima de 3rem, ícone do WhatsApp a 1.2em à esquerda.
- **Primary (dia):** `--terracota` com texto `--sobre-terracota`, padding 0.8rem 1.5rem, Manrope 600 a 1rem.
- **Luz (noite):** `--luz` com texto `--noite`.
- **Hover / Focus:** o fundo muda em 0.2s (`--terracota-funda` ou `--luz-clara`); anel de 3px em `--foco` ou `--noite-foco`.
- **Compacto:** altura 2.75rem; o botão do topo.
- **Abertura:** pílula clara (`--dia-2` a 70%), borda `--dia-linha`, texto `--terracota` com o ícone de nota; no hover, a borda passa ao terracota da marca. Só aparece com JS (classe `.js`).

### Chips
- **Assunto da capa:** pílula `--noite` com borda em `--luz` a 45% e texto `--luz-clara`.
- **Opção do formulário:** pílula com borda `--noite-campo`; marcada, a borda vira `--luz` com 12% de `--luz` no fundo.

### Cards / Containers
- **Caixa de destaque (blog):** `--dia-2`, borda `--dia-linha`, cantos de 6px. Título em `--terracota`. Variantes: igreja, aviso (lume na borda e no fundo; título em `--lume-escuro`), checagem e prazos.
- **Cartão do blog:** arco em cima, título Bodoni, resumo em `--tinta-suave`; no hover, a capa cresce 4% e o título sublinha.
- **Formulário de consulta:** `--noite-2`, borda `--noite-linha`, cantos de 6px.

### Inputs / Fields
- **Style:** fundo `--noite`, borda `--noite-campo`, cantos de 4px, altura mínima de 3rem, exemplo em `--noite-dica`.
- **Focus:** o anel da noite (`--noite-foco`).
- **Prévia:** o texto que vai para o WhatsApp, num balão `--noite` à direita.

### Navigation
- **Topo:** o logo à esquerda, os links em Manrope 0.9375rem `--tinta-suave` e o botão compacto à direita. Hover e página atual em `--terracota` sublinhado.
- **Sumário do artigo:** trilho de 1px `--dia-linha`; a seção lida fica `--terracota` em 600 com um ponto `--lume`.
- **Rodapé:** na noite lisa, o logo em `--luz`, links com 2.75rem de altura.

### Arco da voz (assinatura)
A Delliz num arco 4:5, dentro dos dois arcos da identidade (`.voz__arcos`, SVG atrás da foto: mesmo raio, o de dentro mais baixo, traço de ~1,2px em `--terracota-marca`, desenhados na carga em 2.2s). O de fora contorna a foto; o de dentro aparece atrás dos ombros. O halo pêssego acende atrás (`acender`, 2.4s). Na base, a pílula "Ouvir a Delliz" abre o vídeo no YouTube. Embaixo da legenda, o botão da abertura com música.

### Retrato da Delliz (seção "A voz do Lumes Experience")
Uma segunda foto no mesmo arco 4:5, com a sombra do arco e sem halo nem arcos. No computador, a foto fica na coluna estreita, com o título e a bio ao lado. No celular: título, foto (até 16rem) e texto.

### Capa do artigo (assinatura)
O arco sobre um gradiente de marrom-terracota com um brilho de lume e luz no centro, e um desenho em traço pêssego (`scripts/blog/capas.mjs`): alianças, varal de lâmpadas ou pauta, com estrelas e lâmpadas em lume.

### Anoitecer e fechamento
A faixa `--anoitecer` desce do pêssego ao terracota e à noite, com as luzes acesas na metade de baixo e a estrela do logo (`#marca-estrela`) acesa no meio, em `--luz-clara`, com um brilho que pulsa devagar (5s). No blog, ela abre o bloco da autora e o "Leia também".

### Listas numeradas e roteiro
Cada item sobre um fio de 1px, o numeral Bodoni à esquerda. No roteiro, a partir de 56rem, três colunas: número, momento em Bodoni e descrição.

### Perguntas
`details` com fio de 1px, pergunta em Bodoni, um "+" em `--luz` que gira 45° ao abrir.

## Do's and Don'ts

### Do:
- **Do** usar o terracota da marca (#bb7944) no logo e nos ornamentos, e o terracota fechado (#8E5226) em texto e botões.
- **Do** manter cada bloco no dia ou na noite e passar de um para o outro pelo `--anoitecer`.
- **Do** usar os vetores de `scripts/blog/marca.mjs` para o logo, a estrela e a abertura, e rodar `marca-no-index.mjs` depois de mudá-los.
- **Do** declarar `--opsz` em todo texto em Bodoni.
- **Do** emoldurar toda foto da Delliz e toda capa no arco de igreja.
- **Do** manter os `:root` de `index.html` e `assets/css/blog.css` iguais e rodar `scripts/checar.mjs`.
- **Do** manter a abertura curta, pulável e só na primeira visita; a ação principal continua sendo o WhatsApp.
- **Do** respeitar `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** usar o terracota da marca (#bb7944) em texto ou com texto branco: não passa no contraste.
- **Don't** redesenhar o logo com fonte: LUMES e EXPERIENCE são os vetores da identidade.
- **Don't** tocar som sem um clique da pessoa.
- **Don't** pôr grão, ruído ou imagem de papel na textura.
- **Don't** pôr foto genérica ou de estúdio no lugar das amostras de casamento.
- **Don't** dar sombra a caixas, cartões, campos ou formulário.
- **Don't** usar `vector-effect: non-scaling-stroke` em traço com tracejado animado (`stroke-dasharray`): o tracejado sai falhado.
