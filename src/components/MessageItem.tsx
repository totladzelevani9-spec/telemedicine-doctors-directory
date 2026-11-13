import type { Message } from '../hooks/useChat'

export default function MessageItem({ message }: { message: Message }) {
  const mine = message.from === 'patient'
  return (
    <div className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
      <p className={`max-w-[80%] rounded-lg px-3 py-2 ${mine ? 'bg-teal-800 text-white' : 'bg-slate-200'}`}>{message.text}</p>
    </div>
  )
}
