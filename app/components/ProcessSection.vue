<script setup lang="ts">
const steps = [
  {
    title: 'Entendimento',
    text: 'Conversamos sobre seu trabalho, seus serviços e o que você precisa apresentar.',
  },
  {
    title: 'Planejamento',
    text: 'Definimos as informações, a estrutura e o direcionamento da página.',
  },
  {
    title: 'Desenvolvimento',
    text: 'Transformo o planejamento em uma página funcional e responsiva.',
  },
  {
    title: 'Revisão',
    text: 'Você avalia a primeira versão e alinhamos os ajustes necessários.',
  },
  {
    title: 'Publicação',
    text: 'A página vai para o ar, com domínio e configuração necessários para começar a divulgar.',
  },
]
</script>

<template>
  <section id="como-funciona" class="section">
    <div class="wrap">
      <SectionHeading
        label="Como funciona"
        title="Do primeiro contato à página no ar."
        text="Você não precisa saber como uma página é feita. Eu cuido da parte técnica e conduzo o projeto com você."
      />

      <ol class="mt-14 md:mt-20">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="grid grid-cols-[3rem_1fr] gap-x-5 border-t border-line py-7 md:grid-cols-[5rem_14rem_1fr] md:gap-x-8 md:py-8"
        >
          <span class="pt-1 text-caption font-medium tabular-nums text-mist">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="text-subheading font-semibold text-ink">{{ step.title }}</h3>
          <p class="col-start-2 mt-2 text-body-sm text-muted md:col-start-3 md:mt-0">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
