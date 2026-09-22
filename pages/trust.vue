<script setup lang="ts">
useSeoMeta({
  title: 'Trust Center · pactbase',
  description: "A public page that shows customers how their data's handled: versioned policies, breach status, a named contact.",
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
      eyebrow="Trust Center"
      outcome="A public page that shows customers how their data's handled."
      :points="points"
    />

    <Reveal>
      <figure class="m-0">
        <figcaption class="mb-3 flex flex-wrap items-center justify-between gap-3">
          <span class="mono-label">Live · pactbase’s own trust center</span>
          <a :href="TRUST_CENTER_URL" target="_blank" rel="noopener" class="btn-quiet !px-3 !py-1.5">
            Open in a new tab
          </a>
        </figcaption>
        <div class="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <iframe
            :src="TRUST_CENTER_URL"
            title="pactbase trust center"
            loading="lazy"
            class="block h-[42rem] w-full border-0"
          />
        </div>
      </figure>
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
      <a :href="TRUST_CENTER_URL" target="_blank" rel="noopener" class="btn-quiet -ml-3">See pactbase’s own trust center, live</a>
      <PageNext to="/rights" label="Rights" blurb="What happens when a customer writes in." />
    </Reveal>
  </div>
</template>
