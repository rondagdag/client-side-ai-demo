interface Level {
  level: number;
  name: string;
  context: string;
  description: string;
}

const levels: Level[] = [
  {
    level: 7,
    name: "Generation Alpha",
    context: "Explain like I'm from Generation Alpha (2013-2025). Use emojis 🚀, gamification elements, and frequent emoji reactions. Break into mini-challenges, use AI/tech analogies, and keep it super interactive. Think: TikTok/YouTube-style explanations with quick transitions and visual cues.",
    description: "Ultra-interactive digital native style 🎮, gamified learning chunks 🎯, AI-friendly explanations 🤖, emoji-rich communication 😊"
  },
  {
    level: 6,
    name: "Generation Z",
    context: "Explain like I'm from Generation Z (1995-2012). Use social media inspired formats, internet slang, and cultural references. Keep it real and skip corporate speak. Think: Instagram captions, TikTok scripts, or Twitter threads. Include occasional memes and focus on quick, memorable takeaways.",
    description: "Social media style explanations, internet culture references, authenticity over formality, meme-friendly format"
  },
  {
    level: 5,
    name: "Millennial",
    context: "Explain like I'm a Millennial (1980-1994). Reference 90s/2000s pop culture, use nostalgic comparisons, and blend humor with adulting wisdom. Think: BuzzFeed-style lists, Friends references, Harry Potter analogies. Balance fun with practical life hacks and side-hustle mindset.",
    description: "90s/2000s cultural references, witty yet practical, startup/side-hustle mindset, list-style breakdowns"
  },
  {
    level: 4,
    name: "Generation X",
    context: "Explain like I'm from Generation X (1965-1979). Be direct and slightly cynical, avoid corporate buzzwords. Use references to classic rock, early tech, or 80s culture when relevant. Think: MTV generation meets pragmatic problem-solving. Focus on independence and getting things done efficiently.",
    description: "Straight-to-the-point, DIY approach, healthy skepticism, 80s cultural touchstones, values resourcefulness"
  },
  {
    level: 3,
    name: "Baby Boomer",
    context: "Explain like I'm a Baby Boomer (1946-1964). Use post-war and economic boom references, emphasize traditional values and hard work. Think: newspaper article style, Walter Cronkite-era clarity. Include historical context and draw parallels to major events from 50s-70s. Value experience and proven track records.",
    description: "Traditional media style, historical context heavy, values-based reasoning, experience-focused explanations"
  },
  {
    level: 2,
    name: "The Silent Generation",
    context: "Explain like I'm from the Silent Generation (1925-1945). Use formal, respectful language with clear hierarchy. Reference post-depression era values, military precision, and methodical approaches. Think: formal letter or professional memo style. Emphasize duty, honor, and careful planning.",
    description: "Highly structured formal style, military-precise language, duty-oriented perspective, traditional values focus"
  },
  {
    level: 1,
    name: "The Greatest Generation",
    context: "Explain like I'm from the Greatest Generation (1901-1924). Use very formal, authoritative language with proper etiquette. Reference early 20th century contexts, classical literature, and time-tested principles. Think: formal academic lecture or professional correspondence style. Focus on foundational wisdom and proven methodologies.",
    description: "Classical formal style, scholarly tone, foundational principles, traditional wisdom emphasis"
  }
];

let currentLevel = 1;

// Initialize the UI
async function initializeUI() {
  // Load saved level from storage
  const result = await chrome.storage.sync.get('selectedLevel');
  if (result.selectedLevel) {
    currentLevel = result.selectedLevel.level;
  }

  const container = document.getElementById('options')!;
  
  levels.forEach(level => {
    const button = document.createElement('button');
    button.className = `level-option ${level.level === currentLevel ? 'selected' : ''}`;
    button.innerHTML = `
      <div class="level-name">${level.name}</div>
      <div class="level-description">${level.description}</div>
    `;
    
    button.addEventListener('click', () => {
      selectLevel(level);
    });
    container.appendChild(button);
  });

  // If we loaded a saved level, make sure to initialize it
  if (result.selectedLevel) {
    await selectLevel(result.selectedLevel);
  }
}

// Handle level selection
async function selectLevel(level: Level) {
  currentLevel = level.level;
  
  // Update UI
  document.querySelectorAll('.level-option').forEach(btn => {
    btn.classList.toggle('selected', 
      (btn.querySelector('.level-name')?.textContent === level.name)
    );
  });
  
  // Save to storage
  await chrome.storage.sync.set({ selectedLevel: level });
  
  // Send message to background script
  await chrome.runtime.sendMessage({
    type: 'SET_LEVEL',
    level: level
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeUI().catch(console.error);
});