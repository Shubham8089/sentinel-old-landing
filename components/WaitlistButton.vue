<script setup lang="ts">
// "Join the waitlist". Opens the waitlist form.
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
    class="group"
    :class="[
      variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : variant === 'light' ? 'btn bg-white text-accent hover:bg-accent-bg' : 'btn-quiet',
      large ? '!px-7 !py-4 !text-base' : '',
    ]"
    @click="open"
  >
    {{ label }}
    <span class="inline-block transition-transform duration-300 ease-calm group-hover:translate-x-1" aria-hidden="true">→</span>
  </button>
</template>
