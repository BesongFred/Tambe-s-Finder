// Stripe helper (server-side)
import Stripe from 'stripe'

export function getStripe() {
  const secret = process.env.STRIPE_SECRET_KEY || ''
  return new Stripe(secret, { apiVersion: '2024-08-01' })
}
