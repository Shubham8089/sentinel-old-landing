// Single source of truth for site-wide content.
export const TRUST_CENTER_URL = 'https://dpdp-prod.vercel.app/portal/landing-page/trust'

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
    outcome: 'A clear yes or no for every visitor, and a receipt for each one.',
  },
  {
    id: 'trust',
    to: '/trust',
    label: 'Trust Center',
    blurb: 'Policies, status, contact',
    outcome: "A public page that shows customers how their data's handled.",
  },
  {
    id: 'rights',
    to: '/rights',
    label: 'Rights',
    blurb: 'Requests and grievances',
    outcome: 'A front door, a clock and an owner for every data request.',
  },
]

