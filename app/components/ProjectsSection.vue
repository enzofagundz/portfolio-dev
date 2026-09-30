<script setup lang="ts">
import { projects } from '~/data/projects'
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
    </div>
  </section>
</template>
