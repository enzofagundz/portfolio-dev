<script setup lang="ts">
import { otherWork, projects } from '~/data/projects'
</script>

<template>
  <section id="projetos" class="section">
    <div class="wrap">
      <SectionHeading
        label="Projetos"
        title="Alguns trabalhos que já saíram do papel."
        text="Cada projeto parte de uma necessidade diferente. O objetivo é transformar informações, serviços e diferenciais em uma experiência simples de entender e fácil de usar."
      />

      <div class="mt-14 space-y-16 md:mt-20 md:space-y-24">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.slug"
          :project="project"
          :reverse="index % 2 === 1"
        />
      </div>

      <div v-if="otherWork.length" class="mt-16 border-t border-line pt-12 md:mt-24 md:pt-16">
        <h3 class="text-caption font-medium uppercase tracking-[0.18em] text-mist">Outros trabalhos</h3>
        <p class="mt-4 max-w-2xl text-body-sm text-muted">
          Além das páginas que fiz para clientes, atuo em outros tipos de sistema: dentro de uma equipe de produto e como
          freelancer.
        </p>

        <ul class="mt-8 grid gap-5 md:grid-cols-2">
          <li
            v-for="item in otherWork"
            :key="item.title"
            class="rounded-card border border-line bg-paper p-8 shadow-card"
          >
            <p class="text-caption font-medium uppercase tracking-[0.16em] text-mist">{{ item.context }}</p>
            <h4 class="mt-3 text-subheading font-semibold text-ink">{{ item.title }}</h4>
            <p class="mt-3 text-body-sm text-muted">{{ item.description }}</p>
            <p v-if="item.url" class="mt-5">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-11 items-center gap-2 text-body-sm font-medium text-navy transition-colors duration-150 ease-soft hover:text-ink"
              >
                {{ item.urlLabel ?? 'Ver site' }}
                <AppIcon name="arrow-up-right" class="h-4 w-4" :stroke-width="1.5" />
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
