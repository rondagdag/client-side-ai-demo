import { Toucan } from "toucan-js"
const sentry = new Toucan({
  dsn: "https://85882377f458516b86a142cd2433f657@o4508836932812800.ingest.us.sentry.io/4508836938579969",
  environment: import.meta.env.PROD ? "production" : "development"
})

// Store the current selected level
let currentLevel = {
  level: 1,
  context: "Explain like I'm from the Greatest Generation (1901-1924). Use very formal, authoritative language with proper etiquette. Reference early 20th century contexts, classical literature, and time-tested principles. Think: formal academic lecture or professional correspondence style. Focus on foundational wisdom and proven methodologies.",
  description: "Classical formal style, scholarly tone, foundational principles, traditional wisdom emphasis"
}

// Listen for level changes from the popup
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "SET_LEVEL") {
    currentLevel = message.level
    sendResponse({ success: true })
  }
})

// Extension installation listener
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarize-text",
    title: "Summarize Selected Text",
    contexts: ["selection"]
  })
})

const getOptions = () => ({
  sharedContext: `${currentLevel.context}. ${currentLevel.description}`,
  type: "tl;dr",
  format: "plain-text",
  length: "medium"
})

// @ts-expect-error new chrome feature
if ("ai" in self && "summarizer" in self.ai) {
  // 🎨 UI Thread: Handle context menu click
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "summarize-text" && info.selectionText && tab?.id) {
      if (chrome.sidePanel && tab) {
        try {
          chrome.sidePanel.open({ windowId: tab.windowId })

          await new Promise((resolve) => setTimeout(resolve, 500))
        } catch (error) {
          sentry.captureException(error)
        }
      }
      try {
        // @ts-expect-error new chrome feature
        const available = (await self.ai.summarizer.capabilities()).available
        let summarizer
        if (available === "no") {
          chrome.runtime.sendMessage({
            type: "ERROR",
            error: "The Summarizer API isn't usable"
          })
          return
        }
        if (available === "readily") {
          chrome.runtime.sendMessage({
            chunk: "",
            type: "STREAM_RESPONSE",
            isFirst: true,
            level: currentLevel.level
          })
          // @ts-expect-error new chrome feature
          summarizer = await self.ai.summarizer.create(getOptions())

          await summarizer.ready

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
            type: "STREAM_COMPLETE"
          })
        } else {
          // The Summarizer API can be used after the model is downloaded.
          // @ts-expect-error new chrome feature
          summarizer = await self.ai.summarizer.create(getOptions())
          summarizer.addEventListener(
            "downloadprogress",
            (e: { loaded: number; total: number }) => {
              console.log(e.loaded, e.total)
              chrome.runtime.sendMessage({
                type: "AI_INITIATE",
                total: e.total,
                loaded: e.loaded
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

  // ⚡ Extension Icon: Open side panel when extension icon is clicked
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
  sentry.captureMessage("Try to access Summarizer", "fatal", {
    data: {
      userAgent: navigator.userAgent
    }
  })
}
