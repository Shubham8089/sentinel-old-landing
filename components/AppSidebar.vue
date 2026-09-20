<script setup lang="ts">
const route = useRoute()
const isActive = (to: string) => route.path === to

const groups = [
  {
    title: 'Modules',
    items: [
      { to: '/', label: 'Overview', blurb: '', num: '00', live: false },
      ...MODULES.map((m, i) => ({ to: m.to, label: m.label, blurb: m.blurb, num: `0${i + 1}`, live: false })),
    ],
  },
]
</script>

<template>
  <aside
    class="sticky top-14 h-[calc(100vh-3.5rem)] flex-col justify-between gap-6 overflow-y-auto border-r border-border py-10 pl-5 pr-6"
  >
    <div class="space-y-8">
      <nav v-for="g in groups" :key="g.title" :aria-label="g.title">
        <p class="mono-label mb-3 px-3">{{ g.title }}</p>
        <ul class="space-y-1">
          <li v-for="item in g.items" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="relative flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-300 ease-calm"
              :class="isActive(item.to) ? 'bg-accent-bg' : 'hover:bg-white'"
              :aria-current="isActive(item.to) ? 'page' : undefined"
            >
              <span
                v-if="isActive(item.to)"
                class="absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span v-if="item.num" class="mt-0.5 font-mono text-[11px]" :class="isActive(item.to) ? 'text-accent' : 'text-muted'" aria-hidden="true">{{ item.num }}</span>
              <span v-else class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" :class="item.live ? 'bg-ok' : 'bg-border'" aria-hidden="true" />
              <span>
                <span class="block text-sm font-medium" :class="isActive(item.to) ? 'text-accent' : 'text-ink'">{{ item.label }}</span>
                <span v-if="item.blurb" class="block text-xs" :class="isActive(item.to) ? 'text-accent' : 'text-muted'">{{ item.blurb }}</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <WaitlistButton class="w-full" />
    </div>
  </aside>
</template>
