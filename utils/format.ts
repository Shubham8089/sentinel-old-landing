const IST = 'Asia/Kolkata'

export const formatDateTime = (iso: string | number) =>
  new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: IST,
  }).format(new Date(iso)) + ' IST'

export const formatDate = (ms: number) =>
  new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: IST }).format(new Date(ms))

const pad = (n: number) => String(n).padStart(2, '0')

/** 29d 23h 59m 58s */
export const formatCountdown = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000))
  const d = Math.floor(s / 86400)
  const h = Math.floor((s % 86400) / 3600)
  const m = Math.floor((s % 3600) / 60)
  return `${d}d ${pad(h)}h ${pad(m)}m ${pad(s % 60)}s`
}

/** a***@gmail.com */
export const maskEmail = (email: string) => {
  const [user = '', domain = ''] = email.split('@')
  return `${user.slice(0, 1)}***@${domain}`
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
