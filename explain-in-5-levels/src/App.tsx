import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"

const levelNames = {
  1: "The Greatest Generation (1901-1924)",
  2: "The Silent Generation (1925-1945)",
  3: "Baby Boomer (1946-1964)",
  4: "Generation X (1965-1979)",
  5: "Millennial (1980-1994)",
  6: "Generation Z (1995-2012)",
  7: "Generation Alpha (2013-2025)"
}

function App() {
  const [summary, setSummary] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [total, setTotal] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)

  useEffect(() => {
    const messageListener = (
      message: { type: string; chunk?: string; error?: string; total?: number; loaded?: number; level?: number; isFirst?: boolean },
      _sender: chrome.runtime.MessageSender,
      sendResponse: (response?: any) => void
    ) => {
      if (message.type === "STREAM_RESPONSE") {
        setLoading(true)
        if (message.isFirst) {
          setSummary("")
          return
        }
        if (message.chunk !== undefined) {
          if (message.level) {
            setCurrentLevel(message.level)
            setSummary((prev) => {
              const levelHeader = `\n\n### ${levelNames[message.level as keyof typeof levelNames]} ###\n\n`;
              return prev + levelHeader + message.chunk;
            })
          } else {
            setSummary((prev) => prev + message.chunk)
          }
        }
      } else if (message.type === "ERROR") {
        setSummary(message.error || "An error occurred")
        setLoading(false)
      } else if (message.type === "AI_INITIATE") {
        setLoading(true)
        setSummary("")
        setTotal(message.total || 0)
        setProgress(message.loaded || 0)
      } else if (message.type === "STREAM_COMPLETE") {
        setLoading(false)
      }
      sendResponse()
    }

    chrome.runtime.onMessage.addListener(messageListener)
    return () => {
      chrome.runtime.onMessage.removeListener(messageListener)
    }
  }, [])

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Explain in Generations</h1>
            <button 
              onClick={() => setSummary("")}
              className="px-3 py-1 text-sm rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="text-sm text-muted-foreground">
            Current Level: {levelNames[currentLevel as keyof typeof levelNames]}
          </div>
        </div>
        {loading && total > 0 && (
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${Math.round((progress / total) * 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground">
              Downloading AI model... {Math.round((progress / total) * 100)}%
            </p>
          </div>
        )}
        <div className="rounded-lg border p-4 prose dark:prose-invert max-w-none">
          {summary ? (
            <Markdown>
              {summary}
            </Markdown>
          ) : loading ? (
            <div className="flex items-center gap-2 text-lg">
              <span className="inline-flex space-x-2">
                <span className="animate-[dot_1.4s_infinite] [animation-delay:0.2s] text-blue-500 dark:text-blue-400 text-2xl font-bold">●</span>
                <span className="animate-[dot_1.4s_infinite] [animation-delay:0.4s] text-blue-500 dark:text-blue-400 text-2xl font-bold">●</span>
                <span className="animate-[dot_1.4s_infinite] [animation-delay:0.6s] text-blue-500 dark:text-blue-400 text-2xl font-bold">●</span>
              </span>
            </div>
          ) : (
            "Select text and use right-click menu to get an explanation"
          )}
        </div>
      </div>
    </main>
  )
}

export default App
