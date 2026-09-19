<script setup lang="ts">
// The consent card shown inside a mock "site" frame (used on the Consent page).
</script>

<template>
  <figure class="m-0">
    <figcaption class="mb-3 flex items-center justify-between gap-3">
      <span class="mono-label">Sample site · consent banner</span>
      <span class="inline-flex items-center gap-2 rounded-full border border-border bg-white px-2.5 py-1 font-mono text-[11px] text-muted">
        <span class="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
        running on this page
      </span>
    </figcaption>

    <div class="relative min-h-[31rem] overflow-hidden rounded-xl border border-border bg-[#F3F0E8] sm:min-h-[27rem]">
      <div class="space-y-3 p-5" aria-hidden="true">
        <div class="flex items-center justify-between">
          <div class="h-3 w-24 rounded bg-border" />
          <div class="flex gap-2">
            <div class="h-2 w-10 rounded bg-border" />
            <div class="h-2 w-10 rounded bg-border" />
            <div class="h-2 w-10 rounded bg-border" />
          </div>
        </div>
        <div class="h-5 w-2/3 rounded bg-border" />
        <div class="h-2 w-1/2 rounded bg-border" />
        <div class="h-2 w-3/5 rounded bg-border" />
      </div>
      <div class="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
        <ConsentCard />
      </div>
    </div>
  </figure>
</template>
