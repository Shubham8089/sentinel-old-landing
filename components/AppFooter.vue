<template>
  <footer>
    <div class="border-t border-border bg-surface">
      <div class="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div class="flex items-center">
          <img src="/pactbase-wordmark.svg" alt="pactbase" class="h-[17.5px] w-auto opacity-80" />
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
