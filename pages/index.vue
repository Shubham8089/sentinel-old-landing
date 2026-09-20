<script setup lang="ts">
useSeoMeta({
  title: 'Sentinel: the front door of DPDP',
  description:
    'Pass the DPDP question every client asks, and stay that way. The consent, trust and rights layer that lives on your front door, set up in a day.',
  ogTitle: 'Sentinel: the front door of DPDP',
  ogDescription: 'The consent, trust and rights layer that lives on your front door.',
})

const promises = ['Set up in a day', 'Kept current', 'Evidence on demand']
</script>

<template>
  <div class="space-y-24 lg:space-y-32">
    <!-- Hero -->
    <section>
      <p class="chip mb-8">
        <span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        Full DPDP obligations apply from May 2027
      </p>

      <h1 class="max-w-4xl text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[1.04]">
        <span class="block text-balance">Pass the DPDP question every client asks.</span>
        <span class="block">And <em>stay that way.</em></span>
      </h1>

      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
        The consent, trust, and rights layer that lives on your front door: set up in a day, kept current, evidence on
        demand.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-3">
        <WaitlistButton large />
        <NuxtLink to="/rights#dsar-demo" class="btn-outline !px-6 !py-3.5 !text-base">Watch it work</NuxtLink>
      </div>

      <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <li v-for="p in promises" :key="p" class="flex items-center gap-2 text-xs text-muted">
          <svg width="12" height="12" viewBox="0 0 12 12" class="text-accent" aria-hidden="true"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          {{ p }}
        </li>
      </ul>

      <Reveal class="mt-16 pb-8">
        <ProductWindow />
      </Reveal>
    </section>

    <!-- The question -->
    <section aria-labelledby="q-h">
      <Reveal>
        <p class="mono-label mb-4">The question every client asks</p>
        <h2 id="q-h" class="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]">
          Answered <em>before</em> it is asked.
        </h2>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Enterprise clients send the same data protection questionnaire to every vendor. With a Trust Center, the
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
          Three things on your front door. One record <em>behind</em> them.
        </h2>
      </Reveal>
      <div class="mt-12">
        <StoryScroll />
      </div>
    </section>
  </div>
</template>
