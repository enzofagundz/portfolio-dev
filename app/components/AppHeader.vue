<script setup lang="ts">
import { nav, whatsappHref } from '~/data/site'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
    <div class="wrap flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
      <a
        href="#top"
        class="inline-flex min-h-11 items-center text-body-sm font-bold tracking-[-0.025em] text-ink transition-colors duration-150 ease-soft hover:text-navy"
      >
        Enzo Fagundes
      </a>

      <nav aria-label="Navegação principal" class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="flex min-h-11 items-center rounded-card px-3 text-body-sm font-medium text-ink transition-colors duration-150 ease-soft hover:text-navy"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <span class="hidden sm:block">
          <AppButton :href="whatsappHref()" external>Vamos conversar</AppButton>
        </span>

        <button
          type="button"
          class="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-card text-ink transition-colors duration-150 ease-soft hover:text-navy md:hidden"
          :aria-expanded="open"
          aria-controls="menu-mobile"
          @click="open = !open"
        >
          <span class="sr-only">{{ open ? 'Fechar menu' : 'Abrir menu' }}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            aria-hidden="true"
            class="absolute h-5 w-5 transition-[opacity,transform,filter] duration-200 ease-soft"
            :class="open ? 'scale-25 opacity-0 blur-[4px]' : 'scale-100 opacity-100 blur-none'"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            aria-hidden="true"
            class="absolute h-5 w-5 transition-[opacity,transform,filter] duration-200 ease-soft"
            :class="open ? 'scale-100 opacity-100 blur-none' : 'scale-25 opacity-0 blur-[4px]'"
          >
            <path d="M6 6 18 18" />
            <path d="M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-[opacity,transform] duration-200 ease-soft"
      enter-from-class="-translate-y-1 opacity-0"
      leave-active-class="transition-opacity duration-150 ease-soft"
      leave-to-class="opacity-0"
    >
      <nav
        v-show="open"
        id="menu-mobile"
        aria-label="Navegação principal (celular)"
        class="border-t border-line bg-paper md:hidden"
      >
        <ul class="wrap flex flex-col py-3">
          <li v-for="item in nav" :key="item.href">
            <a
              :href="item.href"
              class="flex min-h-12 items-center text-body font-medium text-ink transition-colors duration-150 ease-soft hover:text-navy"
              @click="open = false"
            >
              {{ item.label }}
            </a>
          </li>
          <li class="pt-3 pb-2 sm:hidden">
            <AppButton :href="whatsappHref()" external class="w-full">Vamos conversar</AppButton>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
