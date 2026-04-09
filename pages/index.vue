<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const { data: upcomingEvents } = await useAsyncData('upcoming-events', () =>
  queryCollection('events')
    .where('status', '=', 'upcoming')
    .order('date', 'DESC')
    .limit(1)
    .all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-primary min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
      <ClientOnly>
        <NetworkBg />
      </ClientOnly>
      <div class="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in">
        <img
          src="/15x4_logo_munich.png"
          alt="15x4 Munich"
          class="h-24 w-24 mx-auto mb-8 drop-shadow-2xl"
        />
        <p class="text-accent font-bold text-sm uppercase tracking-[0.25em] mb-4">{{ t('hero.tagline') }}</p>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight uppercase tracking-tight">
          {{ t('hero.title') }}
        </h1>
        <p class="text-lg md:text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
          {{ t('hero.description') }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            :to="localePath('/events')"
            class="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          >
            {{ t('hero.attendEvent') }}
          </NuxtLink>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1M9_FjiF0NTj2lvQYbA_rDBSi8g_8v0wmJ3ejR_2M-afZFQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
          >
            {{ t('hero.giveATalk') }}
          </a>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Upcoming Event -->
    <section
      v-if="upcomingEvents && upcomingEvents.length > 0"
      class="py-20 bg-accent/5"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('upcoming.comingSoon') }}</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-10">{{ t('upcoming.nextEvent') }}</h2>
        <div
          v-for="event in upcomingEvents"
          :key="event.path"
          class="bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
        >
          <p class="text-accent font-semibold text-lg mb-3">
            {{
              new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </p>
          <h3 class="text-2xl md:text-3xl font-bold text-primary mb-3">
            {{ event.title }}
          </h3>
          <p v-if="event.venue" class="text-gray-500 mb-6">
            {{ event.venue }}
          </p>
          <NuxtLink
            :to="event.path"
            class="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block text-sm uppercase tracking-wider"
          >
            {{ t('upcoming.viewDetails') }} &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What is 15x4 -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('whatIs.label') }}</p>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6">{{ t('whatIs.title') }}</h2>
          <p class="text-lg text-gray-600 mb-4 leading-relaxed">
            {{ t('whatIs.p1') }}
          </p>
          <p class="text-lg text-gray-600 mb-4 leading-relaxed">
            {{ t('whatIs.p2') }}
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ t('whatIs.p3') }}
            <strong class="text-primary">{{ t('whatIs.anyone') }}</strong>
          </p>
        </div>
        <div>
          <img
            src="/img/we.jpg"
            alt="15x4 Munich team"
            class="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="py-20 bg-primary text-white">
      <div class="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="w-20 h-20 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
            <span class="text-4xl font-extrabold">4</span>
          </div>
          <p class="text-gray-400 text-xs uppercase tracking-[0.2em]">{{ t('stats.speakers') }}</p>
        </div>
        <div>
          <div class="w-20 h-20 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
            <span class="text-4xl font-extrabold">15</span>
          </div>
          <p class="text-gray-400 text-xs uppercase tracking-[0.2em]">{{ t('stats.minutesEach') }}</p>
        </div>
        <div>
          <div class="w-20 h-20 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
            <span class="text-4xl font-extrabold">0</span>
          </div>
          <p class="text-gray-400 text-xs uppercase tracking-[0.2em]">{{ t('stats.cost') }}</p>
        </div>
        <div>
          <div class="w-20 h-20 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
            <span class="text-4xl font-extrabold">&infin;</span>
          </div>
          <p class="text-gray-400 text-xs uppercase tracking-[0.2em]">{{ t('stats.topics') }}</p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-24 bg-surface">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('features.label') }}</p>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight">{{ t('features.title') }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group">
            <div class="w-16 h-16 mx-auto mb-5 border-2 border-primary/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
              <img src="/img/brain.svg" :alt="t('features.learn')" class="h-7 w-7" />
            </div>
            <h3 class="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{{ t('features.learn') }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ t('features.learnDesc') }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group">
            <div class="w-16 h-16 mx-auto mb-5 border-2 border-primary/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
              <img src="/img/speak.svg" :alt="t('features.speak')" class="h-7 w-7" />
            </div>
            <h3 class="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{{ t('features.speak') }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ t('features.speakDesc') }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group">
            <div class="w-16 h-16 mx-auto mb-5 border-2 border-primary/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
              <img src="/img/hands.svg" :alt="t('features.volunteer')" class="h-7 w-7" />
            </div>
            <h3 class="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{{ t('features.volunteer') }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ t('features.volunteerDesc') }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group">
            <div class="w-16 h-16 mx-auto mb-5 border-2 border-primary/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
              <img src="/img/heads.svg" :alt="t('features.partner')" class="h-7 w-7" />
            </div>
            <h3 class="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{{ t('features.partner') }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ t('features.partnerDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6">{{ t('cta.title') }}</h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          {{ t('cta.description') }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1M9_FjiF0NTj2lvQYbA_rDBSi8g_8v0wmJ3ejR_2M-afZFQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          >
            {{ t('cta.applyToSpeak') }}
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVs6SrGNN2lory7kxDjIvp-Hdd2_8oqkpgY0wISrNYhzrxfQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
          >
            {{ t('cta.volunteer') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
