<script setup lang="ts">
import { site } from '~/data/site'

const route = useRoute()

if (route.path !== '/') {
  throw createError({ statusCode: 404 })
}

const title = 'Enzo Fagundes — Landing Pages para Profissionais'
const description =
  'Desenvolvimento de landing pages profissionais para psicólogos, profissionais de estética, nutricionistas e negócios locais.'

const absolute = (path: string) => (site.url ? new URL(path, site.url).href : path)

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogLocale: 'pt_BR',
  ogSiteName: site.name,
  ogTitle: title,
  ogDescription: description,
  ogImage: () => absolute('/og.png'),
  ogImageAlt: 'Enzo Fagundes, desenvolvedor de landing pages para profissionais e negócios locais.',
  ogUrl: () => absolute('/'),
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: () => absolute('/og.png'),
})

useHead(() => ({
  link: [
    ...(site.url ? [{ rel: 'canonical', href: absolute('/') }] : []),
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ],
  meta: [{ name: 'theme-color', content: '#0c2764' }],
}))
</script>

<template>
  <div class="min-h-screen bg-paper">
    <a
      href="#conteudo"
      class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-card focus:bg-navy focus:px-4 focus:py-3 focus:text-body-sm focus:font-semibold focus:text-paper"
    >
      Pular para o conteúdo
    </a>

    <AppHeader />

    <main id="conteudo">
      <AppHero />
      <ProjectsSection />
      <ServicesSection />
      <AudienceSection />
      <ProcessSection />
      <AboutSection />
      <OfferSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>
