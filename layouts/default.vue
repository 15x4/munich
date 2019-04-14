<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    if (window) {
      window.onscroll = this.onScroll
    }
  },
  methods: {
    onScroll() {
      const scrollPosY = window.pageYOffset | document.body.scrollTop
      if (scrollPosY > 64) {
        document.getElementsByTagName('body')[0].className = 'scolled'
      } else {
        document.getElementsByTagName('body')[0].className = ''
      }
    }
  }
}
</script>

<style></style>
