export default function Hero() {
  return `
    <section id="hero" class="hero-title relative min-h-screen xl:min-h-[130vh] flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      
      <!-- Money rain animation - Enhanced -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="money-symbol absolute text-4xl opacity-30 parallax-fast" style="left: 5%; top: 10%; animation-delay: 0s;">💰</div>
        <div class="money-symbol absolute text-3xl opacity-25 parallax-medium" style="left: 15%; top: 20%; animation-delay: 0.5s;">💵</div>
        <div class="money-symbol absolute text-5xl opacity-20 parallax-slow" style="left: 25%; top: 30%; animation-delay: 1s;">💸</div>
        <div class="money-symbol absolute text-4xl opacity-30 parallax-fast" style="left: 35%; top: 15%; animation-delay: 1.5s;">🦈</div>
        <div class="money-symbol absolute text-3xl opacity-25 parallax-medium" style="left: 45%; top: 25%; animation-delay: 2s;">💰</div>
        <div class="money-symbol absolute text-4xl opacity-20 parallax-slow" style="left: 55%; top: 35%; animation-delay: 2.5s;">📈</div>
        <div class="money-symbol absolute text-5xl opacity-30 parallax-fast" style="left: 65%; top: 18%; animation-delay: 3s;">💵</div>
        <div class="money-symbol absolute text-3xl opacity-25 parallax-medium" style="left: 75%; top: 28%; animation-delay: 3.5s;">🏆</div>
        <div class="money-symbol absolute text-4xl opacity-20 parallax-slow" style="left: 85%; top: 12%; animation-delay: 4s;">💸</div>
        <div class="money-symbol absolute text-6xl opacity-15 parallax-fast" style="left: 95%; top: 22%; animation-delay: 4.5s;">💰</div>
        <!-- Bottom row -->
        <div class="money-symbol absolute text-4xl opacity-20 parallax-medium" style="left: 10%; bottom: 20%; animation-delay: 5s;">�</div>
        <div class="money-symbol absolute text-3xl opacity-25 parallax-slow" style="left: 30%; bottom: 30%; animation-delay: 5.5s;">�</div>
        <div class="money-symbol absolute text-5xl opacity-20 parallax-fast" style="left: 50%; bottom: 25%; animation-delay: 6s;">🦈</div>
        <div class="money-symbol absolute text-4xl opacity-25 parallax-medium" style="left: 70%; bottom: 35%; animation-delay: 6.5s;">�</div>
        <div class="money-symbol absolute text-3xl opacity-20 parallax-slow" style="left: 90%; bottom: 15%; animation-delay: 7s;">�</div>
      </div>
      
      <!-- Animated background elements with parallax - Enhanced -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-1/6 left-1/6 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-2xl opacity-80 cuban-pulse parallax-medium"></div>
        <div class="absolute top-1/4 right-1/6 w-80 h-80 bg-mavs-blue rounded-full mix-blend-multiply filter blur-2xl opacity-80 cuban-pulse parallax-fast" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/6 left-1/4 w-88 h-88 bg-shark-gold rounded-full mix-blend-multiply filter blur-2xl opacity-80 cuban-pulse parallax-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 cuban-pulse parallax-medium" style="animation-delay: 3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-60 cuban-pulse parallax-fast" style="animation-delay: 4s;"></div>
      </div>
      
      <div class="relative z-10 text-center max-w-7xl py-20">
        <div class="mb-16">
          <div class="flex items-center justify-center mb-8" data-aos="fade-up">
            <span class="mavs-badge mr-4 text-lg px-6 py-3">🏆 Dallas Mavericks Owner</span>
            <span class="shark-style px-6 py-3 rounded-full text-lg font-bold">🦈 Shark Tank Legend</span>
          </div>
          
          <h1 class="hero-title text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-white mb-10 leading-none" data-aos="fade-up" data-aos-delay="100">
            <span class="attitude-text bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent drop-shadow-2xl">MARK</span><br>
            <span class="text-white drop-shadow-2xl">CUBAN</span>
          </h1>
          
          <div class="cuban-quote text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            "Work like there is someone working 24 hours a day to take it all away from you."
          </div>
          
          <div class="w-40 h-2 bg-gradient-to-r from-accent via-yellow-400 to-accent mx-auto mb-10" data-aos="fade-up" data-aos-delay="300"></div>
        </div>
        
        <div class="mb-16" data-aos="fade-up" data-aos-delay="400">
          <div class="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-light leading-relaxed">
            <span class="cuban-money text-accent font-bold">$5.7B</span> <span class="text-white">EXIT</span> • 
            <span class="attitude-text text-accent font-bold">NBA</span> <span class="text-white">CHAMPION</span> • 
            <span class="cuban-money text-accent font-bold">200+</span> <span class="text-white">INVESTMENTS</span>
          </div>
          
          <div class="text-xl md:text-2xl text-gray-400 font-light">
            <span class="attitude-text">Billionaire</span> • <span class="cuban-money">Entrepreneur</span> • <span class="attitude-text">Investor</span> • <span class="cuban-money">Disruptor</span>
          </div>
        </div>
        
        <div class="hero-cta flex flex-col lg:flex-row gap-8 justify-center items-center mb-16" data-aos="zoom-in" data-aos-delay="600">
          <a href="#portfolio" class="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-accent via-yellow-400 to-accent text-black text-xl font-black rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 cuban-bold">
            <span>SHOW ME THE MONEY</span>
            <span class="ml-3 text-2xl">💰</span>
          </a>
          <a href="#investments" class="group inline-flex items-center px-12 py-6 border-4 border-accent text-accent text-xl font-black rounded-full hover:bg-accent hover:text-black transition-all duration-300 hover:scale-110 cuban-bold">
            <span>MY EMPIRE</span>
            <svg class="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </a>
        </div>
        
        
      
      <!-- Scroll indicator with Cuban flair - Enhanced -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="1200">
        <div class="w-16 h-24 border-4 border-accent rounded-full flex flex-col justify-center items-center bg-black/20 backdrop-blur-sm">
          <div class="text-accent text-3xl mb-2">🦈</div>
          <div class="text-accent text-xs font-bold">DIVE IN</div>
        </div>
      </div>
    </section>
  `
}
      

