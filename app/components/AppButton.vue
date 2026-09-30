<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'secondary' | 'ghost'
    external?: boolean
  }>(),
  { variant: 'primary' },
)

const isExternal = computed(() => props.external ?? /^(https?:)?\/\//.test(props.href))

const variants = {
  primary: 'bg-navy text-paper hover:bg-navy-deep',
  secondary: 'border border-line bg-paper text-ink hover:border-silver hover:bg-cloud',
  ghost: 'text-ink hover:text-navy',
}
</script>

<template>
  <a
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-card px-5 text-body-sm font-semibold tracking-[-0.025em] transition-[background-color,border-color,color,transform] duration-150 ease-soft active:scale-[0.96]"
    :class="variants[variant]"
  >
    <slot />
  </a>
</template>
