const fetchPrice = async (tld: string, type='register', regperiod='1') => {
  const u = `https://portal.sorabit.com/feeds/domainprice.php?tld=${encodeURIComponent(tld)}&type=${encodeURIComponent(type)}&regperiod=${encodeURIComponent(regperiod)}`
  const r = await fetch(u); const t = await r.text()
  const m = t.match(/document\.write\('([\d.]+)'\)/)
  return m ? Number(m[1]) : null
}
export default defineEventHandler(async (event) => {
  const q = getQuery(event)
  const tlds = String(q.tld ?? '.com').split(',').map(s=>s.trim()).filter(Boolean)
  const type = String(q.type ?? 'register'); const regperiod = String(q.regperiod ?? '1')
  const out: Record<string, number|null> = {}
  await Promise.all(tlds.map(async (t)=>{ out[t]=await fetchPrice(t,type,regperiod) }))
  const cc = 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400'
  setResponseHeader(event, 'Cache-Control', cc); setResponseHeader(event, 'CDN-Cache-Control', cc)
  return { type, regperiod: Number(regperiod), prices: out }
})
