<script setup lang="ts">
const audiences = [
  {
    title: 'Psicologia',
    text: 'Apresente sua abordagem, seus serviços e a forma de atendimento com clareza.',
  },
  {
    title: 'Estética',
    text: 'Mostre seus procedimentos, diferenciais e informações importantes para quem está pesquisando antes de agendar.',
  },
  {
    title: 'Nutrição',
    text: 'Apresente sua atuação, serviços e forma de atendimento em um espaço próprio.',
  },
]
</script>

<template>
  <section id="para-quem" class="section">
    <div class="wrap">
      <SectionHeading
        label="Para quem"
        title="Para profissionais que vivem do próprio trabalho."
        text="Uma presença profissional pode fazer diferença na forma como as pessoas conhecem seu trabalho, entendem o que você oferece e decidem entrar em contato."
      />

      <ul class="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
        <li
          v-for="audience in audiences"
          :key="audience.title"
          class="rounded-card border border-line bg-paper p-8 shadow-card"
        >
          <h3 class="text-subheading font-semibold text-ink">{{ audience.title }}</h3>
          <p class="mt-3 text-body-sm text-muted">{{ audience.text }}</p>
        </li>
      </ul>

      <p class="mt-10 max-w-2xl text-body-sm text-mist">
        Esses são alguns dos profissionais com quem estou trabalhando inicialmente. A estrutura pode ser adaptada ao seu
        negócio.
      </p>
    </div>
  </section>
</template>
