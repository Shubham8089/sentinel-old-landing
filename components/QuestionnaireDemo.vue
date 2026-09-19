<script setup lang="ts">
// A client questionnaire that answers itself from the Trust Center as it scrolls into view.
const QUESTIONS = [
  { q: 'Do you publish a privacy notice, and in which languages?', from: 'Trust Center' },
  { q: 'How do you record consent, and can it be withdrawn?', from: 'Consent' },
  { q: 'Can individuals ask for access, correction or erasure?', from: 'Rights' },
  { q: 'How quickly do you respond to those requests?', from: 'Rights' },
  { q: 'Who do people contact with a grievance?', from: 'Trust Center' },
  { q: 'What happens if there is a personal data breach?', from: 'Trust Center' },
  { q: 'Which vendors process personal data for you?', from: 'Book of record' },
  { q: 'Do you keep a record of what you process, and why?', from: 'Book of record' },
]

const answered = ref(0)
const root = ref<HTMLElement | null>(null)
let timers: ReturnType<typeof setTimeout>[] = []
let observer: IntersectionObserver | undefined

const done = computed(() => answered.value === QUESTIONS.length)

function run() {
  timers.forEach(clearTimeout)
  answered.value = 0
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  QUESTIONS.forEach((_, i) => {
    timers.push(setTimeout(() => (answered.value = i + 1), reduce ? 0 : 600 + i * 420))
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        run()
        observer?.disconnect()
      }
    },
    { threshold: 0.35 },
  )
  if (root.value) observer.observe(root.value)
})
onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  observer?.disconnect()
})
</script>

<template>
  <div ref="root" class="card overflow-hidden shadow-hard">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-canvas px-5 py-3.5">
      <div>
        <p class="mono-label">Vendor data protection questionnaire · sample</p>
        <p class="mt-0.5 text-sm text-muted">From a client’s procurement team</p>
      </div>
      <p class="font-mono text-xs" aria-hidden="true">
        <span class="text-ink">{{ answered }}</span><span class="text-muted"> of {{ QUESTIONS.length }} answered</span>
      </p>
    </div>

    <div class="h-1 w-full bg-border" aria-hidden="true">
      <div class="h-full bg-accent transition-[width] duration-500 ease-calm" :style="{ width: `${(answered / QUESTIONS.length) * 100}%` }" />
    </div>

    <ul class="divide-y divide-border">
      <li v-for="(item, i) in QUESTIONS" :key="item.q" class="flex items-center gap-4 px-5 py-3.5">
        <span
          class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ease-calm"
          :class="i < answered ? 'border-accent bg-accent text-white' : 'border-border bg-white text-transparent'"
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </span>
        <span class="flex-1 text-sm leading-snug" :class="i < answered ? 'text-ink' : 'text-muted'">{{ item.q }}</span>
        <span
          class="hidden shrink-0 rounded-full bg-accent-bg px-2.5 py-0.5 font-mono text-[11px] text-accent transition-opacity duration-500 ease-calm sm:inline"
          :class="i < answered ? 'opacity-100' : 'opacity-0'"
        >
          {{ item.from }}
        </span>
        <span class="sr-only">{{ i < answered ? `Answered from ${item.from}` : 'Not answered yet' }}</span>
      </li>
    </ul>

    <div class="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-canvas px-5 py-4">
      <Transition name="swap" mode="out-in">
        <p v-if="done" key="done" class="text-sm font-medium text-accent" role="status">
          All answered. Send one link, not a spreadsheet.
        </p>
        <p v-else key="wait" class="text-sm text-muted">Answering from your Trust Center…</p>
      </Transition>
      <button type="button" class="btn-quiet !py-1.5" @click="run">Replay</button>
    </div>
  </div>
</template>
