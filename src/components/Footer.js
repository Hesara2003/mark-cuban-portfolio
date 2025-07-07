export default function Footer() {
  return `
    <footer class="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800 relative overflow-hidden footer-container">
      <!-- Mark Cuban PNG Background - Left Side -->
      <div class="absolute left-0 top-0 bottom-0 w-1/4 opacity-6 pointer-events-none">
        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-80 bg-contain bg-no-repeat bg-left" style="background-image: url('/images/mark-cuban-side-2.png');"></div>
      </div>
      
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5 parallax-slow">
        <div class="absolute inset-0" style="background-image: linear-gradient(45deg, rgba(255, 215, 0, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255, 215, 0, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255, 215, 0, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255, 215, 0, 0.1) 75%); background-size: 40px 40px; background-position: 0 0, 0 20px, 20px -20px, -20px 0px;"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <!-- Brand -->
          <div class="md:col-span-2 footer-section" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-xl md:text-2xl font-bold gradient-text mb-4 footer-title">Mark Cuban</h3>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-md footer-description">
              Entrepreneur, investor, and owner of the Dallas Mavericks. Passionate about helping others achieve their dreams through smart investments and hard work.
            </p>
            <div class="flex space-x-3 sm:space-x-4">
              <a href="https://twitter.com/mcuban" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 footer-social-link">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/markcuban" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 footer-social-link">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/markcuban" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 footer-social-link">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.856c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zM12.017 7.126c-2.732 0-4.942 2.21-4.942 4.942s2.21 4.942 4.942 4.942 4.942-2.21 4.942-4.942-2.21-4.942-4.942-4.942z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-section" data-aos="fade-up" data-aos-delay="200">
            <h4 class="text-base md:text-lg font-semibold text-white mb-4 footer-title">Quick Links</h4>
            <ul class="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#about" class="hover:text-accent transition-colors footer-link">About</a></li>
              <li><a href="#portfolio" class="hover:text-accent transition-colors footer-link">Portfolio</a></li>
              <li><a href="#investments" class="hover:text-accent transition-colors footer-link">Investments</a></li>
              <li><a href="#media" class="hover:text-accent transition-colors footer-link">Media</a></li>
              <li><a href="#contact" class="hover:text-accent transition-colors footer-link">Contact</a></li>
            </ul>
          </div>
          
          <!-- Business -->
          <div class="footer-section" data-aos="fade-up" data-aos-delay="300">
            <h4 class="text-base md:text-lg font-semibold text-white mb-4 footer-title">Business</h4>
            <ul class="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#" class="hover:text-accent transition-colors footer-link">Dallas Mavericks</a></li>
              <li><a href="#" class="hover:text-accent transition-colors footer-link">Cost Plus Drugs</a></li>
              <li><a href="#" class="hover:text-accent transition-colors footer-link">Shark Tank</a></li>
              <li><a href="#" class="hover:text-accent transition-colors footer-link">Speaking</a></li>
              <li><a href="#" class="hover:text-accent transition-colors footer-link">Consulting</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 pt-6 md:pt-8 footer-bottom" data-aos="fade-up" data-aos-delay="400">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 footer-copyright">
              &copy; ${new Date().getFullYear()} Mark Cuban Portfolio. All rights reserved.
            </div>
            <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-400 footer-tech">
              <span>Built with ❤️ using</span>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 bg-accent/20 text-accent rounded text-xs footer-tech-badge">Vite</span>
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs footer-tech-badge">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
}
