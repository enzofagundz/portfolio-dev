<script setup lang="ts">
import { offer } from '~/data/site'
</script>

<template>
  <section id="oferta" class="section">
    <div class="wrap">
      <SectionHeading :label="offer.eyebrow" :title="offer.title" :text="offer.text" />

      <ul class="mt-12 grid gap-5 md:mt-16 md:max-w-xl">
        <li
          v-for="plan in offer.plans"
          :key="plan.name"
          class="rounded-card border border-line bg-paper p-8 shadow-card"
        >
          <h3 class="text-caption font-medium uppercase tracking-[0.16em] text-mist">{{ plan.name }}</h3>
          <p class="mt-4 text-heading-sm font-bold text-ink tabular-nums">{{ plan.price }}</p>
          <p class="mt-3 text-body-sm text-muted">{{ plan.summary }}</p>
        </li>
      </ul>

      <p v-if="offer.note" class="mt-8 max-w-xl text-body-sm text-mist">{{ offer.note }}</p>

      <div class="mt-10">
        <AppButton href="#contato">Conversar sobre meu projeto</AppButton>
      </div>
    </div>
  </section>
</template>
