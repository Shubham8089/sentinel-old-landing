<script setup lang="ts">
defineProps<{ to: string; label: string; blurb?: string }>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="card group flex items-center justify-between gap-6 p-6 transition-colors duration-300 ease-calm hover:border-accent"
  >
    <span>
      <span class="mono-label block">Next</span>
      <span class="mt-1 block font-bold tracking-tight text-2xl">{{ label }}</span>
      <span v-if="blurb" class="mt-1 block text-sm text-muted">{{ blurb }}</span>
    </span>
    <span class="text-2xl text-accent transition-transform duration-300 ease-calm group-hover:translate-x-1" aria-hidden="true">→</span>
  </NuxtLink>
</template>
