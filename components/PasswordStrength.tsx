"use client"

import React, { useMemo } from 'react'

function scorePassword(pw: string){
  let score = 0
  if(!pw) return 0
  if(pw.length >= 8) score += 1
  if(/[A-Z]/.test(pw)) score += 1
  if(/[0-9]/.test(pw)) score += 1
  if(/[^A-Za-z0-9]/.test(pw)) score += 1
  if(pw.length >= 12) score += 1
  return score
}

export default function PasswordStrength({ password }:{ password: string }){
  const score = useMemo(()=> scorePassword(password), [password])
  const labels = ['Very weak','Weak','Fair','Good','Strong','Very strong']
  const pct = Math.min(100, Math.round((score/5)*100))
  const color = score <=1 ? 'bg-red-400' : score===2 ? 'bg-yellow-400' : score===3 ? 'bg-amber-400' : score===4 ? 'bg-lime-400' : 'bg-green-400'

  return (
    <div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div className={`${color} h-2`} style={{ width: `${pct}%`}} />
      </div>
      <div className="mt-1 text-xs text-gray-600">{labels[score]}</div>
    </div>
  )
}
