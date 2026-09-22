<script setup lang="ts">
// The hero illustration: pactbase as the layer between a business and its
// customers. Pure CSS keyframes, no JS state, so it is deterministic and
// cheap. The global prefers-reduced-motion rule in main.css freezes every
// animation here to its resting frame, which is designed to read fine static.
</script>

<template>
  <div
    class="hero-scene relative mx-auto h-[21rem] w-full max-w-3xl overflow-hidden select-none sm:h-[25rem] lg:h-[29rem]"
    role="img"
    aria-label="Illustration of pactbase sitting between a business and its customers, passing consent, trust and request updates back and forth"
  >
    <div class="hero-scene__glow absolute inset-0 -z-10" aria-hidden="true" />

    <div class="absolute inset-0" aria-hidden="true">
      <!-- your business -->
      <div class="hs-card hs-float-a absolute left-[2%] top-[2%] w-[9.5rem] sm:left-[6%] sm:top-[18%] sm:w-[11rem]">
        <p class="hs-card__label">your business</p>
        <p class="hs-card__row"><span class="hs-dot hs-dot--ok" />Acme Retail</p>
        <p class="hs-card__row hs-card__row--muted">3 modules live</p>
      </div>

      <!-- your customer -->
      <div class="hs-card hs-float-b absolute bottom-[2%] right-[2%] w-[9.5rem] sm:bottom-[14%] sm:right-[6%] sm:w-[11rem]">
        <p class="hs-card__label">your customer</p>
        <p class="hs-card__row"><span class="hs-dot hs-dot--ok" />Priya S.</p>
        <p class="hs-card__row hs-card__row--muted">Verified, on record</p>
      </div>

      <!-- pactbase, the layer between -->
      <div class="hs-float-c absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="/keeper.svg" alt="" class="hs-keeper absolute -right-9 bottom-2 h-14 w-14 sm:h-16 sm:w-16" />
        <div class="hs-tile flex h-16 w-16 items-center justify-center rounded-[20px] sm:h-20 sm:w-20">
          <img src="/favicon.svg" alt="" class="h-9 w-9 sm:h-11 sm:w-11" />
        </div>
      </div>

      <!-- drifting: consent toggle -->
      <div class="hs-chip hs-drift-a absolute left-[24%] top-[8%] hidden sm:flex">
        <span class="hs-toggle"><span class="hs-toggle__knob" /></span>
        consent
      </div>

      <!-- drifting: request card -->
      <div class="hs-chip hs-drift-b absolute bottom-[6%] left-[20%] flex">
        request received
      </div>

      <!-- pulsing: handled pill -->
      <div class="hs-chip hs-chip--solid hs-pulse absolute right-[22%] top-[6%] hidden sm:flex">
        <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6.5l2.6 2.6L10 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        handled
      </div>

      <!-- drifting: preference chip -->
      <div class="hs-chip hs-drift-c absolute right-[3%] top-[44%] flex sm:right-[16%] sm:top-auto sm:bottom-[4%]">
        preferences
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-scene__glow {
  background:
    radial-gradient(38% 42% at 18% 30%, var(--blue-bg) 0%, transparent 72%),
    radial-gradient(36% 40% at 84% 74%, var(--coral-bg) 0%, transparent 72%);
  filter: blur(28px);
  opacity: 0.9;
  animation: hs-glow-shift 14s ease-in-out infinite;
}

.hs-card {
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: var(--tw-shadow, 0 12px 40px rgba(43, 77, 255, 0.1));
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

.hs-tile {
  background: var(--blue);
  box-shadow: 0 12px 40px rgba(43, 77, 255, 0.28);
}
.hs-keeper {
  filter: drop-shadow(0 6px 14px rgba(23, 32, 28, 0.14));
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
  box-shadow: 0 4px 20px rgba(23, 32, 28, 0.06);
  white-space: nowrap;
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
  background: var(--blue-bg);
  flex: none;
  animation: hs-toggle-track 7s ease-in-out infinite;
}
.hs-toggle__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 10px;
  width: 10px;
  border-radius: 9999px;
  background: var(--blue);
  animation: hs-toggle-knob 7s ease-in-out infinite;
}

/* Gentle bob, phased so cards never move in sync */
.hs-float-a {
  animation: hs-bob 7s ease-in-out infinite;
}
.hs-float-b {
  animation: hs-bob 8s ease-in-out infinite 0.6s;
}
.hs-float-c {
  animation: hs-bob 6s ease-in-out infinite 1.2s;
}

/* Slow drifts between the two cards */
.hs-drift-a {
  animation:
    hs-bob 5.5s ease-in-out infinite,
    hs-drift-right 9s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
}
.hs-drift-b {
  animation:
    hs-bob 6.5s ease-in-out infinite 0.8s,
    hs-drift-right 10s cubic-bezier(0.22, 0.61, 0.36, 1) infinite 1.5s;
}
.hs-drift-c {
  animation:
    hs-bob 7.5s ease-in-out infinite 0.3s,
    hs-drift-left 11s cubic-bezier(0.22, 0.61, 0.36, 1) infinite 0.9s;
}

.hs-pulse {
  animation: hs-pulse 4s ease-in-out infinite;
}

@keyframes hs-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes hs-drift-right {
  0%,
  100% {
    transform: translateX(0);
    opacity: 0.85;
  }
  50% {
    transform: translateX(14px);
    opacity: 1;
  }
}

@keyframes hs-drift-left {
  0%,
  100% {
    transform: translateX(0);
    opacity: 0.85;
  }
  50% {
    transform: translateX(-14px);
    opacity: 1;
  }
}

@keyframes hs-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.88;
  }
  50% {
    transform: scale(1.06);
    opacity: 1;
  }
}

@keyframes hs-toggle-track {
  0%,
  40% {
    background: var(--blue-bg);
  }
  55%,
  100% {
    background: var(--blue);
  }
}

@keyframes hs-toggle-knob {
  0%,
  40% {
    transform: translateX(0);
    background: var(--blue);
  }
  55%,
  100% {
    transform: translateX(10px);
    background: white;
  }
}

@keyframes hs-glow-shift {
  0%,
  100% {
    opacity: 0.75;
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate3d(1%, -2%, 0) scale(1.04);
  }
}
</style>
