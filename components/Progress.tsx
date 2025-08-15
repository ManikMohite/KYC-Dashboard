export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${value}%` }} />
    </div>
  )
}
