import { NextResponse } from 'next/server'
import { findUserByEmail, verifyPassword, createToken } from '../../../../lib/auth'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })

    const user = await findUserByEmail(email)
    if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })

    const ok = await verifyPassword(password, user.passwordHash)
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })

    const token = createToken(user)

    // set cookie
    const isProd = process.env.NODE_ENV === 'production'
    const cookieParts = [`tambe_token=${token}`, 'Path=/', 'HttpOnly', 'Max-Age=604800', 'SameSite=Lax']
    if (isProd) cookieParts.push('Secure')
    const cookie = cookieParts.join('; ')

    return NextResponse.json({ ok: true, message: 'Signed in' }, { status: 200, headers: { 'Set-Cookie': cookie } })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 })
  }
}
