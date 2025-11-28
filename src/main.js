import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { gsap } from "gsap";
import Lenis from 'lenis'
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis({
    duration: 1.2,
    easing: t => t,
    smooth: true,
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


createApp(App).mount('#app')
