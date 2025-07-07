export default function About() {
  return `
    <section class="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" id="about">
      <!-- Mark Cuban PNG Background - Right Side -->
      <div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-contain bg-no-repeat bg-right" style="background-image: url('/images/mark-cuban-side-1.png');"></div>
      </div>
      
      <!-- Animated background elements with blur effects -->
      <div class="absolute inset-0 opacity-15">
        <div class="absolute top-1/6 left-1/6 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-medium"></div>
        <div class="absolute top-1/4 right-1/8 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 cuban-pulse parallax-fast" style="animation-delay: 1.5s;"></div>
        <div class="absolute bottom-1/6 left-1/4 w-80 h-80 bg-mavs-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 cuban-pulse parallax-slow" style="animation-delay: 2.5s;"></div>
        <div class="absolute bottom-1/4 right-1/6 w-56 h-56 bg-shark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-80 cuban-pulse parallax-medium" style="animation-delay: 3.5s;"></div>
        <div class="absolute top-1/2 left-1/2 w-68 h-68 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 cuban-pulse parallax-fast" style="animation-delay: 4.5s;"></div>
      </div>
      
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)"></div>
      
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="cuban-heading text-white mb-6">
            About <span class="attitude-text">MARK</span>
          </h2>
          <div class="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left side - Image -->
          <div class="relative" data-aos="fade-right" data-aos-delay="100">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <div class="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 relative">
                <img src="/images/mark-cuban-portrait.jpg" alt="Mark Cuban" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <h3 class="text-2xl font-bold text-white mb-2">Mark Cuban</h3>
                  <p class="text-accent font-semibold">Entrepreneur • Investor • Owner</p>
                </div>
              </div>
              <!-- Parallax decorative elements -->
              <div class="absolute -top-4 -left-4 w-8 h-8 border-2 border-accent rounded-full floating-element parallax-element" data-parallax-speed="0.1"></div>
              <div class="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-blue-500 rounded-full opacity-50 floating-element parallax-element" data-parallax-speed="0.15"></div>
              <div class="absolute top-1/2 -right-6 w-6 h-6 bg-accent/30 rounded-full parallax-element" data-parallax-speed="0.08"></div>
            </div>
          </div>
          
          <!-- Right side - Content -->
          <div class="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <div class="space-y-4">
              <p class="text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                Mark Cuban is a self-made billionaire, tech entrepreneur, and owner of the Dallas Mavericks. 
                Known for his role on Shark Tank, he's invested in countless startups and continues to inspire millions.
              </p>
              <p class="text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                From selling garbage bags door-to-door as a kid to building and selling companies for billions, 
                Mark's journey is a testament to hard work, smart investments, and never giving up on your dreams.
              </p>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 pt-8 stats-container" data-aos="fade-up" data-aos-delay="500">
              <div class="text-center p-4 glass rounded-lg hover-lift">
                <div class="text-2xl font-bold text-accent stat-number" data-value="5.7">0</div>
                <div class="text-sm text-gray-400">Broadcast.com Sale (B)</div>
              </div>
              <div class="text-center p-4 glass rounded-lg hover-lift">
                <div class="text-2xl font-bold text-accent stat-number" data-value="2000">0</div>
                <div class="text-sm text-gray-400">Mavericks Owner</div>
              </div>
              <div class="text-center p-4 glass rounded-lg hover-lift">
                <div class="text-2xl font-bold text-accent stat-number" data-value="500">0</div>
                <div class="text-sm text-gray-400">Investments</div>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="pt-6" data-aos="fade-up" data-aos-delay="600">
              <a href="#portfolio" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-black transition-all duration-300">
                <span>Explore Portfolio</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
