<script setup lang="ts">
// Below lg the sidebar collapses to a sticky tab strip under the header.
const { active, select } = useSite()

const items = [{ id: 'home' as const, label: 'Overview' }, ...MODULES.map((m) => ({ id: m.id, label: m.label }))]
</script>

<template>
  <nav aria-label="Modules" class="sticky top-14 z-20 border-b border-border bg-canvas">
    <ul class="flex gap-1 overflow-x-auto px-3 py-2 sm:px-6">
      <li v-for="item in items" :key="item.id" class="shrink-0">
        <button
          type="button"
          class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ease-calm"
          :class="active === item.id ? 'bg-accent-bg text-accent' : 'text-muted hover:text-ink'"
          :aria-current="active === item.id ? 'page' : undefined"
          @click="select(item.id)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>
