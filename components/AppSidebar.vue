<script setup lang="ts">
const { active, select } = useSite()
</script>

<template>
  <aside
    class="sticky top-14 h-[calc(100vh-3.5rem)] flex-col justify-between gap-8 overflow-y-auto border-r border-border py-10 pl-5 pr-6"
  >
    <nav aria-label="Modules">
      <p class="mono-label mb-4 px-3">Modules</p>
      <ul class="space-y-1">
        <li>
          <button
            type="button"
            class="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-300 ease-calm"
            :class="active === 'home' ? 'bg-accent-bg text-accent' : 'text-muted hover:bg-white hover:text-ink'"
            :aria-current="active === 'home' ? 'page' : undefined"
            @click="select('home')"
          >
            <span class="font-mono text-[11px]" aria-hidden="true">00</span>
            <span class="font-medium">Overview</span>
          </button>
        </li>
        <li v-for="(m, i) in MODULES" :key="m.id">
          <button
            type="button"
            class="group flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-300 ease-calm"
            :class="active === m.id ? 'bg-accent-bg' : 'hover:bg-white'"
            :aria-current="active === m.id ? 'page' : undefined"
            @click="select(m.id)"
          >
            <span
              class="mt-0.5 font-mono text-[11px]"
              :class="active === m.id ? 'text-accent' : 'text-muted'"
              aria-hidden="true"
              >0{{ i + 1 }}</span
            >
            <span>
              <span class="block text-sm font-medium" :class="active === m.id ? 'text-accent' : 'text-ink'">{{
                m.label
              }}</span>
              <span class="block text-xs" :class="active === m.id ? 'text-accent' : 'text-muted'">{{ m.blurb }}</span>
            </span>
          </button>
        </li>
      </ul>
    </nav>

    <div class="rounded-lg border border-border bg-white p-4">
      <p class="mono-label mb-2">Book of record</p>
      <p class="text-xs leading-relaxed text-muted">
        Behind all three: your RoPA, DPIAs, vendors and DPAs, and breach log, kept in one place.
      </p>
    </div>
  </aside>
</template>
