// Initialize Sentry for error tracking and monitoring
import { Toucan } from "toucan-js"
const sentry = new Toucan({
  dsn: "https://85882377f458516b86a142cd2433f657@o4508836932812800.ingest.us.sentry.io/4508836938579969",
  environment: import.meta.env.PROD ? "production" : "development"
})

// Default configuration for the current explanation level
// This serves as a fallback if no stored level is found
let currentLevel = {
  level: 1,
  context: "Explain like I'm from the Greatest Generation (1901-1924). Use very formal, authoritative language with proper etiquette. Reference early 20th century contexts, classical literature, and time-tested principles. Think: formal academic lecture or professional correspondence style. Focus on foundational wisdom and proven methodologies.",
  description: "Classical formal style, scholarly tone, foundational principles, traditional wisdom emphasis"
}

// On extension startup, retrieve the previously saved level from Chrome's storage
// This ensures user preferences persist across browser sessions
chrome.storage.local.get(['currentLevel'], (result) => {
  if (result.currentLevel) {
    currentLevel = result.currentLevel;
  }
});

// Message handler for level changes from the popup
// When the user selects a new level, update both memory and persistent storage
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "SET_LEVEL") {
    currentLevel = message.level
    // Persist the new level to Chrome's storage
    chrome.storage.local.set({ currentLevel: message.level });
    sendResponse({ success: true })
  }
})

// Set up the context menu item when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarize-text",
    title: "Explain in Generations",
    contexts: ["selection"]  // Only show menu on text selection
  })
})

// Helper function to get the current summarization options
// These options configure how the AI explains the selected text
const getOptions = () => ({
  sharedContext: `${currentLevel.context}. ${currentLevel.description}`,
  type: "tldr",
  format: "plain-text",
  length: "medium"
})

// Check if the Chrome AI Summarizer API is available
if ('Summarizer' in self) {
  // Handle right-click context menu selection
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "summarize-text" && info.selectionText && tab?.id) {
      // Open the side panel if available
      if (chrome.sidePanel && tab) {
        try {
          chrome.sidePanel.open({ windowId: tab.windowId })
          // Small delay to ensure panel is ready
          await new Promise((resolve) => setTimeout(resolve, 500))
        } catch (error) {
          sentry.captureException(error)
        }
      }

      try {
        // Check if the summarizer API is available and ready to use
        // @ts-expect-error new chrome feature
        //const available = (await self.ai.summarizer.capabilities()).available
        const availability = await Summarizer.availability();
        let summarizer

        if (availability === 'unavailable') {
          // API is not available on this system
          chrome.runtime.sendMessage({
            type: "ERROR",
            error: "The Summarizer API isn't usable"
          })
          return
        }

        if (availability === 'available') {
          // API is ready to use immediately
          chrome.runtime.sendMessage({
            chunk: "",
            type: "STREAM_RESPONSE",
            isFirst: true,
            level: currentLevel.level
          })

          // Initialize the summarizer with current options
          // @ts-expect-error new chrome feature
          summarizer = await Summarizer.create(getOptions());
          await summarizer.ready

          // Process the selected text and stream the results
          const stream = await summarizer.summarize(info.selectionText, {
            context: `article from ${new URL(tab.url!).origin}`
          })
          for await (const chunk of stream) {
            chrome.runtime.sendMessage({
              chunk,
              type: "STREAM_RESPONSE"
            })
          }
          chrome.runtime.sendMessage({
            type: "STREAM_COMPLETE",
            level: currentLevel.level
          })
        } else {
          // API needs to download models first
          // @ts-expect-error new chrome feature
          summarizer = await Summarizer.create(getOptions());
          // Track and report download progress
          summarizer.addEventListener(
            "downloadprogress",
            (e: { loaded: number; total: number }) => {
              console.log(e.loaded, e.total)
              chrome.runtime.sendMessage({
                type: "AI_INITIATE",
                total: e.total,
                loaded: e.loaded,
              })
            }
          )
          await summarizer.ready
        }
      } catch (error) {
        sentry.captureException(error)
      }
    }
  })

  // Handle clicks on the extension icon
  chrome.action.onClicked.addListener(async (tab) => {
    if (chrome.sidePanel && tab) {
      try {
        await chrome.sidePanel.open({ windowId: tab.windowId })
      } catch (error) {
        sentry.captureException(error)
      }
    }
  })
} else {
  // Log an error if the Summarizer API is not available in this browser
  sentry.captureMessage("Try to access Summarizer", "fatal", {
    data: {
      userAgent: navigator.userAgent
    }
  })
}
