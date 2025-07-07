export default function LoadingScreen() {
  return `
    <div id="loading-screen" class="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse"></div>
        <div class="absolute top-1/3 right-1/4 w-48 h-48 bg-mavs-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 cuban-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-56 h-56 bg-shark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-50 cuban-pulse" style="animation-delay: 2s;"></div>
      </div>
      
      <div class="text-center relative z-10 max-w-4xl px-6">
        <!-- Logo/Brand -->
        <div class="mb-8">
          <h1 class="text-6xl md:text-8xl font-black text-white mb-4 loading-title">
            <span class="attitude-text bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">MARK</span><br>
            <span class="text-white">CUBAN</span>
          </h1>
          <div class="text-xl md:text-2xl text-gray-400 font-light">
            <span class="attitude-text">Billionaire</span> • <span class="cuban-money">Entrepreneur</span> • <span class="attitude-text">Shark</span>
          </div>
        </div>
        
        <!-- Cuban Quote -->
        <div class="mb-12">
          <div class="text-2xl md:text-3xl font-bold text-white mb-4" id="cuban-quote">
            "Work like there is someone working 24 hours a day to take it all away from you."
          </div>
          <div class="text-accent text-sm font-semibold">— Mark Cuban</div>
        </div>
        
        <!-- Loading Animation -->
        <div class="mb-8">
          <div class="w-64 h-2 bg-gray-800 rounded-full mx-auto mb-4">
            <div id="loading-progress" class="h-2 bg-gradient-to-r from-accent via-yellow-400 to-accent rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>
          <div class="text-gray-400 text-sm" id="loading-text">Loading your empire...</div>
        </div>
        
        <!-- Loading Icons -->
        <div class="flex justify-center space-x-6 text-4xl">
          <div class="loading-icon opacity-30" id="icon-1">💰</div>
          <div class="loading-icon opacity-30" id="icon-2">🦈</div>
          <div class="loading-icon opacity-30" id="icon-3">🏆</div>
          <div class="loading-icon opacity-30" id="icon-4">📈</div>
        </div>
      </div>
    </div>
  `
}
