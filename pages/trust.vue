<script setup lang="ts">
useSeoMeta({
  title: 'Trust Center · Sentinel',
  description: 'A public page that answers the client questionnaire before it is sent: versioned policies, breach status, a named contact.',
})

const points = [
  {
    title: 'Policies in one place, versioned and multilingual',
    body: 'Publish once, keep every version on record, and offer them in the languages your customers read.',
  },
  {
    title: 'A breach status page and a named contact',
    body: 'People know where to look when something happens and whom to ask when they have a question.',
  },
  {
    title: 'Your posture, shown plainly',
    body: 'Only what is true, kept current as things change, so the page never drifts from reality.',
  },
]
</script>

<template>
  <div class="space-y-14">
    <ModuleHead
      eyebrow="02 · Trust Center"
      outcome="A public page that answers the client questionnaire before it is sent."
      :points="points"
    />

    <Reveal>
      <TrustCenterMock />
    </Reveal>

    <section aria-labelledby="record-h" class="space-y-6">
      <Reveal>
        <p class="mono-label mb-3">Behind the page</p>
        <h2 id="record-h" class="max-w-2xl text-3xl leading-tight sm:text-4xl">
          A book of record that <em>backs it up.</em>
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Every claim on the page is backed by a record: receipts, notice versions, requests, vendors and the breach
          log. It is your evidence pack, ready when a client or auditor asks.
        </p>
      </Reveal>
      <Reveal :delay="100">
        <EvidencePack />
      </Reveal>
    </section>

    <Reveal class="space-y-4 border-t border-border pt-8">
      <NuxtLink to="/our-trust-page" class="btn-quiet -ml-3">See Sentinel’s own trust page, live <span aria-hidden="true">→</span></NuxtLink>
      <PageNext to="/rights" label="Rights" blurb="What happens when a customer writes in." />
    </Reveal>
  </div>
</template>
