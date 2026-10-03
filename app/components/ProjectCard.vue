<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project; reverse?: boolean }>()

const frame = ref<HTMLIFrameElement | null>(null)
const previewSrc = computed(() => `/projects/${props.project.slug}/`)

let frameWindow: Window | null = null
let paused = false
let reducedMotion = false
let raf = 0

function schedule() {
  if (!raf) raf = requestAnimationFrame(update)
}

// Percorre a página do projeto conforme o card atravessa a viewport.
function update() {
  raf = 0
  const el = frame.value
  const win = frameWindow
  if (!el || !win || reducedMotion) return

  const rect = el.getBoundingClientRect()
  const viewport = window.innerHeight

  if (rect.bottom < 0 || rect.top > viewport) {
    if (paused) {
      paused = false
      listenForInteraction()
    }
    return
  }

  if (paused) return

  const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (rect.height + viewport)))
  const max = Math.max(0, win.document.documentElement.scrollHeight - win.innerHeight)
  win.scrollTo(0, progress * max)
}

function pause() {
  paused = true
}

// Ao primeiro toque, clique ou rolagem dentro do preview, o visitante assume o controle.
function listenForInteraction() {
  const win = frameWindow
  if (!win) return
  win.removeEventListener('pointerdown', pause)
  win.removeEventListener('wheel', pause)
  win.removeEventListener('touchstart', pause)
  win.addEventListener('pointerdown', pause, { once: true, passive: true })
  win.addEventListener('wheel', pause, { once: true, passive: true })
  win.addEventListener('touchstart', pause, { once: true, passive: true })
}

function onLoad() {
  const win = frame.value?.contentWindow
  if (!win) return
  frameWindow = win
  // O demo usa rolagem suave; o percurso acompanha o scroll da página e precisa ser instantâneo.
  win.document.documentElement.style.scrollBehavior = 'auto'
  listenForInteraction()
  schedule()
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <article class="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
    <div class="lg:col-span-5" :class="reverse ? 'lg:order-2' : undefined">
      <p class="text-caption font-medium uppercase tracking-[0.18em] text-mist">
        {{ project.context }} · {{ project.category }}<template v-if="project.location"> · {{ project.location }}</template>
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
        <AppButton :href="project.url" variant="secondary" :external="true">
          Ver projeto
          <AppIcon name="arrow-up-right" class="h-4 w-4" :stroke-width="1.75" />
        </AppButton>
      </p>
    </div>

    <figure class="lg:col-span-7" :class="reverse ? 'lg:order-1' : undefined">
      <div
        class="relative aspect-[3/4] overflow-hidden rounded-card border border-line bg-cloud shadow-card sm:aspect-4/3"
      >
        <iframe
          ref="frame"
          :src="previewSrc"
          :title="`Prévia da página de ${project.title}`"
          loading="lazy"
          class="absolute inset-0 h-full w-full border-0"
          @load="onLoad"
        />
      </div>
      <figcaption class="mt-3 text-caption text-mist">
        Role para percorrer a página.
      </figcaption>
    </figure>
  </article>
</template>
