export default function Navbar() {
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 transition-all duration-300" id="navbar">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold gradient-text">Mark Cuban</h1>
            <div class="hidden md:block ml-2 px-2 py-1 text-xs bg-accent/20 text-accent rounded-full">
              Entrepreneur
            </div>
          </div>
          
          <!-- Desktop Menu -->
          <ul class="hidden md:flex items-center space-x-8 text-sm font-medium">
            <li><a href="#about" class="text-gray-300 hover:text-accent transition-colors duration-200 relative group">
              About
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a></li>
            <li><a href="#portfolio" class="text-gray-300 hover:text-accent transition-colors duration-200 relative group">
              Portfolio
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a></li>
            <li><a href="#investments" class="text-gray-300 hover:text-accent transition-colors duration-200 relative group">
              Investments
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a></li>
            <li><a href="#media" class="text-gray-300 hover:text-accent transition-colors duration-200 relative group">
              Media
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a></li>
            <li><a href="#contact" class="px-4 py-2 bg-accent text-black rounded-full font-semibold hover:bg-accent-dark transition-colors duration-200">
              Contact
            </a></li>
          </ul>
          
          <!-- Mobile Menu Button -->
          <button class="md:hidden text-white focus:outline-none" id="mobile-menu-button">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div class="md:hidden hidden mt-4 pb-4 border-t border-white/10" id="mobile-menu">
          <ul class="space-y-4 mt-4">
            <li><a href="#about" class="block text-gray-300 hover:text-accent transition-colors duration-200">About</a></li>
            <li><a href="#portfolio" class="block text-gray-300 hover:text-accent transition-colors duration-200">Portfolio</a></li>
            <li><a href="#investments" class="block text-gray-300 hover:text-accent transition-colors duration-200">Investments</a></li>
            <li><a href="#media" class="block text-gray-300 hover:text-accent transition-colors duration-200">Media</a></li>
            <li><a href="#contact" class="block text-gray-300 hover:text-accent transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
}
