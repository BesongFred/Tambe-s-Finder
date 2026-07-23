"use client"

import React from 'react'

export default function SocialButton({ children, icon, onClick }: { children: React.ReactNode, icon?: React.ReactNode, onClick?: ()=>void }){
  return (
    <button onClick={onClick} type="button" className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border hover:shadow-sm bg-white text-sm">
      {icon}
      <span>{children}</span>
    </button>
  )
}
