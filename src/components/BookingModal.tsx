import { useState, type ReactNode } from 'react'

export default function BookingModal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>დაჯავშნეთ ვიზიტი</button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-10 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">ვიზიტის ჯავშანი</h2>
              <button onClick={() => setOpen(false)} aria-label="დახურვა">✕</button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
