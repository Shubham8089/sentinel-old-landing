<script setup lang="ts">
const { select, goToWaitlist } = useSite()
</script>

<template>
  <div>
    <p class="chip mb-6">
      <span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      Full DPDP obligations apply from May 2027
    </p>

    <h1 class="max-w-[19ch] text-[clamp(2.4rem,5.4vw,4.1rem)] leading-[1.04] sm:max-w-3xl">
      Pass the DPDP question every client asks. And stay that way.
    </h1>

    <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
      The consent, trust, and rights layer that lives on your front door: set up in a day, kept current, evidence on
      demand.
    </p>

    <div class="mt-8 flex flex-wrap items-center gap-3">
      <button type="button" class="btn-primary !px-5 !py-3" @click="goToWaitlist">Get your Trust Center</button>
      <button type="button" class="btn-outline !px-5 !py-3" @click="select('rights', '#dsar-demo')">Watch it work</button>
    </div>

    <Reveal class="mt-14 max-w-3xl">
      <ConsentBanner />
    </Reveal>

    <Reveal as="dl" class="mt-10 grid max-w-3xl gap-6 border-t border-border pt-6 sm:grid-cols-2">
      <div>
        <dt class="mono-label mb-1.5">Running on this page</dt>
        <dd class="text-sm leading-relaxed">
          The banner above is a working component in your browser, not a screenshot. Try it.
        </dd>
      </div>
      <div>
        <dt class="mono-label mb-1.5">May 2027</dt>
        <dd class="text-sm leading-relaxed">
          Full obligations apply from then, with penalties of up to ₹250 crore. Better to have this handled early.
        </dd>
      </div>
    </Reveal>

    <section class="mt-16" aria-labelledby="three-h">
      <h2 id="three-h" class="mb-5 text-2xl">Three modules, one front door</h2>
      <ul class="grid gap-4 md:grid-cols-3">
        <Reveal v-for="(m, i) in MODULES" :key="m.id" as="li" :delay="i * 90">
          <button
            type="button"
            class="card group flex h-full w-full flex-col p-5 text-left transition-colors duration-300 ease-calm hover:border-accent"
            @click="select(m.id)"
          >
            <span class="mono-label">0{{ i + 1 }}</span>
            <span class="mt-3 font-serif text-xl">{{ m.label }}</span>
            <span class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ m.outcome }}</span>
            <span class="mt-4 text-sm font-medium text-accent">
              Open {{ m.label }}
              <span class="inline-block transition-transform duration-300 ease-calm group-hover:translate-x-1" aria-hidden="true">→</span>
            </span>
          </button>
        </Reveal>
      </ul>
    </section>
  </div>
</template>
