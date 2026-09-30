# Portfólio — Enzo Fagundes

Página única de portfólio e prospecção para desenvolvimento de landing pages.
O conteúdo segue `SPEC.md`; a direção visual segue `DESIGN.md`.

## Stack

Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4, gerado como site estático.
Sem backend, sem API própria, sem bibliotecas de UI.

## Comandos

```bash
npm install
npm run dev      # http://localhost:3000
npm run generate # gera .output/public, pronto para qualquer hospedagem estática
npm run preview  # serve o build de produção
```

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| Nome, e-mail, WhatsApp, mensagem do WhatsApp, planos e preço, experiência e formação | `app/data/site.ts` |
| Projetos (novos projetos entram como novos itens da lista) | `app/data/projects.ts` |
| Textos das seções (serviço, para quem, como funciona, contato) | `app/components/*Section.vue` |
| Cores, tipografia, espaçamento, sombras | `app/assets/css/main.css` |

### Antes de publicar

1. `whatsappNumber` em `app/data/site.ts` — hoje contém um marcador (`55DDDNUMERO`).
2. `site.url` em `app/data/site.ts` — ao preencher, a URL canônica e os metadados
   de Open Graph passam a usar o domínio absoluto automaticamente.
3. `url` de cada projeto em `app/data/projects.ts` — o botão “Ver projeto” só
   aparece quando o projeto tem URL publicada.

## Projetos

Cada projeto é um objeto com `title`, `category`, `description`, `goal`,
`solution` e as imagens de preview (`cover`, `full`, `mobile`). As imagens ficam
em `public/projects/` em WebP. Novos projetos aparecem na página automaticamente,
sem alterar componentes.

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
