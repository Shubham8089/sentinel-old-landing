<template>
  <footer class="border-t border-border bg-white">
    <div class="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:px-12">
      <div>
        <p class="mono-label mb-4">Your setup day</p>
        <h2 class="max-w-xl text-4xl leading-[1.08] sm:text-5xl">
          Be <em>sorted</em> by the end of the day.
        </h2>
        <p class="mt-4 max-w-lg text-base leading-relaxed text-muted">
          Send a short email. We reply with a time, set up your Trust Center with you, and it is live the same day.
          Pricing is quoted then, once we know what you run on.
        </p>
      </div>
      <div class="flex flex-col items-start gap-3 lg:items-end">
        <BookButton large />
        <p class="font-mono text-xs text-muted">Opens an email. One plan, everything included.</p>
      </div>
    </div>

    <div class="border-t border-border">
      <div class="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 pb-24 pt-6 text-sm text-muted sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>© 2026 Sentinel · the front door of DPDP</p>
        <nav aria-label="Footer" class="flex flex-wrap gap-x-5 gap-y-1">
          <NuxtLink v-for="m in MODULES" :key="m.to" :to="m.to" class="hover:text-ink">{{ m.label }}</NuxtLink>
          <NuxtLink to="/covered" class="hover:text-ink">What’s covered</NuxtLink>
          <NuxtLink to="/our-trust-page" class="hover:text-ink">Our trust page</NuxtLink>
        </nav>
        <p class="max-w-md font-mono text-xs">Everything interactive on this site is a mock that runs in your browser. Nothing you enter is sent to us.</p>
      </div>
    </div>
  </footer>
</template>
