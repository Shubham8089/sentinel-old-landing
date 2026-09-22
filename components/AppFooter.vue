<template>
  <footer>
    <section class="bg-blue text-white" aria-labelledby="waitlist-h">
      <div class="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:px-12">
        <div>
          <h2 id="waitlist-h" class="text-4xl leading-[1.05] text-white sm:text-6xl">Join the waitlist</h2>
          <p class="mt-3 text-lg text-white/80">We will write when there is a spot.</p>
        </div>
        <WaitlistButton variant="light" label="Add me to the list" large />
      </div>
    </section>

    <div class="bg-surface">
      <div class="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 pb-12 pt-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div class="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="" width="20" height="20" class="rounded-[5px]" aria-hidden="true" />
          <img src="/pactbase-wordmark.svg" alt="pactbase" class="h-3.5 w-auto opacity-80" />
        </div>
        <nav aria-label="Footer" class="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          <NuxtLink v-for="m in MODULES" :key="m.to" :to="m.to" class="hover:text-ink">{{ m.label }}</NuxtLink>
          <NuxtLink to="/covered" class="hover:text-ink">What’s covered</NuxtLink>
          <a :href="TRUST_CENTER_URL" target="_blank" rel="noopener" class="font-semibold text-blue hover:text-blue-hi">Our trust center</a>
        </nav>
        <p class="text-sm text-hint">© 2026 pactbase</p>
      </div>
    </div>
  </footer>
</template>
