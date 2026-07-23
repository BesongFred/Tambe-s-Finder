"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, EyeOff, Facebook, Apple } from "lucide-react"
import PasswordStrength from "../../../components/PasswordStrength"
import Spinner from "../../../components/Spinner"

export default function CreateAccountPage(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [agree, setAgree] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const [errors, setErrors] = useState<Record<string,string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(()=>{ // clear success on field change
    if(success) setSuccess(null)
  },[firstName,lastName,username,email,phone,country,password,confirm])

  function validate(){
    const e: Record<string,string> = {}
    if(!firstName.trim()) e.firstName = 'First name is required'
    if(!lastName.trim()) e.lastName = 'Last name is required'
    if(!username.trim() || username.length < 3) e.username = 'Username (min 3 chars)'
    if(!/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(email)) e.email = 'Enter a valid email'
    if(!phone.trim()) e.phone = 'Phone number is required'
    if(!country.trim()) e.country = 'Country is required'
    if(password.length < 8) e.password = 'Password must be at least 8 characters'
    if(password !== confirm) e.confirm = 'Passwords do not match'
    if(!agree) e.agree = 'You must accept the Terms & Conditions'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    if(!validate()) return
    setSubmitting(true)
    setErrors({})

    try{
      // simulate API call
      await new Promise((r)=>setTimeout(r,1300))

      // TODO: call your signup API here
      setSuccess('Account created successfully. Check your email to verify your account.')
      // reset form
      setFirstName('')
      setLastName('')
      setUsername('')
      setEmail('')
      setPhone('')
      setCountry('')
      setPassword('')
      setConfirm('')
      setAgree(false)
    }catch(err:any){
      setErrors({ form: err?.message || 'Failed to create account' })
    }finally{
      setSubmitting(false)
    }
  }

  const featureCards = [
    'Easy Online Booking',
    'Secure Payments',
    'Exclusive Member Discounts',
    '24/7 Customer Support'
  ]

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A]">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="min-h-screen">
        <div className="md:flex md:min-h-screen">

          {/* LEFT - hero image + features */}
          <motion.aside initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="hidden md:block md:w-1/2 relative bg-cover bg-center" style={{backgroundImage:'url(/images/gallery/exterior1.jpg)'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-center justify-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">T</div>
                <div>
                  <h2 className="text-white font-semibold">Tambe Guest House</h2>
                </div>
              </div>

              <div className="mt-auto pb-20 text-white max-w-lg">
                <h1 className="text-3xl font-serif font-bold">Welcome to Tambe Guest House</h1>
                <p className="mt-4 text-sm text-white/90">Create your account and enjoy a seamless booking experience.</p>

                <div className="mt-8 grid grid-cols-1 gap-4">
                  {featureCards.map((f,i)=> (
                    <motion.div key={f} animate={{ y: [0, -8, 0] }} transition={{ delay: 0.2 + i*0.15, duration: 3, repeat: Infinity }} className="bg-white/8 backdrop-blur-sm text-white rounded-2xl p-4 shadow-lg max-w-xs">
                      <div className="font-medium">✓ {f}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT - form card */}
          <main className="w-full md:w-1/2 flex items-center justify-center p-6">
            <motion.section initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="w-full max-w-2xl">
              <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lux">

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold">Create Your Account</h3>
                  <p className="mt-1 text-sm text-gray-600">Join thousands of happy guests.</p>
                </div>

                <form onSubmit={onSubmit} aria-label="Create account form" className="space-y-4">

                  {errors.form && <div className="text-sm text-red-700 bg-red-100 p-3 rounded">{errors.form}</div>}
                  {success && <div className="text-sm text-green-800 bg-green-100 p-3 rounded">{success}</div>}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="block">
                      <span className="text-xs text-gray-600">First Name</span>
                      <input aria-label="First name" required value={firstName} onChange={e=>setFirstName(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.firstName? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      {errors.firstName && <div className="text-xs text-red-600 mt-1">{errors.firstName}</div>}
                    </label>

                    <label className="block">
                      <span className="text-xs text-gray-600">Last Name</span>
                      <input aria-label="Last name" required value={lastName} onChange={e=>setLastName(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.lastName? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      {errors.lastName && <div className="text-xs text-red-600 mt-1">{errors.lastName}</div>}
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="block">
                      <span className="text-xs text-gray-600">Username</span>
                      <input aria-label="Username" required value={username} onChange={e=>setUsername(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.username? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      {errors.username && <div className="text-xs text-red-600 mt-1">{errors.username}</div>}
                    </label>

                    <label className="block">
                      <span className="text-xs text-gray-600">Email Address</span>
                      <input aria-label="Email" required type="email" value={email} onChange={e=>setEmail(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.email? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      {errors.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="block">
                      <span className="text-xs text-gray-600">Phone Number</span>
                      <input aria-label="Phone number" required value={phone} onChange={e=>setPhone(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.phone? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      {errors.phone && <div className="text-xs text-red-600 mt-1">{errors.phone}</div>}
                    </label>

                    <label className="block">
                      <span className="text-xs text-gray-600">Country</span>
                      <input aria-label="Country" required value={country} onChange={e=>setCountry(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.country? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      {errors.country && <div className="text-xs text-red-600 mt-1">{errors.country}</div>}
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-end">
                    <label className="block relative">
                      <span className="text-xs text-gray-600">Password</span>
                      <input aria-label="Password" required type={showPassword? 'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.password? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      <button type="button" aria-label={showPassword? 'Hide password':'Show password'} onClick={()=>setShowPassword(s=>!s)} className="absolute right-3 bottom-3 text-gray-600">
                        {showPassword? <EyeOff/> : <Eye/>}
                      </button>
                      {errors.password && <div className="text-xs text-red-600 mt-1">{errors.password}</div>}
                      <div className="mt-2">
                        <PasswordStrength password={password} />
                      </div>
                    </label>

                    <label className="block relative">
                      <span className="text-xs text-gray-600">Confirm Password</span>
                      <input aria-label="Confirm password" required type={showConfirm? 'text':'password'} value={confirm} onChange={e=>setConfirm(e.target.value)} className={`mt-1 w-full p-3 rounded-lg border ${errors.confirm? 'border-red-300':'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/30`} />
                      <button type="button" aria-label={showConfirm? 'Hide password':'Show password'} onClick={()=>setShowConfirm(s=>!s)} className="absolute right-3 bottom-3 text-gray-600">
                        {showConfirm? <EyeOff/> : <Eye/>}
                      </button>
                      {errors.confirm && <div className="text-xs text-red-600 mt-1">{errors.confirm}</div>}
                    </label>
                  </div>

                  <label className="flex items-start gap-3 mt-2">
                    <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} aria-label="Agree to terms" className="mt-1" />
                    <div className="text-sm text-gray-700">I agree to the <a href="/terms" className="text-[#0F4C5C] underline">Terms & Conditions</a></div>
                  </label>
                  {errors.agree && <div className="text-xs text-red-600 mt-1">{errors.agree}</div>}

                  <div>
                    <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C99A2D] text-[#0F4C5C] font-semibold px-6 py-3 rounded-full hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20">
                      {submitting ? <Spinner/> : 'Create Account'}
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

                  <p className="text-center text-sm text-gray-600 mt-3">Already have an account? <Link href="/auth/login" className="text-[#0F4C5C] font-medium">Sign In</Link></p>
                </form>

                <div className="mt-6 text-center text-xs text-gray-500">© 2026 Tambe Guest House — Comfort Beyond Home.</div>

              </div>
            </motion.section>
          </main>

        </div>
      </motion.div>
    </div>
  )
}
