<template>
  <div
    ref="canvas"
    class="logo-15x4-3d h-screen w-screen"
    @mousemove="updateCoordinates"
  ></div>
</template>

<script>
const THREE = require('three')

export default {
  data: () => ({
    mostRecentCoordinates: {
      x: 0,
      y: 0
    }
  }),
  mounted() {
    const width = 960
    const height = 500

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    this.$refs.canvas.appendChild(renderer.domElement)

    // create the cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const loader = new THREE.TextureLoader()
    const logo = loader.load('/15x4_logo_munich.png')
    const material = new THREE.MeshBasicMaterial({ map: logo })

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // create lights
    scene.add(new THREE.AmbientLight(0xff0040))

    const light = new THREE.PointLight(0xffffff, 6, 40)
    light.position.set(20, 20, 20)
    scene.add(light)

    // set the camera
    camera.position.z = 5

    const self = this

    // define an animation loop
    const render = function() {
      requestAnimationFrame(render)

      // rotate the cube
      cube.rotation.x = 0.6
      cube.rotation.x = (self.mostRecentCoordinates.y - 350) / 600
      cube.rotation.y = (self.mostRecentCoordinates.x + 150) / 600

      renderer.render(scene, camera)
    }

    render()
  },
  methods: {
    updateCoordinates(event) {
      this.mostRecentCoordinates = {
        x: event.clientX,
        y: event.clientY
      }
    }
  }
}
</script>

<style>
.logo-15x4-3d {
  @apply pt-32;
}
</style>
