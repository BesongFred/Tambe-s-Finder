"use client"

import { Breadcrumbs } from "../../components/Breadcrumbs"
import AmenityCard from "../../components/AmenityCard"
import { motion } from "framer-motion"
import { Wifi, Coffee, ServerCog, Truck, ShieldCheck, Home, Monitor, Thermometer, Users, MapPin, Loader, Heart } from "lucide-react"
import Link from "next/link"

const amenities = [
  { key: 'wifi', icon: <Wifi size={28} />, title: 'Free High-Speed WiFi', desc: 'Stay connected with lightning-fast internet throughout the property.' },
  { key: 'pool', icon: <Loader size={28} />, title: 'Swimming Pool', desc: 'Relax by our pristine pool with loungers and pool-side service.' },
  { key: 'dining', icon: <Coffee size={28} />, title: 'Restaurant & Bar', desc: 'Enjoy gourmet meals and crafted cocktails in an elegant setting.' },
  { key: 'breakfast', icon: <Home size={28} />, title: 'Free Breakfast', desc: 'Start your day with a complimentary breakfast buffet each morning.' },
  { key: 'pickup', icon: <Truck size={28} />, title: 'Airport Pickup', desc: 'Convenient airport transfer service (advance booking required).' },
  { key: 'parking', icon: <ShieldCheck size={28} />, title: 'Secure Parking', desc: 'Private and secure parking with 24/7 surveillance.' },
  { key: 'roomservice', icon: <ServerCog size={28} />, title: 'Room Service', desc: 'Full room service menu delivered to your door.' },
  { key: 'laundry', icon: <Thermometer size={28} />, title: 'Laundry Service', desc: 'Same-day laundry and pressing for busy travelers.' },
  { key: 'tv', icon: <Monitor size={28} />, title: 'Smart TV', desc: 'Modern Smart TVs with streaming apps in every room.' },
  { key: 'ac', icon: <Thermometer size={28} />, title: 'Air Conditioning', desc: 'Individually controlled AC for your comfort.' },
  { key: 'conference', icon: <Users size={28} />, title: 'Conference Hall', desc: 'Flexible event spaces for meetings and conferences.' },
  { key: 'garden', icon: <MapPin size={28} />, title: 'Garden Area', desc: 'Tranquil garden spaces for relaxation and small events.' }
]

export default function AmenitiesPage(){
  return (
    <main className="bg-[#F8F9FA] min-h-screen text-gray-900">
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1560443457832-7b3f9d7c7b1f?auto=format&fit=crop&w=1600&q=60" alt="Hotel facilities" className="w-full h-72 md:h-96 object-cover brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute left-6 md:left-12 bottom-8 text-white z-10 max-w-2xl">
              <Breadcrumbs items={[{label: 'Home', href: '/'}, {label: 'Amenities', href: '/amenities'}]} />
              <h1 className="text-3xl md:text-5xl font-serif font-bold">Everything You Need For A Perfect Stay</h1>
              <p className="mt-3 text-gray-200 max-w-xl">The facilities and services you expect from a premium guest house — designed for your comfort and convenience.</p>
            </div>
          </div>

          {/* Amenities grid */}
          <section className="mt-10">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {amenities.map(a => (
                <AmenityCard key={a.key} icon={a.icon} title={a.title} desc={a.desc} />
              ))}
            </motion.div>
          </section>

          {/* Premium Experience */}
          <section className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img src="https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1200&q=60" alt="Premium experience" className="w-full h-full object-cover" />
              </div>

              <div className="p-8 flex flex-col justify-center gap-4">
                <h2 className="text-2xl font-serif font-bold">Designed For Your Comfort</h2>
                <p className="text-gray-700">Our facilities are carefully selected to make every guest feel relaxed and valued. From attentive service to thoughtfully curated spaces, we aim to exceed expectations.</p>

                <div className="mt-4">
                  <Link href="/contact" className="inline-block bg-[#D4AF37] text-[#0F4C5C] px-6 py-3 rounded-full font-semibold">Book Your Stay</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
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
    </main>
  )
}
