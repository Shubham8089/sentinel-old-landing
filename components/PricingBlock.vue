<script setup lang="ts">
const included = [
  'Consent banner and preference center',
  'Versioned privacy notice, in the languages your customers read',
  'Trust Center on your own domain',
  'Rights and grievance portal with a clock on every request',
  'Book of record: RoPA, DPIAs, vendors and DPAs, breach log',
  'Set up with you in a day, and kept current after that',
]
const steps = ['Send a short email.', 'We reply with a time.', 'By the end of the day, your Trust Center is live.']
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
    <div class="card p-7">
      <p class="mono-label">One plan</p>
      <h3 class="mt-3 text-3xl leading-tight sm:text-4xl">Everything included. <em>Quoted on your setup day.</em></h3>
      <p class="mt-4 max-w-lg text-base leading-relaxed text-muted">
        We quote once we know what you run on, because every business is set up differently. There are no tiers to
        compare and no modules to add later.
      </p>
      <ul class="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        <li v-for="item in included" :key="item" class="flex gap-3 text-sm leading-snug">
          <svg width="16" height="16" viewBox="0 0 12 12" class="mt-0.5 shrink-0 text-accent" aria-hidden="true"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col rounded-xl bg-accent p-7 text-white">
      <p class="font-mono text-[11px] uppercase tracking-[0.08em] text-white">Your setup day</p>
      <ol class="mt-5 space-y-4">
        <li v-for="(s, i) in steps" :key="s" class="flex gap-4">
          <span class="font-mono text-sm text-white" aria-hidden="true">0{{ i + 1 }}</span>
          <span class="font-serif text-xl leading-snug">{{ s }}</span>
        </li>
      </ol>
      <a :href="bookHref()" class="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-canvas px-5 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:bg-white">
        Book your setup day
        <span class="sr-only"> (opens your email app)</span>
        <span class="inline-block transition-transform duration-300 ease-calm group-hover:translate-x-1" aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</template>
