/// <reference lib="dom" />

interface AIModel {
  create: (params?: any) => Promise<any>;
  capabilities: () => Promise<{ available: string }>;
}

interface AIScope {
  languageModel: AIModel;
  capabilities: () => Promise<{ available: string }>;
}

declare const chrome: {
  aiOriginTrial?: AIScope;
};

declare const self: {
  ai?: AIScope;
};

// Keep track of the session globally
interface AISession {
  promptStreaming: (text: string, params?: any) => Promise<AsyncIterable<{ text: string }>>;
}

let session: AISession | null = null;
let sessionPromise: Promise<AISession> | null = null;
let isInitializing = false;

// Track tab visibility state
let isTabVisible = true;

// Listen for visibility changes
document.addEventListener('visibilitychange', () => {
  const wasVisible = isTabVisible;
  isTabVisible = document.visibilityState === 'visible';
  
  if (!wasVisible && isTabVisible) {
    console.log('Tab became visible, checking session validity...');
    validateAndRecoverSession();
  }
});

async function validateAndRecoverSession() {
  if (!session) return;

  try {
    // Try a minimal prompt to validate session
    await session.promptStreaming('test', { maxOutputTokens: 1 });
    console.log('Existing session is valid');
  } catch (error) {
    console.log('Session invalid after tab switch, recreating...', error);
    session = null;
    sessionPromise = null;
    isInitializing = false;
  }
}

function genInitialPrompts() {
  return [{
    role: 'system',
    content: `You are a friendly teacher who loves to help children learn new words and understand sentences. Use simple language and fun examples. When explaining a word or sentence, use simple terms, relatable examples, and engaging analogies that a 5-year-old would understand. For example, if asked about 'gravity', you might say: 'Gravity is like an invisible hug from Earth that keeps you from floating away, just like how a magnet sticks to your fridge!' Keep explanations short, fun, and use examples from everyday life that children experience.`
  }];
}

export async function getScope(): Promise<AIScope | undefined> {
  // Try chrome.aiOriginTrial first
  if (chrome?.aiOriginTrial?.languageModel) {
    console.log('Using chrome.aiOriginTrial scope');
    return chrome.aiOriginTrial;
  }
  
  // Fallback to self.ai
  if (self?.ai?.languageModel) {
    console.log('Using self.ai scope');
    return self.ai;
  }

  console.log('No AI scope available');
  return undefined;
}

export async function checkUsability(): Promise<{ available: boolean; model: AIModel | null }> {
  try {
    const aiScope = await getScope();
    if (!aiScope?.languageModel) {
      console.log('No AI model available');
      return { available: false, model: null };
    }

    const model = aiScope.languageModel;
    const capabilities = await model.capabilities();
    console.log('AI capabilities:', capabilities);

    return {
      available: capabilities?.available === 'readily',
      model: model
    };
  } catch (error) {
    console.error('Error checking AI availability:', error);
    return { available: false, model: null };
  }
}

interface ConversationContext {
  role: string;
  content: string;
}

// Store conversation context
let lastConversationContext: ConversationContext[] | null = null;

async function createSession(params?: any) {
  const { available, model } = await checkUsability();
  
  if (!available || !model) {
    throw new Error(
      'AI features are not available. Please make sure:\n' +
      '1. You are using Chrome version 121 or higher\n' +
      '2. The following flags are enabled in chrome://flags:\n' +
      '   - Generative AI features in the browser\n' +
      '   - Web Environment Integrity API\n' +
      '3. You have restarted Chrome after enabling these features'
    );
  }

  console.log('Creating AI session with params:', params);
  const sessionParams = {
    maxOutputTokens: 1024,
    temperature: 0.7,
    topK: 40,
    ...params,
    // Restore conversation context if available
    initialPrompts: lastConversationContext || params?.initialPrompts || genInitialPrompts()
  };

  try {
    const newSession = await model.create(sessionParams);
    if (!newSession || typeof newSession.promptStreaming !== 'function') {
      console.error('Invalid session object:', newSession);
      throw new Error('Failed to create valid AI session');
    }
    console.log('AI session created successfully');
    return newSession;
  } catch (error) {
    console.error('Session creation error:', error);
    throw error;
  }
}

export async function genSession(params?: any): Promise<AISession> {
  // Return existing session if valid
  if (session) {
    return session;
  }

  // Return pending session creation if one is in progress
  if (sessionPromise) {
    return sessionPromise;
  }

  // Create new session
  try {
    isInitializing = true;
    sessionPromise = createSession(params);
    session = await sessionPromise;
    return session;
  } catch (error) {
    console.error('Failed to initialize session:', error);
    session = null;
    throw error;
  } finally {
    isInitializing = false;
    sessionPromise = null;
  }
}

const MAX_RETRY_ATTEMPTS = 2;
let retryCount = 0;

