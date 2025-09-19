export default defineEventHandler(async (event) => {
  const { tld = '.com', type = 'register', regperiod = '1' } = getQuery(event)
  const u = `https://portal.sorabit.com/feeds/domainprice.php?tld=${encodeURIComponent(String(tld))}&type=${encodeURIComponent(String(type))}&regperiod=${encodeURIComponent(String(regperiod))}`
  const r = await fetch(u, { headers: { 'User-Agent': 'SorabitNuxt' } })
  const t = await r.text()
  const m = t.match(/document\.write\('([\d.]+)'\)/)
  if (!m) throw createError({ statusCode: 502, statusMessage: 'Bad upstream format' })
  const price = Number(m[1])
  const cc = 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400'
  setResponseHeader(event, 'Cache-Control', cc)
  setResponseHeader(event, 'CDN-Cache-Control', cc)
  return { tld, type, regperiod: Number(regperiod), price }
})
