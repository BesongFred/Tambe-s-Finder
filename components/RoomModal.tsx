"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Star } from "lucide-react"

export default function RoomModal({ room, onClose }:{ room:any, onClose:()=>void }){
  const [index, setIndex] = useState(0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative z-20 bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 z-30 bg-white p-2 rounded-full shadow"><X/></button>

        <div className="grid md:grid-cols-2">
          <div className="bg-gray-100">
            <div className="relative h-80 md:h-full">
              <img src={room.images[index]} alt={room.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-3 flex gap-2 overflow-x-auto">
              {room.images.map((img:string, i:number) => (
                <button key={img} onClick={()=>setIndex(i)} className={`w-24 h-16 rounded-lg overflow-hidden ${i===index? 'ring-2 ring-[#D4AF37]':''}`}>
                  <img src={img} alt={`${room.name} ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-yellow-500"><Star/> <span className="font-medium">{room.rating}</span></div>
              <div className="text-sm text-gray-600">{room.size} • {room.guests} guests</div>
            </div>

            <p className="text-gray-700 mb-4">{room.description}</p>

            <h3 className="font-semibold mb-2">Amenities</h3>
            <ul className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-700">
              {room.features.map((f:string)=> (
                <li key={f} className="flex items-center gap-2">• {f}</li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="/contact" className="flex-1 bg-[#D4AF37] text-white rounded-lg px-4 py-3 text-center font-semibold">Book Now</a>
              <button onClick={()=>alert('Booking flow placeholder')} className="flex-1 border border-[#0F4C5C] text-[#0F4C5C] rounded-lg px-4 py-3 font-semibold">Reserve</button>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Guest Reviews</h4>
              <div className="text-sm text-gray-700">“Fantastic stay — very comfortable beds and superb service.” — Jane D.</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
