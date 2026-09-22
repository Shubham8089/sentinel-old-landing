<template>
  <header class="sticky top-0 z-30 border-b border-border bg-canvas">
    <div class="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
      <NuxtLink to="/" class="flex items-center rounded-md" aria-label="pactbase, home">
        <img src="/pactbase-wordmark.svg" alt="pactbase" class="h-[25px] w-auto" />
      </NuxtLink>

      <TryNowButton />
    </div>
  </header>
</template>
