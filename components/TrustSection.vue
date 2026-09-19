<script setup lang="ts">
const { goToWaitlist } = useSite()

const points = [
  {
    title: 'Policies in one place, versioned and multilingual',
    body: 'Publish once, keep every version on record, and offer them in the languages your customers read.',
  },
  {
    title: 'A breach status page and a named DPO',
    body: 'People know where to look when something happens and whom to ask when they have a question.',
  },
  {
    title: 'Your posture, shown plainly',
    body: 'Only what is true, kept current as things change, so the page never drifts from reality.',
  },
]
</script>

<template>
  <div class="space-y-14">
    <ModuleHead
      eyebrow="02 · Trust Center"
      outcome="A public page that answers the client questionnaire before it is sent."
      :points="points"
    />

    <Reveal>
      <TrustCenterMock />
    </Reveal>

    <Reveal class="flex flex-wrap items-center gap-4 border-t border-border pt-8">
      <button type="button" class="btn-primary !px-5 !py-3" @click="goToWaitlist">Get your Trust Center</button>
      <p class="text-sm text-muted">Send one link instead of filling in the same form again.</p>
    </Reveal>
  </div>
</template>
