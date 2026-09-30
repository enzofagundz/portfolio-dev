<script setup lang="ts">
import { site } from '~/data/site'

const { hasWhatsapp, hasEmail, whatsappHref, mailtoHref, email } = useContact()
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
        <AppButton v-if="hasWhatsapp" :href="whatsappHref" external>
          Falar pelo WhatsApp
          <AppIcon name="arrow-up-right" class="h-4 w-4" :stroke-width="1.75" />
        </AppButton>
        <AppButton v-if="hasEmail" :href="mailtoHref" variant="secondary">
          <AppIcon name="mail" class="h-4 w-4" :stroke-width="1.75" />
          Enviar e-mail
        </AppButton>
      </div>

      <p v-if="email" class="mt-6 text-body-sm text-mist">{{ email }} · {{ site.location }}</p>
    </div>
  </section>
</template>
