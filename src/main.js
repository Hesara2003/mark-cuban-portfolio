import './style.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Investments from './components/Investments'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize AOS
AOS.init({
  duration: 1000,   // animation duration
  offset: 120,      // offset (in px) from original trigger point
  once: true,       // animate only once
  easing: 'ease-out-cubic'
})

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${About()}
  ${Portfolio()}
  ${Investments()}
  ${Media()}
  ${Contact()}
  ${Footer()}
`

// Initialize GSAP animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initGSAPAnimations()
})

// Wait for content to be rendered
setTimeout(() => {
  initGSAPAnimations()
}, 100)

function initGSAPAnimations() {
  // Navbar animation
  gsap.fromTo('#navbar', {
    y: -100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  })

  // Hero text animations
  gsap.timeline()
    .fromTo('.hero-title', {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    })
    .fromTo('.hero-subtitle', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5')
    .fromTo('.hero-cta', {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.3')

  // Floating elements animation
  gsap.to('.floating-element', {
    y: -20,
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.2
  })

  // Portfolio cards stagger animation
  gsap.fromTo('.portfolio-card', {
    y: 100,
    opacity: 0,
    scale: 0.8
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#portfolio',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  })

  // Investment cards animation with Cuban flair
  gsap.fromTo('.investment-card', {
    x: -100,
    opacity: 0,
    rotation: -5
  }, {
    x: 0,
    opacity: 1,
    rotation: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '#investments',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // Investment card hover effects
  document.querySelectorAll('.investment-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      })
      // Add shark attack animation
      card.classList.add('shark-attack')
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
      // Remove shark attack animation
      setTimeout(() => card.classList.remove('shark-attack'), 500)
    })
  })

  // Money counter animation with Cuban attitude
  gsap.fromTo('.money-counter', {
    scale: 0.8,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.investment-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // Deal matrix items animation
  gsap.fromTo('.deal-matrix-item', {
    x: -50,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.no-bs',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // Cuban money animation
  gsap.to('.cuban-money', {
    textShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
    duration: 1,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  })

  // Attitude text glow
  gsap.to('.attitude-text', {
    textShadow: '0 0 15px rgba(0, 255, 136, 0.6)',
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.3
  })

  // Stats counter animation
  gsap.fromTo('.stat-number', {
    innerText: 0,
    opacity: 0
  }, {
    innerText: (i, target) => target.dataset.value,
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
    snap: { innerText: 1 },
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.stats-container',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // Media cards hover animations
  document.querySelectorAll('.media-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // Contact form animation
  gsap.fromTo('.contact-form', {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // Footer animations
  gsap.fromTo('.footer-container', {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.footer-container',
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  })

  // Footer sections stagger animation
  gsap.fromTo('.footer-section', {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.footer-container',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  })

  // Footer social links hover animation
  gsap.set('.footer-social-link', {
    scale: 1
  })
  
  document.querySelectorAll('.footer-social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // Footer tech badges animation
  gsap.fromTo('.footer-tech-badge', {
    scale: 0.8,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.footer-tech',
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  })

  // Subtle parallax effects for background elements
  gsap.to('.parallax-bg', {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })

  // Individual parallax elements with different speeds
  document.querySelectorAll('.parallax-element').forEach(element => {
    const speed = parseFloat(element.dataset.parallaxSpeed) || 0.1
    gsap.to(element, {
      yPercent: -speed * 30,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })
  })

  // Existing parallax effects with reduced intensity
  gsap.to('.parallax-slow', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })

  gsap.to('.parallax-fast', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
    }
  })
}
