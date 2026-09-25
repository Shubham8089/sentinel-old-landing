<script setup lang="ts">
useSeoMeta({
  title: 'What’s covered · pactbase',
  description: 'What pactbase handles for DPDP, what it supports, and what stays with you. Plain lines, so nothing is a surprise.',
})

interface Row {
  title: string
  ref?: string
  body: string
  where: string
}

const groups: { key: string; title: string; blurb: string; dot: string; rows: Row[] }[] = [
  {
    key: 'handled',
    title: 'Handled by pactbase',
    blurb: 'The front door. We build it, run it and keep it current.',
    dot: 'bg-ok',
    rows: [
      { title: 'Notice to the people whose data you hold', ref: 'Section 5', body: 'A plain-language privacy notice, versioned, in the languages your customers read.', where: 'Consent' },
      { title: 'Consent, and withdrawing it', ref: 'Section 6', body: 'A clear choice, recorded with a receipt, with withdrawal as easy as agreeing.', where: 'Consent' },
      { title: 'Access, correction and erasure requests', ref: 'Sections 11–12', body: 'A portal, a reference number, an owner and a clock for every request.', where: 'Rights' },
      { title: 'A grievance channel', ref: 'Section 13', body: 'A published route for complaints, tracked the same way as any other request.', where: 'Rights' },
      { title: 'A public trust page', body: 'Policies, versions, breach status and contact details clients can check any time.', where: 'Trust Center' },
    ],
  },
  {
    key: 'supported',
    title: 'Supported, and you decide',
    blurb: 'We keep the record and the tools. The judgement is yours.',
    dot: 'bg-blue',
    rows: [
      { title: 'The record behind your answers', body: 'What you process, why, and who else touches it. Vendors and agreements sit alongside.', where: 'Book of record' },
      { title: 'Breach response', ref: 'Section 8(6)', body: 'We keep the log and publish the status page. You decide what happened, and you notify the Board and affected people.', where: 'Book of record' },
      { title: 'Retention and erasure', ref: 'Section 8(7)', body: 'We track schedules and raise erasure requests. Your own systems have to actually delete the data.', where: 'Book of record' },
    ],
  },
  {
    key: 'yours',
    title: 'Stays with you',
    blurb: 'Nothing a tool can do for you. We flag each one when you are set up.',
    dot: 'bg-warn',
    rows: [
      { title: 'Security safeguards in your systems', ref: 'Section 8(5)', body: 'Reasonable safeguards where the data lives. We can show you are doing it. We cannot do it for you.', where: 'Your team' },
      { title: 'Children’s data', ref: 'Section 9', body: 'If you process it, verifiable parental consent needs its own flow. We will tell you if it applies.', where: 'Your team' },
      { title: 'Significant Data Fiduciary duties', ref: 'Section 10', body: 'Only if the government notifies you as one: a DPO in India, audits and impact assessments.', where: 'Your team' },
    ],
  },
]
</script>

<template>
  <div class="space-y-14">
    <header>
      <Reveal>
        <p class="mono-label mb-4">What’s covered</p>
        <h1 class="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]">
          What pactbase handles, and what <em>stays with you.</em>
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Every obligation, who carries it, where it lives. The front door is handled — the rest is mapped.
        </p>
      </Reveal>
    </header>

    <section v-for="g in groups" :key="g.key" :aria-labelledby="`g-${g.key}`">
      <Reveal>
        <div class="flex items-center gap-3">
          <span class="h-2.5 w-2.5 rounded-full" :class="g.dot" aria-hidden="true" />
          <h2 :id="`g-${g.key}`" class="text-2xl sm:text-3xl">{{ g.title }}</h2>
        </div>
        <p class="mt-2 text-sm text-muted">{{ g.blurb }}</p>
      </Reveal>
      <ul class="mt-6 divide-y divide-border rounded-xl border border-border bg-white">
        <Reveal v-for="(r, i) in g.rows" :key="r.title" as="li" :delay="i * 60" class="grid gap-x-8 gap-y-2 px-5 py-4 sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_7rem]">
          <p class="text-sm font-medium">
            {{ r.title }}
            <span v-if="r.ref" class="ml-2 text-[11px] font-normal text-muted">{{ r.ref }}</span>
          </p>
          <p class="text-sm leading-relaxed text-muted">{{ r.body }}</p>
          <p class="text-xs sm:text-right">{{ r.where }}</p>
        </Reveal>
      </ul>
    </section>

    <Reveal class="rounded-xl bg-blue-bg p-6 text-sm leading-relaxed text-blue">
      <p>
        This is a guide, not legal advice. How the Act applies depends on what you do with personal data, so have your
        counsel confirm the lines for your business. Section references are to the Digital Personal Data Protection
        Act, 2023.
      </p>
    </Reveal>

    <Reveal class="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
      <PageNext to="/trust" label="Trust Center" blurb="Where a client goes when they ask." class="w-full sm:w-auto sm:min-w-[22rem]" />
      <TryNowButton large />
    </Reveal>
  </div>
</template>
