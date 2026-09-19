<script setup lang="ts">
// "Book your setup day". Opens the booking link, or a pre-filled email until one exists.
withDefaults(defineProps<{ variant?: 'primary' | 'outline' | 'quiet'; label?: string; large?: boolean }>(), {
  variant: 'primary',
  label: 'Book your setup day',
  large: false,
})
</script>

<template>
  <a
    :href="bookHref()"
    class="group"
    :class="[variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-quiet', large ? '!px-6 !py-3.5 !text-base' : '']"
  >
    {{ label }}
    <span class="sr-only"> (opens your email app)</span>
    <span class="inline-block transition-transform duration-300 ease-calm group-hover:translate-x-1" aria-hidden="true">→</span>
  </a>
</template>
