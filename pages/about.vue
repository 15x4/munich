<script setup lang="ts">
useHead({ title: 'About - 15x4 Munich' })

const { data: team } = await useAsyncData('team', () =>
  queryCollection('team').order('order', 'ASC').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-primary text-white py-20">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">About 15x4</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          A global movement making knowledge accessible through short,
          engaging talks.
        </p>
      </div>
    </section>

    <!-- How it Works -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-8">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <div
              class="text-4xl font-extrabold text-accent mb-4"
            >
              4
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Speakers</h3>
            <p class="text-gray-600">
              Each event features four speakers who are passionate about their
              topic. No academic credentials required -- just enthusiasm and
              curiosity.
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div
              class="text-4xl font-extrabold text-accent mb-4"
            >
              15
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Minutes</h3>
            <p class="text-gray-600">
              Each talk is exactly 15 minutes. This constraint forces speakers
              to distill complex ideas into clear, engaging presentations.
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div
              class="text-4xl font-extrabold text-accent mb-4"
            >
              0
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Cost</h3>
            <p class="text-gray-600">
              All events are completely free. Knowledge should be accessible to
              everyone, with no barriers to entry.
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div
              class="text-4xl font-extrabold text-accent mb-4"
            >
              &infin;
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Topics</h3>
            <p class="text-gray-600">
              From quantum physics to cooking, from history to AI. Any topic is
              welcome as long as the speaker is passionate about it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-8">Our Story</h2>
        <div class="prose max-w-none text-gray-600">
          <p class="text-lg mb-4">
            15x4 started as a grassroots science communication initiative and
            has grown into a global network with chapters in multiple countries.
          </p>
          <p class="text-lg mb-4">
            The Munich chapter was founded in 2017 by a group of science
            enthusiasts who wanted to bring this format to the city. After
            hosting many events and building a wonderful community, we are now
            being revived in 2026 with fresh energy and new ideas.
          </p>
          <p class="text-lg">
            Our mission remains the same: make knowledge sharing fun, accessible,
            and community-driven.
          </p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section v-if="team && team.length > 0" class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-8">Organizers</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.path"
            class="text-center"
          >
            <div
              class="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary"
            >
              {{ member.title.charAt(0) }}
            </div>
            <h3 class="text-lg font-bold text-primary">{{ member.title }}</h3>
            <p v-if="member.role" class="text-gray-500">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
