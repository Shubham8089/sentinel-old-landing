<script setup lang="ts">
// pactbase hero scene — a 2.5D animated illustration of pactbase sitting
// between a business and its customer. Two motion layers run at once:
//
// 1. Ambient — every element drifts continuously on its own desynced
//    timer (far glow, mid cards, near tile/keeper/chips). This never
//    stops; it's what makes the scene feel alive rather than static.
// 2. Flow — a 7s narrative loop, driven purely by CSS keyframes sharing
//    one duration/offset so they stay in lockstep: a request travels
//    customer -> pactbase, pactbase pulses and hands back a confirmation,
//    which settles near the customer.
//
// Depth is faked with three planes (far/mid/near: scale, blur, opacity,
// shadow) — no WebGL. The global prefers-reduced-motion rule in main.css
// freezes every CSS animation here to its resting (100%) frame, which is
// authored to equal the loop's rest state. The @vueuse/motion entrance
// below is JS-driven so it's silenced by hand, matching Reveal.vue.
const reduce = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const initial = { opacity: 0, y: 20, scale: 0.96 }
function enter(delay: number) {
  return {
    opacity: 1,
    y: 0,
    scale: 1,
    // Critically-damped spring: settles calmly, no bounce.
    transition: reduce ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 22, mass: 1, delay },
  }
}
</script>

<template>
  <div
    class="hero-scene relative mx-auto h-[21rem] w-full max-w-[60rem] overflow-hidden select-none sm:h-[25rem] lg:h-[29rem]"
    role="img"
    aria-label="Illustration of pactbase sitting between a business and its customers, passing a request and a confirmation back and forth"
  >
    <!-- Far plane: soft drifting light -->
    <div class="absolute inset-0 z-0" aria-hidden="true">
      <span class="hs-blob hs-blob--1" />
      <span class="hs-blob hs-blob--2" />
      <span class="hs-blob hs-blob--3" />
    </div>

    <!-- Mid plane: the two anchors -->
    <div class="absolute inset-0 z-10" aria-hidden="true">
      <div
        class="absolute left-[9%] top-[16%] w-[9.25rem] sm:left-[12%] sm:top-[19%] sm:w-[10.5rem]"
        v-motion
        :initial="initial"
        :enter="enter(180)"
      >
        <div class="hs-card hs-float-mid">
          <p class="hs-card__label">your business</p>
          <p class="hs-card__row"><span class="hs-dot" />Acme Retail</p>
          <p class="hs-card__row hs-card__row--muted">3 modules live</p>
        </div>
      </div>

      <div
        class="absolute bottom-[15%] right-[9%] w-[9.25rem] sm:bottom-[17%] sm:right-[12%] sm:w-[10.5rem]"
        v-motion
        :initial="initial"
        :enter="enter(250)"
      >
        <div class="hs-card hs-float-mid hs-float-mid--b">
          <p class="hs-card__label">your customer</p>
          <p class="hs-card__row"><span class="hs-dot hs-dot--verified" />Priya S.</p>
          <p class="hs-card__row hs-card__row--muted">Verified, on record</p>
        </div>
      </div>
    </div>

    <!-- Near plane: pactbase, Keeper, and the trust events -->
    <div class="absolute inset-0 z-20" aria-hidden="true">
      <!-- pactbase + Keeper, the layer between -->
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        v-motion
        :initial="initial"
        :enter="enter(320)"
      >
        <div class="hs-float-near">
          <img src="/keeper.svg" alt="" class="hs-keeper hs-keeper-react absolute -right-9 bottom-2 h-14 w-14 sm:h-16 sm:w-16" />
          <div class="hs-tile-pulse relative">
            <span class="hs-glow-ring" />
            <div class="hs-tile flex h-16 w-16 items-center justify-center rounded-[20px] sm:h-20 sm:w-20">
              <img src="/favicon.svg" alt="" class="h-9 w-9 sm:h-11 sm:w-11" />
            </div>
          </div>
        </div>
      </div>

      <!-- consent: ambient + flips on at 0.0s -->
      <div
        class="absolute left-[30%] top-[8%] sm:left-[34%] sm:top-[10%]"
        v-motion
        :initial="initial"
        :enter="enter(440)"
      >
        <div class="hs-chip hs-jitter hidden sm:flex">
          <span class="hs-toggle"><span class="hs-toggle__knob" /></span>
          consent
        </div>
      </div>

      <!-- preferences: purely ambient -->
      <div
        class="absolute right-[5%] top-[40%] sm:right-[9%] sm:top-auto sm:bottom-[6%]"
        v-motion
        :initial="initial"
        :enter="enter(500)"
      >
        <div class="hs-chip hs-jitter hs-jitter--b hidden sm:flex">preferences</div>
      </div>

      <!-- request received: travels customer -> pactbase, 1.2s-2.7s -->
      <div
        class="absolute bottom-[30%] right-[16%] sm:bottom-[34%] sm:right-[20%]"
        v-motion
        :initial="initial"
        :enter="enter(560)"
      >
        <div class="hs-chip hs-travel-request flex">request received</div>
      </div>

      <!-- handled: emits from pactbase, settles near the customer, 3.8s-5.0s -->
      <div
        class="absolute left-[53%] top-[41%]"
        v-motion
        :initial="initial"
        :enter="enter(620)"
      >
        <div class="hs-chip hs-chip--solid hs-travel-handled hidden sm:flex">
          <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          handled
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-scene {
  --hs-ease-float: cubic-bezier(0.37, 0, 0.63, 1);
  --hs-amp-far: 14px;
  --hs-amp-mid: 8px;
  --hs-amp-near: 5px;
}
@media (max-width: 767px) {
  .hero-scene {
    --hs-amp-far: 8px;
    --hs-amp-mid: 5px;
    --hs-amp-near: 3px;
  }
}

