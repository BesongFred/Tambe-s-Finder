"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    // On success, redirect to home (or to a protected route)
    router.push('/')
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Sign in</h2>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        {error && <div className="text-red-600">{error}</div>}

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 block w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 block w-full p-2 border rounded" />
        </div>

        <div>
          <button disabled={loading} type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? 'Signing in…' : 'Sign in'}</button>
        </div>

        <div className="text-sm">
          <a href="/auth/signup" className="text-blue-600">Create an account</a>
        </div>
      </form>
    </section>
  )
}
