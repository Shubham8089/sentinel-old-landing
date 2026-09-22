<script setup lang="ts">
// "Try now". Opens the live app in a new tab.
withDefaults(defineProps<{ variant?: 'primary' | 'outline' | 'quiet' | 'light'; label?: string; large?: boolean }>(), {
  variant: 'primary',
  label: 'Try now',
  large: false,
})
</script>

<template>
  <a
    href="https://app.pactbase.in"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center justify-center gap-2 rounded-[10px] font-sans font-medium transition-colors duration-200 ease-calm"
    :class="[
      large ? 'h-14 px-7 text-sm' : 'h-11 px-5 text-[13px]',
      variant === 'primary'
        ? 'bg-blue text-white hover:bg-blue-hi'
        : variant === 'light'
          ? 'bg-white text-ink hover:bg-blue-bg'
          : variant === 'outline'
            ? 'border border-border bg-white text-ink hover:bg-blue-bg'
            : 'text-blue hover:bg-blue-bg',
    ]"
  >
    {{ label }}
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </a>
</template>
