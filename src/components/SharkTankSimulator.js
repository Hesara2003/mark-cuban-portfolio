export default function SharkTankSimulator() {
  return `
    <section class="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" id="simulator">
      <!-- Mark Cuban PNG Background - Left Side -->
      <div class="absolute left-0 top-0 bottom-0 w-1/3 opacity-12 pointer-events-none">
        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-contain bg-no-repeat bg-left" style="background-image: url('/images/mark-cuban-side-2.png');"></div>
      </div>
      
      <!-- Animated background elements with blur effects -->
      <div class="absolute inset-0 opacity-15">
        <div class="absolute top-1/8 left-1/8 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 cuban-pulse parallax-medium"></div>
        <div class="absolute top-1/4 right-1/8 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 cuban-pulse parallax-fast" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/6 left-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 cuban-pulse parallax-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/4 right-1/6 w-56 h-56 bg-shark-gold rounded-full mix-blend-multiply filter blur-3xl opacity-80 cuban-pulse parallax-medium" style="animation-delay: 3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-68 h-68 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 cuban-pulse parallax-fast" style="animation-delay: 4s;"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Header -->
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="flex justify-center items-center mb-6">
            <div class="shark-style px-4 py-2 rounded-full font-bold text-sm mr-4">🦈 SHARK TANK</div>
            <div class="mavs-badge">SIMULATOR</div>
          </div>
          
          <h2 class="cuban-heading text-4xl md:text-6xl text-white mb-6">
            GET <span class="attitude-text">CUBAN'S</span> <span class="cuban-money">VERDICT</span>
          </h2>
          
          <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
          
          <p class="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Think you've got what it takes? Pitch your business idea and see if you can get a deal from the shark himself. 
            Based on Mark Cuban's <span class="cuban-money">real investment criteria</span> and <span class="attitude-text">no-BS approach</span>.
          </p>
        </div>
        
        <!-- Simulator Container -->
        <div class="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          
          <!-- Welcome Screen -->
          <div id="welcome-screen" class="text-center">
            <div class="text-6xl mb-6">🦈</div>
            <h3 class="text-3xl font-bold text-white mb-4">Welcome to the Tank</h3>
            <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
              You're about to face Mark Cuban. He's tough, he's smart, and he doesn't waste time on BS. 
              Answer honestly - he can smell BS from a mile away.
            </p>
            <button id="start-simulator" class="px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-black rounded-full font-bold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105 cuban-bold">
              Enter the Tank 🦈
            </button>
          </div>
          
          <!-- Question Screen -->
          <div id="question-screen" class="hidden">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <span id="question-number" class="text-accent font-bold">1</span>
                </div>
                <div class="text-white font-bold">Question <span id="current-question">1</span> of <span id="total-questions">8</span></div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-400">Cuban's Mood</div>
                <div id="cuban-mood" class="text-lg">🤔 Listening</div>
              </div>
            </div>
            
            <div class="mb-8">
              <div class="bg-gray-800/50 rounded-xl p-6 mb-6">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-2xl">🦈</span>
                  </div>
                  <div>
                    <div class="text-accent font-bold mb-2">Mark Cuban asks:</div>
                    <p id="question-text" class="text-white text-lg"></p>
                  </div>
                </div>
              </div>
              
              <div id="answer-options" class="space-y-4">
                <!-- Answer options will be populated by JavaScript -->
              </div>
            </div>
            
            <div class="flex justify-between items-center">
              <button id="prev-question" class="px-6 py-3 border-2 border-gray-600 text-gray-400 rounded-full hover:border-accent hover:text-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                ← Previous
              </button>
              <div class="flex-1 mx-6">
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div id="progress-bar" class="bg-gradient-to-r from-accent to-accent-dark h-2 rounded-full transition-all duration-300" style="width: 12.5%"></div>
                </div>
              </div>
              <button id="next-question" class="px-6 py-3 bg-accent text-black rounded-full font-bold hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Next →
              </button>
            </div>
          </div>
          
          <!-- Results Screen -->
          <div id="results-screen" class="hidden text-center">
            <div id="verdict-icon" class="text-8xl mb-6">🦈</div>
            <h3 id="verdict-title" class="text-4xl font-bold text-white mb-4"></h3>
            <div id="verdict-subtitle" class="text-accent text-xl font-bold mb-6"></div>
            
            <div class="bg-gray-800/50 rounded-xl p-6 mb-8">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-2xl">🦈</span>
                </div>
                <div class="text-left">
                  <div class="text-accent font-bold mb-2">Cuban's Verdict:</div>
                  <p id="verdict-message" class="text-white text-lg"></p>
                </div>
              </div>
            </div>
            
            <!-- Score Breakdown -->
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-gray-800/30 rounded-xl p-4">
                <h4 class="text-white font-bold mb-3">Your Score</h4>
                <div class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Business Viability</span>
                    <span id="viability-score" class="text-accent font-bold">0/10</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Market Knowledge</span>
                    <span id="market-score" class="text-accent font-bold">0/10</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Execution Ability</span>
                    <span id="execution-score" class="text-accent font-bold">0/10</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Scalability</span>
                    <span id="scalability-score" class="text-accent font-bold">0/10</span>
                  </div>
                  <div class="border-t border-gray-600 pt-2 mt-2">
                    <div class="flex justify-between font-bold">
                      <span class="text-white">Total Score</span>
                      <span id="total-score" class="text-accent text-xl">0/40</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-800/30 rounded-xl p-4">
                <h4 class="text-white font-bold mb-3">Deal Details</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-400">Investment Amount</span>
                    <span id="investment-amount" class="text-accent font-bold">$0</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-400">Equity Stake</span>
                    <span id="equity-stake" class="text-accent font-bold">0%</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-400">Valuation</span>
                    <span id="valuation" class="text-accent font-bold">$0</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-400">Deal Type</span>
                    <span id="deal-type" class="text-accent font-bold">-</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Share -->
            <div class="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 mb-8">
              <h4 class="text-white font-bold mb-4">Share Your Result</h4>
              <p id="share-text" class="text-gray-300 mb-4 text-sm"></p>
              <div class="flex justify-center space-x-4">
                <button id="share-twitter" class="px-6 py-3 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-all duration-300">
                  Share on Twitter 🐦
                </button>
                <button id="share-linkedin" class="px-6 py-3 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-all duration-300">
                  Share on LinkedIn 💼
                </button>
                <button id="copy-result" class="px-6 py-3 bg-gray-700 text-white rounded-full font-bold hover:bg-gray-600 transition-all duration-300">
                  Copy Result 📋
                </button>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button id="try-again" class="px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-black rounded-full font-bold hover:shadow-glow transition-all duration-300 hover:scale-105 cuban-bold">
                Try Again 🔄
              </button>
              <button id="learn-more" class="px-8 py-4 border-2 border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-black transition-all duration-300 cuban-bold">
                Learn More 📚
              </button>
            </div>
          </div>
        </div>
        
        <!-- Cuban's Investment Tips -->
        <div class="mt-12 grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
          <div class="bg-gray-800/30 rounded-xl p-6 text-center">
            <div class="text-3xl mb-3">🔥</div>
            <h4 class="text-white font-bold mb-2">Know Your Numbers</h4>
            <p class="text-gray-400 text-sm">Revenue, profit margins, customer acquisition costs - know them cold.</p>
          </div>
          <div class="bg-gray-800/30 rounded-xl p-6 text-center">
            <div class="text-3xl mb-3">🚀</div>
            <h4 class="text-white font-bold mb-2">Prove Scalability</h4>
            <p class="text-gray-400 text-sm">Show how your business can grow from $1M to $100M revenue.</p>
          </div>
          <div class="bg-gray-800/30 rounded-xl p-6 text-center">
            <div class="text-3xl mb-3">💪</div>
            <h4 class="text-white font-bold mb-2">Execution First</h4>
            <p class="text-gray-400 text-sm">Ideas are cheap. Execution is everything. Show you can deliver.</p>
          </div>
        </div>
      </div>
    </section>
  `
}
