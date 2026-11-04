# Lumes Experience: landing page

Página de captação de noivos do **Lumes Experience**, grupo de música ao vivo para casamentos em Belo Horizonte e região metropolitana, com a cantora **Delliz Christine** à frente. A única conversão é o clique que abre o WhatsApp com a mensagem pronta (data, cidade e local, tipo de cerimônia, momentos com música).

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
assets/img/         Delliz cantando (topo), o retrato (seção da Delliz), o rosto para as assinaturas, imagens de compartilhamento, ícones
assets/galeria/     fotos das amostras (vazio por enquanto)
assets/video/       vídeos das amostras (vazio por enquanto)
scripts/checar.mjs  confere tudo antes de publicar
scripts/blog/       os artigos (texto e fontes), as capas, os geradores das páginas e das imagens e os vetores da marca (marca.mjs)
docs/PESQUISA.md    a pesquisa que embasou cores, texto, SEO e GEO, com fontes
PRODUCT.md          o produto, para o impeccable (não publicar)
DESIGN.md           o sistema visual: cores, tipos e componentes (não publicar)
```

## Ver no computador

```bash
python3 -m http.server 4321    # depois abra http://localhost:4321
```

A abertura animada roda sozinha uma vez a cada 30 dias por aparelho (`localStorage`, chave `abertura-vista`). Para revê-la, abra `http://localhost:4321/?abertura` ou use o botão "Rever a abertura, com som", no rodapé.

## Depoimentos (prévia)

A seção de depoimentos ("Quem já viveu") tem **exemplos para aprovar o layout**, visíveis só em `https://lumesexperience.com.br/?previa`, cada um com o selo "Exemplo". No site normal ela fica escondida e nunca entra no JSON-LD. Não publique depoimento inventado: é propaganda enganosa (CDC, art. 37). Para colher os reais, depois de cada evento mande ao casal algo como: *"Oi, [nomes]! Foi uma alegria cantar no casamento de vocês. Se puderem, escrevam em duas ou três frases como foi a música no dia, e nos digam se podemos publicar no nosso site com o primeiro nome de vocês e o mês do casamento."* Com a resposta e a autorização, troque os textos no `index.html`, tire os selos e o atributo `data-previa` da seção.

## Identidade visual e abertura

A identidade **Lumes Experience** chegou do dono em 03/11/2026 (pasta "Lumes - Identidade Visual", só em JPG): terracota `#bb7944`, pêssego `#edc79b`, os dois arcos, o L, a estrela e o nome em caixa alta. O site inteiro segue essa identidade; as regras estão no `DESIGN.md`.

- **Vetores.** O logo foi traçado dos JPGs com o `potrace` e reunido em `scripts/blog/marca.mjs`: arcos, linhas, L, estrelas, raios, LUMES e EXPERIENCE. O blog e as imagens de compartilhamento importam de lá. A página inicial, escrita à mão, recebe uma cópia: depois de mudar `marca.mjs`, rode `node scripts/blog/marca-no-index.mjs`, que reescreve o sprite e a arte da abertura entre os marcadores `<!-- marca:... -->` e `<!-- abertura:... -->`.
- **Abertura.** Uma vez a cada 30 dias, o logo se desenha no pêssego e o arco de dentro vira uma porta acesa. Ela viaja e pousa nos arcos em volta da foto da Delliz, e a página aparece em volta. São cerca de 4,6 s, e o logo inteiro fica parado quase 1 s; clique, tecla ou rolagem pulam. O botão "Rever a abertura, com som", no rodapé, repete a abertura com uma trilha sintetizada no navegador (Web Audio). A animação e o som usam os mesmos tempos (objeto `T` no fim do `index.html`). Com "reduzir movimento", ela não roda sozinha; pelo botão, o logo fica parado e o som toca.
- **Cores.** O terracota da marca vai no logo, nos ornamentos e na faixa em arco "Depois da comida, é a música que os convidados mais notam." (só com título grande em branco). Botões, links e numerais usam um terracota mais fechado (`#8E5226`), porque o da marca com texto branco pequeno não passa no contraste (3,5:1). A noite é terracota escuro (`#693A1C`), sem preto: a identidade não tem preto nem cinza.
- **Ícones.** `assets/img/favicon.svg` é o L com as estrelas em branco sobre terracota; `node scripts/blog/imagens.mjs` gera dele os PNGs.

## O trecho da voz da Delliz (quando chegar o áudio)

