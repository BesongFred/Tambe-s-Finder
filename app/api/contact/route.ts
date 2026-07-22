import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const form = await request.formData()
  const name = form.get('name')?.toString() || 'Anonymous'
  const email = form.get('email')?.toString() || ''
  const message = form.get('message')?.toString() || ''

  // TODO: store to database (Supabase) or forward to transactional email provider like SendGrid.
  console.log('Contact form received:', { name, email, message })

  return NextResponse.json({ status: 'ok' })
}
