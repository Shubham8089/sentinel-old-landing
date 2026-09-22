<script setup lang="ts">
// The working consent banner / receipt card. All state is local and in memory.
const { receipt, prefs, choosing, accept, reject, save, reopen } = useConsent()

const choiceLabel = computed(() => {
  const c = receipt.value?.choice
  if (c === 'accepted') return 'Accepted all'
  if (c === 'rejected') return 'Rejected non-essential'
  return 'Custom choices'
})
const onOff = (v: boolean) => (v ? 'on' : 'off')
const CATS = [
  ['analytics', 'Analytics', 'Helps us see what people read.'],
  ['marketing', 'Marketing', 'Lets us follow up on interest.'],
] as const
</script>

<template>
  <Transition name="swap" mode="out-in">
    <!-- Receipt -->
    <div v-if="receipt" key="receipt" class="card p-5" role="status">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-2.5">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-bg text-blue" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </span>
          <h3 class="font-sans text-sm font-semibold tracking-normal">Consent recorded</h3>
        </div>
        <span class="font-mono text-xs text-muted">{{ receipt.id }}</span>
      </div>
      <dl class="mt-4 grid grid-cols-[6rem_1fr] gap-x-3 gap-y-1.5 font-mono text-xs">
        <dt class="text-muted">choice</dt>
        <dd>{{ choiceLabel }}</dd>
        <dt class="text-muted">categories</dt>
        <dd>essential on · analytics {{ onOff(receipt.analytics) }} · marketing {{ onOff(receipt.marketing) }}</dd>
        <dt class="text-muted">notice</dt>
        <dd>{{ NOTICE_VERSION }} · en</dd>
        <dt class="text-muted">recorded</dt>
        <dd>{{ formatDateTime(receipt.at) }}</dd>
        <dt class="text-muted">stored</dt>
        <dd>in memory only. This is a mock.</dd>
      </dl>
      <button type="button" class="btn-quiet -ml-3 mt-3 !py-1.5" @click="reopen">Change my choice</button>
    </div>

    <!-- Banner -->
    <div v-else key="banner" class="card p-5" role="region" aria-label="Cookie and consent banner">
      <h3 class="font-bold tracking-tight text-lg leading-snug">We use cookies, and we ask first.</h3>
      <p class="mt-1.5 text-sm leading-relaxed text-muted">
        Essential cookies keep the site working. Analytics and marketing stay off until you say yes.
        <span class="whitespace-nowrap">Privacy notice {{ NOTICE_VERSION }}.</span>
      </p>

      <div v-if="choosing" class="mt-4 divide-y divide-border rounded-lg border border-border">
        <div class="flex items-center justify-between gap-4 px-3 py-2.5">
          <div>
            <p class="text-sm font-medium">Essential</p>
            <p class="text-xs text-muted">Always on. The site needs these.</p>
          </div>
          <span class="font-mono text-xs text-muted">always on</span>
        </div>
        <div v-for="cat in CATS" :key="cat[0]" class="flex items-center justify-between gap-4 px-3 py-2.5">
          <div>
            <p :id="`cat-${cat[0]}`" class="text-sm font-medium">{{ cat[1] }}</p>
            <p class="text-xs text-muted">{{ cat[2] }}</p>
          </div>
          <button
            type="button"
            role="switch"
            :aria-checked="prefs[cat[0]]"
            :aria-labelledby="`cat-${cat[0]}`"
            class="relative h-6 w-11 shrink-0 rounded-full border transition-colors duration-300 ease-calm"
            :class="prefs[cat[0]] ? 'border-blue bg-blue' : 'border-border bg-border'"
            @click="prefs[cat[0]] = !prefs[cat[0]]"
          >
            <span
              class="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-300 ease-calm"
              :class="prefs[cat[0]] ? 'translate-x-5' : 'translate-x-0'"
            />
          </button>
        </div>
      </div>

      <div class="mt-4 flex flex-wrap items-center gap-2">
        <button type="button" class="btn-outline flex-1 sm:flex-none" @click="reject">Reject non-essential</button>
        <button type="button" class="btn-primary flex-1 sm:flex-none" @click="accept">Accept all</button>
        <button v-if="!choosing" type="button" class="btn-quiet" @click="choosing = true">Choose</button>
        <button v-else type="button" class="btn-quiet" @click="save">Save my choices</button>
      </div>
    </div>
  </Transition>
</template>
