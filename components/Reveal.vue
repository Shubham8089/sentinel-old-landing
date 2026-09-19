<script setup lang="ts">
// Gentle fade/slide-in on first scroll into view. Duration is 0 under reduced motion.
withDefaults(defineProps<{ delay?: number; as?: string }>(), { delay: 0, as: 'div' })
const reduce = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <component
    :is="as"
    v-motion
    :initial="{ opacity: 0, y: 14 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 520, delay: reduce ? 0 : delay, ease: 'easeOut' },
    }"
  >
    <slot />
  </component>
</template>
