"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, EyeOff, Facebook, Apple } from "lucide-react"
import Spinner from "../../../components/Spinner"

export default function SignInPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(()=>{
    // load remembered email
    try{
      const saved = localStorage.getItem('tambe_remember_email')
      if(saved){ setEmail(saved); setRemember(true) }
    }catch(e){}
  },[])

  function validate(){
    if(!email) return 'Please enter your email address.'
    if(!/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(email)) return 'Please enter a valid email.'
    if(!password) return 'Please enter your password.'
    return null
  }

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setError(null)
    setSuccess(null)
    const v = validate()
    if(v){ setError(v); return }

    setLoading(true)
    try{
      // simulate API
      await new Promise((r)=>setTimeout(r,1200))

      // fake auth: if password === 'password' then fail to demonstrate error
      if(password === 'wrong'){ throw new Error('Invalid credentials') }

      if(remember){ try{ localStorage.setItem('tambe_remember_email', email) }catch(e){} }
      else { try{ localStorage.removeItem('tambe_remember_email') }catch(e){} }

      setSuccess('Signed in successfully — redirecting...')
      // TODO: replace with real sign-in flow
    }catch(err:any){
      setError(err?.message || 'Failed to sign in')
    }finally{
      setLoading(false)
    }
  }

  const features = ['Exclusive Discounts','Manage Reservations','Fast Check-in']

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A]">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="min-h-screen">
        <div className="md:flex md:min-h-screen">

          {/* LEFT - hero image with overlay (hidden on small screens) */}
          <motion.aside initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="hidden md:block md:w-1/2 relative bg-cover bg-center" style={{backgroundImage:'url(/images/gallery/room1.jpg)'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-center justify-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">T</div>
                <div>
                  <h2 className="text-white font-semibold">Tambe Guest House</h2>
                </div>
              </div>

              <div className="mt-auto pb-20 text-white max-w-lg">
                <h1 className="text-3xl font-serif font-bold">Welcome Back</h1>
                <p className="mt-4 text-sm text-white/90">Sign in to manage your bookings and enjoy exclusive member benefits.</p>

                <div className="mt-8 grid grid-cols-1 gap-4">
                  {features.map((f,i)=> (
                    <motion.div key={f} animate={{ y: [0, -6, 0] }} transition={{ delay: 0.2 + i*0.12, duration: 3, repeat: Infinity }} className="bg-white/8 backdrop-blur-sm text-white rounded-2xl p-4 shadow-lg max-w-xs">
                      <div className="font-medium">✓ {f}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <a href="/contact" className="inline-block px-4 py-2 rounded-full bg-[#D4AF37] text-[#0F4C5C] font-semibold">Contact Support</a>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT - login card */}
          <main className="w-full md:w-1/2 flex items-center justify-center p-6">
            <motion.section initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="w-full max-w-xl">
              <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lux">

                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">T</div>
                </div>

                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-serif font-bold">Sign In</h3>
                  <p className="mt-1 text-sm text-gray-600">Welcome back to your account.</p>
                </div>

                <form onSubmit={onSubmit} aria-label="Sign in form" className="space-y-4">
                  {error && <div role="alert" className="text-sm text-red-700 bg-red-100 p-3 rounded">{error}</div>}
                  {success && <div role="status" className="text-sm text-green-800 bg-green-100 p-3 rounded">{success}</div>}

                  <label className="block">
                    <span className="text-xs text-gray-600">Email Address</span>
                    <input aria-label="Email address" required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30" />
                  </label>

                  <label className="block relative">
                    <span className="text-xs text-gray-600">Password</span>
                    <input aria-label="Password" required type={showPassword? 'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30" />
                    <button type="button" aria-label={showPassword? 'Hide password':'Show password'} onClick={()=>setShowPassword(s=>!s)} className="absolute right-3 bottom-3 text-gray-600">
                      {showPassword? <EyeOff/> : <Eye/>}
                    </button>
                  </label>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} aria-label="Remember me" />
                      <span className="text-sm text-gray-700">Remember Me</span>
                    </label>

                    <Link href="/auth/forgot" className="text-sm text-[#0F4C5C] underline">Forgot Password?</Link>
                  </div>

                  <div>
                    <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C99A2D] text-[#0F4C5C] font-semibold px-6 py-3 rounded-full hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20">
                      {loading ? <Spinner/> : 'Sign In'}
                    </button>
                  </div>

                  <div className="flex items-center gap-3 my-3">
                    <div className="flex-grow border-t border-gray-200" />
                    <div className="text-xs text-gray-400">OR</div>
                    <div className="flex-grow border-t border-gray-200" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button type="button" className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border hover:shadow-sm bg-white">Continue with Google</button>
                    <button type="button" className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border hover:shadow-sm bg-white"><Facebook size={16}/> Continue with Facebook</button>
                    <button type="button" className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border hover:shadow-sm bg-white"><Apple size={16}/> Continue with Apple</button>
                  </div>

                  <p className="text-center text-sm text-gray-600 mt-3">Don't have an account? <Link href="/auth/create-account" className="text-[#0F4C5C] font-medium">Create Account</Link></p>
                </form>

                <div className="mt-6 text-center text-xs text-gray-500">Need help? <a href="/contact" className="text-[#0F4C5C] underline">Contact Support</a></div>

              </div>
            </motion.section>
          </main>

        </div>
      </motion.div>
    </div>
  )
}
