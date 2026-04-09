<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <section class="bg-primary py-8">
      <ClientOnly>
        <Logo3D />
      </ClientOnly>
    </section>
    <AppFooter />
  </div>
</template>
