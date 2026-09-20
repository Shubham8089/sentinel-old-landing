<script setup lang="ts">
const { open } = useCommand()
const isMac = ref(false)
onMounted(() => {
  isMac.value = /Mac|iPhone|iPad/.test(navigator.userAgent)
})
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-border bg-canvas">
    <div class="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
      <NuxtLink to="/" class="flex items-center gap-3 rounded-md" aria-label="Sentinel, home">
        <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="var(--accent)" />
          <path d="M10 25V14a6 6 0 0 1 12 0v11" fill="none" stroke="var(--canvas)" stroke-width="2.4" stroke-linecap="round" />
          <circle cx="19" cy="20" r="1.4" fill="var(--canvas)" />
        </svg>
        <span class="text-xl font-extrabold tracking-tight">Sentinel</span>
        <span class="hidden text-xs text-muted sm:inline">the front door of DPDP</span>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="hidden items-center gap-3 rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:text-ink md:inline-flex"
          aria-label="Open quick navigation"
          @click="open"
        >
          Jump to
          <kbd class="rounded border border-border px-1.5 text-[11px]">{{ isMac ? '⌘' : 'Ctrl' }} K</kbd>
        </button>
        <WaitlistButton class="!py-2" />
      </div>
    </div>
  </header>
</template>
