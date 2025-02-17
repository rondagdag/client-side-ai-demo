chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error('Error setting panel behavior:', error));

function initializeContentScript(tabId) {
  // Skip injection for invalid tabs
  if (!tabId) return;

  chrome.tabs.get(tabId, (tab) => {
    // Skip chrome:// URLs
    if (!tab?.url || tab.url.startsWith('chrome://') || tab.url.startsWith('about:') || tab.url.startsWith('file://')) {
      console.log('Skipping injection for URL:', tab.url);
      return;
    }

    chrome.scripting.executeScript({
      target: { tabId },
      func: () => {
        // Only inject if not already initialized
        if (!window._xplainInitialized) {
          const handleSelection = () => {
            const selection = window.getSelection();
            const text = selection?.toString()?.trim();
            if (!text) return;

            const range = selection.getRangeAt(0);
            const container = range.commonAncestorContainer.parentElement;
            const content = container?.textContent || '';
            
            const start = Math.max(0, content.indexOf(text));
            const contextSize = 100;
            
            chrome.storage.local.set({
              selectedText: text,
              context: {
                before: content.slice(Math.max(0, start - contextSize), start).trim(),
                after: content.slice(start + text.length, start + text.length + contextSize).trim()
              }
            });
          };

          // Clean up existing listener if any
          if (window._selectionHandler) {
            document.removeEventListener('selectionchange', window._selectionHandler);
          }

          window._selectionHandler = handleSelection;
          document.addEventListener('selectionchange', window._selectionHandler);
          window._xplainInitialized = true;
          console.log('Xplain selection handler initialized');
        }
      }
    }).catch(error => {
      console.error('Script injection failed:', error);
    });
  });
}

// Initialize on tab activation
chrome.tabs.onActivated.addListener(activeInfo => {
  initializeContentScript(activeInfo.tabId);
});

// Initialize on tab update
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    initializeContentScript(tabId);
  }
});