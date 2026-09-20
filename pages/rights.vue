<script setup lang="ts">
useSeoMeta({
  title: 'Rights · Sentinel',
  description: 'Every data request gets a front door, a clock and an owner. Access, correction, erasure and grievances in one portal.',
})

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
      eyebrow="Rights"
      outcome="Every data request gets a front door, a clock and an owner."
      :points="points"
    />

    <Reveal>
      <DsarDemo />
    </Reveal>

    <Reveal class="border-t border-border pt-8">
      <PageNext to="/covered" label="What’s covered" blurb="What Sentinel handles, and what stays with you." />
    </Reveal>
  </div>
</template>
