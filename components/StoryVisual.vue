<script setup lang="ts">
// Compact, static illustrations for the scroll story. Sample data. Decorative.
defineProps<{ step: 'consent' | 'trust' | 'rights' }>()
</script>

<template>
  <div class="h-full w-full rounded-xl border border-border bg-[#E6EEFC] p-4 sm:p-6" role="img" :aria-label="`Illustration of ${step}, using sample data`">
    <div class="flex h-full flex-col justify-center gap-3" aria-hidden="true">
      <!-- consent -->
      <template v-if="step === 'consent'">
        <div class="card p-4">
          <p class="font-bold tracking-tight text-base">We use cookies, and we ask first.</p>
          <p class="mt-1 text-xs text-muted">Analytics and marketing stay off until you say yes.</p>
          <div class="mt-3 flex gap-2">
            <span class="rounded-lg border border-border px-3 py-1.5 text-xs font-medium">Reject non-essential</span>
            <span class="rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white">Accept all</span>
          </div>
        </div>
        <div class="card p-4">
          <div class="flex items-center justify-between font-mono text-xs">
            <span class="flex items-center gap-2 font-sans font-medium"><span class="h-1.5 w-1.5 rounded-full bg-ok" />Consent recorded</span>
            <span class="text-muted">CNS-4A91C2</span>
          </div>
          <p class="mt-2 font-mono text-[11px] text-muted">accepted all · notice v1.4 · en</p>
        </div>
      </template>

      <!-- trust -->
      <template v-else-if="step === 'trust'">
        <div class="card overflow-hidden">
          <div class="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p class="font-bold tracking-tight text-base leading-tight">Acme Retail Pvt Ltd</p>
              <p class="font-mono text-[11px] text-muted">trust.acme.example</p>
            </div>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-accent-bg px-2.5 py-1 text-[11px] font-medium text-accent"><span class="h-1.5 w-1.5 rounded-full bg-ok" />No open incidents</span>
          </div>
          <ul class="divide-y divide-border text-xs">
            <li class="flex justify-between px-4 py-2.5"><span class="font-medium">Privacy notice</span><span class="font-mono text-muted">v3.1</span></li>
            <li class="flex justify-between px-4 py-2.5"><span class="font-medium">Cookie policy</span><span class="font-mono text-muted">v2.0</span></li>
            <li class="flex justify-between px-4 py-2.5"><span class="font-medium">Grievance redressal</span><span class="font-mono text-muted">v1.3</span></li>
          </ul>
        </div>
        <p class="text-center font-mono text-[11px] text-muted">One link. Always current.</p>
      </template>

      <!-- rights -->
      <template v-else>
        <div class="card p-4">
          <div class="flex items-center justify-between">
            <span class="font-mono text-sm font-medium">DSAR-1042</span>
            <span class="flex items-center gap-1.5 text-xs"><span class="h-2 w-2 rounded-full bg-accent" />Received</span>
          </div>
          <p class="mt-1 text-xs text-muted">Access my data · a***@example.com</p>
          <p class="mt-2 font-mono text-[11px]"><span class="text-muted">SLA </span>29d 23h 59m</p>
        </div>
        <div class="card p-4">
          <div class="flex items-center justify-between">
            <span class="font-mono text-sm font-medium">DSAR-1041</span>
            <span class="flex items-center gap-1.5 text-xs"><span class="h-2 w-2 rounded-full bg-warn" />Verifying identity</span>
          </div>
          <p class="mt-1 text-xs text-muted">Correct my data · m***@example.in</p>
        </div>
      </template>
    </div>
  </div>
</template>
