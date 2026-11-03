# Lumens: landing page

Página de captação de noivos do **Lumens**, grupo de música ao vivo para casamentos em Belo Horizonte e região metropolitana, com a cantora **Delliz Christine** à frente. A única conversão é o clique que abre o WhatsApp com a mensagem pronta (data, cidade e local, tipo de cerimônia, momentos com música).

HTML, CSS e JS puros num arquivo só (`index.html`), sem build e sem dependências. Fontes servidas pelo próprio site (Bodoni Moda nos títulos, Manrope no texto, 71 KB no total), com fontes do sistema de largura ajustada como reserva: se a fonte chegar tarde, nada pula na tela.

Lighthouse medido em 21/10/2026: **100 / 100 / 100 / 100** (desempenho, acessibilidade, boas práticas, SEO) no celular e no computador. No celular, LCP 1,8 s e CLS 0, também com rede lenta simulada.

```
index.html          a página inteira (estilos e script embutidos)
blog/               o blog: lista e um artigo por pasta (páginas geradas, não edite à mão)
robots.txt          libera buscadores e robôs de IA
sitemap.xml         a página inicial, o blog e os artigos, com a data da última mudança
llms.txt            resumo dos fatos para assistentes de IA
assets/fonts/       fontes .woff2
assets/css/blog.css estilos do blog (as cores repetem as da página inicial)
assets/img/         Delliz cantando e o rosto dela para as assinaturas, imagens de compartilhamento, ícones
assets/galeria/     fotos das amostras (vazio por enquanto)
assets/video/       vídeos das amostras (vazio por enquanto)
scripts/checar.mjs  confere tudo antes de publicar
scripts/blog/       os artigos (texto e fontes), as capas e os geradores das páginas e das imagens
docs/PESQUISA.md    a pesquisa que embasou cores, texto, SEO e GEO, com fontes
PRODUCT.md          o produto, para o impeccable (não publicar)
DESIGN.md           o sistema visual: cores, tipos e componentes (não publicar)
```

## Ver no computador

```bash
python3 -m http.server 4321    # depois abra http://localhost:4321
```

## Antes de publicar (obrigatório)

1. **Domínio**: troque `https://lumens.example` pelo domínio real em `index.html`, `robots.txt`, `sitemap.xml` e `llms.txt`. Escolha uma versão (com ou sem `www`) e redirecione a outra para ela.
2. **WhatsApp do Lumens**: troque `55DDDNUMERO` pelo número só com dígitos (ex.: `5531999999999`) em `index.html` e `llms.txt`. Aparece nos links, no script e no JSON-LD.
3. Rode o verificador:
   ```bash
   node scripts/checar.mjs
   ```
   Ele falha se sobrar algum marcador, se um arquivo citado em `assets/` não existir, se o FAQ do schema estiver diferente do FAQ visível, ou se a data de atualização divergir entre página, sitemap e llms.txt. Também avisa quantas amostras ainda estão sem foto ou vídeo.

### Para revisar com a Delliz

- **Nome**: usei **Delliz Christine**, com "h", como no Instagram (`@dellizchristine`) e no site do Jeito Ágape. Se o certo for "Cristine", troque em todos os arquivos.
- **Bio** (seção `#delliz` e a pergunta "Quem é Delliz Christine?"): tem só o que já é público. Vale acrescentar fatos reais e verificáveis: anos cantando, número de casamentos, onde estudou. Nunca números inventados.
- **Foto do topo**: é um quadro do vídeo "Espírito Poderoso" (canal do Jeito Ágape), recortado em 4:5. Quando houver uma foto dela cantando num casamento, salve-a em 4:5 com os mesmos nomes (`assets/img/delliz-christine-cantando-480|720|880`, em `.jpg` e `.webp`).
- **Vídeo**: o canal do Jeito Ágape não permite tocar esse vídeo dentro de outros sites, então o arco abre o YouTube em outra aba (no celular, abre o app). Se o canal liberar a incorporação, ou se houver um vídeo do próprio Lumens, dá para tocar na página.
- **Instagram próprio do Lumens**: quando existir, adicione o link no rodapé e no `sameAs` do nó `#lumens` no JSON-LD.

### Opcional

