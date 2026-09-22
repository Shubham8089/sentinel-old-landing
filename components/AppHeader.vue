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
      <NuxtLink to="/" class="flex items-center gap-2.5 rounded-md" aria-label="pactbase, home">
        <img src="/favicon.svg" alt="" width="24" height="24" class="rounded-[6px]" aria-hidden="true" />
        <img src="/pactbase-wordmark.svg" alt="pactbase" class="h-4 w-auto" />
      </NuxtLink>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="hidden items-center gap-3 rounded-lg px-3 py-1.5 text-sm text-muted/80 transition-colors duration-200 hover:text-ink md:inline-flex"
          aria-label="Open quick navigation"
          @click="open"
        >
          Jump to
          <kbd class="rounded border border-border px-1.5 text-[11px]">{{ isMac ? '⌘' : 'Ctrl' }} K</kbd>
        </button>
        <WaitlistButton />
      </div>
    </div>
  </header>
</template>
