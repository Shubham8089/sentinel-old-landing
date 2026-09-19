<script setup lang="ts">
const { active, pendingScroll, syncFromHash, scrollToEl, scrollTop } = useSite()
const mainEl = ref<HTMLElement | null>(null)

onMounted(syncFromHash)

const label = computed(() => MODULES.find((m) => m.id === active.value)?.label)
useHead({ titleTemplate: () => (label.value ? `${label.value} · Sentinel` : 'Sentinel: the front door of DPDP') })

function onBeforeEnter() {
  scrollTop(true)
}

function onAfterEnter() {
  if (pendingScroll.value) {
    scrollToEl(pendingScroll.value)
    pendingScroll.value = null
  } else {
    // Keyboard users land at the top of the new canvas.
    mainEl.value?.focus({ preventScroll: true })
  }
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main" class="skip-link">Skip to content</a>
    <AppHeader />
    <MobileNav class="lg:hidden" />

    <div class="mx-auto w-full max-w-[1280px] flex-1 lg:grid lg:grid-cols-[264px_minmax(0,1fr)]">
      <AppSidebar class="hidden lg:flex" />
      <main id="main" ref="mainEl" tabindex="-1" class="min-w-0 px-5 py-10 outline-none sm:px-8 lg:px-12 lg:py-14">
        <Transition name="canvas" mode="out-in" @before-enter="onBeforeEnter" @after-enter="onAfterEnter">
          <HeroCanvas v-if="active === 'home'" key="home" />
          <ConsentSection v-else-if="active === 'consent'" key="consent" />
          <TrustSection v-else-if="active === 'trust'" key="trust" />
          <RightsSection v-else key="rights" />
        </Transition>
      </main>
    </div>

    <AppFooter />
  </div>
</template>
