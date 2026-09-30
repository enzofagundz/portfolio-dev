# Portfólio — Enzo Fagundes

Página única de portfólio e prospecção para desenvolvimento de landing pages.
O conteúdo segue `SPEC.md`; a direção visual segue `DESIGN.md`.

## Stack

Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4, gerado como site estático.
Sem backend, sem API própria, sem bibliotecas de UI.

## Comandos

```bash
npm install
cp .env.example .env   # preencha WhatsApp e e-mail
npm run dev            # http://localhost:3000
npm run generate       # gera .output/public, pronto para qualquer hospedagem estática
npm run preview        # serve o build de produção
```

## Contato (`.env`)

Número de WhatsApp e e-mail **não ficam no código**. Vêm de variáveis públicas lidas em
tempo de build:

| Variável | Uso |
|---|---|
| `NUXT_PUBLIC_WHATSAPP_NUMBER` | Todos os CTAs de WhatsApp (header, menu mobile, contato, rodapé). Só dígitos, com DDI e DDD |
| `NUXT_PUBLIC_CONTACT_EMAIL` | Botão “Enviar e-mail” e linha de contato |

Sem valor definido, o botão correspondente não é renderizado — nada de link quebrado.
Como os valores entram no HTML gerado, **mudou o `.env`, rode `npm run generate` de novo**
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
