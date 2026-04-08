<script setup lang="ts">
const mobileMenuOpen = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-primary shadow-lg">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            src="/15x4_logo_munich.png"
            alt="15x4 Munich"
            class="h-10 w-10"
          />
          <span class="text-white font-bold text-lg hidden sm:block"
            >15x4 Munich</span
          >
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-gray-300 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wide"
            active-class="!text-accent"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <button
          class="md:hidden text-white p-2"
          aria-label="Toggle menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden pb-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block py-2 text-gray-300 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wide"
          active-class="!text-accent"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
