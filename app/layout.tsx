import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNavbar'

export const metadata: Metadata = {
  title: 'KYC Dashboard',
  description: 'Professional KYC Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNavbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
