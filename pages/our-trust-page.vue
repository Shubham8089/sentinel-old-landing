<script setup lang="ts">
useSeoMeta({
  title: 'Our trust page · Sentinel',
  description: 'Sentinel’s own trust page: how this site handles data, published and versioned. We publish what we would ask you to publish.',
})

// Every statement here describes this site as built. If the site changes, bump the version below.
const VERSION = 'v1.0'

const practices = [
  { label: 'Cookies', value: 'None set by this site.' },
  { label: 'Analytics and advertising trackers', value: 'None.' },
  { label: 'Fonts', value: 'Served from this site, not from a third party.' },
  { label: 'Hosting', value: 'Vercel.' },
  { label: 'The demos', value: 'The consent banner, request form and other demos run in your browser. Nothing you type into them is sent to us.' },
  { label: 'Booking a setup day', value: 'Opens an email in your own mail app. We only receive it if you send it.' },
]
</script>

<template>
  <div class="space-y-14">
    <header>
      <Reveal>
        <p class="mono-label mb-4">Our trust page</p>
        <h1 class="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]">
          We publish what we would ask <em>you</em> to publish.
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          This page is real, versioned and about this site. It is the same kind of page we set up for you.
        </p>
      </Reveal>
    </header>

    <Reveal class="card flex flex-wrap items-center justify-between gap-4 p-5">
      <div class="flex items-center gap-3">
        <span class="h-2.5 w-2.5 rounded-full bg-ok" aria-hidden="true" />
        <div>
          <p class="text-sm font-medium">No incidents recorded</p>
          <p class="text-xs text-muted">Since launch, {{ SITE.launched }}</p>
        </div>
      </div>
      <p class="font-mono text-xs text-muted">Status · live</p>
    </Reveal>

    <section aria-labelledby="practices-h">
      <Reveal>
        <div class="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="practices-h" class="text-2xl sm:text-3xl">How this site handles data</h2>
          <p class="font-mono text-xs text-muted">{{ VERSION }} · {{ SITE.launched }} · English</p>
        </div>
      </Reveal>
      <dl class="mt-6 divide-y divide-border rounded-xl border border-border bg-white">
        <Reveal v-for="(p, i) in practices" :key="p.label" :delay="i * 50" class="grid gap-x-8 gap-y-1 px-5 py-4 sm:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
          <dt class="text-sm font-medium">{{ p.label }}</dt>
          <dd class="text-sm leading-relaxed text-muted">{{ p.value }}</dd>
        </Reveal>
      </dl>
    </section>

    <section aria-labelledby="versions-h">
      <Reveal>
        <h2 id="versions-h" class="text-2xl sm:text-3xl">Version history</h2>
      </Reveal>
      <Reveal :delay="80" class="mt-6 overflow-x-auto rounded-xl border border-border bg-white">
        <table class="w-full min-w-[26rem] text-left text-sm">
          <thead>
            <tr class="border-b border-border">
              <th scope="col" class="px-5 py-3 font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-muted">Version</th>
              <th scope="col" class="px-5 py-3 font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-muted">Published</th>
              <th scope="col" class="px-5 py-3 font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-muted">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-3 font-mono text-xs font-medium">{{ VERSION }}</td>
              <td class="px-5 py-3">{{ SITE.launched }}</td>
              <td class="px-5 py-3 text-muted">First publication</td>
            </tr>
          </tbody>
        </table>
      </Reveal>
    </section>

    <Reveal class="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
      <p class="max-w-md text-sm leading-relaxed text-muted">
        Something on this page unclear, or wrong? Tell us and we will fix it, and note the change above.
      </p>
      <div class="flex flex-wrap gap-3">
        <a :href="questionHref()" class="btn-outline">Write to us<span class="sr-only"> (opens your email app)</span></a>
        <BookButton />
      </div>
    </Reveal>
  </div>
</template>
