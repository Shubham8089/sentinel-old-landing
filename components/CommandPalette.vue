<script setup lang="ts">
// Cmd/Ctrl + K quick navigation. Keyboard-first, like the tools this site is modelled on.
interface Item {
  id: string
  label: string
  hint: string
  to?: string
  href?: string
  action?: () => void
}

const { isOpen, open, close } = useCommand()
const router = useRouter()
const { open: openWaitlist } = useWaitlist()

const q = ref('')
const idx = ref(0)
const input = ref<HTMLInputElement | null>(null)
let returnFocus: HTMLElement | null = null

const ITEMS: Item[] = [
  { id: 'overview', label: 'Overview', hint: 'Go to', to: '/' },
  ...MODULES.map((m) => ({ id: m.id, label: m.label, hint: 'Module', to: m.to })),
  { id: 'demo', label: 'Watch a request move through', hint: 'Demo', to: '/rights#dsar-demo' },
  { id: 'covered', label: 'What’s covered', hint: 'Proof', to: '/covered' },
  { id: 'trust-page', label: 'Our trust center', hint: 'Live', href: TRUST_CENTER_URL },
  { id: 'waitlist', label: 'Join the waitlist', hint: 'Action', action: openWaitlist },
]

const results = computed(() => {
  const term = q.value.trim().toLowerCase()
  return term ? ITEMS.filter((i) => i.label.toLowerCase().includes(term)) : ITEMS
})

watch(isOpen, async (v) => {
  if (v) {
    returnFocus = document.activeElement as HTMLElement | null
    q.value = ''
    idx.value = 0
    await nextTick()
    input.value?.focus()
  } else {
    returnFocus?.focus?.()
  }
})
watch(q, () => (idx.value = 0))

function run(item: Item) {
  close()
  if (item.to) router.push(item.to)
  else if (item.href) window.open(item.href, '_blank', 'noopener')
  else item.action?.()
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    idx.value = (idx.value + 1) % Math.max(results.value.length, 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    idx.value = (idx.value - 1 + results.value.length) % Math.max(results.value.length, 1)
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const item = results.value[idx.value]
    if (item) run(item)
  } else if (e.key === 'Escape') {
    e.preventDefault()
    close()
  } else if (e.key === 'Tab') {
    e.preventDefault() // keep focus inside the dialog
  }
}

function globalKey(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    isOpen.value ? close() : open()
  }
}
onMounted(() => window.addEventListener('keydown', globalKey))
onBeforeUnmount(() => window.removeEventListener('keydown', globalKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[14vh]">
        <div class="absolute inset-0 bg-[color-mix(in_srgb,var(--ink)_40%,transparent)]" aria-hidden="true" @click="close" />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Quick navigation"
          class="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-white shadow-soft"
        >
          <input
            ref="input"
            v-model="q"
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            :aria-activedescendant="results[idx] ? `cmd-${results[idx].id}` : undefined"
            aria-label="Search pages"
            autocomplete="off"
            placeholder="Where to?"
            class="w-full border-b border-border bg-transparent px-5 py-4 text-base placeholder:text-muted focus:outline-none"
            @keydown="onKey"
          />
          <ul id="cmd-list" role="listbox" class="max-h-80 overflow-y-auto p-2">
            <li
              v-for="(item, i) in results"
              :id="`cmd-${item.id}`"
              :key="item.id"
              role="option"
              :aria-selected="i === idx"
              class="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm"
              :class="i === idx ? 'bg-blue-bg text-blue' : 'text-ink'"
              @mouseenter="idx = i"
              @click="run(item)"
            >
              <span>{{ item.label }}</span>
              <span class="font-mono text-[11px]" :class="i === idx ? 'text-blue' : 'text-muted'">{{ item.hint }}</span>
            </li>
            <li v-if="!results.length" class="px-3 py-6 text-center text-sm text-muted">Nothing matches that.</li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
