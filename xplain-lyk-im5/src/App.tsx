import React, { useState, useEffect } from 'react';
import './App.css';

interface Context {
  before: string;
  after: string;
}

interface StorageResult {
  selectedText?: string;
  context?: Context;
}

function App() {
  const [sourceText, setSourceText] = useState<string>('');
  const [context, setContext] = useState<Context>({ before: '', after: '' });
  const [explanation, setExplanation] = useState<string>('');

  useEffect(() => {
    const updateText = () => {
      chrome.storage.local.get(['selectedText', 'context'], (result: StorageResult) => {
        if (chrome.runtime.lastError) {
          console.error('Error getting chrome.storage:', chrome.runtime.lastError);
        } else {
          console.log('chrome.storage result:', result);
          if (result.selectedText) {
            setSourceText(result.selectedText);
            setContext(result.context || { before: '', after: '' });
            // TODO: Call Web AI to get the explanation
            setExplanation('This is a placeholder explanation for: ' + result.selectedText);
          }
        }
      });
    };

    // Initial load
    updateText();

    // Listen for storage changes
    chrome.storage.onChanged.addListener(updateText);

    return () => {
      chrome.storage.onChanged.removeListener(updateText);
    };
  }, []);

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4">Xplain lyk I'm 5</h1>
      <p className="text-sm text-gray-500 mb-4">Select a word and read the explanation</p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="sourceText">
          Source Text
        </label>
        <div className="border p-2 rounded" contentEditable={true} suppressContentEditableWarning={true}>
          {sourceText}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="explanation">
          Explanation
        </label>
        <div className="border p-2 rounded h-24">
          {explanation}
        </div>
      </div>
    </div>
  );
}

export default App;
