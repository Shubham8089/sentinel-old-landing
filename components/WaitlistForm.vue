<script setup lang="ts">
const email = ref('')
const state = ref<'idle' | 'loading' | 'done' | 'error'>('idle')
const message = ref('')

async function submit() {
  if (!isEmail(email.value)) {
    state.value = 'error'
    message.value = 'Enter a valid email address.'
    return
  }
  state.value = 'loading'
  try {
    await $fetch('/api/waitlist', { method: 'POST', body: { email: email.value } })
    state.value = 'done'
    message.value = `Got it. We will write to ${email.value.trim()} when your spot opens.`
    email.value = ''
  } catch {
    state.value = 'error'
    message.value = 'Something went wrong on our side. Please try again in a moment.'
  }
}
</script>

<template>
  <form class="w-full max-w-md" novalidate @submit.prevent="submit">
    <label for="waitlist-email" class="mb-2 block text-sm font-medium">Work email</label>
    <div class="flex flex-col gap-2 sm:flex-row">
      <input
        id="waitlist-email"
        v-model="email"
        type="email"
        inputmode="email"
        autocomplete="email"
        placeholder="you@company.in"
        class="min-w-0 flex-1 rounded-lg border border-border bg-white px-3 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        :aria-invalid="state === 'error'"
        aria-describedby="waitlist-msg"
      />
      <button type="submit" class="btn-primary" :disabled="state === 'loading'">
        {{ state === 'loading' ? 'Joining...' : 'Get your Trust Center' }}
      </button>
    </div>
    <p id="waitlist-msg" class="mt-2 min-h-[1.25rem] text-sm" :class="state === 'done' ? 'text-accent' : 'text-ink'" role="status">
      {{ message }}
    </p>
  </form>
</template>
