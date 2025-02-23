import { l as levels } from "./levels.js";
let currentLevel = {
  level: 1,
  context: levels[0].context,
  description: levels[0].description,
  details: levels[0].details
};
chrome.storage.local.get(["currentLevel"], (result) => {
  if (result.currentLevel) {
    currentLevel = result.currentLevel;
  }
});
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "SET_LEVEL") {
    currentLevel = {
      level: message.level.level,
      context: message.level.context,
      description: message.level.description,
      details: message.level.details
    };
    chrome.storage.local.set({ currentLevel });
    sendResponse({ success: true });
  }
});
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarize-text",
    title: "Explain in Engineering Eras",
    contexts: ["selection"]
  });
});
const getOptions = () => ({
  sharedContext: `${currentLevel.context}. ${currentLevel.description}. ${currentLevel.details}`,
  type: "tl;dr",
  format: "markdown",
  length: "medium"
});
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "summarize-text" && info.selectionText && tab?.id) {
    if (chrome.sidePanel && tab) {
      try {
        await chrome.sidePanel.open({ windowId: tab.windowId });
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error("Error opening side panel:", error);
      }
    }
    try {
      const available = (await self.ai.summarizer.capabilities()).available;
      let summarizer;
      if (available === "no") {
        chrome.runtime.sendMessage({
          type: "ERROR",
          error: "The Summarizer API isn't usable"
        });
        return;
      }
      if (available === "readily") {
        chrome.runtime.sendMessage({
          type: "STREAM_RESPONSE",
          isFirst: true,
          level: currentLevel.level
        });
        summarizer = await self.ai.summarizer.create(getOptions());
        await summarizer.ready;
        const stream = await summarizer.summarize(info.selectionText, {
          context: `article from ${new URL(tab.url).origin}`
        });
        for await (const chunk of stream) {
          await chrome.runtime.sendMessage({
            type: "STREAM_RESPONSE",
            chunk,
            level: currentLevel.level
          });
        }
        await chrome.runtime.sendMessage({
          type: "STREAM_COMPLETE",
          level: currentLevel.level
        });
      } else {
        summarizer = await self.ai.summarizer.create(getOptions());
        summarizer.addEventListener(
          "downloadprogress",
          (e) => {
            console.log(e.loaded, e.total);
            chrome.runtime.sendMessage({
              type: "AI_INITIATE",
              total: e.total,
              loaded: e.loaded
            });
          }
        );
        await summarizer.ready;
      }
    } catch (error) {
      console.error("Summarization error:", error);
      chrome.runtime.sendMessage({
        type: "ERROR",
        error: error instanceof Error ? error.message : "An error occurred during summarization"
      });
    }
  }
});
//# sourceMappingURL=background.js.map
