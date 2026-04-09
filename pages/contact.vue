<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('contact.pageTitle') })
</script>

<template>
  <div>
    <section class="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
      <ClientOnly>
        <NetworkBg />
      </ClientOnly>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">{{ t('contact.heroTitle') }}</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('contact.heroDescription') }}
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('contact.joinUs') }}</p>
            <h2 class="text-2xl font-extrabold text-primary uppercase tracking-tight mb-8">{{ t('contact.howToGetInvolved') }}</h2>

            <div class="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1M9_FjiF0NTj2lvQYbA_rDBSi8g_8v0wmJ3ejR_2M-afZFQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer block group"
              >
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    <svg class="w-5 h-5 text-primary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-primary mb-1 uppercase tracking-wider group-hover:text-accent transition-colors">{{ t('contact.becomeASpeaker') }}</h3>
                    <p class="text-gray-500 text-sm">{{ t('contact.becomeASpeakerDesc') }}</p>
                  </div>
                </div>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfVs6SrGNN2lory7kxDjIvp-Hdd2_8oqkpgY0wISrNYhzrxfQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer block group"
              >
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    <svg class="w-5 h-5 text-primary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-primary mb-1 uppercase tracking-wider group-hover:text-accent transition-colors">{{ t('contact.volunteerWithUs') }}</h3>
                    <p class="text-gray-500 text-sm">{{ t('contact.volunteerWithUsDesc') }}</p>
                  </div>
                </div>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc6KcYffi_49lBqrwWtmWq4bLXNbiFZKgOjVHnV70PzrzHL8w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer block group"
              >
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    <svg class="w-5 h-5 text-primary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-primary mb-1 uppercase tracking-wider group-hover:text-accent transition-colors">{{ t('contact.partnerWithUs') }}</h3>
                    <p class="text-gray-500 text-sm">{{ t('contact.partnerWithUsDesc') }}</p>
                  </div>
                </div>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd-Z-wGW1yWX1Bm_ZPyCeeYluhyOuONiguwPS05_IuZiYJITg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer block group"
              >
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    <svg class="w-5 h-5 text-primary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-primary mb-1 uppercase tracking-wider group-hover:text-accent transition-colors">{{ t('contact.generalInquiry') }}</h3>
                    <p class="text-gray-500 text-sm">{{ t('contact.generalInquiryDesc') }}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('contact.social') }}</p>
            <h2 class="text-2xl font-extrabold text-primary uppercase tracking-tight mb-8">{{ t('contact.findUsOnline') }}</h2>

            <div class="space-y-3">
              <a
                href="https://www.facebook.com/15x4munich/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-4 group"
              >
                <div class="w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-primary uppercase tracking-wider group-hover:text-accent transition-colors">Facebook</h3>
                  <p class="text-gray-400 text-xs">@15x4munich</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/15x4munich/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-4 group"
              >
                <div class="w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-primary uppercase tracking-wider group-hover:text-accent transition-colors">Instagram</h3>
                  <p class="text-gray-400 text-xs">@15x4munich</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/channel/UCdYIq_Qa_XsQ7bqbokjVsvw"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-4 group"
              >
                <div class="w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-primary uppercase tracking-wider group-hover:text-accent transition-colors">YouTube</h3>
                  <p class="text-gray-400 text-xs">15x4 Talks - English</p>
                </div>
              </a>
            </div>

            <div class="mt-8 border-2 border-primary/5 rounded-2xl p-6">
              <h3 class="text-sm font-bold text-primary uppercase tracking-wider mb-2">{{ t('contact.legalInformation') }}</h3>
              <p class="text-gray-500 text-sm">15x4 Munich e.V.</p>
              <p class="text-gray-500 text-sm">Vereins ID: VR 208332</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
