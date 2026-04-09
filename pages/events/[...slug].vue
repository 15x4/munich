<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const slug = (route.params.slug as string[]).join('/')

const { data: event } = await useAsyncData(`event-${slug}`, () =>
  queryCollection('events').path(`/events/${slug}`).first()
)

if (!event.value) {
  throw createError({ statusCode: 404, message: 'Event not found' })
}

useHead({ title: `${event.value.title} - 15x4 Munich` })
</script>

<template>
  <div v-if="event">
    <section class="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
      <ClientOnly>
        <NetworkBg />
      </ClientOnly>
      <div class="relative z-10 max-w-3xl mx-auto px-4">
        <NuxtLink
          :to="localePath('/events')"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-8 text-sm uppercase tracking-wider font-semibold"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {{ t('eventDetail.allEvents') }}
        </NuxtLink>

        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
          :class="event.status === 'upcoming' ? 'bg-accent/20 text-accent' : 'bg-white/10 text-gray-400'"
        >
          {{ event.status === 'upcoming' ? t('eventDetail.upcoming') : t('eventDetail.past') }}
        </span>

        <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tight">
          {{ event.title }}
        </h1>

        <div class="flex flex-wrap gap-4 text-gray-400 text-sm">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
          </span>
          <span v-if="event.venue" class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ event.venue }}
          </span>
        </div>
      </div>
    </section>

    <div class="max-w-3xl mx-auto px-4 py-16">
      <div v-if="event.talks && event.talks.length > 0" class="mb-12">
        <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('eventDetail.lineUp') }}</p>
        <h2 class="text-2xl font-extrabold text-primary uppercase tracking-tight mb-8">{{ t('eventDetail.talks') }}</h2>
        <div class="space-y-4">
          <div
            v-for="(talk, i) in event.talks"
            :key="i"
            class="bg-white rounded-2xl p-6 shadow-sm flex gap-5"
          >
            <div class="shrink-0 w-10 h-10 border-2 border-primary/10 rounded-full flex items-center justify-center">
              <span class="text-primary font-bold text-sm">{{ i + 1 }}</span>
            </div>
            <div>
              <h3 class="font-bold text-primary mb-1">{{ talk.title }}</h3>
              <p class="text-accent text-sm font-medium mb-2">{{ talk.speaker }}</p>
              <p v-if="talk.description" class="text-gray-500 text-sm leading-relaxed">
                {{ talk.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContentRenderer :value="event" class="prose max-w-none" />
    </div>
  </div>
</template>
