"use client"

import Link from "next/link"

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Tambe Guest House">
      <div style={{ width: size, height: size }} className="rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold" aria-hidden>
        T
      </div>
      <div className="leading-tight">
        <div className="text-sm font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>Tambe</div>
        <div className="text-xs text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>Guest House</div>
      </div>
    </Link>
  )
}
