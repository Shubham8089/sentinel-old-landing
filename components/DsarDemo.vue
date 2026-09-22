<script setup lang="ts">
// "Watch it work": a mock rights portal on the left, a mock admin queue on the right.
// Everything runs in the browser. Nothing is submitted anywhere.
type ReqType = 'access' | 'correction' | 'erasure' | 'grievance'
type Status = 'received' | 'verifying' | 'fulfilled'

interface Ticket {
  ref: string
  type: ReqType
  email: string
  status: Status
  dueAt: number | null
  daysLeft?: number
  sample?: boolean
  fresh?: boolean
}

const DAY = 86_400_000
const TYPES: { value: ReqType; label: string }[] = [
  { value: 'access', label: 'Access my data' },
  { value: 'correction', label: 'Correct my data' },
  { value: 'erasure', label: 'Erase my data' },
  { value: 'grievance', label: 'Raise a grievance' },
]
const typeLabel = (t: ReqType) => TYPES.find((x) => x.value === t)!.label
const STATUS: Record<Status, { label: string; dot: string }> = {
  received: { label: 'Received', dot: 'bg-blue' },
  verifying: { label: 'Verifying identity', dot: 'bg-warn' },
  fulfilled: { label: 'Fulfilled', dot: 'bg-ok' },
}

const email = ref('')
const type = ref<ReqType>('access')
const error = ref('')
const submitting = ref(false)
const confirmation = ref<{ ref: string; due: number } | null>(null)
const announce = ref('')
const now = ref<number | null>(null)
let counter = 1042
let timer: ReturnType<typeof setInterval> | undefined

const tickets = ref<Ticket[]>([
  { ref: 'DSAR-1041', type: 'correction', email: 'm***@example.in', status: 'verifying', dueAt: null, daysLeft: 18, sample: true },
  { ref: 'DSAR-1040', type: 'erasure', email: 's***@example.com', status: 'fulfilled', dueAt: null, sample: true },
])

const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

