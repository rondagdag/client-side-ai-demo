import { Level, levels } from './types/levels'

let currentLevel: Level = levels[0]

async function initializeUI() {
  const result = await chrome.storage.sync.get('selectedLevel')
  if (result.selectedLevel) {
    currentLevel = result.selectedLevel
  }

  const container = document.getElementById('options')!
  
  levels.forEach(level => {
    const button = document.createElement('button')
    button.className = `level-option ${level.level === currentLevel.level ? 'selected' : ''}`
    button.innerHTML = `
      <div class="level-name">${level.name}</div>
      <div class="level-description">${level.description}</div>
      <div class="level-details text-sm text-gray-600 dark:text-gray-400 mt-1">${level.details}</div>
    `
    
    button.addEventListener('click', () => {
      selectLevel(level)
    })
    container.appendChild(button)
  })

  if (result.selectedLevel) {
    await selectLevel(result.selectedLevel)
  }
}

async function selectLevel(level: Level) {
  currentLevel = level
  
  document.querySelectorAll('.level-option').forEach(btn => {
    btn.classList.toggle('selected', 
      (btn.querySelector('.level-name')?.textContent === level.name)
    )
  })
  
  await chrome.storage.sync.set({ selectedLevel: level })
  await chrome.runtime.sendMessage({
    type: 'SET_LEVEL',
    level
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initializeUI().catch(console.error)
})