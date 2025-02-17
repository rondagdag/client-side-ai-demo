/// <reference types="chrome"/>

declare global {
  interface Window {
    chrome: typeof chrome;
  }

  interface ChromeStorageChanges {
    [key: string]: chrome.storage.StorageChange;
  }
}

export {};