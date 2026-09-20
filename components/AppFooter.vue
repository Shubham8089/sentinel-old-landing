<template>
  <footer>
    <section class="bg-accent text-white" aria-labelledby="waitlist-h">
      <div class="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:px-12">
        <div>
          <h2 id="waitlist-h" class="text-4xl leading-[1.05] text-white sm:text-6xl">Join the waitlist</h2>
          <p class="mt-3 text-lg text-white/80">We will write when there is a spot.</p>
        </div>
        <WaitlistButton variant="light" label="Add me to the list" large />
      </div>
    </section>

    <div class="bg-white">
      <div class="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 pb-12 pt-6 text-sm text-muted sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>© 2026 Sentinel · the front door of DPDP</p>
        <nav aria-label="Footer" class="flex flex-wrap gap-x-5 gap-y-1">
          <NuxtLink v-for="m in MODULES" :key="m.to" :to="m.to" class="hover:text-ink">{{ m.label }}</NuxtLink>
          <NuxtLink to="/covered" class="hover:text-ink">What’s covered</NuxtLink>
          <a :href="TRUST_CENTER_URL" target="_blank" rel="noopener" class="font-semibold text-accent hover:text-accent-hi">Our trust center</a>
        </nav>
      </div>
    </div>
  </footer>
</template>
