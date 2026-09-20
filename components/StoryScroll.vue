<script setup lang="ts">
// Pinned scroll story: text steps on the left, the matching product view stays put on the right.
const steps = [
  {
    key: 'consent' as const,
    num: '01',
    kicker: 'A visitor lands',
    title: 'They get a clear choice, and you get a receipt.',
    body: 'A banner and preference center in their language, with equal weight on accept and reject. Every choice is logged with the notice version they saw.',
    to: '/consent',
    cta: 'Open Consent',
  },
  {
    key: 'trust' as const,
    num: '02',
    kicker: 'A client asks',
    title: 'You send one link.',
    body: 'Policies, breach status, a named contact and your posture, on a public page that is versioned and kept current. No spreadsheet, no attachment.',
    to: '/trust',
    cta: 'Open Trust Center',
  },
  {
    key: 'rights' as const,
    num: '03',
    kicker: 'A customer writes in',
    title: 'It has an owner and a clock.',
    body: 'Access, correction, erasure and grievances arrive in one portal. Each gets a reference number and a 30-day target, and your team closes it with a trail.',
    to: '/rights',
    cta: 'Open Rights',
  },
]

const active = ref(0)
const els = ref<HTMLElement[]>([])
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = Number((e.target as HTMLElement).dataset.i)
      })
    },
    { rootMargin: '-45% 0px -45% 0px' },
  )
  els.value.forEach((el) => observer!.observe(el))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="gap-14 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
    <ol class="space-y-14 lg:space-y-0">
      <li
        v-for="(s, i) in steps"
        :key="s.key"
        ref="els"
        :data-i="i"
        class="flex flex-col justify-center transition-opacity duration-500 ease-calm lg:min-h-[68vh]"
        :class="i === active ? 'lg:opacity-100' : 'lg:opacity-40'"
      >
        <p class="mono-label">{{ s.num }} · {{ s.kicker }}</p>
        <h3 class="mt-3 text-3xl leading-[1.1] sm:text-4xl">{{ s.title }}</h3>
        <p class="mt-4 max-w-md text-base leading-relaxed text-muted">{{ s.body }}</p>
        <NuxtLink :to="s.to" class="btn-quiet -ml-3 mt-4 self-start">{{ s.cta }}</NuxtLink>
        <StoryVisual :step="s.key" class="mt-6 min-h-[16rem] lg:hidden" />
      </li>
    </ol>

    <div class="hidden lg:block">
      <div class="sticky top-24 h-[26rem]">
        <Transition name="swap" mode="out-in">
          <StoryVisual :key="steps[active].key" :step="steps[active].key" />
        </Transition>
      </div>
    </div>
  </div>
</template>
