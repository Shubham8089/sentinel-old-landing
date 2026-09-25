import type { Config } from 'tailwindcss'

// Colours point at the CSS variables in assets/css/main.css so the tokens
// live in one place and are usable from both Tailwind and plain CSS.
export default <Partial<Config>>{
  theme: {
    // Tighter, more editorial corners. rounded-full stays for chips and dots.
    borderRadius: {
      none: '0',
      sm: '4px',
      DEFAULT: '6px',
      md: '8px',
      lg: '10px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '20px',
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
        night: {
          DEFAULT: 'var(--night)',
          ink: 'var(--night-ink)',
          muted: 'var(--night-muted)',
          border: 'var(--night-border)',
          surface: 'var(--night-surface)',
        },
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
      // Minimal, hairline-first. Shadows only where a surface truly floats.
      boxShadow: {
        soft: '0 1px 2px rgba(10,12,15,0.05)',
        card: '0 2px 12px rgba(10,12,15,0.05)',
        float: '0 16px 48px rgba(10,12,15,0.16)',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
}