/* ---------- far plane: drifting light ---------- */
.hs-blob {
  position: absolute;
  border-radius: 9999px;
  filter: blur(72px);
  will-change: transform, opacity;
}
.hs-blob--1 {
  left: 4%;
  top: 6%;
  height: 20rem;
  width: 20rem;
  background: var(--blue-bg);
  animation: hs-blob-drift-1 14s var(--hs-ease-float) infinite;
}
.hs-blob--2 {
  right: 2%;
  bottom: 2%;
  height: 22rem;
  width: 22rem;
  background: var(--coral-bg);
  animation: hs-blob-drift-2 17s var(--hs-ease-float) infinite 3s;
}
.hs-blob--3 {
  left: 36%;
  top: 40%;
  height: 17rem;
  width: 17rem;
  background: var(--blue-bg);
  animation: hs-blob-drift-3 15s var(--hs-ease-float) infinite 6.5s;
}
@media (max-width: 767px) {
  .hs-blob {
    filter: blur(50px);
  }
  .hs-blob--1 {
    height: 13rem;
    width: 13rem;
  }
  .hs-blob--2 {
    height: 14rem;
    width: 14rem;
  }
  .hs-blob--3 {
    height: 11rem;
    width: 11rem;
  }
}

/* ---------- mid plane: the two anchor cards ---------- */
.hs-card {
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: 0 12px 40px rgba(43, 77, 255, 0.1);
  padding: 0.75rem 0.9rem;
}
.hs-card__label {
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hint);
}
.hs-card__row {
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--ink);
}
.hs-card__row--muted {
  margin-top: 0.15rem;
  font-size: 0.6875rem;
  font-weight: 400;
  color: var(--muted);
}
.hs-dot {
  height: 6px;
  width: 6px;
  border-radius: 9999px;
  background: var(--ok);
  flex: none;
}
.hs-dot--verified {
  animation: hs-verified-pulse 7s var(--ease-calm) infinite;
}

.hs-float-mid {
  animation: hs-bob-mid 6.5s var(--hs-ease-float) infinite;
  will-change: transform;
}
.hs-float-mid--b {
  animation-duration: 7.4s;
  animation-delay: 0.9s;
}

/* ---------- near plane: pactbase, Keeper, event chips ---------- */
.hs-float-near {
  position: relative;
  animation: hs-bob-near 6s var(--hs-ease-float) infinite 1.3s;
  will-change: transform;
}

.hs-tile {
  background: var(--blue);
  box-shadow: 0 14px 40px rgba(43, 77, 255, 0.3);
}
.hs-tile-pulse {
  transform-origin: center;
  animation: hs-tile-pulse 7s var(--ease-calm) infinite;
}
.hs-glow-ring {
  position: absolute;
  inset: -16px;
  border-radius: 28px;
  background: radial-gradient(closest-side, var(--blue-bg), transparent 72%);
  animation: hs-glow-ring 7s var(--ease-calm) infinite;
  pointer-events: none;
}
.hs-keeper {
  filter: drop-shadow(0 6px 14px rgba(23, 32, 28, 0.14));
}
.hs-keeper-react {
  transform-origin: bottom center;
  animation: hs-keeper-react 7s var(--ease-calm) infinite;
}

.hs-chip {
  align-items: center;
  gap: 0.4rem;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 0.35rem 0.7rem;
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--muted);
  box-shadow: 0 8px 24px rgba(23, 32, 28, 0.1);
  white-space: nowrap;
  transform-origin: center;
}
.hs-chip--solid {
  background: var(--blue-bg);
  color: var(--blue);
  border-color: transparent;
}

.hs-toggle {
  position: relative;
  height: 14px;
  width: 24px;
  border-radius: 9999px;
  flex: none;
  animation: hs-toggle-track 7s var(--ease-calm) infinite;
}
.hs-toggle__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 10px;
  width: 10px;
  border-radius: 9999px;
  animation: hs-toggle-knob 7s var(--ease-calm) infinite;
}

/* Ambient jitter for the two always-on chips: small translate + rotate,
   desynced so they never move in lockstep with anything else. */
.hs-jitter {
  animation: hs-jitter 6.4s var(--hs-ease-float) infinite;
  will-change: transform;
}
.hs-jitter--b {
  animation-duration: 7.8s;
  animation-delay: 1.4s;
}

/* Flow-loop travel chips: hidden most of the cycle, travel a curved path
   via offset-path, scaling up as they approach pactbase (2.5D depth). */
