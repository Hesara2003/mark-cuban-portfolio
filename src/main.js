import './style.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Investments from './components/Investments'
import SharkTankSimulator from './components/SharkTankSimulator'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './shark-tank-simulator.js'

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
  ${LoadingScreen()}
  ${Navbar()}
  ${Hero()}
  ${About()}
  ${Portfolio()}
  ${Investments()}
  ${SharkTankSimulator()}
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
  // Cuban Quotes for Loading Screen
  const cubanQuotes = [
    "Work like there is someone working 24 hours a day to take it all away from you.",
    "It doesn't matter how many times you fail. You only have to be right once.",
    "The stock market is probably the most expensive casino in the world.",
    "I love to compete. To me, business is the ultimate sport.",
    "Sweat equity is the most valuable equity there is.",
    "Everyone has got the will to win; it's only those with the will to prepare that do win.",
    "In business, to be a success, you only have to be right once.",
    "If you're prepared and you know what it takes, it's not a risk. You just have to figure out how to get there.",
    "You've got to be very careful if you don't know where you are going, because you might not get there.",
    "The key is to live life on your own terms. Don't let the noise of others' opinions drown out your inner voice."
  ];

  // Loading Screen Animation
  let currentQuoteIndex = 0;
  let loadingProgress = 0;
  
  // Animate loading screen
  const loadingSteps = [
    { text: "Loading your empire...", progress: 20 },
    { text: "Counting your money...", progress: 40 },
    { text: "Preparing the sharks...", progress: 60 },
    { text: "Building your portfolio...", progress: 80 },
    { text: "Ready to dominate!", progress: 100 }
  ];
  
  let currentStep = 0;
  
  // Quote rotation
  const rotateQuote = () => {
    gsap.fromTo('#cuban-quote', {
      opacity: 1,
      y: 0
    }, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % cubanQuotes.length;
        document.getElementById('cuban-quote').textContent = cubanQuotes[currentQuoteIndex];
        gsap.fromTo('#cuban-quote', {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
    });
  };
  
  // Loading progress animation
  const updateLoading = () => {
    if (currentStep < loadingSteps.length) {
      const step = loadingSteps[currentStep];
      
      // Update progress bar
      gsap.to('#loading-progress', {
        width: step.progress + '%',
        duration: 0.8,
        ease: 'power2.out'
      });
      
      // Update loading text
      gsap.fromTo('#loading-text', {
        opacity: 1
      }, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          document.getElementById('loading-text').textContent = step.text;
          gsap.to('#loading-text', {
            opacity: 1,
            duration: 0.3
          });
        }
      });
      
      // Animate loading icons
      gsap.to(`#icon-${(currentStep % 4) + 1}`, {
        opacity: 1,
        scale: 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 1
      });
      
      currentStep++;
      
      if (currentStep < loadingSteps.length) {
        setTimeout(updateLoading, 1200);
      } else {
        // Loading complete - hide loading screen
        setTimeout(() => {
          gsap.to('#loading-screen', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              document.getElementById('loading-screen').style.display = 'none';
              // Initialize AOS after loading
              AOS.refresh();
            }
          });
        }, 800);
      }
    }
  };
  
  // Start loading animation
  setTimeout(updateLoading, 1000);
  
  // Start quote rotation
  setInterval(rotateQuote, 3000);
  
  // Loading screen title animation
  gsap.fromTo('.loading-title', {
    scale: 0.8,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: 'back.out(1.7)'
  });

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

  // Stats counter animation with Cuban flair
  document.querySelectorAll('.stat-number').forEach((counter, index) => {
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(counter, {
          innerText: 0,
          opacity: 0
        }, {
          innerText: counter.dataset.value,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 }
        });
        
        // Add Cuban-style exclamation
        const exclamations = ['💰', '🚀', '🦈', '🔥'];
        const exclamation = document.createElement('span');
        exclamation.textContent = exclamations[index % exclamations.length];
        exclamation.className = 'absolute -top-2 -right-2 text-lg stat-exclamation';
        counter.parentElement.style.position = 'relative';
        counter.parentElement.appendChild(exclamation);
        
        gsap.fromTo(exclamation, {
          scale: 0,
          rotation: -180
        }, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
        
        // Remove exclamation after animation
        setTimeout(() => {
          gsap.to(exclamation, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            onComplete: () => exclamation.remove()
          });
        }, 2000);
      }
    });
  });

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
