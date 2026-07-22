"use client"

import { motion } from "framer-motion"

export default function AmenityCard({ icon, title, desc }:{ icon: any, title: string, desc: string }){
  return (
    <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-3 text-[#D4AF37]">
        <div className="w-12 h-12 rounded-lg bg-[#0F4C5C] flex items-center justify-center text-white">{icon}</div>
        <h3 className="text-lg font-semibold text-[#0F4C5C]">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  )
}
