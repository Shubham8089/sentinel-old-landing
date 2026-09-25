<script setup lang="ts">
useSeoMeta({
  title: 'pactbase | proofs, not promises.',
  description:
    'Consent, a trust center, and data requests. Handled in one place, on your front door. Set up in a day.',
  ogTitle: 'pactbase | proofs, not promises.',
  ogDescription: 'The consent, trust and rights layer that lives between your business and your customers.',
})

</script>

<template>
  <div>
    <!-- Hero: full-bleed dark -->
    <section class="section-dark -mt-10 lg:-mt-14">
      <div class="relative mx-auto max-w-[1280px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
        <!-- Ambient glow behind the copy/window. Decorative. -->
        <div
          class="pointer-events-none absolute left-1/2 top-0 -z-0 h-[46rem] w-[70rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style="background: radial-gradient(ellipse at center, var(--blue-night) 0%, transparent 65%)"
          aria-hidden="true"
        />

        <div class="relative">
          <Reveal variant="mask">
            <p class="mono-label">Consent · Trust Center · Rights</p>
          </Reveal>

          <Reveal variant="mask" :delay="80">
            <h1 class="mt-5 max-w-3xl text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.03] text-night-ink">
              The trust layer <em class="accent-em">between</em> you and your customers.
            </h1>
          </Reveal>

          <Reveal variant="mask" :delay="160">
            <p class="mt-7 max-w-xl text-lg leading-relaxed text-night-muted">
              Set up in a day. On your front door.
            </p>
          </Reveal>

          <Reveal :delay="240">
            <div class="mt-10 flex flex-wrap items-center gap-3">
              <TryNowButton large variant="light" />
              <a href="#how-h" class="btn-outline-on-dark !h-14 !px-7 !text-sm">See how it works</a>
            </div>
          </Reveal>

          <Reveal variant="scale" :delay="120" class="mt-16">
            <ProductWindow />
          </Reveal>
        </div>
      </div>
    </section>

    <div class="space-y-24 pt-24 lg:space-y-32 lg:pt-32">
      <!-- The question -->
      <section aria-labelledby="q-h">
        <Reveal>
          <p class="mono-label mb-4">One link, not a spreadsheet</p>
          <h2 id="q-h" class="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]">
            One link that answers <em class="accent-em">the trust question.</em>
          </h2>
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

      <!-- Closing CTA: full-bleed dark -->
      <section class="section-dark">
        <div class="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p class="mono-label">Set up in a day</p>
          <h2 class="max-w-2xl text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] text-night-ink">
            Give your customers proofs, not promises.
          </h2>
          <TryNowButton large variant="light" />
        </div>
      </section>
    </div>
  </div>
</template>
