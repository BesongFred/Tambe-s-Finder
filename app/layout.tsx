import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Tambe\'s Finder',
  description: 'Company site for Tambe\'s Finder',
}

export default function RootLayout({ children }:{ children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
            <h1 className="text-lg font-bold">Tambe\'s Finder</h1>
            <nav className="space-x-4">
              <a href="/" className="text-sm">Home</a>
              <a href="/about" className="text-sm">About</a>
              <a href="/blog" className="text-sm">Blog</a>
              <a href="/contact" className="text-sm">Contact</a>
              <a href="/auth/login" className="text-sm">Sign in</a>
              <a href="/auth/signup" className="text-sm">Sign up</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="border-t mt-12 bg-white">
          <div className="max-w-4xl mx-auto p-4 text-sm text-gray-600">© {new Date().getFullYear()} Tambe's Finder</div>
        </footer>
      </body>
    </html>
  )
}
