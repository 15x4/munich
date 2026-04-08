<script setup lang="ts">
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
  <div v-if="event" class="max-w-3xl mx-auto px-4 py-16">
    <NuxtLink
      to="/events"
      class="text-accent hover:underline mb-8 inline-block"
    >
      &larr; All Events
    </NuxtLink>

    <span
      class="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
      :class="
        event.status === 'upcoming'
          ? 'bg-accent/10 text-accent'
          : 'bg-gray-100 text-gray-500'
      "
    >
      {{ event.status === 'upcoming' ? 'Upcoming' : 'Past' }}
    </span>

    <h1 class="text-4xl font-extrabold text-primary mb-4">
      {{ event.title }}
    </h1>

    <div class="flex flex-wrap gap-4 text-gray-600 mb-8">
      <span>
        {{
          new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </span>
      <span v-if="event.venue">{{ event.venue }}</span>
    </div>

    <div v-if="event.talks && event.talks.length > 0" class="mb-12">
      <h2 class="text-2xl font-bold text-primary mb-6">Talks</h2>
      <div class="space-y-6">
        <div
          v-for="(talk, i) in event.talks"
          :key="i"
          class="bg-gray-50 rounded-xl p-6"
        >
          <h3 class="text-lg font-bold text-primary mb-1">
            {{ talk.title }}
          </h3>
          <p class="text-accent font-medium mb-2">{{ talk.speaker }}</p>
          <p v-if="talk.description" class="text-gray-600">
            {{ talk.description }}
          </p>
        </div>
      </div>
    </div>

    <ContentRenderer :value="event" class="prose max-w-none" />
  </div>
</template>
