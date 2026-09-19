<script setup lang="ts">
// The site runs its own consent banner, like a real front door. It is a mock:
// it sets no cookies and stores nothing. It steps aside on /consent, where the framed demo lives.
const route = useRoute()
const { receipt } = useConsent()

const ready = ref(false)
const mode = ref<'card' | 'pill'>('card')
const hidden = computed(() => route.path === '/consent')
let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  setTimeout(() => (ready.value = true), 1200)
})

// After a choice, show the receipt for a few seconds, then tuck it into a pill.
watch(receipt, (r) => {
  clearTimeout(timer)
  mode.value = 'card'
  if (r) timer = setTimeout(() => (mode.value = 'pill'), 5000)
})
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <Transition name="rise">
    <div
      v-if="ready && !hidden"
      class="pointer-events-none fixed inset-x-3 bottom-3 z-40 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[26rem]"
    >
      <Transition name="swap" mode="out-in">
        <div v-if="mode === 'card'" key="card" class="pointer-events-auto">
          <div class="mb-2 flex items-center justify-between gap-2">
            <span class="inline-flex items-center gap-2 rounded-full border border-border bg-white px-2.5 py-1 font-mono text-[11px] text-muted">
              <span class="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
              running on this page
            </span>
            <button
              type="button"
              class="rounded-full border border-border bg-white px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:text-ink"
              @click="mode = 'pill'"
            >
              Minimize
            </button>
          </div>
          <div class="max-h-[68vh] overflow-y-auto rounded-xl shadow-hard-sm">
            <ConsentCard />
          </div>
        </div>

        <button
          v-else
          key="pill"
          type="button"
          class="pointer-events-auto ml-auto flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm shadow-hard-sm transition-colors hover:border-accent"
          @click="mode = 'card'"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
          <span class="font-mono text-xs">{{ receipt ? `Consent recorded · ${receipt.id}` : 'Consent banner (sample)' }}</span>
        </button>
      </Transition>
    </div>
  </Transition>
</template>
