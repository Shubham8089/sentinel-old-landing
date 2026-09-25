<script setup lang="ts">
// Scroll-in entrance. Duration is 0 under reduced motion.
const props = withDefaults(
  defineProps<{ delay?: number; as?: string; variant?: 'fade' | 'mask' | 'scale' }>(),
  { delay: 0, as: 'div', variant: 'fade' },
)
const reduce = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const presets = {
  fade: { initial: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 }, duration: 520 },
  mask: { initial: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 }, duration: 680 },
  scale: { initial: { opacity: 0, scale: 0.96, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 }, duration: 620 },
} as const

const preset = presets[props.variant]
</script>

<template>
  <component
    :is="as"
    v-motion
    :class="variant === 'mask' ? 'overflow-hidden' : undefined"
    :initial="preset.initial"
    :visible-once="{
      ...preset.visible,
      transition: { duration: reduce ? 0 : preset.duration, delay: reduce ? 0 : delay, ease: 'easeOut' },
    }"
  >
    <slot />
  </component>
</template>
