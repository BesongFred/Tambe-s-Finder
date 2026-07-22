"use client"

import { useState } from "react"

export default function ContactForm(){
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ok:boolean; msg:string} | null>(null)

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const form = new FormData()
      form.append('name', fullName)
      form.append('email', email)
      form.append('message', `${subject}\n\n${message}\n\nPhone: ${phone}`)

      const res = await fetch('/api/contact', { method: 'POST', body: form })
      const data = await res.json()

      if (!res.ok) throw new Error(data?.error || 'Something went wrong')

      setStatus({ ok: true, msg: 'Message sent. We will contact you shortly.' })
      setFullName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
    } catch (err:any){
      setStatus({ ok: false, msg: err.message || 'Failed to send' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status && (
        <div className={`p-3 rounded ${status.ok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{status.msg}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={fullName} onChange={(e)=>setFullName(e.target.value)} required placeholder="Full Name" className="border rounded-lg p-3" />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Email Address" className="border rounded-lg p-3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" className="border rounded-lg p-3" />
        <input value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Subject" className="border rounded-lg p-3" />
      </div>

      <div>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required rows={6} placeholder="Message" className="border rounded-lg p-3 w-full" />
      </div>

      <div>
        <button type="submit" disabled={loading} className="bg-[#0F4C5C] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">{loading ? 'Sending…' : 'Send Message'}</button>
      </div>
    </form>
  )
}
