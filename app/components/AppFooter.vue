<script setup lang="ts">
import { footerLinks, mailtoHref, site, whatsappHref } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div class="wrap py-14 md:py-16">
      <div class="grid gap-10 md:grid-cols-12">
        <div class="md:col-span-5">
          <p class="text-body-sm font-bold tracking-[-0.025em] text-ink">{{ site.name }}</p>
          <p class="mt-2 max-w-xs text-body-sm text-muted">{{ site.tagline }}</p>
        </div>

        <nav aria-label="Links do rodapé" class="md:col-span-3">
          <ul class="space-y-1">
            <li v-for="item in footerLinks" :key="item.href">
              <a
                :href="item.href"
                class="flex min-h-11 items-center text-body-sm text-muted transition-colors duration-150 ease-soft hover:text-navy"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="md:col-span-4">
          <ul class="space-y-1">
            <li>
              <a
                :href="whatsappHref()"
                target="_blank"
                rel="noopener noreferrer"
                class="flex min-h-11 items-center gap-2 text-body-sm text-muted transition-colors duration-150 ease-soft hover:text-navy"
              >
                WhatsApp
                <AppIcon name="arrow-up-right" class="h-4 w-4" :stroke-width="1.5" />
              </a>
            </li>
            <li>
              <a
                :href="mailtoHref()"
                class="flex min-h-11 items-center gap-2 text-body-sm text-muted transition-colors duration-150 ease-soft hover:text-navy"
              >
                E-mail
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p class="mt-12 border-t border-line pt-6 text-caption text-mist">
        © {{ year }} {{ site.name }}. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>
