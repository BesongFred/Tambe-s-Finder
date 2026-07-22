"use client"

import { Breadcrumbs } from "../../components/Breadcrumbs"
import ContactForm from "../../components/ContactForm"
import SocialLinks from "../../components/SocialLinks"
import FAQ from "../../components/FAQ"
import MapPlaceholder from "../../components/MapPlaceholder"

export default function ContactPage(){
  return (
    <main className="bg-[#F8F9FA] min-h-screen text-gray-900">
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=60" alt="Reception" className="w-full h-72 md:h-96 object-cover brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute left-6 md:left-12 bottom-8 text-white z-10 max-w-2xl">
              <Breadcrumbs items={[{label:'Home', href:'/'},{label:'Contact', href:'/contact'}]} />
              <h1 className="text-3xl md:text-5xl font-serif font-bold">Get In Touch With Us</h1>
              <p className="mt-3 text-gray-200 max-w-xl">We are ready to welcome you.</p>
            </div>
          </div>

          {/* Contact layout */}
          <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: Contact info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#0F4C5C]">Contact Information</h3>
                <ul className="text-sm text-gray-700 space-y-3">
                  <li><strong>Address:</strong> 123 Tambe Road, City, Country</li>
                  <li><strong>Phone:</strong> 676775659</li>
                  <li><strong>Email:</strong> besongrobert30@gmail.com</li>
                  <li><strong>Opening Hours:</strong> Mon - Sun • 7:00 AM - 10:00 PM</li>
                </ul>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Follow Us</h4>
                  <SocialLinks/>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-[#0F4C5C] mb-3">Location</h4>
                <p className="text-sm text-gray-600 mb-3">Find us on the map — drive, walk, or take a quick taxi from nearby transport hubs.</p>
                <MapPlaceholder />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-[#0F4C5C] mb-3">Frequently Asked Questions</h4>
                <FAQ />
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#0F4C5C]">Send Us A Message</h3>
                <p className="text-sm text-gray-600 mb-4">Have a question or special request? Fill out the form and we will get back to you shortly.</p>
                <ContactForm />
              </div>
            </div>

          </section>

          {/* CTA */}
          <section className="mt-12 bg-[#0F4C5C] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Ready to Book Your Stay?</h3>
              <p className="text-gray-100 mt-2">Contact our reservations team for group bookings and special requests.</p>
            </div>
            <a href="/rooms" className="inline-block bg-[#D4AF37] text-[#0F4C5C] px-6 py-3 rounded-full font-semibold">Book Your Stay</a>
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
                <a href="/rooms" className="mr-4 hover:underline">Rooms</a>
                <a href="/gallery" className="hover:underline">Gallery</a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </main>
  )
}
