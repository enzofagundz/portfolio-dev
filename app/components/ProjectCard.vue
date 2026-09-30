<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{ project: Project; reverse?: boolean }>()
</script>

<template>
  <article class="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
    <div class="lg:col-span-5" :class="reverse ? 'lg:order-2' : undefined">
      <p class="text-caption font-medium uppercase tracking-[0.18em] text-mist">
        {{ project.category }}<template v-if="project.location"> · {{ project.location }}</template>
      </p>
      <h3 class="mt-3 text-heading font-bold text-navy">{{ project.title }}</h3>
      <p class="mt-4 text-body text-muted">{{ project.description }}</p>

      <dl class="mt-7 space-y-5 border-t border-line pt-6">
        <div>
          <dt class="text-caption font-medium uppercase tracking-[0.16em] text-mist">Objetivo</dt>
          <dd class="mt-2 text-body-sm text-graphite">{{ project.goal }}</dd>
        </div>
        <div>
          <dt class="text-caption font-medium uppercase tracking-[0.16em] text-mist">Solução</dt>
          <dd class="mt-2 text-body-sm text-graphite">{{ project.solution }}</dd>
        </div>
      </dl>

      <p v-if="project.url" class="mt-7 flex flex-wrap gap-3">
        <AppButton :href="project.url" variant="secondary">
          Ver projeto
          <AppIcon name="arrow-up-right" class="h-4 w-4" :stroke-width="1.75" />
        </AppButton>
      </p>
    </div>

    <figure class="lg:col-span-7" :class="reverse ? 'lg:order-1' : undefined">
      <div
        class="group relative aspect-4/3 overflow-hidden rounded-card border border-line bg-cloud shadow-card"
      >
        <img
          :src="project.full.src"
          :width="project.full.width"
          :height="project.full.height"
          :alt="project.full.alt"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover object-top outline outline-1 -outline-offset-1 outline-black/10 transition-[object-position] duration-500 ease-soft group-hover:duration-[7000ms] group-hover:ease-linear group-hover:object-bottom"
        />
      </div>
      <figcaption class="mt-3 text-caption text-mist">
        Página completa.<span class="hidden pointer-fine:inline"> Passe o cursor para percorrer.</span>
      </figcaption>
    </figure>
  </article>
</template>
