import fs from 'fs/promises'
import path from 'path'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const USERS_FILE = path.join(process.cwd(), 'data', 'users.json')

export type User = {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  phone: string
  country: string
  passwordHash: string
  createdAt: string
}

async function readUsers(): Promise<User[]> {
  try {
    const raw = await fs.readFile(USERS_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    return []
  }
}

async function writeUsers(users: User[]) {
  await fs.mkdir(path.dirname(USERS_FILE), { recursive: true })
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8')
}

export async function findUserByEmail(email: string) {
  const users = await readUsers()
  return users.find(u => u.email.toLowerCase() === email.toLowerCase())
}

export async function findUserByUsername(username: string) {
  const users = await readUsers()
  return users.find(u => u.username.toLowerCase() === username.toLowerCase())
}

export async function createUser(data: Omit<User, 'id' | 'passwordHash' | 'createdAt'> & { password: string }) {
  const users = await readUsers()
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2,8)
  const passwordHash = await bcrypt.hash(data.password, 10)
  const user: User = {
    id,
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    phone: data.phone,
    country: data.country,
    passwordHash,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  await writeUsers(users)
  return user
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}

const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-env'

export function createToken(user: User) {
  const token = jwt.sign({ uid: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })
  return token
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return { ok: true, payload: decoded }
  } catch (err: any) {
    return { ok: false, error: err?.message }
  }
}
