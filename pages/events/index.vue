<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('events.pageTitle') })

const { data: upcomingEvents } = await useAsyncData('upcoming', () =>
  queryCollection('events')
    .where('status', '=', 'upcoming')
    .order('date', 'DESC')
    .all()
)

const { data: pastEvents } = await useAsyncData('past', () =>
  queryCollection('events')
    .where('status', '=', 'past')
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div>
    <section class="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
      <ClientOnly>
        <NetworkBg />
      </ClientOnly>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">{{ t('events.heroTitle') }}</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('events.heroDescription') }}
        </p>
      </div>
    </section>

    <div class="max-w-4xl mx-auto px-4 py-20">
      <!-- Upcoming -->
      <section v-if="upcomingEvents && upcomingEvents.length > 0" class="mb-20">
        <p class="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('events.comingUp') }}</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-8">{{ t('events.upcomingEvents') }}</h2>
        <div class="space-y-6">
          <NuxtLink
            v-for="event in upcomingEvents"
            :key="event.path"
            :to="event.path"
            class="block bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent hover:shadow-lg transition-all duration-300 group"
          >
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="shrink-0 w-20 h-20 border-2 border-primary/10 rounded-full flex flex-col items-center justify-center group-hover:border-accent transition-colors">
                <span class="text-primary font-bold text-2xl leading-none">
                  {{ new Date(event.date).getDate() }}
                </span>
                <span class="text-gray-400 text-xs uppercase font-semibold">
                  {{ new Date(event.date).toLocaleDateString('en-US', { month: 'short' }) }}
                </span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                  {{ event.title }}
                </h3>
                <p class="text-gray-500 text-sm">
                  <span>{{ new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
                  <span v-if="event.time" class="ml-2">&middot; {{ event.time }}</span>
                  <span v-if="event.venue" class="ml-2">&middot; {{ event.venue }}</span>
                </p>
              </div>
              <div class="md:ml-auto shrink-0">
                <span class="text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block uppercase tracking-wider">
                  {{ t('events.details') }} &rarr;
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- No upcoming -->
      <section v-else class="mb-20 text-center py-12 bg-surface rounded-2xl">
        <p class="text-gray-400 text-lg mb-4">{{ t('events.noUpcoming') }}</p>
        <p class="text-gray-500">{{ t('events.followUs') }}</p>
      </section>

      <!-- Past -->
      <section>
        <p class="text-gray-400 font-bold text-xs uppercase tracking-[0.25em] mb-3">{{ t('events.archive') }}</p>
        <h2 class="text-2xl font-bold text-gray-400 uppercase tracking-tight mb-8">{{ t('events.pastEvents') }}</h2>
        <div v-if="pastEvents && pastEvents.length > 0" class="space-y-3">
          <NuxtLink
            v-for="event in pastEvents"
            :key="event.path"
            :to="event.path"
            class="block bg-surface rounded-xl p-6 hover:bg-gray-100 transition-all group"
          >
            <div class="flex items-center gap-4">
              <div>
                <p class="text-gray-400 text-sm mb-1">
                  {{ new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                </p>
                <h3 class="font-bold text-primary group-hover:text-accent transition-colors">
                  {{ event.title }}
                </h3>
              </div>
              <span class="ml-auto text-gray-300 group-hover:text-accent transition-colors">&rarr;</span>
            </div>
          </NuxtLink>
        </div>
        <p v-else class="text-gray-400">{{ t('events.noPast') }}</p>
      </section>
    </div>
  </div>
</template>