A página já tem a vaga para um trecho real da Delliz (uns 30 s), usado em dois lugares: um player na seção "A voz" e a abertura com som. Para ligar:

1. Exporte o trecho em MP3 (ou M4A) com uns 128 kbps e salve em `assets/audio/`, com nome descritivo, por exemplo `assets/audio/delliz-christine-trecho.mp3`. Exemplo com o ffmpeg: `ffmpeg -i original.wav -ss 00:00:12 -t 30 -af "afade=t=in:d=0.3,afade=t=out:st=29:d=1" -c:a libmp3lame -b:a 128k assets/audio/delliz-christine-trecho.mp3`.
2. No fim do `index.html`, preencha `const AUDIO_DELLIZ = { arquivo: 'assets/audio/delliz-christine-trecho.mp3', inicio: 0 };`. Em `inicio`, ponha o segundo do arquivo em que a abertura deve começar a tocar.
3. Pronto: o player aparece embaixo da fala da Delliz, e o botão do rodapé passa a dizer "Rever a abertura com a voz da Delliz". Sem o arquivo, o player fica escondido e a abertura usa a trilha sintetizada.

Confirme com a Delliz que ela autoriza o trecho no site.

## Antes de publicar (obrigatório)

O domínio (`https://lumesexperience.com.br`) e o WhatsApp do Lumes Experience (`5531996154698`) já estão no site desde 03/11/2026. Se algum dia mudarem, troque em `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt` e `scripts/blog/gerar.mjs` (`SITE` e `WA`) e gere o blog de novo.

Antes de cada publicação, rode o verificador (o deploy também roda e para se ele falhar):
```bash
node scripts/checar.mjs
```
Ele falha se sobrar algum marcador, se um arquivo citado em `assets/` não existir, se o FAQ do schema estiver diferente do FAQ visível, ou se a data de atualização divergir entre página, sitemap e llms.txt. Também avisa quantas amostras ainda estão sem foto ou vídeo.

### Para revisar com a Delliz

- **Nome**: usei **Delliz Christine**, com "h", como no Instagram (`@dellizchristine`) e no site do Jeito Ágape. Se o certo for "Cristine", troque em todos os arquivos.
- **A fala da Delliz** (seção `#delliz`, em primeira pessoa desde 04/11/2026, por decisão do dono) e a pergunta "Quem é Delliz Christine?": têm só o que já é público. A Delliz precisa aprovar a fala, que sai no nome dela. Vale acrescentar fatos reais e verificáveis: anos cantando, número de casamentos, onde estudou. Nunca números inventados.
- **Fotos da Delliz**: desde 03/11/2026 vêm do ensaio de estúdio dela (11 fotos RAW da Sony, de 11/06/2024, na pasta do Drive que o dono mandou): no topo, a DSC03151 (luz de palco, microfone vintage); na seção `#delliz`, a DSC02895 (vestido claro); e o rosto das assinaturas é recortado da DSC02688. Todas estão em 4:5 no arco, e o rosto tem 192×192. Em 04/11/2026, o fundo cinza-frio do estúdio no retrato e no rosto foi aquecido para o pêssego da identidade, com um ajuste de cor por pixel no ffmpeg (`geq`): só os pixels claros e pouco saturados mudam de tom, e pele, cabelo e microfone ficam como estavam. Não houve IA generativa. Quando houver uma foto dela cantando num casamento, ela pode ir para o topo com os mesmos nomes (`assets/img/delliz-christine-cantando-480|720|880`, em `.jpg` e `.webp`). A origem de cada arquivo fica embutida no `.jpg` e num `.webp.json` ao lado, gravada com `impeccable embed-prompt`. Depois de trocar uma foto, rode `node scripts/blog/imagens.mjs` com o site servido, porque as imagens de compartilhamento usam essas fotos. No Mac, o script pede um `google-chrome` no PATH apontando para o Chrome.
- **Vídeo**: o canal do Jeito Ágape não permite tocar esse vídeo dentro de outros sites, então o arco abre o YouTube em outra aba (no celular, abre o app). Se o canal liberar a incorporação, ou se houver um vídeo do próprio Lumes Experience, dá para tocar na página.
- **Instagram próprio do Lumes Experience**: quando existir, adicione o link no rodapé e no `sameAs` do nó `#lumes` no JSON-LD.

### Opcional

