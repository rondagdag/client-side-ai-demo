import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"
import { Switch } from "./components/ui/Switch"
import TrashIcon from "./components/icons/TrashIcon"
import { levels } from "./types/levels"

function App() {
  const [summary, setSummary] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const messageListener = (
      message: { type: string; chunk?: string; error?: string; level?: number; isFirst?: boolean },
      _sender: chrome.runtime.MessageSender,
      sendResponse: () => void
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
          }
          setSummary((prev) => prev + message.chunk)
        }
      } else if (message.type === "ERROR") {
        setSummary(message.error || "An error occurred")
        setLoading(false)
      } else if (message.type === "STREAM_COMPLETE") {
        setLoading(false)
        if (message.level) {
          setCurrentLevel(message.level)
        }
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
            <h1 className="text-2xl font-bold">Engineering Eras</h1>
            <button 
              onClick={() => setSummary("")}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
              aria-label="Clear summary"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                aria-label="Toggle theme"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-4 prose dark:prose-invert max-w-none">
          {summary || loading ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20">
                  {levels.find(l => l.level === currentLevel)?.name || ''}
                </span>
              </div>
              {summary ? (
                <Markdown>
                  {summary}
                </Markdown>
              ) : (
                <div className="flex items-center gap-2 text-lg">
                  <span className="inline-flex space-x-2">
                    <span className="animate-[dot_1.4s_infinite] [animation-delay:0.2s] text-blue-500 dark:text-blue-400 text-2xl font-bold">●</span>
                    <span className="animate-[dot_1.4s_infinite] [animation-delay:0.4s] text-blue-500 dark:text-blue-400 text-2xl font-bold">●</span>
                    <span className="animate-[dot_1.4s_infinite] [animation-delay:0.6s] text-blue-500 dark:text-blue-400 text-2xl font-bold">●</span>
                  </span>
                </div>
              )}
            </>
          ) : (
            "Select text and use right-click menu to get a technical explanation"
          )}
        </div>
      </div>
    </main>
  )
}

export default App