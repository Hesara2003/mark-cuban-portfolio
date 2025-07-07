// Shark Tank Simulator Logic
class SharkTankSimulator {
  constructor() {
    this.currentQuestion = 0;
    this.answers = [];
    this.score = {
      viability: 0,
      market: 0,
      execution: 0,
      scalability: 0
    };
    
    this.questions = [
      {
        id: 1,
        question: "What's your business idea?",
        options: [
          { text: "A revolutionary new app that will change everything", points: { viability: 2, market: 1, execution: 1, scalability: 3 } },
          { text: "A proven business model with a unique twist", points: { viability: 4, market: 3, execution: 3, scalability: 2 } },
          { text: "A niche product solving a specific problem", points: { viability: 3, market: 4, execution: 4, scalability: 1 } },
          { text: "Something completely new that nobody's tried", points: { viability: 1, market: 2, execution: 2, scalability: 4 } }
        ]
      },
      {
        id: 2,
        question: "How much revenue are you currently generating?",
        options: [
          { text: "We're pre-revenue but have a solid plan", points: { viability: 1, market: 2, execution: 1, scalability: 2 } },
          { text: "$10K-$50K monthly recurring revenue", points: { viability: 3, market: 3, execution: 3, scalability: 3 } },
          { text: "$100K+ monthly with growing demand", points: { viability: 4, market: 4, execution: 4, scalability: 4 } },
          { text: "Revenue is inconsistent but we're learning", points: { viability: 2, market: 2, execution: 2, scalability: 2 } }
        ]
      },
      {
        id: 3,
        question: "What's your customer acquisition cost vs. lifetime value?",
        options: [
          { text: "I'm not sure about the exact numbers", points: { viability: 1, market: 1, execution: 1, scalability: 1 } },
          { text: "CAC is $50, LTV is around $200", points: { viability: 3, market: 3, execution: 3, scalability: 3 } },
          { text: "CAC is $25, LTV is $500 - great unit economics", points: { viability: 4, market: 4, execution: 4, scalability: 4 } },
          { text: "We're still figuring out our pricing model", points: { viability: 2, market: 2, execution: 2, scalability: 2 } }
        ]
      },
      {
        id: 4,
        question: "How big is your total addressable market?",
        options: [
          { text: "Everyone could use our product - billions of people!", points: { viability: 1, market: 1, execution: 1, scalability: 1 } },
          { text: "Our niche market is about $50M with 10% growth", points: { viability: 3, market: 3, execution: 3, scalability: 2 } },
          { text: "We're targeting a $5B market with clear segments", points: { viability: 4, market: 4, execution: 4, scalability: 4 } },
          { text: "The market is emerging, hard to estimate size", points: { viability: 2, market: 2, execution: 2, scalability: 3 } }
        ]
      },
      {
        id: 5,
        question: "What's your competitive advantage?",
        options: [
          { text: "We're first to market with this idea", points: { viability: 2, market: 2, execution: 2, scalability: 2 } },
          { text: "We have proprietary technology and patents", points: { viability: 4, market: 3, execution: 3, scalability: 4 } },
          { text: "Better customer service and user experience", points: { viability: 3, market: 3, execution: 4, scalability: 3 } },
          { text: "Lower prices than competitors", points: { viability: 2, market: 3, execution: 3, scalability: 2 } }
        ]
      },
      {
        id: 6,
        question: "How much money are you seeking and what for?",
        options: [
          { text: "$50K to validate the market and build an MVP", points: { viability: 2, market: 2, execution: 2, scalability: 2 } },
          { text: "$250K for marketing and team expansion", points: { viability: 3, market: 3, execution: 3, scalability: 3 } },
          { text: "$1M for inventory, marketing, and scaling operations", points: { viability: 4, market: 4, execution: 4, scalability: 4 } },
          { text: "$5M+ for rapid market domination", points: { viability: 3, market: 3, execution: 3, scalability: 4 } }
        ]
      },
      {
        id: 7,
        question: "What's your background and why are you the right person?",
        options: [
          { text: "I'm passionate about this idea and willing to learn", points: { viability: 2, market: 2, execution: 2, scalability: 2 } },
          { text: "I have 10+ years experience in this industry", points: { viability: 4, market: 4, execution: 4, scalability: 3 } },
          { text: "I've built and sold companies before", points: { viability: 4, market: 4, execution: 4, scalability: 4 } },
          { text: "I'm a technical expert with deep domain knowledge", points: { viability: 3, market: 3, execution: 4, scalability: 3 } }
        ]
      },
      {
        id: 8,
        question: "What happens if I don't invest?",
        options: [
          { text: "We'll probably struggle to get to the next level", points: { viability: 1, market: 1, execution: 1, scalability: 1 } },
          { text: "We'll keep bootstrapping and growing slowly", points: { viability: 3, market: 3, execution: 3, scalability: 2 } },
          { text: "We'll find another investor - you're not our only option", points: { viability: 4, market: 4, execution: 4, scalability: 4 } },
          { text: "We'll pivot to a different business model", points: { viability: 2, market: 2, execution: 2, scalability: 3 } }
        ]
      }
    ];
    
    this.verdicts = {
      excellent: {
        title: "I'M IN! 🤝",
        subtitle: "Cuban wants to make a deal",
        message: "Holy sh*t! You've got your numbers down, you know your market, and you're the right person to execute. This is exactly the kind of business I love to invest in. You're not just another dreamer - you're a doer with a real business. Let's make some money together!",
        icon: "🤝",
        deal: { investment: "$500K", equity: "20%", valuation: "$2.5M", type: "Growth Deal" }
      },
      good: {
        title: "CONDITIONAL OFFER 🤔",
        subtitle: "Cuban sees potential but wants changes",
        message: "You've got something here, but I need to see more. Your numbers are decent, but I want to see stronger unit economics. Come back when you've got 6 months of consistent growth and I'll consider a deal. You're not ready for the big leagues yet, but you're on the right track.",
        icon: "🤔",
        deal: { investment: "$250K", equity: "30%", valuation: "$833K", type: "Conditional Deal" }
      },
      maybe: {
        title: "NOT CONVINCED 😐",
        subtitle: "Cuban needs more proof",
        message: "Look, I appreciate the hustle, but this isn't there yet. You don't know your numbers well enough, and I'm not convinced you can execute at scale. Go back to the drawing board, prove your concept, and maybe we can talk. But right now? I'm out.",
        icon: "😐",
        deal: { investment: "$50K", equity: "40%", valuation: "$125K", type: "Micro Deal" }
      },
      poor: {
        title: "I'M OUT! 🚫",
        subtitle: "Cuban passes on the deal",
        message: "This is exactly the kind of BS that drives me crazy. You don't know your market, you don't have a real business plan, and you're wasting my time. Come back when you have a real business, not just an idea. I'm out, and I'm out for good reasons.",
        icon: "🚫",
        deal: { investment: "$0", equity: "0%", valuation: "$0", type: "No Deal" }
      }
    };
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.showWelcomeScreen();
  }
  
