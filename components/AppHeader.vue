<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const langMenuOpen = ref(false)

const links = computed(() => [
  { label: t('nav.home'), to: localePath('/') },
  { label: t('nav.events'), to: localePath('/events') },
  { label: t('nav.about'), to: localePath('/about') },
  { label: t('nav.contact'), to: localePath('/contact') },
])

const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).filter(
    (l) => l.code !== locale.value
  )
)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.lang-switcher')) {
      langMenuOpen.value = false
    }
  })
})
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group">
          <img
            src="/15x4_logo_munich.png"
            alt="15x4 Munich"
            class="h-9 w-9 transition-transform group-hover:scale-110"
          />
          <span class="text-white font-bold text-lg hidden sm:block tracking-tight">
            15x4 Munich
          </span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-sm font-semibold uppercase tracking-wider"
            active-class="!text-white !bg-white/10"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1M9_FjiF0NTj2lvQYbA_rDBSi8g_8v0wmJ3ejR_2M-afZFQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-4 bg-accent hover:bg-accent-dark text-white text-sm font-bold px-5 py-2 rounded-full transition-all uppercase tracking-wider"
          >
            {{ t('nav.giveATalk') }}
          </a>

          <!-- Language Switcher (Desktop) -->
          <div class="relative ml-3 lang-switcher">
            <button
              class="flex items-center gap-1 text-sm font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-all"
              :class="langMenuOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/10'"
              @click="langMenuOpen = !langMenuOpen"
            >
              {{ locale.toUpperCase() }}
              <svg class="w-3 h-3 transition-transform" :class="langMenuOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition
              enter-active-class="transition-all duration-150 ease-out"
              enter-from-class="opacity-0 -translate-y-1 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition-all duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 -translate-y-1 scale-95"
            >
              <div
                v-if="langMenuOpen"
                class="absolute right-0 top-full mt-1 bg-primary border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[60px]"
              >
                <NuxtLink
                  v-for="loc in availableLocales"
                  :key="loc.code"
                  :to="switchLocalePath(loc.code)"
                  class="block px-4 py-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-accent hover:bg-white/5 transition-all text-center"
                  @click="langMenuOpen = false"
                >
                  {{ loc.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </div>

        <button
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="block py-3 px-4 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm font-semibold uppercase tracking-wider"
            active-class="!text-white !bg-white/10"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1M9_FjiF0NTj2lvQYbA_rDBSi8g_8v0wmJ3ejR_2M-afZFQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="block py-3 px-4 text-accent font-bold text-sm uppercase tracking-wider"
          >
            {{ t('nav.giveATalk') }} &rarr;
          </a>

          <!-- Language Switcher (Mobile) -->
          <div class="flex gap-2 px-4 pt-2 border-t border-white/10 mt-2">
            <NuxtLink
              v-for="loc in (locales as Array<{ code: string; name: string }>)"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              class="text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all"
              :class="loc.code === locale ? 'bg-accent text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'"
              @click="mobileMenuOpen = false"
            >
              {{ loc.name }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
