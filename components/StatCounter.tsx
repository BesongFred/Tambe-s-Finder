"use client"

import { useEffect, useState } from "react"

export default function StatCounter({ to, label, suffix = '', decimals = 0, divisor = 1 }:{ to:number, label:string, suffix?:string, decimals?:number, divisor?:number }){
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const stepTime = 16
    const steps = Math.ceil(duration / stepTime)
    const increment = (to - start) / steps
    let current = start
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setValue(to)
        clearInterval(timer)
      } else {
        setValue(Number(current.toFixed(decimals)))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [to, decimals])

  const display = (decimals > 0) ? (value / divisor).toFixed(decimals) : Math.round(value / divisor)

  return (
    <div className="py-6">
      <div className="text-3xl font-bold text-[#0F4C5C]">{display}{suffix}</div>
      <div className="text-sm text-gray-600 mt-2">{label}</div>
    </div>
  )
}
