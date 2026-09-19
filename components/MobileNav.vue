<script setup lang="ts">
// Below lg the sidebar collapses to a sticky tab strip under the header.
const route = useRoute()

const items = [
  { to: '/', label: 'Overview' },
  ...MODULES.map((m) => ({ to: m.to, label: m.label })),
  ...PROOF_LINKS.map((p) => ({ to: p.to, label: p.label })),
]
</script>

<template>
  <nav aria-label="Site" class="sticky top-14 z-20 border-b border-border bg-canvas">
    <ul class="flex gap-1 overflow-x-auto px-3 py-2 sm:px-6">
      <li v-for="item in items" :key="item.to" class="shrink-0">
        <NuxtLink
          :to="item.to"
          class="block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ease-calm"
          :class="route.path === item.to ? 'bg-accent-bg text-accent' : 'text-muted hover:text-ink'"
          :aria-current="route.path === item.to ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
