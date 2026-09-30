<script setup lang="ts">
type IconName =
  | 'estrutura'
  | 'design'
  | 'desenvolvimento'
  | 'publicacao'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'mail'

withDefaults(defineProps<{ name: IconName; strokeWidth?: number }>(), { strokeWidth: 1.5 })
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'estrutura'">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16" />
    </template>
    <template v-else-if="name === 'design'">
      <path d="M4 20l4-1 10-10a2.12 2.12 0 0 0-3-3L5 16l-1 4Z" />
      <path d="M14 6l4 4" />
    </template>
    <template v-else-if="name === 'desenvolvimento'">
      <rect x="3" y="5" width="12.5" height="10" rx="2" />
      <path d="M9.25 19h0" />
      <path d="M9.25 15v4" />
      <rect x="17.5" y="11" width="4.5" height="8" rx="1.5" />
    </template>
    <template v-else-if="name === 'publicacao'">
      <path d="M12 15V3" />
      <path d="M8 7l4-4 4 4" />
      <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </template>
    <template v-else-if="name === 'arrow-right'">
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'arrow-up-right'">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </template>
  </svg>
</template>
