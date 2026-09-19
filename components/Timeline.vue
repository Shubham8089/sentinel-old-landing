<script setup lang="ts">
const phases = [
  {
    when: 'Day one',
    we: 'Set up your banner, notice, Trust Center and rights portal on your own domain.',
    you: 'Confirm your details and the vendors you use.',
    result: 'You can send your first Trust Center link.',
  },
  {
    when: 'Day thirty',
    we: 'Keep every consent receipt and request on record as it arrives.',
    you: 'Close requests as they come in. Each has an owner and a clock.',
    result: 'Your first evidence pack is ready to send.',
  },
  {
    when: 'Year one',
    we: 'Update notices and policies when rules or guidance change, and tell you what changed.',
    you: 'Approve the changes.',
    result: 'Still current, without a project.',
  },
]
</script>

<template>
  <ol class="grid gap-4 lg:grid-cols-3">
    <Reveal v-for="(p, i) in phases" :key="p.when" as="li" :delay="i * 100" class="card flex flex-col p-6">
      <p class="font-serif text-3xl">{{ p.when }}</p>
      <dl class="mt-5 space-y-4 text-sm leading-relaxed">
        <div>
          <dt class="mono-label mb-1">We</dt>
          <dd>{{ p.we }}</dd>
        </div>
        <div>
          <dt class="mono-label mb-1">You</dt>
          <dd>{{ p.you }}</dd>
        </div>
      </dl>
      <p class="mt-auto pt-6">
        <span class="block border-t border-border pt-4 text-sm font-medium text-accent">{{ p.result }}</span>
      </p>
    </Reveal>
  </ol>
</template>
