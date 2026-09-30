<script setup lang="ts">
import { projects } from '~/data/projects'

const [lead, second] = projects
</script>

<template>
  <section id="top" class="pt-20 pb-20 md:pt-28 md:pb-32">
    <div class="wrap">
      <div class="max-w-3xl">
        <p class="enter text-caption font-medium uppercase tracking-[0.18em] text-mist">Desenvolvimento web</p>
        <h1 class="enter enter-1 mt-5 text-display font-extrabold text-navy">
          Seu trabalho merece uma presença profissional na internet.
        </h1>
        <p class="enter enter-1 mt-6 max-w-[36rem] text-body text-graphite">
          Crio landing pages claras, rápidas e pensadas para apresentar seu trabalho e facilitar o contato com seus
          clientes.
        </p>
        <div class="enter enter-2 mt-9 flex flex-wrap gap-3">
          <AppButton href="#projetos">Conheça meu trabalho</AppButton>
          <AppButton href="#contato" variant="secondary">Falar comigo</AppButton>
        </div>
      </div>

      <div v-if="lead" class="enter enter-2 mt-16 grid gap-5 md:mt-20 lg:grid-cols-12 lg:gap-6">
        <figure class="rounded-card border border-line bg-cloud p-1.5 shadow-frame lg:col-span-8">
          <img
            :src="lead.cover.src"
            :width="lead.cover.width"
            :height="lead.cover.height"
            :alt="lead.cover.alt"
            fetchpriority="high"
            decoding="async"
            class="w-full rounded-[0.5rem] outline outline-1 -outline-offset-1 outline-black/10"
          />
          <figcaption class="flex flex-wrap items-center justify-between gap-2 px-2.5 pt-3 pb-1.5">
            <span class="text-caption font-medium text-ink">{{ lead.title }}</span>
            <span class="text-caption text-mist">{{ lead.category }}</span>
          </figcaption>
        </figure>

        <figure
          v-if="second"
          class="relative hidden overflow-hidden rounded-card border border-line bg-cloud shadow-card lg:col-span-4 lg:block"
        >
          <img
            :src="second.mobile.src"
            :width="second.mobile.width"
            :height="second.mobile.height"
            :alt="second.mobile.alt"
            loading="lazy"
            decoding="async"
            class="absolute inset-0 h-full w-full object-cover object-top outline outline-1 -outline-offset-1 outline-black/10"
          />
        </figure>
      </div>
    </div>
  </section>
</template>
