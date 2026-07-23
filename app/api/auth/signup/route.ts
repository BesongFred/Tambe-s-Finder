import { NextResponse } from 'next/server'
import { createUser, findUserByEmail, findUserByUsername } from '../../../../lib/auth'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, username, email, phone, country, password } = body

    // basic validation
    if (!firstName || !lastName || !username || !email || !phone || !country || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // check existing
    const existsEmail = await findUserByEmail(email)
    if (existsEmail) return NextResponse.json({ error: 'Email already in use' }, { status: 409 })
    const existsUser = await findUserByUsername(username)
    if (existsUser) return NextResponse.json({ error: 'Username already in use' }, { status: 409 })

    await createUser({ firstName, lastName, username, email, phone, country, password })

    return NextResponse.json({ ok: true, message: 'Account created' }, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 })
  }
}
