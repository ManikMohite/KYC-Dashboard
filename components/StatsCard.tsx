'use client'

import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function StatsCard({ title, value, change, positive }: { title: string, value: number, change: number, positive: boolean }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="card p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-3xl font-semibold">{value.toLocaleString()}</div>
        <div className={`flex items-center gap-1 text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </motion.div>
  )
}
