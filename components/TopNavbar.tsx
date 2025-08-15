'use client'

import { Search, Bell, CalendarDays } from 'lucide-react'
import DarkModeToggle from './utils/DarkModeToggle'

export default function TopNavbar() {
  const today = new Date().toLocaleDateString(undefined, { year:'numeric', month:'short', day:'2-digit' })
  return (
    <header className="sticky top-0 z-10 bg-card/80 backdrop-blur border-b border-border">
      <div className="container-fluid flex items-center gap-3 py-3">
        <div className="hidden sm:block text-sm text-gray-500">Home / <span className="text-gray-800 dark:text-gray-200">Dashboard</span></div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <input className="pl-9 pr-3 py-2 rounded-xl border border-border bg-white/70 dark:bg-white/5 outline-none"
              placeholder="Search" />
            <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
          </div>
          <button className="p-2 rounded-xl border border-border hover:bg-gray-100 dark:hover:bg-white/5" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <div className="hidden sm:flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 border border-border rounded-xl px-3 py-2">
            <CalendarDays className="h-4 w-4" />
            {today}
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
