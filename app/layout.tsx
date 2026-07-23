import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import MainNav from '../components/MainNav'

export const metadata = {
  title: "Tambe Guest House — Luxury Boutique Guest House",
  description: "Tambe Guest House — luxury boutique accommodation offering comfortable rooms, premium amenities and exceptional hospitality.",
}

export default function RootLayout({ children }:{ children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F4C5C" />
        <meta name="author" content="Tambe Guest House" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts loaded in globals.css via @import */}
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <header className="border-b bg-white">
          <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white font-bold">T</div>
              <div>
                <h1 className="text-lg font-bold">Tambe Guest House</h1>
                <p className="text-xs text-gray-500">Comfort Beyond Home</p>
              </div>
            </Link>

            <MainNav />

            <div className="flex items-center gap-3">
              <Link href="/auth/signin" className="text-sm">Sign in</Link>
              <Link href="/auth/create-account" className="text-sm">Sign up</Link>
            </div>
          </div>
        </header>

        <main id="main-content" className="max-w-7xl mx-auto p-6">{children}</main>

        <footer className="border-t mt-12 bg-[var(--color-primary)] text-white">
          <div className="max-w-4xl mx-auto p-4 text-sm">© {new Date().getFullYear()} Tambe Guest House</div>
        </footer>
      </body>
    </html>
  )
}
