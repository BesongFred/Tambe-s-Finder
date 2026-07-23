"use client"

import React from 'react'

export default function AuthButton({ children, loading = false, className = '' }: { children: React.ReactNode, loading?: boolean, className?: string }){
  return (
    <button
      type="submit"
      disabled={loading}
      className={`${className} w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C99A2D] text-[#0F4C5C] font-semibold px-6 py-3 rounded-full hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20`}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-[#0F4C5C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      ) : children}
    </button>
  )
}
