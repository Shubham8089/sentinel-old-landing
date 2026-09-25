<script setup lang="ts">
useSeoMeta({
  title: 'Rights · pactbase',
  description: 'Every data request gets a front door, a clock and an owner. Access, correction, erasure and grievances in one portal.',
})

const points = [
  {
    title: 'A portal on your own domain',
    body: 'One front door for every request type.',
  },
  {
    title: 'A reference number and a clock',
    body: 'A 30-day target by default.',
  },
  {
    title: 'Verified, fulfilled, on record',
    body: 'Closed by your team, with a trail.',
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
      <PageNext to="/covered" label="What’s covered" blurb="What pactbase handles, and what stays with you." />
    </Reveal>
  </div>
</template>
