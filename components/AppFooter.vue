<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <footer class="bg-primary text-gray-400">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3 mb-4 group">
            <img
              src="/15x4_logo_munich.png"
              alt="15x4 Munich"
              class="h-8 w-8 transition-transform group-hover:scale-110"
            />
            <span class="text-white font-bold tracking-tight">15x4 Munich</span>
          </NuxtLink>
          <p class="text-sm leading-relaxed">
            {{ t('footer.description') }}
          </p>
        </div>

        <div>
          <h3 class="text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">{{ t('footer.followUs') }}</h3>
          <div class="space-y-3">
            <a
              href="https://www.facebook.com/15x4munich/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/15x4munich/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCdYIq_Qa_XsQ7bqbokjVsvw"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm hover:text-accent transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">{{ t('footer.legal') }}</h3>
          <p class="text-sm">15x4 Munich e.V.</p>
          <p class="text-sm">Vereins ID: VR 208332</p>
        </div>
      </div>
    </div>

    <div class="border-t border-white/5">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-gray-500">
        &copy; {{ new Date().getFullYear() }} 15x4 Munich e.V.
      </div>
    </div>
  </footer>
</template>
