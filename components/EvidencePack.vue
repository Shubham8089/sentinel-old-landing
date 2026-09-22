<script setup lang="ts">
// The book of record, as an evidence pack. Sample data.
const TABS = [
  {
    id: 'receipts',
    label: 'Consent receipts',
    cols: ['Receipt', 'Choice', 'Notice', 'Recorded'],
    rows: [
      ['CNS-4A91C2', 'Accepted all', 'v1.4', '12 Sep 2026, 14:02'],
      ['CNS-7D30E8', 'Rejected non-essential', 'v1.4', '12 Sep 2026, 14:09'],
      ['CNS-B2F614', 'Custom choices', 'v1.3', '02 Sep 2026, 09:41'],
    ],
  },
  {
    id: 'notices',
    label: 'Notice versions',
    cols: ['Version', 'Published', 'Languages', 'Change'],
    rows: [
      ['v1.4', '12 Sep 2026', 'en, hi', 'Added marketing category'],
      ['v1.3', '02 Aug 2026', 'en, hi', 'Updated retention wording'],
      ['v1.2', '14 Jun 2026', 'en', 'First public version'],
    ],
  },
  {
    id: 'requests',
    label: 'Requests register',
    cols: ['Reference', 'Type', 'Status', 'Due'],
    rows: [
      ['DSAR-1042', 'Access', 'Received', '19 Oct 2026'],
      ['DSAR-1041', 'Correction', 'Verifying identity', '06 Oct 2026'],
      ['DSAR-1040', 'Erasure', 'Fulfilled', 'Closed'],
    ],
  },
  {
    id: 'vendors',
    label: 'Vendors',
    cols: ['Vendor', 'Role', 'Agreement', 'Review'],
    rows: [
      ['Payments provider', 'Processor', 'DPA signed', 'Jan 2027'],
      ['Email service', 'Processor', 'DPA signed', 'Mar 2027'],
      ['Analytics tool', 'Processor', 'DPA requested', 'Due now'],
    ],
  },
  {
    id: 'breach',
    label: 'Breach log',
    cols: [],
    rows: [],
  },
]

const active = ref('receipts')
const tab = computed(() => TABS.find((t) => t.id === active.value)!)
const tabEls = ref<HTMLButtonElement[]>([])

function onKey(e: KeyboardEvent, i: number) {
  const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
  if (!dir) return
  e.preventDefault()
  const next = (i + dir + TABS.length) % TABS.length
  active.value = TABS[next].id
  tabEls.value[next]?.focus()
}
</script>

<template>
  <div class="card overflow-hidden">
    <div class="flex items-center justify-between gap-3 border-b border-border bg-canvas px-5 py-3">
      <p class="mono-label">Evidence pack · sample data</p>
      <span class="hidden font-mono text-xs text-muted sm:inline">Everything a client or auditor asks for</span>
    </div>

    <div role="tablist" aria-label="Evidence pack sections" class="flex gap-1 overflow-x-auto border-b border-border px-3 pt-2">
      <button
        v-for="(t, i) in TABS"
        :id="`tab-${t.id}`"
        :key="t.id"
        :ref="(el) => { if (el) tabEls[i] = el as HTMLButtonElement }"
        type="button"
        role="tab"
        :aria-selected="active === t.id"
        :aria-controls="`panel-${t.id}`"
        :tabindex="active === t.id ? 0 : -1"
        class="shrink-0 border-b-2 px-3 py-2.5 text-sm transition-colors duration-300 ease-calm"
        :class="active === t.id ? 'border-blue font-medium text-blue' : 'border-transparent text-muted hover:text-ink'"
        @click="active = t.id"
        @keydown="onKey($event, i)"
      >
        {{ t.label }}
      </button>
    </div>

    <div :id="`panel-${tab.id}`" role="tabpanel" :aria-labelledby="`tab-${tab.id}`" class="min-h-[13rem] p-5">
      <Transition name="swap" mode="out-in">
        <div v-if="tab.rows.length" :key="tab.id" class="overflow-x-auto">
          <table class="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr class="border-b border-border">
                <th v-for="c in tab.cols" :key="c" scope="col" class="pb-2 pr-4 font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-muted">{{ c }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr v-for="r in tab.rows" :key="r[0]">
                <td v-for="(cell, ci) in r" :key="ci" class="py-3 pr-4" :class="ci === 0 ? 'font-mono text-xs font-medium' : 'text-sm'">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else :key="tab.id" class="flex h-full min-h-[10rem] flex-col items-start justify-center">
          <p class="flex items-center gap-2 text-sm font-medium"><span class="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />No entries</p>
          <p class="mt-2 max-w-md text-sm leading-relaxed text-muted">An empty log is a good log. It is here, timestamped and ready, if you ever need it.</p>
        </div>
      </Transition>
    </div>
  </div>
</template>
