<script setup lang="ts">
const { goToWaitlist } = useSite()
const { log } = useConsent()

const points = [
  {
    title: 'A banner and preference center in your visitors’ language',
    body: 'Accept and reject carry equal weight, and anyone can choose category by category.',
  },
  {
    title: 'A privacy notice that stays linked and versioned',
    body: 'What someone agreed to is always the exact text they saw, and you can show it.',
  },
  {
    title: 'Withdrawing is as easy as agreeing',
    body: 'Change of mind takes one click, and every change is logged as its own receipt.',
  },
]

const label = (c: string) => (c === 'accepted' ? 'accepted all' : c === 'rejected' ? 'rejected non-essential' : 'custom choices')
</script>

<template>
  <div class="space-y-14">
    <ModuleHead
      eyebrow="01 · Consent"
      outcome="Every visitor gets a clear choice, and you keep a receipt for each one."
      :points="points"
    />

    <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <Reveal>
        <ConsentBanner />
      </Reveal>

      <Reveal :delay="120">
        <p class="mono-label mb-3">Consent ledger · this session</p>
        <div class="card p-5">
          <p v-if="!log.length" class="text-sm leading-relaxed text-muted">
            No receipts yet. Make a choice in the banner and it shows up here, with a receipt ID, a time and the
            notice version.
          </p>
          <TransitionGroup v-else name="row" tag="ul" class="relative space-y-3">
            <li v-for="r in log" :key="r.id" class="border-b border-border pb-3 last:border-0 last:pb-0">
              <div class="flex items-center justify-between gap-3 font-mono text-xs">
                <span class="font-medium">{{ r.id }}</span>
                <span class="text-muted">{{ r.action }}</span>
              </div>
              <p class="mt-1 text-sm">{{ label(r.choice) }}</p>
              <p class="font-mono text-xs text-muted">{{ formatDateTime(r.at) }} · {{ NOTICE_VERSION }}</p>
            </li>
          </TransitionGroup>
        </div>
      </Reveal>
    </div>

    <Reveal class="flex flex-wrap items-center gap-4 border-t border-border pt-8">
      <button type="button" class="btn-primary !px-5 !py-3" @click="goToWaitlist">Get your Trust Center</button>
      <p class="text-sm text-muted">Consent is the first thing a visitor meets. It sets the tone for the rest.</p>
    </Reveal>
  </div>
</template>
