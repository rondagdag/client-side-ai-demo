/**
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

(async () => {
  // Check if the Language Detector API is supported
  if (!('LanguageDetector' in self)) {
    document.querySelector('.not-supported-message').hidden = false;
    return;
  }

  const input = document.querySelector('textarea');
  const output = document.querySelector('output');
  const form = document.querySelector('form');
  const detected = document.querySelector('span');
  const language = document.querySelector('select');

  form.style.visibility = 'visible';
  
  // Create the language detector with proper availability check
  const availability = await LanguageDetector.availability();
  let detector;
  
  if (availability === 'unavailable') {
    document.querySelector('.not-supported-message').hidden = false;
    return;
  }
  
  if (availability === 'available') {
    detector = await LanguageDetector.create();
  } else {
    // Handle downloadable/downloading states
    detector = await LanguageDetector.create({
      monitor(m) {
        m.addEventListener('downloadprogress', (e) => {
          console.log(`Language Detector: Downloaded ${e.loaded * 100}%`);
        });
      },
    });
    await detector.ready;
  }

  input.addEventListener('input', async () => {
    if (!input.value.trim()) {
      detected.textContent = 'not sure what language this is';
      return;
    }
    const { detectedLanguage, confidence } = (
      await detector.detect(input.value.trim())
    )[0];
    detected.textContent = `${(confidence * 100).toFixed(
      1
    )}% sure that this is ${languageTagToHumanReadable(
      detectedLanguage,
      'en'
    )}`;
  });

  input.dispatchEvent(new Event('input'));

  const languageTagToHumanReadable = (languageTag, targetLanguage) => {
    const displayNames = new Intl.DisplayNames([targetLanguage], {
      type: 'language',
    });
    return displayNames.of(languageTag);
  };

  if ('Translator' in self) {
    document.querySelectorAll('[hidden]:not(.not-supported-message)').forEach((el) => {
      el.removeAttribute('hidden');
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const sourceLanguage = (await detector.detect(input.value.trim()))[0].detectedLanguage;
        if (!['en', 'ja', 'es'].includes(sourceLanguage)) {
          output.textContent = 'Currently, only English ↔ Spanish and English ↔ Japanese are supported.';
          return;
        }
        
        // Check if the translation pair is available
        const translatorAvailability = await Translator.availability({
          sourceLanguage,
          targetLanguage: language.value,
        });
        
        if (translatorAvailability === 'unavailable') {
          output.textContent = 'Translation not available for this language pair.';
          return;
        }
        
        let translator;
        if (translatorAvailability === 'available') {
          translator = await Translator.create({
            sourceLanguage,
            targetLanguage: language.value,
          });
        } else {
          // Handle downloadable/downloading states
          translator = await Translator.create({
            sourceLanguage,
            targetLanguage: language.value,
            monitor(m) {
              m.addEventListener('downloadprogress', (e) => {
                console.log(`Translator: Downloaded ${e.loaded * 100}%`);
                output.textContent = `Downloading translation model... ${(e.loaded * 100).toFixed(1)}%`;
              });
            },
          });
          await translator.ready;
        }
        
        output.textContent = await translator.translate(input.value.trim());
      } catch (err) {
        output.textContent = 'An error occurred. Please try again.';
        console.error(err.name, err.message);
      }
    });
  }
})();
