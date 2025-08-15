'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return (
    <button onClick={toggle} className="p-2 rounded-xl border border-border hover:bg-gray-100 dark:hover:bg-white/5" aria-label="Toggle theme">
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
