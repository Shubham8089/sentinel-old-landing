<script setup lang="ts">
useSeoMeta({
  title: 'pactbase — the trust layer between you and your customers',
  description:
    'Consent, a trust center, and data requests — handled in one place, on your front door. Set up in a day.',
  ogTitle: 'pactbase — the trust layer between you and your customers',
  ogDescription: 'The consent, trust and rights layer that lives between your business and your customers.',
})

const promises = ['Set up in a day', 'Kept current', 'Real, not a PDF']
</script>

<template>
  <div class="space-y-24 lg:space-y-32">
    <!-- Hero -->
    <section>
      <h1 class="max-w-3xl text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[1.04]">
        The trust layer <em>between</em> you and your customers.
      </h1>

      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
        Consent, a trust center, and data requests — handled in one place, on your front door. Set up in a day.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-3">
        <WaitlistButton large label="Get your Trust Center" />
        <a href="#how-h" class="btn-outline !h-14 !px-7 !text-sm">See how it works</a>
      </div>

      <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <li v-for="p in promises" :key="p" class="flex items-center gap-2 text-xs text-muted">
          <svg width="12" height="12" viewBox="0 0 12 12" class="text-blue" aria-hidden="true"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          {{ p }}
        </li>
      </ul>

      <Reveal class="mt-16 pb-8">
        <HeroScene />
      </Reveal>
    </section>

    <!-- The question -->
    <section aria-labelledby="q-h">
      <Reveal>
        <p class="mono-label mb-4">One link, not a spreadsheet</p>
        <h2 id="q-h" class="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]">
          One link that answers <em>the trust question.</em>
        </h2>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Clients and partners ask the same questions about how you handle their data. With a Trust Center, the
          answers are already published, current and one link away.
        </p>
      </Reveal>
      <div class="mt-10 max-w-3xl">
        <QuestionnaireDemo />
      </div>
    </section>

    <!-- How it works -->
    <section aria-labelledby="how-h">
      <Reveal>
        <p class="mono-label mb-4">How it works</p>
        <h2 id="how-h" class="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]">
          Three things on your front door.
        </h2>
      </Reveal>
      <div class="mt-12">
        <StoryScroll />
      </div>
    </section>
  </div>
</template>