.hs-travel-request,
.hs-travel-handled {
  opacity: 0;
  offset-rotate: 0deg;
  will-change: transform, opacity, offset-distance;
}
.hs-travel-request {
  offset-path: path('M0,0 C -35,-45 -90,-70 -150,-85');
  animation: hs-travel-request 7s var(--ease-calm) infinite;
}
.hs-travel-handled {
  offset-path: path('M0,0 C 45,-35 100,-55 145,-65');
  animation: hs-travel-handled 7s var(--ease-calm) infinite;
}
@media (max-width: 767px) {
  .hs-travel-request {
    offset-path: path('M0,0 C -20,-28 -55,-42 -90,-50');
  }
}

/* ---------- ambient keyframes (continuous, desynced, never linear) ---------- */
@keyframes hs-bob-far {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(-1 * var(--hs-amp-far)));
  }
}
@keyframes hs-bob-mid {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(-1 * var(--hs-amp-mid)));
  }
}
@keyframes hs-bob-near {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(-1 * var(--hs-amp-near)));
  }
}
@keyframes hs-jitter {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(2px, -4px) rotate(0.4deg);
  }
  50% {
    transform: translate(-3px, -2px) rotate(-0.6deg);
  }
  75% {
    transform: translate(1px, 3px) rotate(0.3deg);
  }
}
@keyframes hs-blob-drift-1 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.15;
  }
  50% {
    transform: translate3d(3%, -5%, 0) scale(1.14);
    opacity: 0.2;
  }
}
@keyframes hs-blob-drift-2 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1.03);
    opacity: 0.14;
  }
  50% {
    transform: translate3d(-4%, 4%, 0) scale(1.16);
    opacity: 0.19;
  }
}
@keyframes hs-blob-drift-3 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.12;
  }
  50% {
    transform: translate3d(2%, 3%, 0) scale(1.1);
    opacity: 0.17;
  }
}

/* ---------- flow-loop keyframes (one shared 7s timeline) ----------
   0.0s consent flips on -> 1.2s request departs customer -> 2.7s it
   arrives, pactbase pulses -> 3.8s handled emits -> 5.0s it settles,
   customer confirms -> 5.5-7.0s eases back to rest, loop restarts. */
@keyframes hs-toggle-track {
  0%,
  3% {
    background: var(--coral-bg);
  }
  10%,
  92% {
    background: var(--blue);
  }
  100% {
    background: var(--coral-bg);
  }
}
@keyframes hs-toggle-knob {
  0%,
  3% {
    transform: translateX(0);
    background: var(--coral);
  }
  10%,
  92% {
    transform: translateX(10px);
    background: white;
  }
  100% {
    transform: translateX(0);
    background: var(--coral);
  }
}

@keyframes hs-travel-request {
  0%,
  16% {
    offset-distance: 0%;
    opacity: 0;
    transform: scale(0.85);
  }
  19% {
    offset-distance: 8%;
    opacity: 1;
    transform: scale(0.92);
  }
  30% {
    offset-distance: 55%;
    opacity: 1;
    transform: scale(1.05);
  }
  38% {
    offset-distance: 100%;
    opacity: 1;
    transform: scale(1.16);
  }
  42%,
  100% {
    offset-distance: 100%;
    opacity: 0;
    transform: scale(1.1);
  }
}

@keyframes hs-tile-pulse {
  0%,
  40% {
    transform: scale(1);
  }
  46% {
    transform: scale(1.06);
  }
  53%,
  100% {
    transform: scale(1);
  }
}
@keyframes hs-glow-ring {
  0%,
  39% {
    opacity: 0;
    transform: scale(0.8);
  }
  43% {
    opacity: 0.55;
    transform: scale(0.92);
  }
  53%,
  100% {
    opacity: 0;
    transform: scale(1.6);
  }
}
@keyframes hs-keeper-react {
  0%,
  40% {
    transform: translateY(0) rotate(0deg);
  }
  45% {
    transform: translateY(-4px) rotate(-4deg);
  }
  52%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes hs-travel-handled {
  0%,
  53% {
    offset-distance: 0%;
    opacity: 0;
    transform: scale(0.8);
    background: var(--coral-bg);
    color: var(--coral);
  }
  57% {
    offset-distance: 15%;
    opacity: 1;
    transform: scale(0.95);
    background: var(--coral-bg);
    color: var(--coral);
  }
  65% {
    offset-distance: 60%;
    transform: scale(1.05);
    background: var(--blue-bg);
    color: var(--blue);
  }
  71%,
  90% {
    offset-distance: 100%;
    opacity: 1;
    transform: scale(1);
    background: var(--blue-bg);
    color: var(--blue);
  }
  97%,
  100% {
    offset-distance: 100%;
    opacity: 0;
    transform: scale(0.92);
    background: var(--blue-bg);
    color: var(--blue);
  }
}

@keyframes hs-verified-pulse {
  0%,
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(46, 158, 91, 0);
  }
  74% {
    transform: scale(1.5);
    box-shadow: 0 0 0 4px rgba(46, 158, 91, 0.22);
  }
  80%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(46, 158, 91, 0);
  }
}
</style>
