export function NotEnable() {
  return (
    <div className="p-4 mx-auto max-w-screen-sm">
      <div className="space-y-4">
        <p>
          <b>Chrome AI is support, to enabled please visit</b>
        </p>
        <pre className="border p-2 text-sm rounded max-w-full overflow-x-auto selection:bg-teal-600/50">
          chrome://flags/#summarization-api-for-gemini-nano
        </pre>
      </div>
    </div>
  )
}
