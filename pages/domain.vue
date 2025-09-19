<script setup lang="ts">
useSeo({ title: 'Domain — Sorabit', description: 'Cek harga domain populer.' })
const tlds = '.com,.net,.org,.id,.co.id'
const { data } = await useFetch('/api/domain/bulk', { query: { tld: tlds, type: 'register', regperiod: 1 } })
const rp = (n:number|null)=> n==null ? 'N/A' : new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n)
</script>

<template>
  <section class="grid gap-6">
    <h1 class="text-2xl font-bold">Domain</h1>
    <div class="grid sm:grid-cols-3 gap-4">
      <div v-for="(v,tld) in data?.prices" :key="tld" class="border rounded-2xl p-5">
        <div class="text-sm text-gray-600">{{ tld }} / 1 tahun</div>
        <div class="text-2xl font-semibold mt-1">{{ rp(v as number|null) }}</div>
        <p class="text-xs text-gray-500 mt-3">Sumber: portal.sorabit.com</p>
      </div>
    </div>
  </section>
</template>
