import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-30',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      whatsappNumber: '',
      contactEmail: '',
    },
  },
  nitro: {
    preset: 'cloudflare_module',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'enzo-fagundes-portfolio',
        assets: {
          not_found_handling: '404-page',
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
    },
  },
})
