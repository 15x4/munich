<script setup lang="ts">
useHead({ title: 'Events - 15x4 Munich' })

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
  <div class="max-w-4xl mx-auto px-4 py-16">
    <h1 class="text-4xl font-extrabold text-primary mb-12">Events</h1>

    <!-- Upcoming -->
    <section v-if="upcomingEvents && upcomingEvents.length > 0" class="mb-16">
      <h2 class="text-2xl font-bold text-accent mb-6">Upcoming Events</h2>
      <div class="space-y-6">
        <NuxtLink
          v-for="event in upcomingEvents"
          :key="event.path"
          :to="event.path"
          class="block bg-accent/5 border-2 border-accent/20 rounded-xl p-6 hover:border-accent transition-colors"
        >
          <p class="text-accent font-semibold mb-1">
            {{
              new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </p>
          <h3 class="text-xl font-bold text-primary mb-1">
            {{ event.title }}
          </h3>
          <p v-if="event.venue" class="text-gray-600">{{ event.venue }}</p>
        </NuxtLink>
      </div>
    </section>

    <!-- Past -->
    <section>
      <h2 class="text-2xl font-bold text-gray-500 mb-6">Past Events</h2>
      <div
        v-if="pastEvents && pastEvents.length > 0"
        class="space-y-4"
      >
        <NuxtLink
          v-for="event in pastEvents"
          :key="event.path"
          :to="event.path"
          class="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
        >
          <p class="text-gray-500 text-sm mb-1">
            {{
              new Date(event.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </p>
          <h3 class="text-lg font-bold text-primary mb-1">
            {{ event.title }}
          </h3>
          <p v-if="event.venue" class="text-gray-500 text-sm">
            {{ event.venue }}
          </p>
        </NuxtLink>
      </div>
      <p v-else class="text-gray-500">No past events yet. Stay tuned!</p>
    </section>
  </div>
</template>
