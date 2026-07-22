"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import RoomCard from "../../components/RoomCard"
import RoomModal from "../../components/RoomModal"
import { useState } from "react"

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 120,
    rating: 4.6,
    size: '28m²',
    guests: 2,
    bed: 'King Size Bed',
    images: [
      'https://images.unsplash.com/photo-1501117716987-c8e9c9c0a6d6?auto=format&fit=crop&w=1600&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=60',
      'https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1600&q=60'
    ],
    features: ['King size bed', 'Air conditioning', 'Smart TV', 'Free WiFi'],
    description: 'A beautifully decorated room with modern touches and a comfortable king bed — ideal for couples and solo travelers.'
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    price: 220,
    rating: 4.8,
    size: '55m²',
    guests: 3,
    bed: 'King Size Bed + Sofa Bed',
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1600&q=60',
      'https://images.unsplash.com/photo-1576675785615-6f9e1d2a3c5b?auto=format&fit=crop&w=1600&q=60',
      'https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1600&q=60'
    ],
    features: ['Living area', 'Premium furniture', 'Balcony view', 'Mini bar'],
    description: 'Spacious suite with separate living area and premium finishes — perfect for guests who want extra space.'
  },
  {
    id: 'family',
    name: 'Family Room',
    price: 160,
    rating: 4.5,
    size: '45m²',
    guests: 4,
    bed: 'Two Beds',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=60'
    ],
    features: ['Two beds', 'Large space', 'Extra comfort'],
    description: 'Comfortable room designed for families, offering ample space and convenience.'
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    price: 520,
    rating: 5.0,
    size: '120m²',
    guests: 6,
    bed: 'King Size Bed + Private lounge',
    images: [
      'https://images.unsplash.com/photo-1559599234-6a5f8b7c0f6a?auto=format&fit=crop&w=1600&q=60',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=60',
      'https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1600&q=60'
    ],
    features: ['Luxury furniture', 'Private lounge', 'Premium view'],
    description: 'The ultimate in luxury — expansive space, private lounge and top of the line finishes.'
  }
]

export default function RoomsPage() {
  const [selected, setSelected] = useState(null)
  const [filters, setFilters] = useState({ type: 'all', guests: 'any', minPrice: 0, maxPrice: 1000, available: false })

  function openRoom(room) {
    setSelected(room)
  }

  function closeModal() {
    setSelected(null)
  }

  const filtered = rooms.filter(r => {
    if (filters.type !== 'all' && r.id !== filters.type) return false
    if (filters.guests !== 'any' && r.guests < Number(filters.guests)) return false
    if (r.price < filters.minPrice || r.price > filters.maxPrice) return false
    return true
  })

  return (
    <main className="bg-[#F8F9FA] min-h-screen text-gray-900">
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=60" alt="Luxury bedroom" className="w-full h-64 md:h-96 object-cover brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute left-6 md:left-12 bottom-8 text-white z-10 max-w-2xl">
              <Breadcrumbs items={[{label:'Home', href:'/'},{label:'Rooms', href:'/rooms'}]} />
              <h1 className="text-3xl md:text-5xl font-serif font-bold">Luxury Rooms Designed For Your Comfort</h1>
              <p className="mt-3 text-gray-200 max-w-xl">Relax in beautifully designed spaces with modern facilities and exceptional service.</p>
            </div>
          </div>

          {/* Filter bar */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mt-8 bg-white rounded-xl p-4 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
                <select className="border rounded-lg p-2" value={filters.type} onChange={(e)=>setFilters(prev=>({...prev,type:e.target.value}))}>
                  <option value="all">All room types</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="executive">Executive Suite</option>
                  <option value="family">Family Room</option>
                  <option value="presidential">Presidential Suite</option>
                </select>

                <div className="flex items-center gap-2">
                  <input type="number" className="border rounded-lg p-2 w-full" placeholder="Min price" value={filters.minPrice} onChange={(e)=>setFilters(prev=>({...prev,minPrice: Number(e.target.value||0)}))} />
                  <input type="number" className="border rounded-lg p-2 w-full" placeholder="Max price" value={filters.maxPrice} onChange={(e)=>setFilters(prev=>({...prev,maxPrice: Number(e.target.value||1000)}))} />
                </div>

                <select className="border rounded-lg p-2" value={filters.guests} onChange={(e)=>setFilters(prev=>({...prev,guests:e.target.value}))}>
                  <option value="any">Guests</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={filters.available} onChange={(e)=>setFilters(prev=>({...prev,available:e.target.checked}))} />
                  Available only
                </label>
              </div>

              <div className="md:w-48">
                <button className="w-full bg-[#0F4C5C] text-white rounded-lg px-4 py-2">Apply filters</button>
              </div>
            </div>
          </motion.div>

          {/* Rooms grid */}
          <section className="mt-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filtered.map(room => (
                <RoomCard key={room.id} room={room} onOpen={()=>openRoom(room)} />
              ))}
            </div>
          </section>

        </div>
      </div>

      {selected && <RoomModal room={selected} onClose={closeModal} />}
    </main>
  )
}