function getTabSwitchErrorMessage(error: Error) {
  return `Session was interrupted due to tab switching. ${error.message}\n\n` +
    'To resolve this:\n' +
    '1. Keep this tab visible while processing requests\n' +
    '2. Wait a moment - the system will try to recover automatically\n' +
    '3. If the issue persists, refresh the page\n\n' +
    'The system will attempt to recover automatically in a moment...';
}

async function retryWithNewSession(text: string, params?: any): Promise<AsyncIterable<{ text: string }>> {
  if (retryCount >= MAX_RETRY_ATTEMPTS) {
    retryCount = 0;
    throw new Error(
      'Could not recover the AI session after multiple attempts.\n\n' +
      'Please try:\n' +
      '1. Refreshing the page\n' +
      '2. Ensuring Chrome AI features are enabled in chrome://flags\n' +
      '3. Keeping this tab visible while processing'
    );
  }

  retryCount++;
  console.log(`Recovery attempt ${retryCount}/${MAX_RETRY_ATTEMPTS}: Reinitializing AI session...`);
  
  // Force new session creation
  session = null;
  sessionPromise = null;
  isInitializing = false;
  
  // Progressive backoff between retries
  const backoffMs = Math.min(1000 * retryCount, 3000);
  await new Promise(resolve => setTimeout(resolve, backoffMs));
  
  try {
    session = await genSession();
    const result = await promptStreaming(text, params);
    retryCount = 0; // Reset on success
    return result;
  } catch (error) {
    if (error instanceof Error) {
      error.message = getTabSwitchErrorMessage(error);
    }
    throw error;
  }
}

export async function promptStreaming(text: string, params?: any): Promise<AsyncIterable<{ text: string }>> {
  try {
    // Ensure tab is visible
    if (!isTabVisible) {
      throw new Error(
        'Cannot process request while tab is not visible. Please keep this tab in focus.'
      );
    }

    // Validate/recover session if needed
    if (session) {
      await validateAndRecoverSession();
    }

    // Initialize session if needed
    if (!session && !isInitializing) {
      console.log('No valid session, creating new one...');
      session = await genSession();
    }
    
    if (!session) {
      throw new Error(
        'Could not initialize AI features. Please make sure:\n' +
        '1. You are using Chrome version 121 or higher\n' +
        '2. The following flags are enabled in chrome://flags:\n' +
        '   - Generative AI features in the browser\n' +
        '   - Web Environment Integrity API\n' +
        '3. You have restarted Chrome after enabling these features\n' +
        '4. Keep this tab visible while processing requests'
      );
    }

    console.log('Sending prompt to AI...', { text, params });
    const stream = await session.promptStreaming(text, params);
    
    // Update conversation context after successful prompt
    if (params?.initialPrompts) {
      lastConversationContext = params.initialPrompts;
    }
    
    if (!stream) {
      console.error('Stream is null, attempting recovery...');
      return retryWithNewSession(text, params);
    }

    // Check if stream is iterable
    if (typeof stream[Symbol.asyncIterator] !== 'function') {
      console.error('Stream not iterable, attempting recovery...');
      return retryWithNewSession(text, params);
    }

    // Handle various chunk formats with recovery
    const validateChunk = (chunk: any) => {
      if (!chunk) {
        throw new Error('Received null/undefined chunk from AI response');
      }
      
      try {
        // Handle various chunk formats
        if (typeof chunk === 'string') {
          return { text: chunk };
        }
        
        if (typeof chunk.text === 'string') {
          return chunk;
        }
        
        if (chunk.response?.text && typeof chunk.response.text === 'string') {
          return { text: chunk.response.text };
        }

        if (chunk.candidates?.[0]?.content?.text && typeof chunk.candidates[0].content.text === 'string') {
          return { text: chunk.candidates[0].content.text };
        }

        if (chunk.content && typeof chunk.content === 'string') {
          return { text: chunk.content };
        }

        // If chunk is invalid and tab was switched, attempt recovery
        if (!isTabVisible) {
          throw new Error('Invalid chunk received after tab switch - attempting recovery');
        }

        // If we reach here, log detailed chunk structure for debugging
        console.error('Chunk validation failed. Structure:', {
          type: typeof chunk,
          keys: Object.keys(chunk),
          stringified: JSON.stringify(chunk, null, 2)
        });

        throw new Error('Invalid chunk format - the session may need to be recovered');
      } catch (error) {
        // Trigger session recovery if validation fails
        return retryWithNewSession(text, params);
      }
    };

    // Return a new async iterator that validates chunks
    return {
      [Symbol.asyncIterator]() {
        const iterator = stream[Symbol.asyncIterator]();
        return {
          async next() {
            try {
              const { value, done } = await iterator.next();
              if (done) return { done: true, value: undefined };
              const validatedChunk = validateChunk(value);
              return { done: false, value: validatedChunk };
            } catch (error) {
              console.error('Error processing chunk:', error);
              throw error;
            }
          }
        };
      }
    };
  } catch (error) {
    console.error('Prompt streaming error:', error);
    // Add more context to the error
    if (error instanceof Error) {
      error.message = `AI response error: ${error.message}`;
    }
    throw error;
  }
}