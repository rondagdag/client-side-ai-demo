# 🌟 Explain in Generations 🌟

## Inspiration
Understanding how different generations consume and process information is crucial in today's multi-generational world. We created a tool that adapts explanations to match the communication styles and cultural references of different generations, from Gen Alpha to the Greatest Generation.

## **What it does**
🌟 Explain in Generations enables users to highlight any text on a webpage and instantly receive AI-powered explanations tailored to specific generational communication styles. It seamlessly integrates into the Chrome side panel, allowing users to switch between different generational perspectives without leaving their current page.

## **Features**
- Adapts explanations for 7 different generations
- Uses generation-specific cultural references and communication styles
- Real-time AI-powered text processing
- Seamless Chrome integration with side panel support

## Installation & Setup

1. Clone this repository, build the project
2. Enable Chrome's built-in AI features:
   - Open Chrome and navigate to `chrome://flags`
   - Enable the following flags:
     - `chrome://flags/#summarization-api-for-gemini-nano`
   - Click "Restart" to apply changes
   - For more details, see the [official Chrome Summarization API documentation](https://developer.chrome.com/docs/ai/summarizer-api)
3. Open Chrome and navigate to `chrome://extensions`
4. Enable "Developer mode" in the top right corner
5. Click "Load unpacked" and select the extension directory

## Usage

1. Navigate to any webpage
2. Open the side panel by clicking the extension icon in the toolbar
3. Highlight any text on the webpage
4. The extension will automatically generate explanations tailored for different generations
5. Switch between different generational perspectives using the controls in the side panel

## Requirements

- Google Chrome version 116 or later
- Permissions:
  - `"sidePanel"`: Required for the extension's side panel interface
  - `"activeTab"`: Required to access the current page's content
  - `"generativeContentAPI"`: Required for AI-powered text generation

## API Notes

This extension uses Chrome's Generative Content API, which:
- Is free to use
- Runs locally on the user's device
- Does not send data to external servers
- Requires Chrome version 116 or later

## **What's next for 🌟 Explain in Generations**
- Enhanced generational context awareness
- Customizable communication style preferences
- Multi-language support with generation-appropriate localizations
- Integration with educational platforms for cross-generational learning