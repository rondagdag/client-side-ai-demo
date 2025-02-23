// Initialize AI features
function injectAiSdk() {
  const script = document.createElement('script');
  script.src = 'https://sdk.vedai.ai/ai-sdk.js';
  script.onload = () => {
    // Check periodically for AI initialization
    const checkInterval = setInterval(() => {
      if (window.ai?.summarizer) {
        clearInterval(checkInterval);
        chrome.runtime.sendMessage({ type: 'AI_READY' });
      }
    }, 500);

    // Stop checking after 30 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 30000);
  };
  (document.head || document.documentElement).appendChild(script);
}

// Start initialization when the content script loads
if (window.top === window) {
  injectAiSdk();
}