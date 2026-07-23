import { NextResponse } from 'next/server'

export async function POST() {
  const isProd = process.env.NODE_ENV === 'production'
  const cookieParts = ['tambe_token=; Path=/', 'HttpOnly', 'Max-Age=0', 'SameSite=Lax']
  if (isProd) cookieParts.push('Secure')
  const cookie = cookieParts.join('; ')
  return NextResponse.json({ ok: true }, { status: 200, headers: { 'Set-Cookie': cookie } })
}
