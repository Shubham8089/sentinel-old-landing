<script setup lang="ts">
// Every module opens the same way: one outcome sentence, then 2-3 supporting points.
defineProps<{ eyebrow: string; outcome: string; points: { title: string; body: string }[] }>()
</script>

<template>
  <header>
    <Reveal>
      <p class="mono-label mb-4">{{ eyebrow }}</p>
      <h1 class="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]">{{ outcome }}</h1>
    </Reveal>
    <ul class="mt-10 grid gap-6 md:grid-cols-3">
      <Reveal v-for="(p, i) in points" :key="p.title" as="li" :delay="120 + i * 90" class="border-t border-border pt-4">
        <h2 class="font-sans text-sm font-semibold tracking-normal">{{ p.title }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-muted">{{ p.body }}</p>
      </Reveal>
    </ul>
  </header>
</template>
