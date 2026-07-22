"use client"

import Link from "next/link"

export function Breadcrumbs({ items }:{ items:{label:string, href:string}[] }){
  return (
    <nav className="text-sm text-gray-200 mb-3">
      {items.map((it, idx) => (
        <span key={it.href}>
          <Link href={it.href} className="text-gray-200 hover:underline">{it.label}</Link>
          {idx < items.length - 1 && <span className="mx-2 text-gray-300">/</span>}
        </span>
      ))}
    </nav>
  )
}