  bindEvents() {
    document.getElementById('start-simulator')?.addEventListener('click', () => this.startSimulator());
    document.getElementById('next-question')?.addEventListener('click', () => this.nextQuestion());
    document.getElementById('prev-question')?.addEventListener('click', () => this.prevQuestion());
    document.getElementById('try-again')?.addEventListener('click', () => this.resetSimulator());
    document.getElementById('learn-more')?.addEventListener('click', () => this.scrollToInvestments());
    document.getElementById('share-twitter')?.addEventListener('click', () => this.shareOnTwitter());
    document.getElementById('share-linkedin')?.addEventListener('click', () => this.shareOnLinkedIn());
    document.getElementById('copy-result')?.addEventListener('click', () => this.copyResult());
  }
  
  showWelcomeScreen() {
    document.getElementById('welcome-screen').classList.remove('hidden');
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.add('hidden');
  }
  
  startSimulator() {
    this.currentQuestion = 0;
    this.answers = [];
    this.score = { viability: 0, market: 0, execution: 0, scalability: 0 };
    
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    
    this.showQuestion();
  }
  
  showQuestion() {
    const question = this.questions[this.currentQuestion];
    
    document.getElementById('question-number').textContent = this.currentQuestion + 1;
    document.getElementById('current-question').textContent = this.currentQuestion + 1;
    document.getElementById('total-questions').textContent = this.questions.length;
    document.getElementById('question-text').textContent = question.question;
    
    // Update progress bar
    const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    
    // Update Cuban's mood
    this.updateCubanMood();
    
    // Create answer options
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'answer-option p-4 border-2 border-gray-600 rounded-xl cursor-pointer hover:border-accent hover:bg-accent/10 transition-all duration-300';
      optionElement.innerHTML = `
        <div class="flex items-center">
          <div class="w-6 h-6 border-2 border-gray-500 rounded-full mr-4 flex items-center justify-center">
            <div class="w-3 h-3 bg-accent rounded-full hidden option-selected"></div>
          </div>
          <span class="text-white">${option.text}</span>
        </div>
      `;
      
      optionElement.addEventListener('click', () => this.selectAnswer(index));
      optionsContainer.appendChild(optionElement);
    });
    
    // Update button states
    document.getElementById('prev-question').disabled = this.currentQuestion === 0;
    document.getElementById('next-question').disabled = true;
    
    // If we have a previous answer, select it
    if (this.answers[this.currentQuestion] !== undefined) {
      this.selectAnswer(this.answers[this.currentQuestion]);
    }
  }
  
  selectAnswer(answerIndex) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
      option.classList.remove('border-accent', 'bg-accent/10');
      option.classList.add('border-gray-600');
      option.querySelector('.option-selected').classList.add('hidden');
    });
    
    // Select new answer
    const selectedOption = document.querySelectorAll('.answer-option')[answerIndex];
    selectedOption.classList.remove('border-gray-600');
    selectedOption.classList.add('border-accent', 'bg-accent/10');
    selectedOption.querySelector('.option-selected').classList.remove('hidden');
    
    // Store answer
    this.answers[this.currentQuestion] = answerIndex;
    
    // Enable next button
    document.getElementById('next-question').disabled = false;
  }
  
  nextQuestion() {
    if (this.answers[this.currentQuestion] === undefined) return;
    
    // Add points for selected answer
    const question = this.questions[this.currentQuestion];
    const selectedAnswer = question.options[this.answers[this.currentQuestion]];
    
    Object.keys(selectedAnswer.points).forEach(key => {
      this.score[key] += selectedAnswer.points[key];
    });
    
    this.currentQuestion++;
    
    if (this.currentQuestion >= this.questions.length) {
      this.showResults();
    } else {
      this.showQuestion();
    }
  }
  
  prevQuestion() {
    if (this.currentQuestion > 0) {
      // Remove points from previous answer
      const question = this.questions[this.currentQuestion];
      const selectedAnswer = question.options[this.answers[this.currentQuestion]];
      
      if (selectedAnswer) {
        Object.keys(selectedAnswer.points).forEach(key => {
          this.score[key] -= selectedAnswer.points[key];
        });
      }
      
      this.currentQuestion--;
      this.showQuestion();
    }
  }
  
  updateCubanMood() {
    const totalScore = Object.values(this.score).reduce((sum, score) => sum + score, 0);
    const maxPossibleScore = (this.currentQuestion + 1) * 16; // 4 points per category per question
    const scorePercentage = totalScore / maxPossibleScore;
    
    const moodElement = document.getElementById('cuban-mood');
    
    if (scorePercentage > 0.8) {
      moodElement.textContent = '🤩 Impressed';
    } else if (scorePercentage > 0.6) {
      moodElement.textContent = '🤔 Interested';
    } else if (scorePercentage > 0.4) {
      moodElement.textContent = '😐 Skeptical';
    } else {
      moodElement.textContent = '😤 Annoyed';
    }
  }
  
  showResults() {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    
    const totalScore = Object.values(this.score).reduce((sum, score) => sum + score, 0);
    const maxScore = this.questions.length * 16; // 4 points per category per question
    const scorePercentage = totalScore / maxScore;
    
    let verdict;
    if (scorePercentage >= 0.8) {
      verdict = this.verdicts.excellent;
    } else if (scorePercentage >= 0.6) {
      verdict = this.verdicts.good;
    } else if (scorePercentage >= 0.4) {
      verdict = this.verdicts.maybe;
    } else {
      verdict = this.verdicts.poor;
    }
    
    // Display results
    document.getElementById('verdict-icon').textContent = verdict.icon;
    document.getElementById('verdict-title').textContent = verdict.title;
    document.getElementById('verdict-subtitle').textContent = verdict.subtitle;
    document.getElementById('verdict-message').textContent = verdict.message;
    
    // Display scores
    document.getElementById('viability-score').textContent = `${this.score.viability}/${this.questions.length * 4}`;
    document.getElementById('market-score').textContent = `${this.score.market}/${this.questions.length * 4}`;
    document.getElementById('execution-score').textContent = `${this.score.execution}/${this.questions.length * 4}`;
    document.getElementById('scalability-score').textContent = `${this.score.scalability}/${this.questions.length * 4}`;
    document.getElementById('total-score').textContent = `${totalScore}/${maxScore}`;
    
    // Display deal details
    document.getElementById('investment-amount').textContent = verdict.deal.investment;
    document.getElementById('equity-stake').textContent = verdict.deal.equity;
    document.getElementById('valuation').textContent = verdict.deal.valuation;
    document.getElementById('deal-type').textContent = verdict.deal.type;
    
    // Create share text
    const shareText = `I just pitched my business to Mark Cuban in the Shark Tank Simulator! ${verdict.title} Score: ${totalScore}/${maxScore} 🦈 Try it yourself!`;
    document.getElementById('share-text').textContent = shareText;
    
    // Store result for sharing
    this.lastResult = {
      verdict: verdict.title,
      score: `${totalScore}/${maxScore}`,
      shareText: shareText
    };
  }
  
  shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.lastResult.shareText);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }
  
  shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.lastResult.shareText);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, '_blank');
  }
  
  copyResult() {
    const textToCopy = `${this.lastResult.shareText} ${window.location.href}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show success feedback
      const button = document.getElementById('copy-result');
      const originalText = button.textContent;
      button.textContent = 'Copied! ✅';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
  }
  
  resetSimulator() {
    this.currentQuestion = 0;
    this.answers = [];
    this.score = { viability: 0, market: 0, execution: 0, scalability: 0 };
    this.showWelcomeScreen();
  }
  
  scrollToInvestments() {
    document.getElementById('investments')?.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize the simulator when the page loads
document.addEventListener('DOMContentLoaded', () => {
  new SharkTankSimulator();
});
