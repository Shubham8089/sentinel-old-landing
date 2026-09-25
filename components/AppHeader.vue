<script setup lang="ts">
const route = useRoute()
const isActive = (to: string) => route.path === to

const links = MODULES.map((m) => ({ to: m.to, label: m.label }))

const open = ref(false)
watch(
  () => route.path,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-border bg-canvas/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
      <NuxtLink to="/" class="flex items-center rounded-sm" aria-label="pactbase, home">
        <img src="/pactbase-wordmark.svg" alt="pactbase" class="h-[22px] w-auto" />
      </NuxtLink>

      <nav aria-label="Site" class="hidden items-center gap-1 md:flex">
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-sm px-3 py-2 text-sm text-muted transition-colors duration-200 ease-calm hover:text-ink"
          :class="isActive(l.to) ? 'text-ink' : ''"
          :aria-current="isActive(l.to) ? 'page' : undefined"
        >
          {{ l.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <TryNowButton class="hidden sm:inline-flex" />
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-sm text-ink md:hidden"
          :aria-expanded="open"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <svg v-if="!open" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>
          <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>
        </button>
      </div>
    </div>

    <Transition name="fade">
      <nav v-if="open" aria-label="Site" class="border-t border-border bg-canvas md:hidden">
        <ul class="flex flex-col px-5 py-3 sm:px-8">
          <li v-for="l in links" :key="l.to">
            <NuxtLink
              :to="l.to"
              class="block rounded-sm px-1 py-2.5 text-base"
              :class="isActive(l.to) ? 'font-medium text-ink' : 'text-muted'"
              :aria-current="isActive(l.to) ? 'page' : undefined"
            >
              {{ l.label }}
            </NuxtLink>
          </li>
          <li class="mt-2">
            <TryNowButton class="w-full" />
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
