import { useEffect, useState } from "react"

const levelNames = {
  1: "Child (Age 5)",
  2: "Teenager",
  3: "College Student",
  4: "Grad Student",
  5: "Expert"
}

function App() {
  const [summary, setSummary] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [total, setTotal] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)

  useEffect(() => {
    const messageListener = (
      message: { type: string; chunk?: string; error?: string; total?: number; loaded?: number; level?: number },
      _sender: chrome.runtime.MessageSender,
      sendResponse: (response?: any) => void
    ) => {
      if (message.type === "STREAM_RESPONSE") {
        if (message.chunk !== undefined) {
          if (message.level) {
            setCurrentLevel(message.level)
          }
          setSummary((prev) => prev + message.chunk)
        }
      } else if (message.type === "ERROR") {
        setSummary(message.error || "An error occurred")
        setLoading(false)
      } else if (message.type === "AI_INITIATE") {
        setLoading(true)
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
          <h1 className="text-2xl font-bold">Explain in 5 Levels</h1>
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
        <div className="rounded-lg border p-4">
          <pre className="whitespace-pre-wrap">{summary || "Select text and use right-click menu to get an explanation"}</pre>
        </div>
      </div>
    </main>
  )
}

export default App