- **Medição (GA4)**: ligada desde 04/11/2026, com o ID `G-NVSQXPS0KX` (conta "Lumes Experience" no Google Analytics da agência, agenciamarketingfigueroa@gmail.com; propriedade "Lumes Experience (site)", fuso de São Paulo, real, retenção de 14 meses, sem Google Signals). O mesmo ID está no fim do `index.html` e em `scripts/blog/gerar.mjs`. Eventos:
  - `whatsapp_click`, com `cta_location`: `topo`, `abertura`, `passos`, `perguntas`, `contato`, `contato-numero`, `barra-celular` e `rodape` na página inicial; `topo`, `blog` e `rodape` no blog;
  - `ouvir_delliz` (com `local`), `abrir_pergunta` (com `pergunta`) e `rever_abertura`;
  - a medição otimizada do Google (rolagem, cliques de saída).

  As dimensões personalizadas "Local do botão" (`cta_location`) e "Pergunta do FAQ" (`pergunta`) já estão criadas. Em `localhost` a medição fica desligada.
- **Search Console**: propriedade `https://lumesexperience.com.br/` na conta da agência, verificada pela tag meta `google-site-verification` no `<head>` do `index.html`. Não tire essa tag. A propriedade de domínio (que cobre o `www`) pede um registro TXT na Cloudflare com o mesmo código; esse passo fica com a agência.
- **IndexNow**: a cada publicação, o workflow avisa os buscadores do protocolo (Bing, que alimenta o ChatGPT e o Copilot, Yandex e outros) com as URLs do sitemap. A chave é o arquivo `44471026c34d670e45776ad54e93c283.txt` na raiz; não o apague.
- **Preço "a partir de"**: a pesquisa mostra que preço visível aumenta contatos (detalhes em `docs/PESQUISA.md`). Quando houver um valor real, atualize o fato "Valor", a primeira pergunta do FAQ, o JSON-LD (`priceRange` no nó `#lumes`) e o `llms.txt`.

## Publicar

O site fica no **GitHub Pages**, na organização `lumesexperience`, com o domínio **lumesexperience.com.br** (o `www` redireciona para ele). Cada push na `main` dispara `.github/workflows/pages.yml`, que roda `scripts/checar.mjs` e publica só as páginas do site (`index.html`, `blog/`, `assets/`, `robots.txt`, `sitemap.xml` e `llms.txt`). As pastas `.claude/`, `.impeccable/`, `docs/` e `scripts/` e os arquivos `README.md`, `PRODUCT.md` e `DESIGN.md` são ferramentas de trabalho e não vão para o ar. Para acompanhar: aba *Actions* do repositório.

- **Pages:** em *Settings → Pages*, a fonte é "GitHub Actions" e o domínio personalizado é `lumesexperience.com.br`, com "Enforce HTTPS" ligado.
- **DNS (Cloudflare, conta do domínio):** quatro registros `A` no `@` para 185.199.108.153, 185.199.109.153, 185.199.110.153 e 185.199.111.153, quatro `AAAA` no `@` para 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153 e 2606:50c0:8003::153, e um `CNAME` `www` para `lumesexperience.github.io`. Todos em "DNS only" (nuvem cinza), para o GitHub emitir e renovar o certificado.
- **Domínio verificado:** a organização verifica o domínio em *Settings → Pages* (um registro `TXT` `_github-pages-challenge-lumesexperience`), o que impede outra conta de usar o domínio.
- **Robôs de IA:** se um dia o domínio passar pelo proxy da Cloudflare (nuvem laranja), em *Security → Bots* deixe liberados os robôs de busca de IA (OAI-SearchBot, Claude-SearchBot, PerplexityBot), senão o `robots.txt` não adianta.

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

**Vídeo no Google**: o Google só dá destaque de vídeo para páginas cujo assunto principal é um único vídeo. Para aparecer na aba Vídeos, publique os mesmos cortes no YouTube, no canal do Lumes Experience, com título e descrição que comecem com "Música ao vivo para casamento em BH". Não acrescente `VideoObject` ao JSON-LD sem que o vídeo esteja de fato na página.

## Ao mudar qualquer informação

Os fatos moram em quatro lugares que precisam dizer a mesma coisa:

1. o texto visível (topo, eventos, FAQ e rodapé; a ficha "em poucas linhas" saiu em 04/11/2026, porque repetia o FAQ);
2. o JSON-LD no `<head>`;
3. o `llms.txt`;
4. a data de atualização: o `<time datetime>` do rodapé, o `dateModified` do JSON-LD, o `<lastmod>` do sitemap e a linha do `llms.txt`.

