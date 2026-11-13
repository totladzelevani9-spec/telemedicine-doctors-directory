import { useCallback, useEffect, useRef, useState } from 'react'

export interface Message { id: number; from: 'patient' | 'doctor'; text: string }

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([{ id: 1, from: 'doctor', text: 'გამარჯობა! რით შემიძლია დაგეხმაროთ?' }])
  const timers = useRef<number[]>([])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const send = useCallback((text: string) => {
    const t = text.trim()
    if (!t) return
    setMessages(m => [...m, { id: Date.now(), from: 'patient', text: t }])
    timers.current.push(window.setTimeout(() =>
      setMessages(m => [...m, { id: Date.now() + 1, from: 'doctor', text: 'მადლობა შეტყობინებისთვის. ექიმი მალე გიპასუხებთ.' }]), 1000))
  }, [])

  return { messages, send }
}
