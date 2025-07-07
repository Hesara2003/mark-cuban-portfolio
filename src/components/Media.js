export default function Media() {
  return `
    <section id="media" class="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <!-- Mark Cuban PNG Background - Left Side -->
      <div class="absolute left-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-contain bg-no-repeat bg-left" style="background-image: url('/images/mark-cuban-side-4.png');"></div>
      </div>
      
      <!-- Animated background elements with blur effects -->
      <div class="absolute inset-0 opacity-15">
        <div class="absolute top-1/8 left-1/8 w-76 h-76 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-medium"></div>
        <div class="absolute top-1/4 right-1/8 w-68 h-68 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 cuban-pulse parallax-fast" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/6 left-1/4 w-84 h-84 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 cuban-pulse parallax-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/4 right-1/6 w-60 h-60 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-80 cuban-pulse parallax-medium" style="animation-delay: 3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-72 h-72 bg-shark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-40 cuban-pulse parallax-fast" style="animation-delay: 4s;"></div>
        <div class="absolute top-2/3 right-1/3 w-56 h-56 bg-mavs-blue rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-slow" style="animation-delay: 5s;"></div>
      </div>
      
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/5 via-transparent to-blue-500/5"></div>
        <div class="absolute top-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 parallax-element" data-parallax-speed="0.12"></div>
        <div class="absolute bottom-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 parallax-element" data-parallax-speed="0.08"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white" data-aos="fade-up">
            In The <span class="gradient-text">Media</span>
          </h2>
          <div class="w-20 md:w-24 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
          <p class="text-gray-400 text-base md:text-lg max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2" data-aos="fade-up" data-aos-delay="100">
            From Shark Tank to major media appearances, Mark Cuban shares his insights on entrepreneurship, 
            investing, and business strategy with millions of viewers worldwide.
          </p>
        </div>
        
        <!-- Media Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-12 md:mb-16 place-items-center">
          <!-- Shark Tank -->
          <div class="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift media-card w-full max-w-md" data-aos="fade-up" data-aos-delay="100">
            <div class="aspect-video bg-gradient-to-br from-red-900/20 to-red-700/20 relative overflow-hidden">
              <img src="/images/shark-tank-logo.jpg" alt="Shark Tank" class="w-full h-full object-cover opacity-30" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-10 h-10 sm:w-16 sm:h-16 text-red-400 mx-auto mb-2 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h3 class="text-lg sm:text-xl font-bold text-white">Shark Tank</h3>
                  <p class="text-gray-400 text-xs sm:text-sm">ABC Television</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-accent text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors">
                  Watch Episodes
                </button>
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                As one of the main investors on ABC's hit show Shark Tank, Mark evaluates business pitches and invests in promising entrepreneurs.
              </p>
            </div>
          </div>
          
          <!-- Podcast Appearances -->
          <div class="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="200">
            <div class="aspect-video bg-gradient-to-br from-blue-900/20 to-blue-700/20 flex items-center justify-center relative">
              <div class="text-center">
                <svg class="w-10 h-10 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-2 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
                <h3 class="text-lg sm:text-xl font-bold text-white">Podcasts</h3>
                <p class="text-gray-400 text-xs sm:text-sm">Various Platforms</p>
              </div>
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-accent text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors">
                  Listen Now
                </button>
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                Regular guest on top business podcasts sharing insights on entrepreneurship, investing, and leadership strategies.
              </p>
            </div>
          </div>
          
          <!-- CNBC -->
          <div class="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift media-card w-full max-w-md" data-aos="fade-up" data-aos-delay="300">
            <div class="aspect-video bg-gradient-to-br from-green-900/20 to-green-700/20 relative overflow-hidden">
              <img src="/images/cnbc-logo.jpg" alt="CNBC" class="w-full h-full object-cover opacity-30" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-10 h-10 sm:w-16 sm:h-16 text-green-400 mx-auto mb-2 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <h3 class="text-lg sm:text-xl font-bold text-white">CNBC</h3>
                  <p class="text-gray-400 text-xs sm:text-sm">Financial News</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-accent text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors">
                  View Interviews
                </button>
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                Frequent contributor to CNBC discussing market trends, investment strategies, and economic outlook.
              </p>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="400">
            <div class="aspect-video bg-gradient-to-br from-purple-900/20 to-purple-700/20 flex items-center justify-center relative">
              <div class="text-center">
                <svg class="w-10 h-10 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-2 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h8m-8 0a2 2 0 00-2 2v2m0 0a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2m-8 0V6a2 2 0 012-2h4a2 2 0 012 2v2"/>
                </svg>
                <h3 class="text-lg sm:text-xl font-bold text-white">Social Media</h3>
                <p class="text-gray-400 text-xs sm:text-sm">Multiple Platforms</p>
              </div>
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-accent text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors">
                  Follow Mark
                </button>
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                Active on Twitter, Instagram, and LinkedIn sharing business insights, sports commentary, and investment tips.
              </p>
            </div>
          </div>
          
          <!-- Books & Publications -->
          <div class="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="500">
            <div class="aspect-video bg-gradient-to-br from-orange-900/20 to-orange-700/20 flex items-center justify-center relative">
              <div class="text-center">
                <svg class="w-10 h-10 sm:w-16 sm:h-16 text-orange-400 mx-auto mb-2 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <h3 class="text-lg sm:text-xl font-bold text-white">Publications</h3>
                <p class="text-gray-400 text-xs sm:text-sm">Books & Articles</p>
              </div>
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-accent text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors">
                  Read More
                </button>
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                Author of "How to Win at the Sport of Business" and regular contributor to business publications worldwide.
              </p>
            </div>
          </div>
          
          <!-- Speaking Engagements -->
          <div class="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover-lift w-full max-w-md" data-aos="fade-up" data-aos-delay="600">
            <div class="aspect-video bg-gradient-to-br from-teal-900/20 to-teal-700/20 flex items-center justify-center relative">
              <div class="text-center">
                <svg class="w-10 h-10 sm:w-16 sm:h-16 text-teal-400 mx-auto mb-2 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
                <h3 class="text-lg sm:text-xl font-bold text-white">Speaking</h3>
                <p class="text-gray-400 text-xs sm:text-sm">Conferences & Events</p>
              </div>
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-accent text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors">
                  Book Speaking
                </button>
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                Keynote speaker at major business conferences, sharing entrepreneurial wisdom and investment insights.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Featured Quote -->
        <div class="text-center glass rounded-2xl sm:rounded-3xl p-6 md:p-12" data-aos="fade-up" data-aos-delay="700">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Media Highlights</h3>
          <blockquote class="text-lg md:text-xl lg:text-2xl text-gray-300 italic font-light border-l-4 border-accent pl-4 md:pl-6 max-w-4xl mx-auto mb-6 md:mb-8">
            "The beautiful thing about business is that you don't have to be a genius. You just have to be smart enough to figure out what works and what doesn't."
          </blockquote>
          <div class="text-accent font-semibold mb-6 md:mb-8">— Mark Cuban on CNBC</div>
          
          <!-- Social Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div class="text-center">
              <div class="text-xl md:text-2xl font-bold text-accent">8.2M</div>
              <div class="text-xs sm:text-sm text-gray-400">Twitter Followers</div>
            </div>
            <div class="text-center">
              <div class="text-xl md:text-2xl font-bold text-accent">500+</div>
              <div class="text-xs sm:text-sm text-gray-400">TV Appearances</div>
            </div>
            <div class="text-center">
              <div class="text-xl md:text-2xl font-bold text-accent">15</div>
              <div class="text-xs sm:text-sm text-gray-400">Shark Tank Seasons</div>
            </div>
            <div class="text-center">
              <div class="text-xl md:text-2xl font-bold text-accent">1M+</div>
              <div class="text-xs sm:text-sm text-gray-400">LinkedIn Connections</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
