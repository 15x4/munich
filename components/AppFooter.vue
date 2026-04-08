<template>
  <footer class="bg-primary text-gray-400 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img
              src="/15x4_logo_munich.png"
              alt="15x4 Munich"
              class="h-8 w-8"
            />
            <span class="text-white font-bold">15x4 Munich</span>
          </div>
          <p class="text-sm">
            Free educational events with four 15-minute talks on any topic.
          </p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Follow Us</h3>
          <div class="flex gap-4">
            <a
              href="https://www.facebook.com/15x4munich/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/15x4munich/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCdYIq_Qa_XsQ7bqbokjVsvw"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-accent transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Legal</h3>
          <p class="text-sm">15x4 Munich e.V.</p>
          <p class="text-sm">Vereins ID: VR 208332</p>
        </div>
      </div>

      <div
        class="mt-8 pt-8 border-t border-gray-700 text-center text-sm"
      >
        <p>&copy; {{ new Date().getFullYear() }} 15x4 Munich e.V. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
