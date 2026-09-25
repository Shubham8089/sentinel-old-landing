<script setup lang="ts">
// Illustration of the pactbase workspace. Sample data, labelled as such. Decorative.
const nav = ['Overview', 'Consent', 'Trust Center', 'Rights', 'Book of record']
const cards = [
  {
    title: 'Consent',
    status: 'Banner live',
    lines: ['Notice v1.4 · English, हिन्दी', 'Withdrawal enabled', 'Receipt logged per visitor'],
  },
  {
    title: 'Trust Center',
    status: 'Published',
    lines: ['3 policies, versioned', 'No open incidents', 'Contact named'],
  },
  {
    title: 'Rights',
    status: 'Portal live',
    lines: ['2 requests open', 'Next due in 17 days', 'Every request has an owner'],
  },
]
</script>

<template>
  <div class="relative [perspective:1600px]" role="img" aria-label="Illustration of the pactbase workspace, using sample data">
    <div
      class="group overflow-hidden rounded-xl border border-border bg-white shadow-float transition-transform duration-700 ease-calm [transform:rotateX(4deg)_rotateY(-3deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)]"
      aria-hidden="true"
    >
      <!-- window chrome -->
      <div class="flex items-center gap-3 border-b border-border bg-canvas px-4 py-2.5">
        <span class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-border" />
          <span class="h-2.5 w-2.5 rounded-full bg-border" />
          <span class="h-2.5 w-2.5 rounded-full bg-border" />
        </span>
        <span class="mx-auto rounded-md border border-border bg-white px-3 py-0.5 font-mono text-[11px] text-muted">app.pactbase · Acme Retail</span>
        <span class="font-mono text-[11px] text-muted">sample data</span>
      </div>

      <div class="grid md:grid-cols-[10.5rem_minmax(0,1fr)]">
        <ul class="hidden space-y-1 border-r border-border p-3 md:block">
          <li
            v-for="(n, i) in nav"
            :key="n"
            class="rounded-md px-3 py-1.5 text-xs"
            :class="i === 0 ? 'bg-blue-bg font-medium text-blue' : 'text-muted'"
          >
            {{ n }}
          </li>
        </ul>

        <div class="p-4 sm:p-5">
          <div class="flex items-baseline justify-between gap-3">
            <p class="font-bold tracking-tight text-xl">Your front door</p>
            <p class="inline-flex items-center gap-2 text-xs text-ok">
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-ok" />
              All three live
            </p>
          </div>

          <div class="mt-4 grid gap-3 sm:grid-cols-3">
            <div
              v-for="(c, i) in cards"
              :key="c.title"
              v-motion
              :initial="{ opacity: 0, y: 10 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 420, delay: 260 + i * 140, ease: 'easeOut' } }"
              class="rounded-lg border border-border bg-canvas p-3.5"
            >
              <div class="flex items-center justify-between gap-2">
                <p class="text-sm font-medium">{{ c.title }}</p>
                <span class="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-[10px] text-ok">
                  <span class="h-1.5 w-1.5 rounded-full bg-ok" />
                  {{ c.status }}
                </span>
              </div>
              <ul class="mt-3 space-y-1.5 text-xs text-muted">
                <li v-for="l in c.lines" :key="l">{{ l }}</li>
              </ul>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border px-4 py-3">
            <div>
              <p class="text-sm font-medium">Evidence pack</p>
              <p class="text-xs text-muted">Receipts, notice versions, requests, vendors, breach log</p>
            </div>
            <span class="rounded-md bg-blue px-3 py-1.5 text-xs font-medium text-white">Ready to send</span>
          </div>
        </div>
      </div>
    </div>

    <!-- floating toast -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 480, delay: 700, ease: 'easeOut' } }"
      class="absolute -bottom-6 right-3 hidden w-64 rounded-lg border border-border bg-white p-3.5 shadow-float sm:block lg:right-6"
      aria-hidden="true"
    >
      <p class="flex items-center gap-2 text-xs font-medium">
        <span class="flex h-4 w-4 items-center justify-center rounded-full bg-blue-bg text-blue">
          <svg width="9" height="9" viewBox="0 0 12 12"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </span>
        Request received
      </p>
      <p class="mt-1 font-mono text-[11px] text-muted">DSAR-1042 · 30-day clock started</p>
    </div>
  </div>
</template>
