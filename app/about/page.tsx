"use client"

import { Breadcrumbs } from "../../components/Breadcrumbs"
import { motion } from "framer-motion"
import StatCounter from "../../components/StatCounter"
import TeamCard from "../../components/TeamCard"
import Link from "next/link"

export default function AboutPage(){
  return (
    <main className="bg-[#F8F9FA] min-h-screen text-gray-900">
      <div className="pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-6">

          {/* Hero */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=60" alt="Guest house exterior" className="w-full h-72 md:h-96 object-cover brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute left-6 md:left-12 bottom-8 text-white z-10 max-w-2xl">
              <Breadcrumbs items={[{label:'Home', href:'/'},{label:'About', href:'/about'}]} />
              <h1 className="text-3xl md:text-5xl font-serif font-bold">Welcome To Tambe Guest House</h1>
              <p className="mt-3 text-gray-200 max-w-xl">Where comfort meets unforgettable hospitality.</p>
            </div>
          </div>

          {/* Story section */}
          <section className="mt-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1505691723518-36a0f7d7f4c0?auto=format&fit=crop&w=1200&q=60" alt="Our story" className="w-full h-80 object-cover" />
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">Tambe Guest House was created to provide guests with a peaceful, comfortable, and memorable stay. We combine elegant spaces, thoughtful service, and local hospitality to make each visit special. Our team is committed to high standards and personal attention to ensure you feel at home from the moment you arrive.</p>

              <p className="text-gray-700">We carefully curate the guest experience — from premium bedding and relaxing common areas to delightful dining options. Whether you are here for business or leisure, our goal is to deliver a seamless and restorative stay.</p>
            </div>
          </section>

          {/* Mission cards */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-6">What We Stand For</h3>

            <div className="grid sm:grid-cols-3 gap-6">
              <motion.div whileHover={{ y:-6 }} className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-[#0F4C5C]">Our Mission</h4>
                <p className="text-gray-600 mt-2">To provide exceptional hospitality with attention to detail and warm service, ensuring our guests feel valued and relaxed.</p>
              </motion.div>

              <motion.div whileHover={{ y:-6 }} className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-[#0F4C5C]">Our Vision</h4>
                <p className="text-gray-600 mt-2">To be the preferred guest house for travelers seeking comfort, personalized service, and memorable stays.</p>
              </motion.div>

              <motion.div whileHover={{ y:-6 }} className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-[#0F4C5C]">Our Values</h4>
                <p className="text-gray-600 mt-2">Integrity, respect, attention to detail, and a commitment to creating a welcoming environment for every guest.</p>
              </motion.div>
            </div>
          </section>

          {/* Statistics */}
          <section className="mt-12 bg-white rounded-2xl p-6 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <StatCounter label="Years Experience" to={10} suffix="+" />
              <StatCounter label="Happy Guests" to={1500} suffix="+" />
              <StatCounter label="Rooms" to={30} suffix="+" />
              <StatCounter label="Guest Rating" to={49} decimals={1} divisor={10} suffix="" />
            </div>
          </section>

          {/* Team Section */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Our Team</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <TeamCard name="Alex Tambe" role="Manager" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60" />
              <TeamCard name="Reception Team" role="Front Desk" img="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=60" />
              <TeamCard name="Hospitality Team" role="Housekeeping & Service" img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60" />
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12">
            <div className="bg-[#0F4C5C] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Experience Our Hospitality</h3>
                <p className="text-gray-100 mt-2">Book your stay and let us take care of the rest — comfort, service, and attention to detail await.</p>
              </div>
              <div>
                <Link href="/contact" className="inline-block bg-[#D4AF37] text-[#0F4C5C] px-6 py-3 rounded-full font-semibold">Book Your Stay</Link>
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
