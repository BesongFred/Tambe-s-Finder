"use client"

import Link from "next/link"

export default function SocialLinks(){
  return (
    <div className="flex items-center gap-3">
      <a href="#" aria-label="Facebook" className="px-3 py-2 bg-white border rounded-lg text-sm">Facebook</a>
      <a href="#" aria-label="Instagram" className="px-3 py-2 bg-white border rounded-lg text-sm">Instagram</a>
      <a href="#" aria-label="WhatsApp" className="px-3 py-2 bg-white border rounded-lg text-sm">WhatsApp</a>
      <a href="#" aria-label="TikTok" className="px-3 py-2 bg-white border rounded-lg text-sm">TikTok</a>
    </div>
  )
}
