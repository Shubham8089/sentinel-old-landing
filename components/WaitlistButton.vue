<script setup lang="ts">
// "Join the waitlist". Opens the waitlist form. Primary buttons carry a square arrow tab.
withDefaults(defineProps<{ variant?: 'primary' | 'outline' | 'quiet' | 'light'; label?: string; large?: boolean }>(), {
  variant: 'primary',
  label: 'Join the waitlist',
  large: false,
})
const { open } = useWaitlist()
</script>

<template>
  <button
    type="button"
    class="group flex items-stretch font-mono font-medium uppercase tracking-[0.04em] transition-colors duration-200 ease-calm"
    :class="[
      large ? 'h-14 text-sm' : 'h-11 text-[13px]',
      variant === 'primary' ? 'bg-accent text-white hover:bg-accent-hi' : variant === 'light' ? 'bg-white text-ink hover:bg-accent-bg' : variant === 'outline' ? 'border border-border bg-white text-ink hover:border-ink' : 'text-accent hover:bg-accent-bg',
    ]"
    @click="open"
  >
    <span class="flex items-center" :class="large ? 'px-7' : 'px-6'">{{ label }}</span>
    <span
      v-if="variant === 'primary' || variant === 'light'"
      class="flex aspect-square items-center justify-center transition-colors duration-200"
      :class="variant === 'primary' ? 'bg-accent-bg text-accent group-hover:bg-white' : 'bg-accent text-white'"
      aria-hidden="true"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="square" /></svg>
    </span>
  </button>
</template>
