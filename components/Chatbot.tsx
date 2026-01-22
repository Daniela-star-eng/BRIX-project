"use client"

import { useState } from "react"
import Card from "@/components/Card"

type Message = {
  role: "assistant" | "user"
  content: string
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Welcome! How can I help you today?"
    }
  ])

  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return

    setMessages([
      ...messages,
      { role: "user", content: input }
    ])

    setInput("")
  }

  return (
    <div className="min-h-screen p-10 bg-black text-white">
      <Card className="max-w-4xl mx-auto flex flex-col h-[75vh]">

        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">
          🤖 AI Assistant
        </h2>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm ${
                msg.role === "assistant"
                  ? "bg-white/10 text-gray-200"
                  : "bg-violet-600/30 text-violet-200 ml-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="mt-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          />

          <button
            onClick={sendMessage}
            className="px-6 py-3 rounded-xl bg-violet-600/30 text-violet-300 border border-violet-500/30 hover:bg-violet-600/40 transition"
          >
            Send
          </button>
        </div>
      </Card>
    </div>
  )
}
