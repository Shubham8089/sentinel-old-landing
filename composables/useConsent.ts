// Mock consent state. Lives in memory only: nothing is stored or sent anywhere.
export type ConsentChoice = 'accepted' | 'rejected' | 'custom'

export interface ConsentReceipt {
  id: string
  choice: ConsentChoice
  analytics: boolean
  marketing: boolean
  at: string
  action: 'given' | 'changed'
}

export const NOTICE_VERSION = 'v1.4'

const randomId = () =>
  'CNS-' +
  Array.from(crypto.getRandomValues(new Uint8Array(3)))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()

export const useConsent = () => {
  const receipt = useState<ConsentReceipt | null>('consent-receipt', () => null)
  const log = useState<ConsentReceipt[]>('consent-log', () => [])
  const prefs = useState('consent-prefs', () => ({ analytics: false, marketing: false }))
  const choosing = useState('consent-choosing', () => false)

  function record(choice: ConsentChoice, analytics: boolean, marketing: boolean) {
    const r: ConsentReceipt = {
      id: randomId(),
      choice,
      analytics,
      marketing,
      at: new Date().toISOString(),
      action: log.value.length ? 'changed' : 'given',
    }
    prefs.value = { analytics, marketing }
    receipt.value = r
    log.value = [r, ...log.value].slice(0, 6)
    choosing.value = false
  }

  const accept = () => record('accepted', true, true)
  const reject = () => record('rejected', false, false)
  const save = () => record('custom', prefs.value.analytics, prefs.value.marketing)
  const reopen = () => {
    receipt.value = null
  }

  return { receipt, log, prefs, choosing, accept, reject, save, reopen }
}