- **Medição (GA4)**: no fim do `index.html`, preencha `const GA4_ID = 'G-...'`. Cada clique no WhatsApp vira o evento `whatsapp_click` com `cta_location` (topo, abertura, fatos, formulário, barra no celular, rodapé). Vazio, nenhum script de terceiros é carregado.
- **Preço "a partir de"**: a pesquisa mostra que preço visível aumenta contatos (detalhes em `docs/PESQUISA.md`). Quando houver um valor real, atualize o fato "Valor", a primeira pergunta do FAQ, o JSON-LD (`priceRange` no nó `#lumens`) e o `llms.txt`.

## Publicar

Qualquer hospedagem estática serve. Os caminhos são relativos, então funciona também numa subpasta. Publique só o site (`index.html`, `blog/`, `robots.txt`, `sitemap.xml`, `llms.txt` e `assets/`); as pastas `.claude/`, `.impeccable/`, `docs/` e `scripts/` e os arquivos `README.md`, `PRODUCT.md` e `DESIGN.md` são ferramentas de trabalho.

- **Cloudflare Pages**: `npx wrangler pages deploy . --project-name=lumens`. ⚠️ A Cloudflare bloqueia robôs de IA por padrão em domínios novos. No painel, em *Security → Bots*, deixe liberados os robôs de busca de IA (OAI-SearchBot, Claude-SearchBot, PerplexityBot), senão o `robots.txt` não adianta.
- **GitHub Pages**: publique a raiz do repositório e coloque o domínio num arquivo `CNAME`.

As duas comprimem e fazem cache sozinhas; os únicos avisos do Lighthouse local eram justamente esses.

## Trocar as amostras por fotos e vídeos reais

A seção `#amostras` tem 3 espaços reservados (entrada da noiva, igreja e pista), numa fileira só, para não ocupar a página com "em breve". Quando chegarem mais registros, acrescente figuras: a grade quebra em linhas de 3. Dentro de um comentário no `index.html`, logo acima da grade, há o modelo pronto de vídeo e de foto: substitua cada `<figure class="… amostra--vazia">` pelo modelo, com os seus arquivos. O script já faz o resto: o vídeo toca sem som só quando aparece na tela, tem botões de pausar e de som, e não toca sozinho para quem pediu menos movimento no sistema. A foto abre ampliada.

