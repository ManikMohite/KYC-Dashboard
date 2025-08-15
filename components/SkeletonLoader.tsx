export default function SkeletonLoader({ className='' }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-gray-200 dark:bg-white/10 ${className}`} />
}
