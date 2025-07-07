export default function Portfolio() {
  return `
    <section id="portfolio" class="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <!-- Mark Cuban PNG Background - Right Side -->
      <div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-12 pointer-events-none">
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-contain bg-no-repeat bg-right" style="background-image: url('/images/mark-cuban-side-3.png');"></div>
      </div>
      
      <!-- Animated background elements with blur effects -->
      <div class="absolute inset-0 opacity-15">
        <div class="absolute top-1/8 left-1/8 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 cuban-pulse parallax-medium"></div>
        <div class="absolute top-1/4 right-1/8 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-fast" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/6 left-1/4 w-80 h-80 bg-mavs-blue rounded-full mix-blend-multiply filter blur-3xl opacity-50 cuban-pulse parallax-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/4 right-1/6 w-56 h-56 bg-shark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-80 cuban-pulse parallax-medium" style="animation-delay: 3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-68 h-68 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 cuban-pulse parallax-fast" style="animation-delay: 4s;"></div>
        <div class="absolute top-2/3 right-1/3 w-60 h-60 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-slow" style="animation-delay: 5s;"></div>
      </div>
      
      <!-- Background elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 parallax-element" data-parallax-speed="0.15"></div>
        <div class="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 parallax-element" data-parallax-speed="0.1"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 class="cuban-heading text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
            My <span class="attitude-text">EMPIRE</span>
          </h2>
          <div class="w-20 md:w-24 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
          <p class="text-gray-400 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto px-2">
            From <span class="cuban-money">$5.7 billion exits</span> to championship teams, here's how I built my business empire 
            through <span class="attitude-text">hard work</span>, <span class="attitude-text">smart bets</span>, and <span class="attitude-text">zero BS</span>.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 portfolio-grid place-items-center">
          <!-- Broadcast.com -->
          <div class="portfolio-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="100">
            <div class="absolute inset-0 opacity-20">
              <img src="/images/broadcast-com-logo.jpg" alt="Broadcast.com" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="relative p-5 sm:p-8">
              <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="mb-6">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Broadcast.com</h3>
                <div class="text-accent font-semibold text-base sm:text-lg mb-3">$5.7B Exit</div>
                <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Revolutionized online streaming by selling to Yahoo! for $5.7 billion in 1999, one of the largest internet acquisitions at the time.
                </p>
              </div>
              <div class="flex flex-wrap items-center text-xs sm:text-sm text-gray-400 gap-2">
                <span class="bg-accent/20 text-accent px-2 py-1 rounded-full">Internet</span>
                <span class="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Streaming</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent/5 rounded-full parallax-element" data-parallax-speed="0.15"></div>
            </div>
          </div>
          
          <!-- Dallas Mavericks -->
          <div class="portfolio-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="200">
            <div class="absolute inset-0 opacity-20">
              <img src="/images/dallas-mavericks-logo.jpg" alt="Dallas Mavericks" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="relative p-5 sm:p-8">
              <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="mb-6">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Dallas Mavericks</h3>
                <div class="text-accent font-semibold text-base sm:text-lg mb-3">NBA Champions</div>
                <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Owner since 2000, transformed the franchise culture and led the team to their first NBA Championship in 2011.
                </p>
              </div>
              <div class="flex flex-wrap items-center text-xs sm:text-sm text-gray-400 gap-2">
                <span class="bg-accent/20 text-accent px-2 py-1 rounded-full">Sports</span>
                <span class="bg-green-500/20 text-green-400 px-2 py-1 rounded-full">NBA</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent/5 rounded-full parallax-element" data-parallax-speed="0.12"></div>
            </div>
          </div>
          
          <!-- Cost Plus Drugs -->
          <div class="portfolio-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="300">
            <div class="absolute inset-0 opacity-20">
              <img src="/images/cost-plus-drugs-logo.jpg" alt="Cost Plus Drugs" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="relative p-5 sm:p-8">
              <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div class="mb-6">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Cost Plus Drugs</h3>
                <div class="text-accent font-semibold text-base sm:text-lg mb-3">Healthcare Revolution</div>
                <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Disrupting the pharmaceutical industry by providing transparent, affordable drug pricing to millions of Americans.
                </p>
              </div>
              <div class="flex flex-wrap items-center text-xs sm:text-sm text-gray-400 gap-2">
                <span class="bg-accent/20 text-accent px-2 py-1 rounded-full">Healthcare</span>
                <span class="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Pharma</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent/5 rounded-full parallax-element" data-parallax-speed="0.1"></div>
            </div>
          </div>
          
          <!-- Shark Tank -->
          <div class="portfolio-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="400">
            <div class="absolute inset-0 opacity-20">
              <img src="/images/shark-tank-logo.jpg" alt="Shark Tank" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="relative p-5 sm:p-8">
              <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div class="mb-6">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Shark Tank</h3>
                <div class="text-accent font-semibold text-base sm:text-lg mb-3">200+ Deals</div>
                <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Invested in over 200 companies on Shark Tank, helping entrepreneurs turn their dreams into successful businesses.
                </p>
              </div>
              <div class="flex flex-wrap items-center text-xs sm:text-sm text-gray-400 gap-2">
                <span class="bg-accent/20 text-accent px-2 py-1 rounded-full">TV</span>
                <span class="bg-red-500/20 text-red-400 px-2 py-1 rounded-full">Investing</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent/5 rounded-full parallax-element" data-parallax-speed="0.18"></div>
            </div>
          </div>
          
          <!-- MicroSolutions -->
          <div class="portfolio-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="500">
            <div class="absolute inset-0 opacity-20">
              <img src="/images/microsolutions-logo.jpg" alt="MicroSolutions" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="relative p-5 sm:p-8">
              <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <div class="mb-6">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">MicroSolutions</h3>
                <div class="text-accent font-semibold text-base sm:text-lg mb-3">First Success</div>
                <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Mark's first major success, selling this computer consulting company for $6 million in 1990.
                </p>
              </div>
              <div class="flex flex-wrap items-center text-xs sm:text-sm text-gray-400 gap-2">
                <span class="bg-accent/20 text-accent px-2 py-1 rounded-full">Tech</span>
                <span class="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full">Consulting</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent/5 rounded-full parallax-element" data-parallax-speed="0.08"></div>
            </div>
          </div>
          
          <!-- Future Ventures -->
          <div class="portfolio-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="600">
            <div class="absolute inset-0 opacity-20">
              <div class="w-full h-full bg-gradient-to-br from-cyan-900/40 to-purple-900/40"></div>
            </div>
            <div class="relative p-5 sm:p-8">
              <div class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <div class="mb-6">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Future Ventures</h3>
                <div class="text-accent font-semibold text-base sm:text-lg mb-3">What's Next</div>
                <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Continuously exploring new opportunities in AI, blockchain, and emerging technologies to shape the future.
                </p>
              </div>
              <div class="flex flex-wrap items-center text-xs sm:text-sm text-gray-400 gap-2">
                <span class="bg-accent/20 text-accent px-2 py-1 rounded-full">AI</span>
                <span class="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">Future</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent/5 rounded-full parallax-element" data-parallax-speed="0.05"></div>
            </div>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="text-center mt-12 md:mt-16 px-4" data-aos="fade-up" data-aos-delay="700">
          <p class="text-gray-400 mb-6 md:mb-8 text-base md:text-lg">
            Interested in learning more about Mark's investment philosophy?
          </p>
          <a href="#investments" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-accent-dark text-black font-semibold rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
            <span>View Investments</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
}
