# Validação final

Verificação realizada no build de produção, em Chrome, nos tamanhos 1440 × 900, 1920 × 1080 e 390 × 844.

Após a correção da emenda e do escurecimento do hero na prévia intermediária, também foram conferidas as larguras 701, 773, 850, 851 e 1100 px. A transição clara da fotografia agora se aplica a todas as larguras acima de 700 px, independentemente do ponto em que a navegação muda para o menu compacto. A composição até 700 px foi preservada.

Na atualização do enquadramento, o hero desktop foi revisto em 1440 × 900 e 1920 × 900: a fotografia acompanha a altura do hero e mostra cabeça, torso e cintura, com a borda esquerda suavizada. As regras novas se aplicam somente a partir de 851 px; a composição mobile foi conferida novamente em 390 × 844. A imagem OG otimizada responde com HTTP 200 e `image/jpeg`; os metadados informam 1200 × 675 px e incluem descrição alternativa.

- Revisão visual do hero, essência, apresentação, galeria, experiência, Instagram e agendamento.
- Navegação totalmente transparente: sem background, imagem de fundo, borda, sombra ou backdrop-filter. Hero e fotografia começam na coordenada vertical zero; a navegação fica na camada superior.
- Desktop mantém a transição ampla para a fotografia. Mobile usa a sua própria composição.
- Cabeça e cabelo preservados em todos os retratos. As dez fotografias foram conferidas por SHA-256 e são idênticas aos anexos originais.
- Cores de todos os arquivos CSS vêm de tokens compartilhados. Nenhuma cor literal herdada permanece no CSS.
- Ausência de rolagem horizontal nos três tamanhos, incluindo após navegar pelas seções.
- Todos os arquivos de imagem carregaram corretamente.
- Cinco links de WhatsApp usam 5517996031131; links do Instagram usam @dravitoriagumisson.
- Menu mobile abre, navega para as seções, fecha pelo botão e pela tecla Escape.
- Galeria: seis registros, quatro comparações verticais e duas imagens únicas. Ampliação, controle de comparação, modo original, navegação com setas e fechamento pelo botão e por Escape verificados.
- Favicon SVG personalizado responde com sucesso. A imagem OG passou a usar a arte enviada posteriormente pelo solicitante, otimizada para 1200 × 675 px e 172 KB, com metadados e texto alternativo.
- Nenhum erro de execução no navegador.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado.
- `npm audit`: nenhuma vulnerabilidade após atualizar as dependências compatíveis.

As instruções de execução e importação na Vercel estão no README. Este repositório contém um único projeto Next.js.
