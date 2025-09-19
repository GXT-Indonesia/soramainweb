<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/hosting', label: 'Cloud Hosting' },
  { to: '/hosting-murah', label: 'Hosting Murah' },
  { to: '/domain', label: 'Domain' },
  { to: '/cloud-vps', label: 'Cloud VPS' },
  { to: '/cdn', label: 'CDN' },
  { to: '/email-hosting', label: 'Email Hosting' },
  { to: '/colocation', label: 'Colocation' },
  { to: '/dedicated-server', label: 'Dedicated Server' },
  { to: '/ssl', label: 'SSL' },
  { to: '/kontak', label: 'Kontak' },
]
</script>

<template>
  <div class="min-h-dvh flex flex-col bg-white text-gray-900">
    <NuxtLoadingIndicator />
    <header class="border-b">
      <nav class="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6 overflow-x-auto">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to"
          class="shrink-0 px-3 py-1.5 rounded-full text-sm"
          :class="$route.path===l.to ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'">
          {{ l.label }}
        </NuxtLink>
      </nav>
    </header>

    <main class="mx-auto max-w-7xl w-full px-4 py-10 grow">
      <NuxtPage />
    </main>

    <footer class="border-t">
      <div class="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600 grid gap-2 sm:flex sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} Sorabit</p>
        <div class="flex gap-4">
          <NuxtLink to="/tos">ToS</NuxtLink>
          <NuxtLink to="/sla">SLA</NuxtLink>
          <NuxtLink to="/privacy">Privacy</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
