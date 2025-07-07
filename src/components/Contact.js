export default function Contact() {
  return `
    <section class="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden" id="contact">
      <!-- Mark Cuban PNG Background - Right Side -->
      <div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-8 pointer-events-none">
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-contain bg-no-repeat bg-right" style="background-image: url('/images/mark-cuban-side-1.png');"></div>
      </div>
      
      <!-- Animated background elements with blur effects -->
      <div class="absolute inset-0 opacity-15">
        <div class="absolute top-1/8 left-1/8 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 cuban-pulse parallax-medium"></div>
        <div class="absolute top-1/4 right-1/8 w-56 h-56 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-fast" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/6 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 cuban-pulse parallax-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/4 right-1/6 w-48 h-48 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-80 cuban-pulse parallax-medium" style="animation-delay: 3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-60 h-60 bg-shark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-40 cuban-pulse parallax-fast" style="animation-delay: 4s;"></div>
      </div>
      
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)"></div>
      </div>
      
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="cuban-heading text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
            Let's <span class="attitude-text">TALK BUSINESS</span>
          </h2>
          <div class="w-20 md:w-24 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
          <p class="text-gray-400 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto px-2">
            Got a business that could change the world? Ready to make some <span class="cuban-money">serious money</span>? 
            Don't waste my time with bullsh*t - <span class="attitude-text">show me the numbers</span> and let's make it happen.
          </p>
        </div>
        
        <!-- Contact Options -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <!-- Business Inquiries -->
          <div class="glass rounded-2xl p-6 sm:p-8 hover-lift text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v6a2 2 0 002 2h4a2 2 0 002-2V8M8 8a2 2 0 012-2h4a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Business Inquiries</h3>
            <p class="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Ready to pitch your startup or discuss potential partnerships? Let's talk business.
            </p>
            <a href="mailto:business@markcuban.com" class="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent to-accent-dark text-black font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email Business Team
            </a>
          </div>
          
          <!-- Media Requests -->
          <div class="glass rounded-2xl p-6 sm:p-8 hover-lift text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Media Requests</h3>
            <p class="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Looking for interviews, speaking engagements, or media appearances? Get in touch.
            </p>
            <a href="mailto:media@markcuban.com" class="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-black transition-all duration-300 text-sm sm:text-base">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
              </svg>
              Contact Media Team
            </a>
          </div>
        </div>
        
        <!-- Social Media Links -->
        <div class="text-center" data-aos="fade-up" data-aos-delay="300">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Follow Mark</h3>
          <div class="flex justify-center space-x-4 sm:space-x-6">
            <a href="https://twitter.com/mcuban" class="group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/markcuban" class="group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-700/20 to-blue-800/20 border border-blue-700/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/markcuban" class="group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 group-hover:text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.856c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zM12.017 7.126c-2.732 0-4.942 2.21-4.942 4.942s2.21 4.942 4.942 4.942 4.942-2.21 4.942-4.942-2.21-4.942-4.942-4.942z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Contact Form Alternative -->
        <div class="mt-12 md:mt-16 glass rounded-2xl p-6 sm:p-8" data-aos="fade-up" data-aos-delay="400">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Quick Message</h3>
          <form class="space-y-4 sm:space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" class="w-full px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white text-sm" placeholder="Your name">
              </div>
              <div>
                <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" class="w-full px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white text-sm" placeholder="your@email.com">
              </div>
            </div>
            <div>
              <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea rows="4" class="w-full px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white text-sm" placeholder="Tell me about your idea..."></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-accent to-accent-dark text-black font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                <span>Send Message</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
}
