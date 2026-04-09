<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement>()
let animationId: number
let cleanup: (() => void) | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

onMounted(() => {
  if (!canvas.value) return
  const ctx = canvas.value.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  const particles: Particle[] = []
  const connectionDistance = 150
  const particleCount = 60

  const resize = () => {
    const parent = canvas.value?.parentElement
    if (!parent || !canvas.value) return
    width = parent.clientWidth
    height = parent.clientHeight
    canvas.value.width = width * window.devicePixelRatio
    canvas.value.height = height * window.devicePixelRatio
    canvas.value.style.width = width + 'px'
    canvas.value.style.height = height + 'px'
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  }

  const init = () => {
    resize()
    particles.length = 0
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      })
    }
  }

  let mouseX = -1000
  let mouseY = -1000

  const onMouseMove = (e: MouseEvent) => {
    const rect = canvas.value?.getBoundingClientRect()
    if (!rect) return
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }

  const onMouseLeave = () => {
    mouseX = -1000
    mouseY = -1000
  }

  const animate = () => {
    animationId = requestAnimationFrame(animate)
    ctx.clearRect(0, 0, width, height)

    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < connectionDistance) {
          const opacity = (1 - dist / connectionDistance) * 0.15
          ctx.beginPath()
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }

      // Mouse connections
      const dx = particles[i].x - mouseX
      const dy = particles[i].y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < connectionDistance * 1.5) {
        const opacity = (1 - dist / (connectionDistance * 1.5)) * 0.3
        ctx.beginPath()
        ctx.strokeStyle = `rgba(13, 148, 136, ${opacity})`
        ctx.lineWidth = 0.8
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(mouseX, mouseY)
        ctx.stroke()
      }
    }

    // Draw particles
    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.fill()
    }
  }

  init()
  animate()

  const parent = canvas.value.parentElement
  parent?.addEventListener('mousemove', onMouseMove)
  parent?.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('resize', () => {
    resize()
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  })

  cleanup = () => {
    cancelAnimationFrame(animationId)
    parent?.removeEventListener('mousemove', onMouseMove)
    parent?.removeEventListener('mouseleave', onMouseLeave)
  }
})

onUnmounted(() => {
  cleanup?.()
})
</script>

<template>
  <canvas ref="canvas" class="absolute inset-0" style="pointer-events: none" />
</template>
