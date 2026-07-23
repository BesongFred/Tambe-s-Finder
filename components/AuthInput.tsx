"use client"

import React from 'react'
import { Icon } from 'lucide-react'

type Props = {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  icon?: React.ReactElement<Icon>
  ariaLabel?: string
  error?: string | undefined
}

export default function AuthInput({ label, value, onChange, type = 'text', placeholder = '', icon, ariaLabel, error }: Props){
  return (
    <label className="block">
      <span className="text-xs text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>{label}</span>
      <div className={`mt-1 relative rounded-lg ${error ? 'ring-1 ring-red-300' : ''}`}>
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
        <input
          aria-label={ariaLabel || label}
          type={type}
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full p-3 rounded-lg border border-gray-200 ${icon ? 'pl-11' : ''} focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20`} 
        />
      </div>
      {error && <div className="text-xs text-red-600 mt-1">{error}</div>}
    </label>
  )
}
