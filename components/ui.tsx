import { cn } from '@/lib/utils'
import React from 'react'

export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn('rounded-2xl bg-white dark:bg-neutral-900 shadow-sm border border-neutral-200 dark:border-neutral-800', className)}>{children}</div>
}
export function CardHeader({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn('p-4 border-b border-neutral-200 dark:border-neutral-800', className)}>{children}</div>
}
export function CardContent({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn('p-4', className)}>{children}</div>
}
export function Badge({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800', className)}>{children}</span>
}
