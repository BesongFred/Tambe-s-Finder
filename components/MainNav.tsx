"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainNav(){
  const pathname = usePathname() || '/' 
  // hide main nav on auth routes
  if (pathname.startsWith('/auth')) return null

  return (
    <nav aria-label="Main navigation" className="space-x-4 hidden md:flex items-center">
      <Link href="/" className="text-sm hover:text-[var(--color-gold)] transition">Home</Link>
      <Link href="/rooms" className="text-sm hover:text-[var(--color-gold)] transition">Rooms</Link>
      <Link href="/gallery" className="text-sm hover:text-[var(--color-gold)] transition">Gallery</Link>
      <Link href="/amenities" className="text-sm hover:text-[var(--color-gold)] transition">Amenities</Link>
      <Link href="/about" className="text-sm hover:text-[var(--color-gold)] transition">About</Link>
      <Link href="/contact" className="text-sm hover:text-[var(--color-gold)] transition">Contact</Link>
    </nav>
  )
}
