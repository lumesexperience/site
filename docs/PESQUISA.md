# Pesquisa que embasou a landing do Lumes Experience

Feita em 20/10/2026, antes da implementação. Cada item traz a fonte; o que é estimativa ou hipótese está marcado.

## Cores

- **A "psicologia das cores" tem pouca evidência sólida**: o campo ainda é "nascente" ([Elliot, 2015](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00368/full)). Por isso a paleta foi escolhida por contexto e contraste, não por "significado".
- **A cor Pantone de 2026 é a Cloud Dancer** (11-4201), um off-white sereno ([Pantone](https://www.pantone.com/color-of-the-year/2026)), HEX aproximado `#F0EEE9`. Branco aparece em 41% dos casamentos e marfim ou champanhe em 32% ([The Knot](https://www.theknot.com/content/most-popular-wedding-colors)).
- **No Brasil, 2026 combina off-white com verde-oliva, champanhe e rosé** ([Correio Braziliense](https://www.correiobraziliense.com.br/revista-do-correio/2025/12/amp/7319746-o-que-saber-antes-de-planejar-casamento-em-2026.html)). Vermelhos profundos voltaram nas paletas de casamento ([The Knot](https://www.theknot.com/content/wedding-color-palettes-we-love)).
- **Nenhuma cor de botão "converte mais" por si.** O que funciona é o botão contrastar com o entorno (efeito de isolamento). O famoso "vermelho +21%" era um botão vermelho numa página toda verde ([CXL](https://cxl.com/which-color-converts-the-best/)).
- **O verde do WhatsApp (`#25D366`) com texto branco tem contraste de 1,98:1** e reprova no WCAG AA, que pede 4,5:1 ([WebAIM](https://webaim.org/articles/contrast/)).

**Decisão.** A página vai do **dia** (cerimônia, Cloud Dancer `#F0EEE9`) para a **noite** (recepção, `#1D1920`), com um anoitecer entre as duas partes. A "luz" do nome é o âmbar `#D9B26A`. Os botões são vinho `#7A2836` sobre o dia e âmbar sobre a noite, cada um isolado do seu fundo.

Contrastes medidos para texto: tinta 12,9:1; texto secundário 6,3:1; vinho com texto claro 9,1:1; texto claro sobre a noite 14,9:1; âmbar sobre a noite 8,7:1.

## Tipografia

- **Fontes cursivas ou de traço finíssimo somem no celular.** Uma família com tamanho óptico ajusta o desenho ao tamanho do texto ([Fraunces/Google Fonts](https://fonts.google.com/specimen/Fraunces/about)).
- **No máximo 2 famílias, servidas pelo próprio site, com preload** ([web.dev](https://web.dev/articles/font-best-practices)).
- **Texto do corpo entre 16 e 18 px**: o iOS usa 17 pt como padrão ([Apple HIG](https://developer.apple.com/design/human-interface-guidelines/typography)).

**Decisão.** Bodoni Moda nos títulos, porque tem o contraste de convite gravado e tamanho óptico. O tamanho óptico fica travado entre 12 e 48, porque o automático deixava o "H" ilegível. Manrope no texto, a 17–18 px.

## Conversão

- **Mediana de conversão de landing pages: 6,6%** ([Unbounce via Search Engine Land](https://searchengineland.com/how-does-your-landing-page-performance-compare-453224)).
- **Menos campos, mais conversão**: 1 campo converte 18,2% e 4 campos 9,9% ([NP Digital](https://neilpatel.com/marketing-stats/conversion-rate-by-form-fields/)). Por isso, no formulário, todos os campos são opcionais e o botão funciona mesmo vazio.
- **O WhatsApp está na tela inicial de 65% dos smartphones no Brasil** ([Mobile Time](https://www.mobiletime.com.br/tag/homescreen/)). Não achamos teste A/B confiável de formulário contra WhatsApp no Brasil.
- **Velocidade**: ganhar 0,1 s aumentou em 21,6% o avanço do formulário até o envio em sites de captação ([Deloitte/Google, web.dev](https://web.dev/case-studies/milliseconds-make-millions)).
- **Preço**: mais de 80% dos casais querem uma noção de preço antes de entrar em contato ([Easy Weddings](https://easyweddings.com.au/pro-education/pricing-on-storefronts)). Mostrar o preço aumentou a resposta em 25%, mas o dado é de vendedor ([WeddingPro](https://pros.weddingpro.com/blog/vendor-storefront-pricing/)). Hoje a página está "sob consulta", por decisão do Lumes Experience.
- **Prova social**: com 5 avaliações, a chance de compra é 270% maior do que com nenhuma ([Spiegel/Northwestern](https://www.xait.com/hubfs/Spiegel_Online-Review_eBook_Jun2017_FINAL.pdf)). Depoimento inventado é publicidade enganosa ([CDC, art. 37](https://www.legjur.com/legislacao/art/LEI_00080781990-37)).
- **Escassez falsa e contador regressivo são dark patterns** ([Princeton](https://webtransparency.cs.princeton.edu/dark-patterns/)).
- **Tempo de resposta**: responder em até 1 hora dá cerca de 7 vezes mais chance de qualificar o contato ([HBR](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)).
- **Concorrência em BH**: 80 fornecedores de música no Casamentos.com.br, com "a partir de" entre R$ 500 e R$ 5.400 ([listagem](https://www.casamentos.com.br/musica-de-casamento/minas-gerais/belo-horizonte)).
  - Os sites próprios dos concorrentes quase nunca têm preço, FAQ, CTA fixo no celular nem mensagem de WhatsApp estruturada.
  - São essas as lacunas que a página ocupa.

## SEO

- **Interesse de busca no Brasil, em 5 anos, no Google Trends** (índice relativo de 0 a 100, não volume) ([Trends](https://trends.google.com/trends/explore?date=today%205-y&geo=BR&q=m%C3%BAsica%20para%20casamento,m%C3%BAsicos%20para%20casamento,cantora%20para%20casamento,coral%20para%20casamento,entrada%20da%20noiva)):
  - "música para casamento" 56;
  - "entrada da noiva" 53;
  - "banda para casamento" cerca de 3.
- **Em Minas, sobem** "música para entrada das alianças" (+60%) e "música católica para casamento" (+50%). Para volume absoluto, use o Planejador de Palavras-chave do Google Ads.
- **Contagem de palavras não é critério**: o que conta é conteúdo útil e confiável, de quem faz o trabalho ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **Páginas por cidade com o mesmo texto são spam** (*doorway pages*) ([Google](https://developers.google.com/search/docs/essentials/spam-policies)).
- **O rich result de FAQ deixou de aparecer em maio de 2026.** A marcação continua válida, mas é opcional ([Google](https://developers.google.com/search/docs/appearance/structured-data/faqpage)).
- **Vídeo só ganha destaque numa página cujo assunto principal é um único vídeo** ([Google](https://developers.google.com/search/docs/appearance/video)).
- **Avaliações do próprio negócio não dão estrelas** e não devem ser marcadas ([Google](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)).
- **Perfil da Empresa no Google**:
  - Área de atendimento com endereço oculto, até 20 cidades ([Google](https://support.google.com/business/answer/9157481)).
  - Nome real, sem palavra-chave ([diretrizes](https://support.google.com/business/answer/3038177)).
- **Core Web Vitals "bons"**: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 ([web.dev](https://web.dev/articles/vitals)).

**Decisões.**
- O title usa "música para casamento em BH".
- O H1 usa "música ao vivo para casamentos".
- O FAQ cobre as buscas informacionais: preço, entrada da noiva, rito e cidades.
- O JSON-LD é um `@graph` com `MusicGroup` + `LocalBusiness`, `Person` (Delliz, ligada ao `@id` do Jeito Ágape), dois `Service` (cerimônia e recepção) e `FAQPage`. Tudo espelha o texto visível.

## GEO (ser citado por IAs)

- **O que comprovadamente ajuda**:
  - Relevância direta à pergunta e posição no começo da página.
  - Preços explícitos e datas recentes, que tiveram efeito em experimento controlado ([revisão de 45 estudos, 2026](https://arxiv.org/pdf/2607.14035)).
  - Citações e estatísticas ([paper GEO, KDD 2024](https://arxiv.org/html/2311.09735v3)).
  - Encher de palavras-chave piora cerca de 9%.
- **Cerca de 44% das citações do ChatGPT vêm do primeiro terço da página** [hipótese] ([Practical Ecommerce](https://www.practicalecommerce.com/studies-reveal-ai-citation-clues)). Por isso a página abre com uma frase que define o Lumes Experience, seguida do bloco de fatos.
- **Os robôs de IA (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot) não executam JavaScript** ([Vercel](https://vercel.com/blog/the-rise-of-the-ai-crawler)). Por isso todo o conteúdo está no HTML estático.
- **Schema sozinho não aumentou citações em IA** num estudo com grupo de controle ([Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)). Mesmo assim, ajuda Google e Bing a entender a entidade.
- **Busca local em IA**:
  - Os sites dos próprios negócios somam 42% das citações e o Perfil da Empresa no Google 28,6% ([BrightLocal, 2026](https://www.brightlocal.com/research/local-ai-visibility-study/)).
  - Menções em terceiros têm correlação de 0,664 com aparecer no AI Overviews ([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)).
- **O ChatGPT depende de um buscador de terceiros, identificado como o Bing**, e o Copilot usa o Bing ([PYMNTS](https://www.pymnts.com/google/2025/antitrust-trial-reveals-google-rejected-openai-partnership/)). Por isso vale cadastrar no Bing Webmaster Tools e ativar o IndexNow.
- **O AI Overviews e o AI Mode do Google usam o Googlebot normal**, sem exigir arquivo ou schema especial ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- **O `llms.txt` tem pouco uso real**: 97% dos arquivos não tiveram nenhum acesso em maio de 2026 ([Ahrefs](https://ahrefs.com/blog/llmstxt-study/)). Está aqui porque custa pouco, mas não é a aposta principal.
- **A Cloudflare bloqueia robôs de IA por padrão em domínios novos** ([Help Net Security](https://www.helpnetsecurity.com/2026/07/02/cloudflare-ai-crawler-controls/)).

## Mídia leve

- **Vídeo**: `preload="none"` com `poster`, e `autoplay muted loop playsinline` só quando o vídeo aparece na tela ([web.dev](https://web.dev/articles/lazy-loading-video)). Formatos: AV1/WebM primeiro e H.264 de reserva; o iPhone só decodifica AV1 por hardware a partir do 15 Pro ([Bitmovin](https://bitmovin.com/apple-av1-support)).
- **Imagens**: a maior imagem do topo leva `fetchpriority="high"` e nunca `lazy`; as demais levam `loading="lazy"`. Sempre com `width` e `height` ou `aspect-ratio`, para não deslocar o layout ([web.dev](https://web.dev/articles/optimize-cls)).
- **Acessibilidade**: movimento automático com mais de 5 s precisa de botão de pausar (WCAG 2.2.2) ([W3C](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)). Vídeo com fala precisa de legenda, e `prefers-reduced-motion` deve ser respeitado.
