import type { Config } from 'tailwindcss'

// Colours point at the CSS variables in assets/css/main.css so the tokens
// live in one place and are usable from both Tailwind and plain CSS.
export default <Partial<Config>>{
  theme: {
    // Soft, rounded corners everywhere; rounded-full stays for chips and dots.
    borderRadius: {
      none: '0',
      sm: '6px',
      DEFAULT: '10px',
      md: '12px',
      lg: '14px',
      xl: '16px',
      '2xl': '20px',
      '3xl': '24px',
      full: '9999px',
    },
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        hint: 'var(--hint)',
        border: 'var(--border)',
        blue: {
          DEFAULT: 'var(--blue)',
          hi: 'var(--blue-hi)',
          bg: 'var(--blue-bg)',
        },
        coral: {
          DEFAULT: 'var(--coral)',
          hi: 'var(--coral-hi)',
          bg: 'var(--coral-bg)',
        },
        ok: 'var(--ok)',
        warn: 'var(--warn)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // Soft, low-contrast lift. No hard offsets, no glow bleed.
      boxShadow: {
        soft: '0 1px 3px rgba(23,32,28,0.06)',
        card: '0 4px 20px rgba(23,32,28,0.06)',
        float: '0 12px 40px rgba(43,77,255,0.10)',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
}
