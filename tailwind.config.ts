import type { Config } from 'tailwindcss'

// Colours point at the CSS variables in assets/css/main.css so the tokens
// live in one place and are usable from both Tailwind and plain CSS.
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          hi: 'var(--accent-hi)',
          bg: 'var(--accent-bg)',
        },
        ok: 'var(--ok)',
        warn: 'var(--warn)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // Flat, hard-edged offsets. No blur, no glow.
      boxShadow: {
        hard: '8px 8px 0 var(--accent-bg)',
        'hard-sm': '3px 3px 0 var(--border)',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
}