**Vídeos** (verticais 9:16, de 10 a 30 s, em `assets/video/`). Com o [ffmpeg](https://ffmpeg.org/):

```bash
# MP4 H.264: funciona em todo lugar (obrigatório)
ffmpeg -i original.mov -vf "scale=720:-2" -c:v libx264 -crf 23 -maxrate 2M -bufsize 4M \
       -preset slow -c:a aac -b:a 96k -movflags +faststart assets/video/entrada-da-noiva.mp4
# WebM AV1: menor, para navegadores novos (opcional; fica como primeira <source>)
ffmpeg -i original.mov -vf "scale=720:-2" -c:v libsvtav1 -crf 35 -c:a libopus -b:a 64k \
       assets/video/entrada-da-noiva.webm
# Capa (poster): o primeiro quadro bonito, em JPG
ffmpeg -ss 00:00:01 -i assets/video/entrada-da-noiva.mp4 -frames:v 1 -q:v 3 assets/galeria/entrada-da-noiva.jpg
```

Se o vídeo tem fala ou canto que importa, inclua legendas (`<track kind="captions" src="…vtt" srclang="pt-BR">`). Sem som, descreva o que acontece no `aria-label`.

**Fotos** (em `assets/galeria/`): exporte duas larguras, 800 px para a grade e 1600 px para a ampliada:

```bash
convert original.jpg -resize 800x -strip -quality 80 -interlace JPEG assets/galeria/cerimonia-igreja-800.jpg
convert original.jpg -resize 1600x -strip -quality 82 -interlace JPEG assets/galeria/cerimonia-igreja-1600.jpg
```

Use nomes descritivos (`cerimonia-igreja-nova-lima.jpg`, não `IMG_2034.jpg`) e um `alt` que diga o que se vê. Peça autorização dos casais que aparecem.

**Vídeo no Google**: o Google só dá destaque de vídeo para páginas cujo assunto principal é um único vídeo. Para aparecer na aba Vídeos, publique os mesmos cortes no YouTube, no canal do Lumens, com título e descrição que comecem com "Música ao vivo para casamento em BH". Não acrescente `VideoObject` ao JSON-LD sem que o vídeo esteja de fato na página.

## Ao mudar qualquer informação

Os fatos moram em quatro lugares que precisam dizer a mesma coisa:

1. o texto visível (abertura, bloco "O Lumens em poucas linhas" perto do fim, FAQ, rodapé);
2. o JSON-LD no `<head>`;
3. o `llms.txt`;
4. a data de atualização: o `<time datetime>` do rodapé, o `dateModified` do JSON-LD, o `<lastmod>` do sitemap e a linha do `llms.txt`.

Mude a data só quando o conteúdo mudar de verdade (o Google penaliza "refrescar" a data à toa). O `node scripts/checar.mjs` pega FAQ e datas divergentes.

## Blog

O blog fica em `/blog/`, com três artigos assinados por Delliz Christine:

- [O que vocês precisam saber para montar o casamento](blog/como-montar-o-casamento/): decisões, ordem dos fornecedores, cartório em Minas (prazos e valores de 2026) e igreja.
- [Dicas para quem vai casar](blog/dicas-para-quem-vai-casar/): dez dicas, com chuva e pôr do sol em BH mês a mês.
- [Como escolher os músicos para o momento mais especial da vida de vocês](blog/como-escolher-musicos-para-casamento/): o que ouvir, perguntar e combinar com a igreja.

**Antes de publicar, a Delliz precisa ler e aprovar os três.** Os textos saem no nome dela. Eles foram escritos com pesquisa e fontes (listadas no fim de cada artigo), em primeira pessoa só para recomendações. Não contam experiências que ela não viveu, nem números do Lumens. Se ela quiser acrescentar uma história ou um conselho próprio, é o que mais dá valor ao texto.

**Os valores do cartório mudam todo ano.** A tabela de emolumentos do TJMG sai em dezembro. Em janeiro, confira os valores do artigo sobre montar o casamento e atualize a data.

### Editar ou criar um artigo

1. Cada artigo é um arquivo em `scripts/blog/artigos/`: título, título curto (para o `<title>`, até cerca de 55 caracteres), descrição, assunto, capa, resumo, corpo em HTML e fontes. Para um artigo novo, copie um deles, troque o `slug` e registre-o em `scripts/blog/artigos.mjs`. O primeiro da lista aparece em destaque na página do blog.
2. Gere as páginas: `node scripts/blog/gerar.mjs`. O sumário sai sozinho dos `<h2>` do corpo.
3. Gere a imagem de compartilhamento (a que aparece no WhatsApp): com o site servido (`python3 -m http.server 4321`), rode `node scripts/blog/imagens.mjs`. O mesmo comando refaz a imagem da página inicial e os ícones; rode de novo se mudar as cores.
4. Acrescente o endereço do artigo ao `sitemap.xml` e um resumo dele ao `llms.txt`.
5. Rode `node scripts/checar.mjs`. Ele acusa artigo fora da lista, do sitemap ou do `llms.txt`, data do schema que não aparece na página, arquivo citado que não existe e cor do blog diferente da página inicial.

Ao mudar o conteúdo de um artigo, preencha `atualizado: 'AAAA-MM-DD'` nele: a data aparece no texto, no schema e no rodapé.

**Capas.** Cada artigo tem uma capa desenhada em traço dourado sobre a noite verde, dentro do arco da marca: `aliancas`, `varal` ou `pauta`, em `scripts/blog/capas.mjs`. Para um assunto novo, acrescente um desenho ali.

**Caixas de destaque no corpo** (classes do `assets/css/blog.css`):

- `<div class="caixa caixa--checagem">` com `<ul class="checagem">` ou `<ol class="checagem">`: lista para levar à conversa, com um círculo para marcar.
- `caixa--prazos` com `<dl class="prazos">`: números grandes com a explicação embaixo.
- `caixa--aviso`: um cuidado importante, com um toque de laranja.
- `caixa--igreja`: citação de norma, com `<p class="caixa__fonte">`.
- `<p class="fecho">`: a última frase do texto, em destaque.

Todas aceitam um `<p class="caixa__titulo">` no topo.

## Design (impeccable)

O [impeccable](https://impeccable.style/) está instalado em `.claude/skills/impeccable`. O produto está descrito em `PRODUCT.md` e o sistema visual em `DESIGN.md`.

- **Primeira rodada.** Crítica de design, detector e auditoria técnica levaram à Delliz no topo, às amostras honestas, à ficha de fatos perto do FAQ, à prévia da mensagem no formulário e aos ajustes de acessibilidade. O relatório fica em `.impeccable/critique/`.
- **Segunda rodada.** A pedido, entrou a paleta atual:
  - fundo nude no dia (a cerimônia);
  - verde nos botões e nos detalhes;
  - noite verde fechada na recepção;
  - dourado como brilho;
  - laranja (o "lume") só em pontos mínimos: anel de foco, centro do halo e algumas luzes.
- **Textura.** O grão de papel saiu. No lugar entrou a textura "Luz": halos suaves de dourado e laranja (`--textura-dia` e `--textura-noite`). As alternativas testadas (linho, aquarela e pauta) ficaram de fora; a pauta pode voltar como complemento.

- Numa máquina nova, depois de clonar: o binário do impeccable não vai para o git, e o launcher (`.claude/skills/impeccable/scripts/impeccable`) baixa o da plataforma na primeira vez que roda. O hook do detector fica em `.claude/settings.local.json`, que também é de cada máquina; para ligá-lo de novo, peça ao Claude Code `/impeccable hooks on`.
- Para reavaliar depois de mudar a página, peça ao Claude Code `/impeccable critique index.html` ou `/impeccable audit index.html`.
- O detector acusa `cream-palette` no fundo claro: é o nude pedido para a marca, e está registrado como exceção em `.impeccable/config.json`. Os avisos `cramped-padding` e `tight-leading` do scan por arquivo são falsos positivos (o motor não lê `padding-block` nem `clamp()`); o scan pela página renderizada não os mostra.

## Depois de publicar (SEO local e IAs)

O que mais pesa para ser encontrado e citado vem de fora da página:

- [ ] **Google Search Console**: verifique o domínio, envie o `sitemap.xml` e peça a indexação da URL.
- [ ] **Bing Webmaster Tools**: mesmo processo. O ChatGPT e o Copilot buscam no índice do Bing. Ative o IndexNow.
- [ ] **Perfil da Empresa no Google**, como *empresa de área de atendimento*: endereço oculto, até 20 cidades da região metropolitana, nome exatamente "Lumens" (acrescentar "Música para Casamento BH" ao nome dá suspensão), fotos, vídeos, link do site e WhatsApp. Num estudo de 2026, o Perfil respondia por 28,6% das citações de IA em buscas locais.
- [ ] **Portais de casamento**: perfis no Casamentos.com.br e no Lápis de Noiva com o mesmo nome, WhatsApp e site. Depois, coloque esses perfis no `sameAs` do JSON-LD.
- [ ] **Avaliações reais**: peça a **todos** os casais, sem desconto nem brinde em troca (é proibido), no Google e no Casamentos.com.br. Quando houver depoimentos reais e autorizados, crie uma seção na página. Nunca marque `Review` ou `AggregateRating` no JSON-LD com depoimentos próprios.
- [ ] **Responder rápido**: quem responde o contato em até 1 hora tem cerca de 7 vezes mais chance de fechar.
- [ ] **Medir nas IAs**, uma vez por mês: pergunte ao ChatGPT, Gemini, Perplexity e Claude "quem faz música ao vivo para casamento em BH?", com 4 ou 5 variações cada, e anote se o Lumens aparece.

## O que não fazer

- Não inventar depoimento, número, prêmio ou "agenda quase lotada". Além de enganoso (CDC, art. 37), destrói a confiança dos buscadores e das IAs.
- Não criar páginas por cidade ("música para casamento em Contagem", "… em Betim") com o mesmo texto. O Google trata isso como spam (*doorway pages*).
- Não usar o verde do WhatsApp com texto branco nos botões: o contraste é de 1,98:1 e reprova na acessibilidade.
- Não colocar embed direto do YouTube ou do Instagram: deixa a página lenta. Use link ou vídeo hospedado no próprio site.
