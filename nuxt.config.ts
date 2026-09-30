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
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
    },
  },
})
