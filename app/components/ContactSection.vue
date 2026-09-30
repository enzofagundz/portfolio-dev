<script setup lang="ts">
import { mailtoHref, site, whatsappHref } from '~/data/site'
</script>

<template>
  <section id="contato" class="section">
    <div class="wrap">
      <SectionHeading
        label="Contato"
        title="Vamos conversar."
        text="Me conte um pouco sobre seu trabalho e o que você gostaria de apresentar. A partir disso, podemos entender se uma landing page faz sentido para você."
      />

      <div class="mt-10 flex flex-wrap gap-3 md:mt-12">
        <AppButton :href="whatsappHref()" external>
          Falar pelo WhatsApp
          <AppIcon name="arrow-up-right" class="h-4 w-4" :stroke-width="1.75" />
        </AppButton>
        <AppButton :href="mailtoHref()" variant="secondary">
          <AppIcon name="mail" class="h-4 w-4" :stroke-width="1.75" />
          Enviar e-mail
        </AppButton>
      </div>

      <p class="mt-6 text-body-sm text-mist">{{ site.email }} · {{ site.location }}</p>
    </div>
  </section>
</template>
