<script setup lang="ts">
import { about, site } from '~/data/site'
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

        <div class="lg:col-span-5">
          <dl class="space-y-8">
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
              <dd class="mt-5 text-body-sm text-mist">{{ about.experienceNote }}</dd>
            </div>
            <div class="border-t border-line pt-6">
              <dt class="text-caption font-medium uppercase tracking-[0.16em] text-mist">Formação</dt>
              <dd
                v-for="item in about.education"
                :key="item.degree"
                class="mt-4 text-body-sm text-ink"
              >
                <span class="font-semibold">{{ item.degree }}</span>
                <span class="mt-1 block text-muted">{{ item.institution }} · {{ item.period }}</span>
              </dd>
            </div>
          </dl>

          <p class="mt-8 border-t border-line pt-6">
            <a
              :href="site.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 items-center gap-2 text-body-sm font-medium text-ink transition-colors duration-150 ease-soft hover:text-navy"
            >
              Perfil no LinkedIn
              <AppIcon name="arrow-up-right" class="h-4 w-4" :stroke-width="1.5" />
            </a>
          </p>
        </div>
      </div>

      <div class="mt-14 border-t border-line pt-12 md:mt-20 md:pt-16">
        <h3 class="text-caption font-medium uppercase tracking-[0.18em] text-mist">{{ about.resultsTitle }}</h3>
        <p class="mt-4 max-w-2xl text-body-sm text-muted">{{ about.resultsLead }}</p>

        <ul class="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          <li v-for="result in about.results" :key="result.title" class="border-t border-line pt-6">
            <h4 class="text-subheading font-semibold text-ink">{{ result.title }}</h4>
            <p class="mt-2 text-body-sm text-muted">{{ result.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
