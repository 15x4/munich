import posthog from 'posthog-js'

// Page analytics (PostHog EU, own project). Cookieless: PostHog counts unique
// visitors per day from a server-side hash with a daily salt, so nothing is
// stored in the visitor's browser and no cookie banner is needed. Requires
// "Cookieless server hash mode" in the PostHog project settings.
export default defineNuxtPlugin(() => {
  const key = useRuntimeConfig().public.posthogKey as string
  if (!key) return

  const client = posthog.init(key, {
    api_host: 'https://eu.i.posthog.com',
    cookieless_mode: 'always',
    capture_pageview: false,
    capture_pageleave: true,
  })

  // First pageview by hand, then one per route change. Hydration also fires
  // router.afterEach for the landing page, so only a new path counts.
  let lastPath = window.location.pathname + window.location.search
  posthog.capture('$pageview')
  useRouter().afterEach((to) => {
    if (to.fullPath === lastPath) return
    lastPath = to.fullPath
    posthog.capture('$pageview', { $current_url: window.location.origin + to.fullPath })
  })

  return { provide: { posthog: () => client } }
})
