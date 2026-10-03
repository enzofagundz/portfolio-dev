<script setup lang="ts">
defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: 'Página não encontrada — Enzo Fagundes',
  robots: 'noindex',
})
</script>

<template>
  <div class="min-h-screen bg-paper">
    <main class="wrap py-24 md:py-32">
      <p class="text-caption font-medium uppercase tracking-[0.18em] text-mist">
        Erro {{ error.statusCode || 404 }}
      </p>
      <h1 class="mt-5 text-display font-extrabold text-navy">Esta página não existe.</h1>
      <p class="mt-6 max-w-[36rem] text-body text-graphite">
        O endereço que você abriu não está no site. Volte para o início para continuar de onde parou.
      </p>
      <p class="mt-9">
        <AppButton href="/">Voltar para o início</AppButton>
      </p>
    </main>
  </div>
</template>