onMounted(() => {
  const t0 = Date.now()
  now.value = t0
  tickets.value.forEach((t) => {
    if (t.daysLeft) t.dueAt = t0 + t.daysLeft * DAY
  })
  timer = setInterval(() => (now.value = Date.now()), 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const openCount = computed(() => tickets.value.filter((t) => t.status !== 'fulfilled').length)
const remaining = (t: Ticket) => (t.dueAt && now.value ? formatCountdown(t.dueAt - now.value) : '--')

async function submit() {
  error.value = ''
  if (!isEmail(email.value)) {
    error.value = 'Enter a valid email address.'
    return
  }
  submitting.value = true
  await wait(reduce() ? 0 : 650)

  const reference = `DSAR-${counter++}`
  const due = Date.now() + 30 * DAY
  tickets.value.unshift({ ref: reference, type: type.value, email: maskEmail(email.value), status: 'received', dueAt: due, fresh: true })
  tickets.value = tickets.value.slice(0, 6)
  const created = tickets.value[0]

  confirmation.value = { ref: reference, due }
  announce.value = `Request ${reference} received. Due ${formatDate(due)}.`
  submitting.value = false
  email.value = ''

  setTimeout(() => (created.status = 'verifying'), reduce() ? 0 : 2400)
  setTimeout(() => (created.fresh = false), reduce() ? 0 : 2600)
}
</script>

<template>
  <div id="dsar-demo" class="scroll-mt-32 lg:scroll-mt-24">
    <div class="mb-4 flex items-baseline justify-between gap-4">
      <h2 class="text-2xl">Watch it work</h2>
      <p class="hidden font-mono text-xs text-muted sm:block">Runs in your browser. Nothing is sent.</p>
    </div>

    <div class="grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <!-- What the person sees -->
      <section class="card p-5" aria-labelledby="portal-h">
        <p class="mono-label mb-3">What they see · rights portal</p>
        <h3 id="portal-h" class="font-bold tracking-tight text-xl">Submit a request</h3>
        <p class="mt-1 text-sm text-muted">Tell us who you are and what you need. We take it from there.</p>

        <form class="mt-5 space-y-4" novalidate @submit.prevent="submit">
          <div>
            <label for="dsar-email" class="mb-1.5 block text-sm font-medium">Your email</label>
            <input
              id="dsar-email"
              v-model="email"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="you@example.com"
              class="w-full rounded-lg border border-border bg-canvas px-3 py-2.5 text-sm placeholder:text-muted focus:border-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              :aria-invalid="!!error"
              aria-describedby="dsar-error"
            />
            <p id="dsar-error" class="mt-1.5 min-h-[1.25rem] text-xs text-ink" role="alert">{{ error }}</p>
          </div>
          <div>
            <label for="dsar-type" class="mb-1.5 block text-sm font-medium">Request type</label>
            <select
              id="dsar-type"
              v-model="type"
              class="w-full rounded-lg border border-border bg-canvas px-3 py-2.5 text-sm focus:border-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              <option v-for="t in TYPES" :key="t.value" :value="t.value">{{ t.label }}</option>
            </select>
          </div>
          <button type="submit" class="btn-primary w-full" :disabled="submitting">
            {{ submitting ? 'Submitting...' : 'Submit request' }}
          </button>
        </form>

        <Transition name="swap">
          <div v-if="confirmation" class="mt-5 rounded-lg bg-blue-bg p-4 text-sm text-blue">
            <p class="font-medium">Request received.</p>
            <p class="mt-1">
              Your reference is <span class="font-mono font-medium">{{ confirmation.ref }}</span
              >. You will hear back by {{ formatDate(confirmation.due) }}.
            </p>
          </div>
        </Transition>
        <p class="sr-only" role="status">{{ announce }}</p>
      </section>

      <!-- What the team sees -->
      <section class="card p-5" aria-labelledby="queue-h">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="mono-label mb-3">What your team sees · admin queue</p>
            <h3 id="queue-h" class="font-bold tracking-tight text-xl">Open requests</h3>
          </div>
          <span class="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted">{{ openCount }} open · sample data</span>
        </div>

        <TransitionGroup name="row" tag="ul" class="relative mt-5 space-y-2">
          <li
            v-for="t in tickets"
            :key="t.ref"
            class="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded-lg border border-border px-4 py-3 transition-colors duration-[1200ms] ease-calm sm:grid-cols-[5.5rem_minmax(0,1fr)_auto]"
            :class="t.fresh ? 'bg-blue-bg' : 'bg-canvas'"
          >
            <span class="font-mono text-sm font-medium">{{ t.ref }}</span>
            <span class="col-span-2 order-last text-sm sm:order-none sm:col-span-1">
              {{ typeLabel(t.type) }}
              <span class="block font-mono text-xs text-muted">{{ t.email }}</span>
            </span>
            <span class="flex flex-col items-end gap-1 justify-self-end">
              <span class="inline-flex items-center gap-2 whitespace-nowrap text-xs">
                <span class="h-2 w-2 rounded-full" :class="STATUS[t.status].dot" aria-hidden="true" />
                {{ STATUS[t.status].label }}
              </span>
              <span class="hidden font-mono text-xs sm:block">
                <time v-if="t.status !== 'fulfilled'" :datetime="t.dueAt ? new Date(t.dueAt).toISOString() : undefined"
                  ><span class="text-muted">SLA </span>{{ remaining(t) }}</time
                >
                <span v-else class="text-muted">Closed</span>
              </span>
            </span>
            <span v-if="t.status !== 'fulfilled'" class="col-span-2 font-mono text-xs text-muted sm:hidden">
              SLA {{ remaining(t) }}
            </span>
          </li>
        </TransitionGroup>

        <p class="mt-4 text-xs leading-relaxed text-muted">
          Each request gets a reference, a clock and a status. Your team verifies identity, fulfils it, and the trail is kept.
        </p>
      </section>
    </div>
  </div>
</template>
