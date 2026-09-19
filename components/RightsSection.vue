<script setup lang="ts">
const { goToWaitlist } = useSite()

const points = [
  {
    title: 'A portal on your own domain',
    body: 'Access, correction, erasure and grievances all come in through one front door.',
  },
  {
    title: 'A reference number and a clock',
    body: 'Every request opens a ticket with a 30-day target by default. You can set your own.',
  },
  {
    title: 'Verified, fulfilled, and on record',
    body: 'Your team checks identity, closes the request, and the trail is kept as evidence.',
  },
]
</script>

<template>
  <div class="space-y-14">
    <ModuleHead
      eyebrow="03 · Rights"
      outcome="Every data request gets a front door, a clock and an owner."
      :points="points"
    />

    <Reveal>
      <DsarDemo />
    </Reveal>

    <Reveal class="flex flex-wrap items-center gap-4 border-t border-border pt-8">
      <button type="button" class="btn-primary !px-5 !py-3" @click="goToWaitlist">Get your Trust Center</button>
      <p class="text-sm text-muted">When someone asks, you already know who is answering and by when.</p>
    </Reveal>
  </div>
</template>
