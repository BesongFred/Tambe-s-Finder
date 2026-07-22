import { createClient } from '@supabase/supabase-js'

// Please set these in your environment (Vercel/locally). No secrets are committed.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(url, anonKey)
