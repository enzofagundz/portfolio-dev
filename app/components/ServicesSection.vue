<script setup lang="ts">
const services = [
  {
    icon: 'estrutura',
    title: 'Estrutura',
    text: 'Organizamos as informações para que o visitante encontre o que procura sem se perder.',
  },
  {
    icon: 'design',
    title: 'Design',
    text: 'Uma apresentação visual alinhada ao seu trabalho e ao público que você atende.',
  },
  {
    icon: 'desenvolvimento',
    title: 'Desenvolvimento',
    text: 'Uma página responsiva, rápida e preparada para funcionar bem em celular, tablet e computador.',
  },
  {
    icon: 'publicacao',
    title: 'Publicação',
    text: 'Colocamos tudo no ar e deixamos a página pronta para ser divulgada.',
  },
] as const
</script>

<template>
  <section id="servico" class="section">
    <div class="wrap">
      <SectionHeading
        label="Serviço"
        title="Uma página feita para o seu trabalho."
        lead="Tudo o que seu cliente precisa encontrar, em um só lugar."
        text="Sua experiência, seus serviços, seus diferenciais e a forma de entrar em contato podem estar reunidos em uma página profissional, feita para representar bem o seu trabalho."
      />

      <ul class="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-20 md:gap-y-12">
        <li v-for="service in services" :key="service.title" class="border-t border-line pt-6">
          <AppIcon :name="service.icon" class="h-6 w-6 text-navy" />
          <h3 class="mt-4 text-subheading font-semibold text-ink">{{ service.title }}</h3>
          <p class="mt-2 text-body-sm text-muted">{{ service.text }}</p>
        </li>
      </ul>

      <div class="mt-12 md:mt-14">
        <AppButton href="#contato">Quero minha página</AppButton>
      </div>
    </div>
  </section>
</template>
