"use client";

import { 
  Menu,
  X,
  Wifi,
  Car,
  Sparkles,
  Headphones,
  Star,
  ArrowRight,
  Search
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">
              T
            </div>

            <div>
              <h1 className="font-bold text-[#0F4C5C]">
                Tambe Guest House
              </h1>

              <p className="text-xs text-gray-500">
                Comfort Beyond Home
              </p>

            </div>

          </div>


          {/* DESKTOP MENU */}

          <div className="hidden md:flex items-center gap-8 text-sm">

            {[
              "Home",
              "Rooms",
              "Gallery",
              "Amenities",
              "About",
              "Contact"
            ].map(item => (

              <a
                key={item}
                href="#"
                className="hover:text-[#D4AF37] transition"
              >
                {item}
              </a>

            ))}


            <button className="bg-[#D4AF37] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Book Now
            </button>

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            className="md:hidden"
            onClick={()=>setOpen(!open)}
          >

            {open ? <X/> : <Menu/>}

          </button>


        </div>


        {/* MOBILE MENU */}

        {
          open && (

            <div className="md:hidden bg-white px-6 pb-6 space-y-4">

              {[
                "Home",
                "Rooms",
                "Gallery",
                "Amenities",
                "About",
                "Contact"
              ].map(item=>(

                <a
                  key={item}
                  className="block"
                  href="#"
                >
                  {item}
                </a>

              ))}

            </div>

          )
        }


      </nav>




      {/* HERO SECTION */}


      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')"
        }}
      >


        <div className="absolute inset-0 bg-black/50"/>



        <motion.div
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">

            Experience Comfort,
            <br/>
            Luxury & Peace

          </h1>


          <p className="text-lg md:text-xl text-gray-200 mb-8">

            Enjoy elegant rooms, exceptional hospitality,
            and unforgettable stays.

          </p>



          <div className="flex flex-col md:flex-row justify-center gap-4">


            <button className="bg-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">

              Book Your Stay

            </button>


            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">

              Explore Rooms

            </button>


          </div>


        </motion.div>


      </section>




      {/* BOOKING CARD */}


      <section className="relative -mt-20 z-20 px-6">

        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl shadow-xl rounded-3xl p-8">


          <div className="grid md:grid-cols-5 gap-4">


            <input
            className="border rounded-xl p-4"
            placeholder="Check In"
            />


            <input
            className="border rounded-xl p-4"
            placeholder="Check Out"
            />


            <input
            className="border rounded-xl p-4"
            placeholder="Guests"
            />


            <input
            className="border rounded-xl p-4"
            placeholder="Room Type"
            />

            <button className="bg-[#0F4C5C] text-white rounded-xl flex items-center justify-center gap-2">

              <Search size={18}/>
              Search

            </button>


          </div>


        </div>

      </section>




      {/* WHY CHOOSE US */}


      <section className="py-24 px-6">


        <div className="max-w-7xl mx-auto">


          <h2 className="text-4xl font-serif text-center mb-12">

            Why Choose Us

          </h2>



          <div className="grid md:grid-cols-4 gap-8">


            {[
              {
                icon:<Wifi/>,
                title:"Free High-Speed WiFi"
              },
              {
                icon:<Car/>,
                title:"Secure Parking"
              },
              {
                icon:<Sparkles/>,
                title:"Daily Housekeeping"
              },
              {
                icon:<Headphones/>,
                title:"24/7 Support"
              }

            ].map((item)=>(

              <motion.div
              whileHover={{y:-10}}
              key={item.title}
              className="p-8 rounded-3xl shadow-lg bg-white text-center"
              >

                <div className="text-[#D4AF37] flex justify-center mb-4">

                  {item.icon}

                </div>


                <h3 className="font-semibold">

                  {item.title}

                </h3>


              </motion.div>


            ))}


          </div>


        </div>

      </section>

    </main>
  )
}
