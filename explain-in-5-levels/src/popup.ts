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
    context: "Explain like I'm from Generation Alpha (2013-2025)",
    description: "AI-native and interactive explanations"
  },
  {
    level: 6,
    name: "Generation Z",
    context: "Explain like I'm from Generation Z (1995-2012)",
    description: "Digital native perspective explanations"
  },
  {
    level: 5,
    name: "Millennial",
    context: "Explain like I'm a Millennial (1980-1994)",
    description: "Tech-savvy and collaborative explanations"
  },
  {
    level: 4,
    name: "Generation X",
    context: "Explain like I'm from Generation X (1965-1979)",
    description: "Independent and pragmatic explanations"
  },
  {
    level: 3,
    name: "Baby Boomer",
    context: "Explain like I'm a Baby Boomer (1946-1964)",
    description: "Idealistic and experience-based explanations"
  },
  {
    level: 2,
    name: "The Silent Generation",
    context: "Explain like I'm from the Silent Generation (1925-1945)",
    description: "Practical and conventional explanations"
  },
  {
    level: 1,
    name: "The Greatest Generation",
    context: "Explain like I'm from the Greatest Generation (1901-1924)",
    description: "Traditional, formal, and straightforward explanations"
  }
];

let currentLevel = 1;

// Initialize the UI
function initializeUI() {
  const container = document.getElementById('options')!;
  
  levels.forEach(level => {
    const button = document.createElement('button');
    button.className = `level-option ${level.level === currentLevel ? 'selected' : ''}`;
    button.innerHTML = `
      <div class="level-name">Level ${level.level}: ${level.name}</div>
      <div class="level-description">${level.description}</div>
    `;
    
    button.addEventListener('click', () => selectLevel(level));
    container.appendChild(button);
  });
}

// Handle level selection
async function selectLevel(level: Level) {
  currentLevel = level.level;
  
  // Update UI
  document.querySelectorAll('.level-option').forEach(btn => {
    btn.classList.toggle('selected', 
      (btn.querySelector('.level-name')?.textContent?.startsWith(`Level ${level.level}`))
    );
  });
  
  // Send message to background script
  await chrome.runtime.sendMessage({
    type: 'SET_LEVEL',
    level: level
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', initializeUI);