import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useChat } from '../hooks/useChat'
import MessageItem from './MessageItem'

export default function ChatWidget() {
  const { messages, send } = useChat()
  const [text, setText] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const submit = (e: FormEvent) => { e.preventDefault(); send(text); setText('') }

  return (
    <section className="mx-auto max-w-xl rounded-lg border border-teal-900/15 bg-white">
      <h2 className="border-b p-4 font-semibold">ონლაინ კონსულტაცია</h2>
      <div className="flex h-80 flex-col gap-2 overflow-y-auto p-4" aria-live="polite">
        {messages.map(m => <MessageItem key={m.id} message={m} />)}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={submit} className="flex gap-2 border-t p-3">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="დაწერეთ შეტყობინება" aria-label="შეტყობინება" className="field flex-1" />
        <button className="btn" type="submit">გაგზავნა</button>
      </form>
    </section>
  )
}
