import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Smooth scroll. Skipped entirely when the visitor prefers reduced motion.
export default defineNuxtPlugin(() => {
  let lenis: Lenis | null = null

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })
    const raf = (time: number) => {
      lenis!.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  return { provide: { lenis } }
})
