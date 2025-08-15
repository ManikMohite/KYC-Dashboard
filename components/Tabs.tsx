'use client'

import { useState } from 'react'

export default function Tabs({ items, onChange, initial=0 }: { items: string[], onChange: (i: number) => void, initial?: number }) {
  const [active, setActive] = useState(initial)
  return (
    <div className="flex gap-2">
      {items.map((t, i) => (
        <button
          key={t}
          onClick={() => { setActive(i); onChange(i) }}
          className={`px-3 py-1.5 rounded-xl border text-sm ${active===i ? 'bg-blue-600 text-white border-blue-600' : 'border-border hover:bg-gray-100 dark:hover:bg-white/5'}`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
