<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('about.pageTitle') })

const { data: team } = await useAsyncData('team', () =>
  queryCollection('team').order('order', 'ASC').all()
)
</script>

<template>
  <div>
    <section class="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
      <ClientOnly>
        <NetworkBg />
      </ClientOnly>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">{{ t('about.heroTitle') }}</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('about.heroDescription') }}
        </p>
      </div>
    </section>

    <!-- How it Works -->
    <section class="py-24">
      <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-16">
          <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('about.formatLabel') }}</p>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight">{{ t('about.howItWorks') }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div class="w-16 h-16 border-2 border-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:border-accent transition-colors">
              <span class="text-3xl font-extrabold text-primary">4</span>
            </div>
            <h3 class="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{{ t('about.speakersTitle') }}</h3>
            <p class="text-gray-500 leading-relaxed">
              {{ t('about.speakersDesc') }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div class="w-16 h-16 border-2 border-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:border-accent transition-colors">
              <span class="text-3xl font-extrabold text-primary">15</span>
            </div>
            <h3 class="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{{ t('about.minutesTitle') }}</h3>
            <p class="text-gray-500 leading-relaxed">
              {{ t('about.minutesDesc') }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div class="w-16 h-16 border-2 border-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:border-accent transition-colors">
              <span class="text-3xl font-extrabold text-primary">0</span>
            </div>
            <h3 class="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{{ t('about.costTitle') }}</h3>
            <p class="text-gray-500 leading-relaxed">
              {{ t('about.costDesc') }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div class="w-16 h-16 border-2 border-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:border-accent transition-colors">
              <span class="text-3xl font-extrabold text-primary">&infin;</span>
            </div>
            <h3 class="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{{ t('about.topicsTitle') }}</h3>
            <p class="text-gray-500 leading-relaxed">
              {{ t('about.topicsDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="py-24 bg-surface">
      <div class="max-w-3xl mx-auto px-4">
        <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('about.since') }}</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-8">{{ t('about.ourStory') }}</h2>
        <div class="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            {{ t('about.storyP1') }}
          </p>
          <p>
            {{ t('about.storyP2') }}
          </p>
          <p>
            {{ t('about.storyP3') }}
            <strong class="text-primary">{{ t('about.storyP3Bold') }}</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section v-if="team && team.length > 0" class="py-24">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16">
          <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('about.thePeople') }}</p>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight">{{ t('about.organizers') }}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.path"
            class="text-center group"
          >
            <div class="w-24 h-24 border-2 border-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary group-hover:border-accent transition-colors">
              {{ member.title.charAt(0) }}
            </div>
            <h3 class="text-sm font-bold text-primary uppercase tracking-wider">{{ member.title }}</h3>
            <p v-if="member.role" class="text-gray-500 text-sm mt-1">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
