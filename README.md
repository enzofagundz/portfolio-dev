# Portfólio — Enzo Fagundes

Página única de portfólio e prospecção para desenvolvimento de landing pages.
O conteúdo segue `SPEC.md`; a direção visual segue `DESIGN.md`.

## Stack

Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4, gerado como site estático.
Sem backend, sem API própria, sem bibliotecas de UI.

## Comandos

```bash
npm install
cp .env.example .env    # preencha WhatsApp e e-mail
npm run dev             # http://localhost:3000
npm run build           # build para Cloudflare Workers (.output/server + .output/public)
npm run cf:preview      # preview local do Worker (wrangler dev, precisa do build)
npm run cf:deploy       # build + deploy no Cloudflare (wrangler deploy)
npm run generate        # saída puramente estática (.output/public) para hospedagem simples
npm run preview         # serve o build de produção do Nuxt
```

## Deploy no Cloudflare

Preset configurado em `nuxt.config.ts`: **`cloudflare_module`** (Workers com static
assets, o preset recomendado pelo Nitro) com `cloudflare.deployConfig` ligado — o Nitro
gera `.output/server/wrangler.json` sozinho, apontando `assets.directory` para o build.

- `npm run cf:deploy` → builda e publica. O nome do Worker está fixado em
  `enzo-fagundes-portfolio` (ajuste em `nuxt.config.ts` se quiser outro).
- Páginas são **prerenderizadas no build** (`nitro.prerender`), então o HTML sai pronto
  e o contato do `.env` fica embutido — não é preciso configurar variáveis no runtime do
  Worker. Mudou o `.env`? Rode o build de novo.
- **As variáveis de runtime do Worker (dashboard → Settings → Variables) não afetam o
  site**: elas só existem durante a execução do Worker, e o contato já está gravado no
  HTML. Se o deploy é feito por Git/Workers Builds, cadastre
  `NUXT_PUBLIC_WHATSAPP_NUMBER` e `NUXT_PUBLIC_CONTACT_EMAIL` nas **variáveis de build**
  (Settings → Build → Variables and secrets) e dispare um novo build.
- Sem essas variáveis no momento do build, o build **falha** com a mensagem
  `Contato não configurado: defina ...` — o site nunca vai ao ar sem os CTAs de contato.
- `not_found_handling: 404-page` + `public/404.html`: navegação para URL inexistente
  recebe a página 404 com status **404** (o Worker nem é executado nesse caso).
- Nitro gera `.output/public/_headers` com cache imutável para `/_nuxt/*`.
- Preview fiel ao deploy: `npm run cf:preview` (roda o Worker real via `wrangler dev`).

Alternativa sem Worker (Cloudflare Pages, Netlify, S3, nginx): `npm run generate` e
publique `.output/public` — o `404.html` na raiz também vale para essas hospedagens.

## Contato (`.env`)

Número de WhatsApp e e-mail **não ficam no código**. Vêm de variáveis públicas lidas em
tempo de build:

| Variável | Uso |
|---|---|
| `NUXT_PUBLIC_WHATSAPP_NUMBER` | Todos os CTAs de WhatsApp (header, menu mobile, contato, rodapé). Só dígitos, com DDI e DDD |
| `NUXT_PUBLIC_CONTACT_EMAIL` | Botão “Enviar e-mail” e linha de contato |

Sem valor definido, o botão correspondente não é renderizado — nada de link quebrado.
Como os valores entram no HTML gerado, **mudou o `.env`, rode o build de novo**
(e configure as mesmas variáveis no ambiente de build da hospedagem).

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| Nome, LinkedIn, mensagem do WhatsApp, planos e preço, experiência, resultados e formação | `app/data/site.ts` |
| Projetos (previews grandes) e outros trabalhos (profissional/freelance) | `app/data/projects.ts` |
| WhatsApp e e-mail | `.env` (veja acima) |
| Textos das seções (serviço, para quem, como funciona, contato) | `app/components/*Section.vue` |
| Cores, tipografia, espaçamento, sombras | `app/assets/css/main.css` |

### Antes de publicar

1. `.env`: `NUXT_PUBLIC_WHATSAPP_NUMBER` e `NUXT_PUBLIC_CONTACT_EMAIL`.
2. `site.url` em `app/data/site.ts` — ao preencher, a URL canônica e os metadados
   de Open Graph passam a usar o domínio absoluto automaticamente.
3. `url` de cada projeto em `app/data/projects.ts` — o botão “Ver projeto” só
   aparece quando o projeto tem URL publicada.

## Projetos

`projects` são os trabalhos apresentados com preview grande (uma landing page por
item): `title`, `context`, `category`, `description`, `goal`, `solution` e as
imagens (`cover`, `full`, `mobile`) em `public/projects/`. Novos itens aparecem na
página automaticamente, sem alterar componentes.

`otherWork` são os trabalhos sem preview (atuação profissional e freelance), com
`title`, `context`, `description` e `url` opcional.

## Estrutura

```
app/
  app.vue                 # layout da página + SEO
  assets/css/main.css     # tema (tokens do DESIGN.md) e utilitários
  components/
    AppHeader.vue         # header sticky
    AppHero.vue           # hero + composição de previews
    ProjectsSection.vue   # lista de projetos
    ProjectCard.vue       # projeto (preview grande com percurso no hover)
    ServicesSection.vue
    AudienceSection.vue
    ProcessSection.vue
    AboutSection.vue
    OfferSection.vue
    ContactSection.vue
    AppFooter.vue
    AppButton.vue         # botão primário/secundário
    AppIcon.vue           # ícones SVG inline (stroke 1.5)
    SectionHeading.vue    # label + título + lead das seções
  data/
    site.ts
    projects.ts
  composables/
    useContact.ts          # WhatsApp/e-mail vindos do .env
public/
  projects/*.webp         # previews dos projetos
  favicon.svg, apple-touch-icon.png, og.png, robots.txt
```

## Acessibilidade e performance

- HTML semântico, um `h1`, seções com `h2` e itens com `h3`.
- Skip link, foco visível (`:focus-visible`), áreas de toque ≥ 44px.
- `prefers-reduced-motion` desativa entradas, transições e rolagem suave.
- Fonte Inter self-hosted (subset por `unicode-range`), imagens em WebP,
  lazy loading abaixo da primeira tela, sem JavaScript de terceiros.
