export type ModuleId = 'home' | 'consent' | 'trust' | 'rights'

export interface SiteModule {
  id: Exclude<ModuleId, 'home'>
  label: string
  blurb: string
  outcome: string
}

export const MODULES: SiteModule[] = [
  {
    id: 'consent',
    label: 'Consent',
    blurb: 'Banner, preferences, notice',
    outcome: 'A clear choice for every visitor, and a receipt for each one.',
  },
  {
    id: 'trust',
    label: 'Trust Center',
    blurb: 'Policies, status, DPO',
    outcome: 'A public page that answers the questionnaire before it is sent.',
  },
  {
    id: 'rights',
    label: 'Rights',
    blurb: 'Requests and grievances',
    outcome: 'A front door, a clock and an owner for every data request.',
  },
]

const VALID: ModuleId[] = ['home', 'consent', 'trust', 'rights']

export const useSite = () => {
  const active = useState<ModuleId>('active-module', () => 'home')
  const pendingScroll = useState<string | null>('pending-scroll', () => null)

  const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches

  /** Smooth-scroll (Lenis if present) to an element, leaving room for sticky chrome. */
  function scrollToEl(selector: string) {
    if (!import.meta.client) return
    const el = document.querySelector<HTMLElement>(selector)
    if (!el) return
    const lenis = useNuxtApp().$lenis
    const offset = isDesktop() ? -88 : -128
    if (lenis) lenis.scrollTo(el, { offset, duration: 1.1 })
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset })
  }

  function scrollTop(immediate = false) {
    if (!import.meta.client) return
    const lenis = useNuxtApp().$lenis
    if (lenis) lenis.scrollTo(0, { immediate })
    else window.scrollTo(0, 0)
  }

  /** Swap the canvas to a module. Optionally scroll to a selector once it has arrived. */
  function select(id: ModuleId, scrollTo?: string) {
    pendingScroll.value = scrollTo ?? null
    if (id === active.value) {
      if (scrollTo) scrollToEl(scrollTo)
      else scrollTop()
      return
    }
    active.value = id
    if (import.meta.client) {
      history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`)
    }
  }

  /** Read #module from the URL on first load. */
  function syncFromHash() {
    if (!import.meta.client) return
    const id = location.hash.replace('#', '') as ModuleId
    if (VALID.includes(id)) active.value = id
  }

  function goToWaitlist() {
    scrollToEl('#waitlist')
    window.setTimeout(() => document.querySelector<HTMLInputElement>('#waitlist-email')?.focus({ preventScroll: true }), 900)
  }

  return { active, pendingScroll, select, syncFromHash, scrollToEl, scrollTop, goToWaitlist }
}
