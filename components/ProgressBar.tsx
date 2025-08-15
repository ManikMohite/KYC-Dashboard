'use client'

export default function ProgressBar({ label, value }: { label: string, value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-gray-500">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
