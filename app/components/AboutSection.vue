<script setup lang="ts">
import { about } from '~/data/site'
</script>

<template>
  <section id="sobre" class="section">
    <div class="wrap">
      <SectionHeading :label="about.eyebrow" :title="about.title" :lead="about.lead" />

      <div class="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
        <div class="space-y-5 lg:col-span-7">
          <p v-for="paragraph in about.paragraphs" :key="paragraph" class="text-body text-muted">
            {{ paragraph }}
          </p>
          <p class="border-l-2 border-line pl-5 text-body text-graphite">
            Uma landing page pode parecer simples por fora, mas precisa funcionar bem, carregar rápido e representar
            corretamente o trabalho de quem está por trás dela. Minha experiência em desenvolvimento me faz tratar cada
            projeto com a mesma atenção que dou aos outros sistemas que desenvolvo no dia a dia.
          </p>
        </div>

        <dl class="space-y-8 lg:col-span-5">
          <div class="border-t border-line pt-6">
            <dt class="text-caption font-medium uppercase tracking-[0.16em] text-mist">Experiência</dt>
            <dd
              v-for="item in about.experience"
              :key="item.role"
              class="mt-4 text-body-sm text-ink"
            >
              <span class="font-semibold">{{ item.role }}</span>
              <span class="mt-1 block text-muted">{{ item.company }} · {{ item.period }}</span>
            </dd>
          </div>
          <div class="border-t border-line pt-6">
            <dt class="text-caption font-medium uppercase tracking-[0.16em] text-mist">Formação</dt>
            <dd class="mt-4 text-body-sm text-ink">
              <span class="font-semibold">{{ about.education.degree }}</span>
              <span class="mt-1 block text-muted">
                {{ about.education.institution }} · {{ about.education.period }}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
