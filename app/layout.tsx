import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-center`}>
        <Link
          href="/api/data"
          className="absolute top-0 right-2 bg-slate-600 p-2 rounded-lg">
          API
        </Link>
        <Link
          href="/uploads"
          className="absolute top-0 right-20 bg-slate-600 p-2 rounded-lg">
          Uploads
        </Link>
        {children}
      </body>
    </html>
  )
}
