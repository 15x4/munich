<script setup lang="ts">
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
    <section
      class="relative bg-primary min-h-[80vh] flex items-center justify-center text-center text-white"
    >
      <div class="max-w-4xl mx-auto px-4">
        <img
          src="/15x4_logo_munich.png"
          alt="15x4 Munich"
          class="h-32 w-32 mx-auto mb-8"
        />
        <h1 class="text-5xl md:text-7xl font-extrabold mb-4">
          Share Your Knowledge!
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Four speakers. Fifteen minutes each. Any topic. Free events for
          curious minds in Munich.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            to="/events"
            class="bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Attend an Event
          </NuxtLink>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1M9_FjiF0NTj2lvQYbA_rDBSi8g_8v0wmJ3ejR_2M-afZFQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Give a Talk
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVs6SrGNN2lory7kxDjIvp-Hdd2_8oqkpgY0wISrNYhzrxfQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Volunteer
          </a>
        </div>
      </div>
    </section>

    <!-- Upcoming Event -->
    <section
      v-if="upcomingEvents && upcomingEvents.length > 0"
      class="py-16 bg-accent/10"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-primary mb-8">Next Event</h2>
        <div
          v-for="event in upcomingEvents"
          :key="event.path"
          class="bg-white rounded-xl shadow-lg p-8"
        >
          <p class="text-accent font-semibold text-lg mb-2">
            {{
              new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </p>
          <h3 class="text-2xl font-bold text-primary mb-2">
            {{ event.title }}
          </h3>
          <p v-if="event.venue" class="text-gray-600 mb-4">
            {{ event.venue }}
          </p>
          <NuxtLink
            :to="event.path"
            class="inline-block bg-primary hover:bg-primary-light text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What is 15x4 -->
    <section class="py-20">
      <div
        class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 class="text-3xl font-bold text-primary mb-6">What is 15x4?</h2>
          <p class="text-lg text-gray-600 mb-4">
            15x4 is a series of non-commercial science communication events
            happening in different countries around the world.
          </p>
          <p class="text-lg text-gray-600 mb-4">
            We organize free educational meetings featuring four popular science
            talks of fifteen minutes each.
          </p>
          <p class="text-lg text-gray-600">
            Our goal is to promote science communication and make knowledge more
            approachable. Anyone can be a speaker!
          </p>
        </div>
        <div>
          <img
            src="/img/we.jpg"
            alt="15x4 Munich team"
            class="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6">
            <img
              src="/img/brain.svg"
              alt="Learn"
              class="h-20 w-20 mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-primary mb-2">Learn</h3>
            <p class="text-gray-600">
              Discover fascinating topics from passionate speakers, completely
              free.
            </p>
          </div>
          <div class="text-center p-6">
            <img
              src="/img/speak.svg"
              alt="Speak"
              class="h-20 w-20 mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-primary mb-2">Speak</h3>
            <p class="text-gray-600">
              Share your knowledge and develop public speaking skills in a
              supportive environment.
            </p>
          </div>
          <div class="text-center p-6">
            <img
              src="/img/hands.svg"
              alt="Volunteer"
              class="h-20 w-20 mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-primary mb-2">Volunteer</h3>
            <p class="text-gray-600">
              Join our international team of driven volunteers who believe in
              knowledge sharing.
            </p>
          </div>
          <div class="text-center p-6">
            <img
              src="/img/heads.svg"
              alt="Partner"
              class="h-20 w-20 mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-primary mb-2">Partner</h3>
            <p class="text-gray-600">
              Collaborate with us to reach an audience of science enthusiasts and
              tech lovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
