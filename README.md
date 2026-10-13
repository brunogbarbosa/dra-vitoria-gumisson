# Dra. Vitória Gumisson

Um único projeto Next.js adaptado do template Premium Vendas V4, com fotografias reais, navegação transparente, animações editoriais, galeria e favicon VG.

## Execução

Requer Node.js 20.9+ e npm.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000.

## Validação e produção

```sh
npm run typecheck
npm run build
npm start
```

## Vercel

Importe este repositório, com framework Next.js e diretório raiz ./, comando de instalação npm ci e build npm run build. Não há variáveis obrigatórias, banco de dados ou dependência de Sites. A publicação na Vercel deve ser feita a partir deste mesmo projeto.

## Personalização

Dados, links e tokens de cor: data/site.ts. Estilos da identidade e enquadramentos: app/identity.css. Fotografias: public/images. Favicon: app/icon.svg.

A identidade usa oliva, dourado suave e marfim, conforme a referência enviada do destaque Mentoria. Nome, lentes em resina e CRO-SP 154164 constam do material fornecido. Não foram adicionados endereço, qualificações ou depoimentos. WhatsApp: +55 17 99603-1131. Instagram: @dravitoriagumisson.

As dez fotografias são cópias integrais dos anexos, sem retoque, filtros ou alteração dos resultados. As quatro comparações preservam a orientação vertical; os dois registros únicos continuam como fotografias únicas.

A imagem OG fornecida pelo solicitante está em `app/opengraph-image.jpg`, com descrição em `app/opengraph-image.alt.txt`. A arte foi redimensionada proporcionalmente para 1200 × 675 px e comprimida em JPEG: de 2,53 MB para 172 KB, sem cortes. O Next.js adiciona automaticamente os metadados da imagem; na Vercel, a URL usa o domínio de produção disponibilizado pelo ambiente.
