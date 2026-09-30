<script setup lang="ts">
defineProps<{
  label: string
  title: string
  lead?: string
  text?: string
}>()
</script>

<template>
  <header class="max-w-3xl">
    <p class="text-caption font-medium uppercase tracking-[0.18em] text-mist">{{ label }}</p>
    <h2 class="mt-4 text-heading-lg font-bold text-navy">{{ title }}</h2>
    <p v-if="lead" class="mt-5 text-lead text-graphite">{{ lead }}</p>
    <p v-if="text" class="mt-5 text-body text-muted">{{ text }}</p>
  </header>
</template>
