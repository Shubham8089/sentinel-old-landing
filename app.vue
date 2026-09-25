<script setup lang="ts">
const mainEl = ref<HTMLElement | null>(null)

// After a page swap, keyboard users land at the top of the new canvas.
useNuxtApp().hook('page:transition:finish', () => {
  mainEl.value?.focus({ preventScroll: true })
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <NuxtRouteAnnouncer />
    <a href="#main" class="skip-link">Skip to content</a>
    <AppHeader />

    <main id="main" ref="mainEl" tabindex="-1" class="min-w-0 flex-1 outline-none">
      <div class="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <NuxtPage />
      </div>
    </main>

    <AppFooter />
    <CommandPalette />
  </div>
</template>
