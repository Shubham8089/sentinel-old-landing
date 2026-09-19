<script setup lang="ts">
// A sample public trust page. All company details and dates are placeholders.
const { select } = useSite()

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'bn', label: 'বাংলা' },
] as const
type Lang = (typeof LANGS)[number]['code']

const lang = ref<Lang>('en')

const POLICIES: { names: Record<Lang, string>; version: string; updated: string }[] = [
  {
    names: { en: 'Privacy notice', hi: 'गोपनीयता सूचना', ta: 'தனியுரிமை அறிவிப்பு', bn: 'গোপনীয়তা বিজ্ঞপ্তি' },
    version: 'v3.1',
    updated: '12 Sep 2026',
  },
  {
    names: { en: 'Cookie policy', hi: 'कुकी नीति', ta: 'குக்கீ கொள்கை', bn: 'কুকি নীতি' },
    version: 'v2.0',
    updated: '02 Aug 2026',
  },
  {
    names: { en: 'Grievance redressal', hi: 'शिकायत निवारण', ta: 'குறை தீர்ப்பு', bn: 'অভিযোগ নিষ্পত্তি' },
    version: 'v1.3',
    updated: '14 Jun 2026',
  },
]

const POSTURE = ['Consent notice live', 'Rights portal live', 'Breach process documented', 'DPO named']
</script>

<template>
  <figure class="m-0">
    <figcaption class="mb-3 flex items-center justify-between gap-3">
      <span class="mono-label">Sample trust page · placeholder company</span>
    </figcaption>

    <div class="card overflow-hidden">
      <div class="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <div>
          <p class="font-serif text-lg leading-tight">Acme Retail Pvt Ltd</p>
          <p class="font-mono text-xs text-muted">trust.acme.example</p>
        </div>
        <span class="inline-flex items-center gap-2 rounded-full bg-accent-bg px-3 py-1 text-xs font-medium text-accent">
          <span class="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
          No open incidents
        </span>
      </div>

      <div class="grid divide-y divide-border md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:divide-x md:divide-y-0">
        <!-- Policies -->
        <section class="p-5" aria-labelledby="pol-h">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 id="pol-h" class="font-sans text-sm font-semibold tracking-normal">Policies</h3>
            <div role="group" aria-label="Language" class="flex gap-1">
              <button
                v-for="l in LANGS"
                :key="l.code"
                type="button"
                class="rounded-full border px-2.5 py-1 text-xs transition-colors duration-300 ease-calm"
                :class="lang === l.code ? 'border-accent bg-accent text-white' : 'border-border text-ink hover:bg-canvas'"
                :aria-pressed="lang === l.code"
                :lang="l.code"
                @click="lang = l.code"
              >
                {{ l.label }}
              </button>
            </div>
          </div>
          <ul class="mt-4 divide-y divide-border">
            <li v-for="p in POLICIES" :key="p.names.en" class="flex items-center justify-between gap-4 py-3">
              <Transition name="swap" mode="out-in">
                <span :key="lang" :lang="lang" class="text-sm font-medium">{{ p.names[lang] }}</span>
              </Transition>
              <span class="shrink-0 text-right font-mono text-xs text-muted">{{ p.version }} · {{ p.updated }}</span>
            </li>
          </ul>
          <p class="mt-3 text-xs text-muted">Every version stays on record, so people can see what applied when.</p>
        </section>

        <!-- Posture + DPO -->
        <div class="space-y-6 p-5">
          <section aria-labelledby="posture-h">
            <h3 id="posture-h" class="font-sans text-sm font-semibold tracking-normal">Compliance posture</h3>
            <ul class="mt-3 space-y-2">
              <li v-for="item in POSTURE" :key="item" class="flex items-center gap-2.5 text-sm">
                <svg width="14" height="14" viewBox="0 0 12 12" class="shrink-0 text-ok" aria-hidden="true"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                {{ item }}
              </li>
            </ul>
          </section>
          <section aria-labelledby="dpo-h">
            <h3 id="dpo-h" class="font-sans text-sm font-semibold tracking-normal">Data Protection Officer</h3>
            <p class="mt-2 font-mono text-xs text-muted">dpo@acme.example</p>
            <button type="button" class="btn-quiet -ml-3 mt-2 !py-1.5" @click="select('rights', '#dsar-demo')">
              Request your data
              <span aria-hidden="true">→</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  </figure>
</template>
