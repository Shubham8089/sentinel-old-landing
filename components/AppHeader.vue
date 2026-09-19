<script setup lang="ts">
const { select, goToWaitlist } = useSite()
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-border bg-canvas">
    <div class="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
      <button
        type="button"
        class="flex items-center gap-3 rounded-md"
        aria-label="Sentinel, back to overview"
        @click="select('home')"
      >
        <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="var(--accent)" />
          <path d="M10 25V14a6 6 0 0 1 12 0v11" fill="none" stroke="var(--canvas)" stroke-width="2.4" stroke-linecap="round" />
          <circle cx="19" cy="20" r="1.4" fill="var(--canvas)" />
        </svg>
        <span class="font-serif text-xl font-medium tracking-tight">Sentinel</span>
        <span class="hidden font-mono text-xs text-muted sm:inline">the front door of DPDP</span>
      </button>

      <button type="button" class="btn-primary !py-2" @click="goToWaitlist">
        <span class="hidden sm:inline">Get your Trust Center</span>
        <span class="sm:hidden">Join waitlist</span>
      </button>
    </div>
  </header>
</template>
