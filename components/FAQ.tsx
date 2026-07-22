"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQS = [
  { q: 'What time is check-in?', a: 'Check-in is from 2:00 PM. Early check-in may be available on request.' },
  { q: 'Do you provide airport pickup?', a: 'Yes — airport pickup is available with prior arrangement. Contact us to arrange transfers.' },
  { q: 'Do you accept online booking?', a: 'Yes — you can book online through our website or contact us directly for assistance.' },
  { q: 'Is parking available?', a: 'Secure parking is available for guests. Please inform us if you require a space.' }
]

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <div key={i} className="bg-white border rounded-lg p-3">
          <button onClick={()=>setOpen(open===i? null : i)} className="w-full flex items-center justify-between">
            <div className="text-left">
              <div className="font-medium text-[#0F4C5C]">{f.q}</div>
            </div>
            <div>
              {open===i ? <ChevronUp/> : <ChevronDown/>}
            </div>
          </button>

          {open===i && (
            <div className="mt-3 text-sm text-gray-700">{f.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
