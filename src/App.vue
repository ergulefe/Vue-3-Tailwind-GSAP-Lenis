<template>
  <div class="min-h-screen bg-gray-100">

    <section class="h-screen flex justify-center items-center bg-blue-500">
      <h1 class="text-4xl font-bold text-white">Lenis + GSAP Scroll Demo</h1>
    </section>

    <section class="h-screen flex justify-center items-center bg-green-500">
      <h2 ref="animateMe" class="text-3xl font-bold text-white opacity-0">
        GSAP slowly
      </h2>
    </section>

    <section class="h-screen flex justify-center items-center bg-purple-500">
      <h2 class="text-3xl font-bold text-white">ScrollTrigger Effects</h2>
    </section>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import Lenis from 'lenis' 

export default {
  setup() {
    const animateMe = ref(null)

    onMounted(() => {
      // Lenis smooth scroll
      const lenis = new Lenis({
        duration: 1,
        easing: (t) => t,
        smooth: true,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // GSAP ScrollTrigger animasyonu
      gsap.to(animateMe.value, {
        opacity: 1,
        y: -50,
        duration: 1.5,
        scrollTrigger: {
          trigger: animateMe.value,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return { animateMe }
  },
}
</script>
