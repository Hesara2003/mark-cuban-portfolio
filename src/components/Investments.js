export default function Investments() {
  return `
    <section class="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-900 relative overflow-hidden" id="investments">
      <!-- Mark Cuban PNG Background - Left Side -->
      <div class="absolute left-0 top-0 bottom-0 w-1/3 opacity-8 pointer-events-none">
        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-contain bg-no-repeat bg-left" style="background-image: url('/images/mark-cuban-side-2.png');"></div>
      </div>
      
      <!-- Animated background elements with blur effects -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/8 left-1/8 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-medium"></div>
        <div class="absolute top-1/6 right-1/8 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 cuban-pulse parallax-fast" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/8 left-1/6 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 cuban-pulse parallax-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/6 right-1/6 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-80 cuban-pulse parallax-medium" style="animation-delay: 3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-88 h-88 bg-shark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-40 cuban-pulse parallax-fast" style="animation-delay: 4s;"></div>
        <div class="absolute top-3/4 left-1/4 w-56 h-56 bg-mavs-blue rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-slow" style="animation-delay: 5s;"></div>
      </div>
      
      <!-- Dynamic Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,255,136,0.1) 2px, rgba(0,255,136,0.1) 4px);"></div>
      </div>
      
      <!-- Floating Money Elements with Parallax -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 text-accent text-3xl opacity-20 cuban-pulse parallax-element" data-parallax-speed="0.1">💰</div>
        <div class="absolute top-20 right-20 text-accent text-2xl opacity-20 cuban-pulse parallax-element" data-parallax-speed="0.15" style="animation-delay: 1s;">📈</div>
        <div class="absolute bottom-20 left-20 text-accent text-2xl opacity-20 cuban-pulse parallax-element" data-parallax-speed="0.12" style="animation-delay: 2s;">🚀</div>
        <div class="absolute bottom-10 right-10 text-accent text-3xl opacity-20 cuban-pulse parallax-element" data-parallax-speed="0.08" style="animation-delay: 3s;">🦈</div>
        <div class="absolute top-1/2 left-1/4 text-accent text-xl opacity-15 cuban-pulse parallax-element" data-parallax-speed="0.18" style="animation-delay: 4s;">💎</div>
        <div class="absolute top-1/3 right-1/3 text-accent text-lg opacity-15 cuban-pulse parallax-element" data-parallax-speed="0.06" style="animation-delay: 5s;">🏆</div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Header with Shark Tank Vibe -->
        <div class="text-center mb-16">
          <div class="flex justify-center items-center mb-6" data-aos="fade-up">
            <div class="shark-style px-4 py-2 rounded-full font-bold text-sm mr-4">SHARK TANK LEGEND</div>
            <div class="mavs-badge">200+ DEALS</div>
          </div>
          
          <h2 class="cuban-heading text-white mb-6" data-aos="fade-up" data-aos-delay="100">
            My <span class="attitude-text">INVESTMENT</span><br>
            <span class="cuban-money">EMPIRE</span>
          </h2>
          
          <div class="w-24 h-1 bg-accent mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          
          <div class="cuban-quote text-lg mb-8" data-aos="fade-up" data-aos-delay="300">
            "I'm not just writing checks - I'm building f*cking empires!"
          </div>
          
          <p class="text-gray-400 text-lg max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            From <span class="cuban-money">$25K seed rounds</span> to <span class="cuban-money">$10M+ growth deals</span>, 
            I find entrepreneurs with <span class="attitude-text">balls</span>, <span class="attitude-text">brains</span>, 
            and the <span class="attitude-text">hunger to dominate</span> their markets.
          </p>
        </div>
        
        <!-- Interactive Investment Counter -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" data-aos="fade-up" data-aos-delay="500">
          <div class="text-center p-6 no-bs rounded-xl">
            <div class="stat-number text-3xl font-bold cuban-money mb-2" data-value="200">0</div>
            <div class="text-sm text-gray-400">Total Deals</div>
            <div class="text-xs text-accent">Since 2009</div>
          </div>
          <div class="text-center p-6 no-bs rounded-xl">
            <div class="stat-number text-3xl font-bold cuban-money mb-2" data-value="85">0</div>
            <div class="text-sm text-gray-400">Success Rate %</div>
            <div class="text-xs text-accent">Still Crushing It</div>
          </div>
          <div class="text-center p-6 no-bs rounded-xl">
            <div class="stat-number text-3xl font-bold cuban-money mb-2" data-value="500">0</div>
            <div class="text-sm text-gray-400">Million $ Invested</div>
            <div class="text-xs text-accent">And Counting</div>
          </div>
          <div class="text-center p-6 no-bs rounded-xl">
            <div class="stat-number text-3xl font-bold cuban-money mb-2" data-value="50">0</div>
            <div class="text-sm text-gray-400">Unicorns Created</div>
            <div class="text-xs text-accent">$1B+ Companies</div>
          </div>
        </div>
        
        <!-- Investment Categories with Shark Tank Style -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 place-items-center">
          <!-- Tech & Software -->
          <div class="investment-card bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border-2 border-blue-700/50 rounded-2xl p-8 hover-lift relative overflow-hidden w-full max-w-md mx-auto" data-aos="fade-right" data-aos-delay="100">
            <div class="absolute top-2 right-2 text-blue-400 text-lg">💻</div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mr-4 cuban-pulse">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white cuban-bold">TECH DOMINATION</h3>
            </div>
            <div class="space-y-3 text-gray-300">
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="200">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Cyberdust</span>
                </div>
                <span class="text-accent text-sm font-bold">$2M+</span>
              </div>
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="250">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Brondell</span>
                </div>
                <span class="text-accent text-sm font-bold">$1.5M</span>
              </div>
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="300">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>AXS.com</span>
                </div>
                <span class="text-accent text-sm font-bold">$5M+</span>
              </div>
            </div>
            <div class="mt-4 text-xs text-blue-400 font-bold">💡 "If it's not tech, it's not the future"</div>
          </div>
          
          <!-- Food & Beverage -->
          <div class="investment-card bg-gradient-to-br from-green-900/40 to-green-800/40 backdrop-blur-sm border-2 border-green-700/50 rounded-2xl p-8 hover-lift relative overflow-hidden w-full max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div class="absolute top-2 right-2 text-green-400 text-lg">🍺</div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center mr-4 cuban-pulse">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white cuban-bold">FOOD EMPIRE</h3>
            </div>
            <div class="space-y-3 text-gray-300">
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="300">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>BeatBox Beverages</span>
                </div>
                <span class="text-accent text-sm font-bold">$1M</span>
              </div>
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="350">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Cousins Maine Lobster</span>
                </div>
                <span class="text-accent text-sm font-bold">$200K</span>
              </div>
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="400">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Dude Wipes</span>
                </div>
                <span class="text-accent text-sm font-bold">$300K</span>
              </div>
            </div>
            <div class="mt-4 text-xs text-green-400 font-bold">🍕 "Everyone's gotta eat and drink"</div>
          </div>
          
          <!-- Consumer Products -->
          <div class="investment-card bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm border-2 border-purple-700/50 rounded-2xl p-8 hover-lift relative overflow-hidden w-full max-w-md mx-auto" data-aos="fade-left" data-aos-delay="300">
            <div class="absolute top-2 right-2 text-purple-400 text-lg">🛍️</div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mr-4 cuban-pulse">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white cuban-bold">CONSUMER HITS</h3>
            </div>
            <div class="space-y-3 text-gray-300">
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="400">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Bombas Socks</span>
                </div>
                <span class="text-accent text-sm font-bold">$200K</span>
              </div>
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="450">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Gameday Couture</span>
                </div>
                <span class="text-accent text-sm font-bold">$75K</span>
              </div>
              <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="500">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Groovebook</span>
                </div>
                <span class="text-accent text-sm font-bold">$150K</span>
              </div>
            </div>
            <div class="mt-4 text-xs text-purple-400 font-bold">🎯 "Solve real problems, make real money"</div>
          </div>
        </div>
        
        <!-- Shark Tank Decision Matrix -->
        <div class="no-bs rounded-3xl p-8 md:p-12 mb-16" data-aos="fade-up" data-aos-delay="600">
          <h3 class="text-3xl font-bold text-white mb-8 text-center">
            <span class="attitude-text">CUBAN'S DEAL</span> <span class="cuban-money">MATRIX</span>
          </h3>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- What I'm Looking For -->
            <div class="space-y-6">
              <h4 class="text-xl font-bold text-accent mb-4">✅ WHAT GETS MY MONEY:</h4>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-accent/10 rounded-lg">
                  <span class="text-accent text-xl mr-3">🔥</span>
                  <span class="text-white">Entrepreneurs who <strong>LIVE</strong> their business</span>
                </div>
                <div class="flex items-center p-3 bg-accent/10 rounded-lg">
                  <span class="text-accent text-xl mr-3">💰</span>
                  <span class="text-white">Proven revenue or clear path to <strong>PROFIT</strong></span>
                </div>
                <div class="flex items-center p-3 bg-accent/10 rounded-lg">
                  <span class="text-accent text-xl mr-3">🚀</span>
                  <span class="text-white">Scalable business that can <strong>DOMINATE</strong></span>
                </div>
                <div class="flex items-center p-3 bg-accent/10 rounded-lg">
                  <span class="text-accent text-xl mr-3">🎯</span>
                  <span class="text-white">Products people <strong>ACTUALLY WANT</strong></span>
                </div>
              </div>
            </div>
            
            <!-- What I Avoid -->
            <div class="space-y-6">
              <h4 class="text-xl font-bold text-red-400 mb-4">❌ INSTANT DEAL KILLERS:</h4>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-red-900/20 rounded-lg">
                  <span class="text-red-400 text-xl mr-3">💩</span>
                  <span class="text-white">Bullsh*t valuations with <strong>NO REVENUE</strong></span>
                </div>
                <div class="flex items-center p-3 bg-red-900/20 rounded-lg">
                  <span class="text-red-400 text-xl mr-3">🤡</span>
                  <span class="text-white">Entrepreneurs who don't know their <strong>NUMBERS</strong></span>
                </div>
                <div class="flex items-center p-3 bg-red-900/20 rounded-lg">
                  <span class="text-red-400 text-xl mr-3">🏃</span>
                  <span class="text-white">Part-time founders who <strong>WON'T QUIT</strong> their day job</span>
                </div>
                <div class="flex items-center p-3 bg-red-900/20 rounded-lg">
                  <span class="text-red-400 text-xl mr-3">🔍</span>
                  <span class="text-white">Solutions looking for <strong>PROBLEMS</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Cuban's Investment Philosophy with Attitude -->
        <div class="text-center" data-aos="fade-up" data-aos-delay="700">
          <div class="max-w-4xl mx-auto">
            <div class="cuban-quote text-2xl md:text-3xl mb-8">
              "I don't invest in businesses, I invest in people. Show me someone who outworks everyone else, and I'll show you someone I want to bet on. The best business plan means nothing if you don't have the balls to execute it."
            </div>
            <div class="text-accent font-bold mb-8">— Mark Cuban, The Shark 🦈</div>
            
            <!-- Call to Action -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-black rounded-full font-bold hover:shadow-glow transition-all duration-300 hover:scale-105 cuban-bold">
                <span>Pitch Your Business</span>
                <span class="ml-2 text-lg">🦈</span>
              </a>
              <a href="#portfolio" class="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-black transition-all duration-300 cuban-bold">
                <span>See My Empire</span>
                <span class="ml-2 text-lg">👑</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}