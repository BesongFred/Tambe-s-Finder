"use client"

import { motion } from "framer-motion"
import { Star, Users, Bed, Size } from "lucide-react"
import Link from "next/link"

export default function RoomCard({ room, onOpen }:{ room:any, onOpen:()=>void }){
  return (
    <motion.article whileHover={{ y: -8 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative group">
        <img src={room.images[0]} alt={room.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-4 right-4 bg-black/40 text-white rounded-lg px-3 py-1 text-sm">${room.price}/night</div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">{room.name}</h3>
          <div className="flex items-center gap-1 text-sm text-yellow-500">
            <Star size={16} />
            <span className="font-medium">{room.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">{room.description}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mb-4">
          <div className="flex items-center gap-2"><Bed size={16} /> {room.bed}</div>
          <div className="flex items-center gap-2"><Users size={16} /> {room.guests} guests</div>
          <div className="flex items-center gap-2">Size: {room.size}</div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onOpen} className="flex-1 bg-white border border-[#D4AF37] text-[#0F4C5C] rounded-lg px-4 py-2 font-medium hover:shadow-md transition">View Details</button>
          <Link href="/contact" className="flex-1 bg-[#D4AF37] text-white rounded-lg px-4 py-2 font-medium text-center hover:scale-105 transition">Book Now</Link>
        </div>
      </div>
    </motion.article>
  )
}