Mude a data só quando o conteúdo mudar de verdade (o Google penaliza "refrescar" a data à toa). O `node scripts/checar.mjs` pega FAQ e datas divergentes.

## Blog

O blog fica em `/blog/`, com três artigos assinados por Delliz Christine:

- [O que vocês precisam saber para montar o casamento](blog/como-montar-o-casamento/): decisões, ordem dos fornecedores, cartório em Minas (prazos e valores de 2026) e igreja.
- [Dicas para quem vai casar](blog/dicas-para-quem-vai-casar/): dez dicas, com chuva e pôr do sol em BH mês a mês.
- [Como escolher os músicos do casamento](blog/como-escolher-musicos-para-casamento/): o que ouvir, perguntar e combinar com a igreja.

**Antes de publicar, a Delliz precisa ler e aprovar os três.** Os textos saem no nome dela. Eles foram escritos com pesquisa e fontes (listadas no fim de cada artigo), em primeira pessoa só para recomendações. Não contam experiências que ela não viveu, nem números do Lumes Experience. Se ela quiser acrescentar uma história ou um conselho próprio, é o que mais dá valor ao texto.

**Os valores do cartório mudam todo ano.** A tabela de emolumentos do TJMG sai em dezembro. Em janeiro, confira os valores do artigo sobre montar o casamento e atualize a data.

### Editar ou criar um artigo

1. Cada artigo é um arquivo em `scripts/blog/artigos/`: título, título curto (para o `<title>`, até cerca de 55 caracteres), descrição, assunto, capa, resumo, corpo em HTML e fontes. Para um artigo novo, copie um deles, troque o `slug` e registre-o em `scripts/blog/artigos.mjs`. O primeiro da lista aparece em destaque na página do blog.
2. Gere as páginas: `node scripts/blog/gerar.mjs`. O sumário sai sozinho dos `<h2>` do corpo.
3. Gere a imagem de compartilhamento (a que aparece no WhatsApp): com o site servido (`python3 -m http.server 4321`), rode `node scripts/blog/imagens.mjs`. O mesmo comando refaz a imagem da página inicial e os ícones; rode de novo se mudar as cores.
4. Acrescente o endereço do artigo ao `sitemap.xml` e um resumo dele ao `llms.txt`.
5. Rode `node scripts/checar.mjs`. Ele acusa artigo fora da lista, do sitemap ou do `llms.txt`, data do schema que não aparece na página, arquivo citado que não existe e cor do blog diferente da página inicial.

Ao mudar o conteúdo de um artigo, preencha `atualizado: 'AAAA-MM-DD'` nele: a data aparece no texto, no schema e no rodapé.

**Capas.** Cada artigo tem uma capa desenhada em traço pêssego sobre a noite terracota, dentro do arco da marca: `aliancas`, `varal` ou `pauta`, em `scripts/blog/capas.mjs`. Para um assunto novo, acrescente um desenho ali.

**Caixas de destaque no corpo** (classes do `assets/css/blog.css`):

- `<div class="caixa caixa--checagem">` com `<ul class="checagem">` ou `<ol class="checagem">`: lista para levar à conversa, com um círculo para marcar.
- `caixa--prazos` com `<dl class="prazos">`: números grandes com a explicação embaixo.
- `caixa--aviso`: um cuidado importante, com um toque de terracota.
- `caixa--igreja`: citação de norma, com `<p class="caixa__fonte">`.
- `<p class="fecho">`: a última frase do texto, em destaque.

Todas aceitam um `<p class="caixa__titulo">` no topo.

## Design (impeccable)

