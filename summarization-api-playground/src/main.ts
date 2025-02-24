/**
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './style.css'

// The underlying model has a context of 1,024 tokens, out of which 26 are used by the internal prompt,
// leaving about 998 tokens for the input text. Each token corresponds, roughly, to about 4 characters, so 4,000
// is used as a limit to warn the user that the content might be too long to summarize.
const MAX_MODEL_CHARS = 4000;
const inputTextArea = document.querySelector('#input') as HTMLTextAreaElement;
const summaryTypeSelect = document.querySelector('#type') as HTMLSelectElement;
const summaryFormatSelect = document.querySelector('#format') as HTMLSelectElement;
const summaryLengthSelect = document.querySelector('#length') as HTMLSelectElement;
const characterCountSpan = document.querySelector('#character-count') as HTMLSpanElement;
const characterCountExceededSpan = document.querySelector('#character-count-exceed') as HTMLSpanElement;
const summarizationUnsupportedDialog = document.querySelector('#summarization-unsupported') as HTMLDivElement;
const summarizationUnavailableDialog = document.querySelector('#summarization-unavailable') as HTMLDivElement;
const output = document.querySelector('#output') as HTMLDivElement;

let selectionTimeout: number | undefined = undefined;

// Function to handle text selection with debouncing
const handleSelection = () => {
  clearTimeout(selectionTimeout);
  selectionTimeout = setTimeout(() => {
    const selectedText = window.getSelection()?.toString().trim();
    if (selectedText) {
      inputTextArea.value = selectedText;
      characterCountSpan.textContent = selectedText.length.toString();
      if (selectedText.length > MAX_MODEL_CHARS) {
        characterCountSpan.classList.add('tokens-exceeded');
        characterCountExceededSpan.classList.remove('hidden');
      } else {
        characterCountSpan.classList.remove('tokens-exceeded');
        characterCountExceededSpan.classList.add('hidden');
      }
      scheduleSummarization();
    }
  }, 500); // Wait 500ms after selection ends
};

document.addEventListener('mouseup', handleSelection);
document.addEventListener('keyup', (e) => {
  if (e.key === 'Shift' || e.key === 'Meta' || e.key === 'Control') {
    handleSelection();
  }
});

/*
 * Creates a summarization session. If the model has already been downloaded, this function will
/*
 * Checks if the device supports the Summarizer API (rather than if the browser supports the API).
 * This method returns `true` when the device is capable of running the Summarizer API and `false`
 * when it is not.
 *
 * Ideally this check would only require the code code section below:
 *
 * ```javascript
 * let capabilites = await self.ai.summarizer.capabilities();
 * if (capabilites.available === 'readily' || capabilites.available === 'after-download') {
 *   return true;
 * }
 * ```
 *
 * However, due to https://crbug.com/379074334, the API may return `no` when
 * `self.ai.summarizer.create()` was never called, so this function implements a workaround for
 * this scenario, ensuring `create()` is called at least once before returning `false`.
 */
const checkSummarizerSupport = async (): Promise<boolean> => {
  // Do a first capabilities check. If 'no' is returned, it might mean the model hasn't been
  // bootstrapped by calling `create()`. In this case, `create()` is called, which should result
  // in an exception being raised. The exception is ignored, but now `capabilities()` should
  // reflect the actual state of the API, with `no` meaning the device is unable to run the API.
  let capabilites = await self.ai.summarizer.capabilities();
  if (capabilites.available === 'readily' || capabilites.available === 'after-download') {
    return true;
  }

  try {
    await self.ai.summarizer.create();
  } catch (e) { }

  capabilites = await self.ai.summarizer.capabilities();
  return capabilites.available !== 'no';
}

let timeout: number | undefined = undefined;
function scheduleSummarization() {
  // Debounces the call to the summarization API. This will run the summarization once the user
  // hasn't typed anything for at least 1 second.
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    output.textContent = 'Generating summary...';
    let session = await createSummarizationSession(
      summaryTypeSelect.value as AISummarizerType,
      summaryFormatSelect.value as AISummarizerFormat,
      summaryLengthSelect.value as AISummarizerLength,
    );
    let summary = await session.summarize(inputTextArea.value);
    session.destroy();
    output.textContent = summary;
  }, 1000);
}

async function createSummarizationSession(
  type: AISummarizerType,
  format: AISummarizerFormat,
  length: AISummarizerLength
) {
  return await self.ai.summarizer.create({
    type,
    format,
    length
  });
}

/*
 * Initializes the application.
 * This function will check for the availability of the Summarization API, and if the device is
 * able to run it before setting up the listeners to summarize the input added to the textarea.
 */
const initializeApplication = async () => {
  const summarizationApiAvailable = self.ai !== undefined && self.ai.summarizer !== undefined;
  if (!summarizationApiAvailable) {
    summarizationUnavailableDialog.style.display = 'block';
    return;
  }

  const canSummarize = await checkSummarizerSupport();
  if (!canSummarize) {
    summarizationUnsupportedDialog.style.display = 'block';
    return;
  }

  summaryTypeSelect.addEventListener('change', scheduleSummarization);
  summaryFormatSelect.addEventListener('change', scheduleSummarization);
  summaryLengthSelect.addEventListener('change', scheduleSummarization);

  inputTextArea.addEventListener('input', () => {
    characterCountSpan.textContent = inputTextArea.value.length.toFixed();
    if (inputTextArea.value.length > MAX_MODEL_CHARS) {
      characterCountSpan.classList.add('tokens-exceeded');
      characterCountExceededSpan.classList.remove('hidden');
    } else {
      characterCountSpan.classList.remove('tokens-exceeded');
      characterCountExceededSpan.classList.add('hidden');
    }
    scheduleSummarization();
  });
}

initializeApplication();
