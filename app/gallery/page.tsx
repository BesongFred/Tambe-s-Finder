"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, X, ArrowLeft, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "../../components/Breadcrumbs"

const IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1560448071-0a5f4c03c9c1?auto=format&fit=crop&w=1600&q=60', category: 'Rooms', alt: 'Luxury bedroom' },
  { id: 2, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=60', category: 'Reception', alt: 'Reception area' },
  { id: 3, src: 'https://images.unsplash.com/photo-1541542684-2f6b6f1e2f3b?auto=format&fit=crop&w=1600&q=60', category: 'Dining', alt: 'Restaurant interior' },
  { id: 4, src: 'https://images.unsplash.com/photo-1504826260979-242151ee45b6?auto=format&fit=crop&w=1600&q=60', category: 'Pool', alt: 'Swimming pool' },
  { id: 5, src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1600&q=60', category: 'Garden', alt: 'Garden view' },
  { id: 6, src: 'https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1600&q=60', category: 'Events', alt: 'Conference area' },
  { id: 7, src: 'https://images.unsplash.com/photo-1523906630133-f6934a1abf0c?auto=format&fit=crop&w=1600&q=60', category: 'Exterior', alt: 'Exterior architecture' },
  { id: 8, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=60', category: 'Rooms', alt: 'Guests relaxing' },
  { id: 9, src: 'https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1200&q=60', category: 'Dining', alt: 'Fine dining' }
]

const CATEGORIES = ['All', 'Rooms', 'Dining', 'Exterior', 'Garden', 'Pool', 'Events']

export default function GalleryPage(){
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = IMAGES.filter(img => active === 'All' ? true : img.category === active)

  function openLightbox(i:number){ setLightboxIndex(i) }
  function closeLightbox(){ setLightboxIndex(null) }
  function prev(){ if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length) }
  function next(){ if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex + 1) % filtered.length) }

  return (
    <main className="bg-[#F8F9FA] min-h-screen text-gray-900">
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1600&q=60" alt="Guest house exterior" className="w-full h-72 md:h-96 object-cover brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute left-6 md:left-12 bottom-8 text-white z-10 max-w-2xl">
              <Breadcrumbs items={[{label:'Home', href:'/'},{label:'Gallery', href:'/gallery'}]} />
              <h1 className="text-3xl md:text-5xl font-serif font-bold">Discover Our Beautiful Spaces</h1>
              <p className="mt-3 text-gray-200 max-w-xl">Explore our rooms, facilities, and unforgettable atmosphere.</p>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-8 flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={()=>setActive(cat)} className={`px-4 py-2 rounded-full font-medium ${active===cat? 'bg-[#0F4C5C] text-white':'bg-white border'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <motion.section initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="mt-6">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filtered.map((img, idx) => (
                <div key={img.id} className="relative break-inside-avoid rounded-xl overflow-hidden group">
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={()=>openLightbox(idx)} className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"> 
                      <Eye className="text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <div className="mt-12 bg-[#0F4C5C] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Experience comfort before you arrive</h3>
              <p className="text-gray-100 mt-2">Browse our gallery to feel the atmosphere — then book your stay to experience it in person.</p>
            </div>
            <a href="/rooms" className="mt-4 md:mt-0 bg-[#D4AF37] text-[#0F4C5C] px-6 py-3 rounded-full font-semibold">View Rooms</a>
          </div>

          {/* Page footer (luxury dark) */}
          <footer className="mt-12 bg-[#0F4C5C] text-gray-200 rounded-2xl p-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">Tambe Guest House</h4>
                <p className="text-sm text-gray-200">Comfort Beyond Home — © {new Date().getFullYear()}</p>
              </div>

              <div className="text-sm">
                <a href="/about" className="mr-4 hover:underline">About</a>
                <a href="/contact" className="mr-4 hover:underline">Contact</a>
                <a href="/rooms" className="hover:underline">Rooms</a>
              </div>
            </div>
          </footer>

        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox images={filtered} index={lightboxIndex} onClose={closeLightbox} onPrev={prev} onNext={next} />
      )}
    </main>
  )
}


function Lightbox({ images, index, onClose, onPrev, onNext }:{ images:any[], index:number, onClose:()=>void, onPrev:()=>void, onNext:()=>void }){
  const img = images[index]
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-20 max-w-5xl w-full">
        <button onClick={onClose} className="absolute top-4 right-4 z-30 bg-white p-2 rounded-full shadow"><X/></button>

        <div className="bg-black rounded-lg overflow-hidden">
          <div className="relative">
            <img src={img.src} alt={img.alt} className="w-full h-[70vh] object-cover" />

            <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur">
              <ArrowLeft className="text-white" />
            </button>

            <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur">
              <ArrowRight className="text-white" />
            </button>
          </div>

          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{img.alt}</h3>
            <p className="text-sm text-gray-200 mt-2">{img.category}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