O [impeccable](https://impeccable.style/) está instalado em `.claude/skills/impeccable`. O produto está descrito em `PRODUCT.md` e o sistema visual em `DESIGN.md`.

- **Primeira rodada.** Crítica de design, detector e auditoria técnica levaram à Delliz no topo, às amostras honestas, à ficha de fatos perto do FAQ, à prévia da mensagem no formulário e aos ajustes de acessibilidade. O relatório fica em `.impeccable/critique/`.
- **Segunda rodada.** Paleta nude, verde e dourado, com textura "Luz" (halos radiais, sem grão).
- **Quarta rodada (04/11/2026).** Acabamento com marketing, coerência e "sem cara de IA":
  - **Cor:** a noite virou terracota; o terracota da marca virou campo na porta da música; o contato do WhatsApp ficou numa porta pêssego.
  - **Abertura:** cerca de 4,6 s, uma vez a cada 30 dias, com a porta pousando na foto.
  - **Seções:** eventos em linhas de programa, sem a coroa do Instagram; passos num caminho de estrelas; o FAQ com coluna fixa; a ficha de fatos saiu.
  - **Texto:** o WhatsApp com um rótulo só; a Delliz em primeira pessoa; a seção "A história de vocês vira repertório"; o formulário saiu (o contato é direto pelo WhatsApp, por decisão do dono).
  - **Acabamento:** retrato quente, o "1" do Bodoni corrigido e o navegador vestido nas cores da marca.
  - O relatório fica em `.impeccable/critique/`.
- **Terceira rodada (03/11/2026).** A identidade Lumes Experience substituiu a paleta: pêssego claro no dia, terracota nos botões, noite em marrom-terracota, pêssego como luz da noite, os dois arcos em volta da Delliz, a estrela do logo no anoitecer, o logo vetorial no topo e no rodapé e a abertura animada. A textura continua "Luz", agora em pêssego e terracota.

- Numa máquina nova, depois de clonar: o binário do impeccable não vai para o git, e o launcher (`.claude/skills/impeccable/scripts/impeccable`) baixa o da plataforma na primeira vez que roda. O hook do detector fica em `.claude/settings.local.json`, que também é de cada máquina; para ligá-lo de novo, peça ao Claude Code `/impeccable hooks on`.
- Para reavaliar depois de mudar a página, peça ao Claude Code `/impeccable critique index.html` ou `/impeccable audit index.html`.
- O detector acusa `cream-palette` no fundo claro: é o pêssego da identidade, e está registrado como exceção em `.impeccable/config.json`. Os avisos `cramped-padding` e `tight-leading` do scan por arquivo são falsos positivos (o motor não lê `padding-block`, `calc()` nem `clamp()`); o scan pela página renderizada não os mostra. O único aviso que fica de pé é `low-contrast` no título branco da porta terracota: é texto grande (34 a 60 px), que pede 3:1 e tem 3,5:1. O motor não aceita exceção só para esse par de cores.

## Depois de publicar (SEO local e IAs)

O que mais pesa para ser encontrado e citado vem de fora da página:

- [ ] **Google Search Console**: verifique o domínio, envie o `sitemap.xml` e peça a indexação da URL.
- [ ] **Bing Webmaster Tools**: mesmo processo. O ChatGPT e o Copilot buscam no índice do Bing. Ative o IndexNow.
- [ ] **Perfil da Empresa no Google**, como *empresa de área de atendimento*: endereço oculto, até 20 cidades da região metropolitana, nome exatamente "Lumes Experience" (acrescentar "Música para Casamento BH" ao nome dá suspensão), fotos, vídeos, link do site e WhatsApp. Num estudo de 2026, o Perfil respondia por 28,6% das citações de IA em buscas locais.
- [ ] **Portais de casamento**: perfis no Casamentos.com.br e no Lápis de Noiva com o mesmo nome, WhatsApp e site. Depois, coloque esses perfis no `sameAs` do JSON-LD.
- [ ] **Avaliações reais**: peça a **todos** os casais, sem desconto nem brinde em troca (é proibido), no Google e no Casamentos.com.br. Quando houver depoimentos reais e autorizados, crie uma seção na página. Nunca marque `Review` ou `AggregateRating` no JSON-LD com depoimentos próprios.
- [ ] **Responder rápido**: quem responde o contato em até 1 hora tem cerca de 7 vezes mais chance de fechar.
- [ ] **Medir nas IAs**, uma vez por mês: pergunte ao ChatGPT, Gemini, Perplexity e Claude "quem faz música ao vivo para casamento em BH?", com 4 ou 5 variações cada, e anote se o Lumes Experience aparece.

## O que não fazer

- Não inventar depoimento, número, prêmio ou "agenda quase lotada". Além de enganoso (CDC, art. 37), destrói a confiança dos buscadores e das IAs.
- Não criar páginas por cidade ("música para casamento em Contagem", "… em Betim") com o mesmo texto. O Google trata isso como spam (*doorway pages*).
- Não usar o verde do WhatsApp com texto branco nos botões: o contraste é de 1,98:1 e reprova na acessibilidade.
- Não colocar embed direto do YouTube ou do Instagram: deixa a página lenta. Use link ou vídeo hospedado no próprio site.
