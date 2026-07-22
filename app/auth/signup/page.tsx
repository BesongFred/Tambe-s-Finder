"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../lib/supabase'

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    // Ask the user to check their email if using email confirmations
    setMessage('Signup successful — check your email to confirm (if email confirmations are enabled). Redirecting...')

    setTimeout(() => {
      router.push('/')
    }, 1500)
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Create an account</h2>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        {error && <div className="text-red-600">{error}</div>}
        {message && <div className="text-green-600">{message}</div>}

        <div>
          <label className="block text-sm font-medium">Full name</label>
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} required className="mt-1 block w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 block w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 block w-full p-2 border rounded" />
        </div>

        <div>
          <button disabled={loading} type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? 'Creating…' : 'Create account'}</button>
        </div>
      </form>
    </section>
  )
}
