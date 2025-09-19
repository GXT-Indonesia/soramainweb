export function useSeo(opts: { title: string; description?: string; canonical?: string; ogImage?: string }) {
  const url = opts.canonical || (useRequestURL ? useRequestURL().href : undefined)
  useSeoMeta({
    title: opts.title,
    description: opts.description || '',
    ogTitle: opts.title,
    ogDescription: opts.description || '',
    ogType: 'website',
    ogUrl: url,
    ogImage: opts.ogImage,
    twitterCard: 'summary_large_image'
  })
  if (url) useHead({ link: [{ rel: 'canonical', href: url }] })
}
