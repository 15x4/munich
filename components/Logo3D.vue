<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref<HTMLDivElement>()
let animationId: number
let cleanup: (() => void) | null = null

onMounted(async () => {
  if (!container.value) return

  const THREE = await import('three')

  const width = container.value.clientWidth
  const height = 300

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.z = 3.5

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('/15x4_logo_munich.png')
  texture.colorSpace = THREE.SRGBColorSpace

  const geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6)
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0.1,
    roughness: 0.4,
  })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xffffff, 1.2, 100)
  pointLight.position.set(3, 3, 5)
  scene.add(pointLight)

  const accentLight = new THREE.PointLight(0x0d9488, 0.5, 100)
  accentLight.position.set(-3, -2, 3)
  scene.add(accentLight)

  let mouseX = 0
  let mouseY = 0

  const onMouseMove = (e: MouseEvent) => {
    const rect = container.value?.getBoundingClientRect()
    if (!rect) return
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
  }

  container.value.addEventListener('mousemove', onMouseMove)

  const animate = () => {
    animationId = requestAnimationFrame(animate)
    cube.rotation.y += 0.005
    cube.rotation.x += 0.002
    cube.rotation.y += mouseX * 0.02
    cube.rotation.x += mouseY * 0.02
    renderer.render(scene, camera)
  }
  animate()

  const onResize = () => {
    if (!container.value) return
    const w = container.value.clientWidth
    camera.aspect = w / height
    camera.updateProjectionMatrix()
    renderer.setSize(w, height)
  }
  window.addEventListener('resize', onResize)

  cleanup = () => {
    cancelAnimationFrame(animationId)
    container.value?.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    geometry.dispose()
    material.dispose()
    texture.dispose()
  }
})

onUnmounted(() => {
  cleanup?.()
})
</script>

<template>
  <div ref="container" class="w-full cursor-grab active:cursor-grabbing" />
</template>
