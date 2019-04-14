<template>
  <section class="container h-screen w-screen">
    <div>
      <Logo />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo3D.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
