// Single source of truth for site-wide content that changes over time.
export const SITE = {
  name: 'Sentinel',
  // Setup-day requests go here until a real booking link exists.
  bookingEmail: 'bhosalepatil@hotmail.com',
  // TODO: paste a Cal.com / Calendly URL here and every "Book your setup day" button switches to it.
  bookingUrl: '',
  launched: '19 Sep 2026',
}

export const bookHref = () => {
  if (SITE.bookingUrl) return SITE.bookingUrl
  const body = [
    'Hi,',
    '',
    "I'd like to book a Sentinel setup day.",
    '',
    'Company:',
    'Website:',
    'Team size:',
    'What prompted this (a client questionnaire, an audit, something else):',
    '',
  ].join('\r\n')
  return `mailto:${SITE.bookingEmail}?subject=${encodeURIComponent('Sentinel setup day')}&body=${encodeURIComponent(body)}`
}

export const questionHref = () =>
  `mailto:${SITE.bookingEmail}?subject=${encodeURIComponent('Question about the Sentinel trust page')}`

export interface SiteModule {
  id: 'consent' | 'trust' | 'rights'
  to: string
  label: string
  blurb: string
  outcome: string
}

export const MODULES: SiteModule[] = [
  {
    id: 'consent',
    to: '/consent',
    label: 'Consent',
    blurb: 'Banner, preferences, notice',
    outcome: 'A clear choice for every visitor, and a receipt for each one.',
  },
  {
    id: 'trust',
    to: '/trust',
    label: 'Trust Center',
    blurb: 'Policies, status, contact',
    outcome: 'A public page that answers the questionnaire before it is sent.',
  },
  {
    id: 'rights',
    to: '/rights',
    label: 'Rights',
    blurb: 'Requests and grievances',
    outcome: 'A front door, a clock and an owner for every data request.',
  },
]

export const PROOF_LINKS = [
  { to: '/covered', label: 'What’s covered', blurb: 'Handled, supported, yours', live: false },
  { to: '/our-trust-page', label: 'Our trust page', blurb: 'Live and versioned', live: true },
]
