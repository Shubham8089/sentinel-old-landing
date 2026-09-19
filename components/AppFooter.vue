<script setup lang="ts">
const { select } = useSite()
</script>

<template>
  <footer id="waitlist" class="scroll-mt-32 border-t border-border bg-white">
    <div class="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-12">
      <div>
        <h2 class="max-w-md text-3xl leading-tight sm:text-4xl">Get your Trust Center.</h2>
        <p class="mt-3 max-w-md text-base leading-relaxed text-muted">
          Join the waitlist and we will write to you when your spot opens. Set up takes a day.
        </p>
      </div>
      <WaitlistForm />
    </div>

    <div class="border-t border-border">
      <div class="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-6 text-sm text-muted sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>© 2026 Sentinel · the front door of DPDP</p>
        <nav aria-label="Footer" class="flex flex-wrap gap-x-5 gap-y-1">
          <button type="button" class="hover:text-ink" @click="select('consent')">Consent</button>
          <button type="button" class="hover:text-ink" @click="select('trust')">Trust Center</button>
          <button type="button" class="hover:text-ink" @click="select('rights')">Rights</button>
        </nav>
        <p class="font-mono text-xs">Everything interactive on this page is a mock. Nothing you enter leaves your browser, apart from the waitlist email.</p>
      </div>
    </div>
  </footer>
</template>
