'use client'

import { useState } from 'react'
import { Home, User, FileText, Settings } from 'lucide-react'

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')

  const menu = [
    { name: 'Dashboard', icon: Home },
    { name: 'Users', icon: User },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
  ]

  return (
    <div className="w-64 bg-accent text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">KYC Dashboard</h2>
      <ul className="space-y-3">
        {menu.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
              active === name ? 'bg-white text-accent font-semibold' : 'hover:bg-accent-hover'
            }`}
            onClick={() => setActive(name)}
          >
            <Icon size={20} />
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
