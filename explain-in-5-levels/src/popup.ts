interface Level {
  level: number;
  name: string;
  context: string;
  description: string;
}

const levels: Level[] = [
  {
    level: 1,
    name: "Child",
    context: "Explain like I'm 5",
    description: "Simple explanations for young children"
  },
  {
    level: 2,
    name: "Teenager",
    context: "Explain like I'm in my Teens",
    description: "Clear explanations for teenagers"
  },
  {
    level: 3,
    name: "College Student",
    context: "Explain like I'm in my 20s",
    description: "Detailed explanations for college level"
  },
  {
    level: 4,
    name: "Grad Student",
    context: "Explain like I'm in my 25-30s",
    description: "Advanced explanations for graduate level"
  },
  {
    level: 5,
    name: "Expert",
    context: "Explain at expert level",
    description: "Technical, in-depth explanations"
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