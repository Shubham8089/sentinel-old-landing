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
    <MobileNav class="lg:hidden" />

    <div class="mx-auto w-full max-w-[1280px] flex-1 lg:grid lg:grid-cols-[264px_minmax(0,1fr)]">
      <AppSidebar class="hidden lg:flex" />
      <main id="main" ref="mainEl" tabindex="-1" class="min-w-0 px-5 py-10 outline-none sm:px-8 lg:px-12 lg:py-14">
        <NuxtPage />
      </main>
    </div>

    <AppFooter />
    <LiveBanner />
    <CommandPalette />
  </div>
</template>
