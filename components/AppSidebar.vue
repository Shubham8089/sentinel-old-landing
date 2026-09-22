<script setup lang="ts">
const route = useRoute()
const isActive = (to: string) => route.path === to

const groups = [
  {
    title: 'Modules',
    items: [
      { to: '/', label: 'Overview', blurb: '', live: false },
      ...MODULES.map((m) => ({ to: m.to, label: m.label, blurb: m.blurb, live: false })),
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
        <ul class="space-y-1">
          <li v-for="item in g.items" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="relative flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-300 ease-calm"
              :class="isActive(item.to) ? 'bg-blue-bg' : 'hover:bg-white'"
              :aria-current="isActive(item.to) ? 'page' : undefined"
            >
              <span
                v-if="isActive(item.to)"
                class="absolute inset-y-2 left-0 w-0.5 rounded-full bg-blue"
                aria-hidden="true"
              />
              <span>
                <span class="block text-sm" :class="isActive(item.to) ? 'font-medium text-blue' : 'text-ink'">{{ item.label }}</span>
                <span v-if="item.blurb" class="block text-xs" :class="isActive(item.to) ? 'text-blue' : 'text-muted'">{{ item.blurb }}</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

  </aside>
</template>
