<template>
  <footer class="section-dark">
    <div class="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
      <div class="flex items-center">
        <img src="/pactbase-wordmark.svg" alt="pactbase" class="h-[17.5px] w-auto brightness-0 invert" />
      </div>
      <nav aria-label="Footer" class="flex flex-wrap gap-x-6 gap-y-1 text-sm text-night-muted">
        <NuxtLink v-for="m in MODULES" :key="m.to" :to="m.to" class="hover:text-night-ink">{{ m.label }}</NuxtLink>
        <a :href="TRUST_CENTER_URL" target="_blank" rel="noopener" class="font-medium text-night-ink hover:text-blue-night">Our trust center</a>
      </nav>
      <p class="text-sm text-night-muted">© 2026 pactbase</p>
    </div>
  </footer>
</template>
