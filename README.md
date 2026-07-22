# Tambe's Finder — Starter scaffold

This repository is a starter scaffold for a company site built with Next.js (App Router), TypeScript and Tailwind CSS. It includes placeholders and basic pages for the features you requested: homepage, about, blog, contact form, admin area, and stubs for Supabase and Stripe integration.

Default contact email: besongrobert30@gmail.com

## What I pushed
- Next.js app router layout and pages: home, about, blog (example post), contact, admin
- API route for contact form (logs form data server-side)
- lib/ stubs for Supabase and Stripe
- Tailwind + PostCSS setup
- README with setup instructions

## Local setup
1. Clone the repo:
   git clone https://github.com/BesongFred/Tambe-s-Finder.git
2. Install dependencies:
   npm install
3. Create a `.env.local` file with the environment variables listed below (or set them in Vercel):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
SENDGRID_API_KEY=...
```

4. Run the dev server:
   npm run dev

## Deployment
- Connect this repo to Vercel and set the same environment variables in the Vercel dashboard.
- Use the Vercel default domain or add a custom domain.

## Next steps I recommend I can help with next
- Configure Supabase project and hook up Auth (email sign-in, OAuth providers) — I can provide the exact steps and code.
- Add Stripe Checkout and webhook handler to mark users as subscribers.
- Replace the blog with MDX/Contentlayer or connect a headless CMS.
- Implement the admin UI to manage posts, users, and view contact messages.

If you want, I can continue and wire up Supabase auth, Stripe payments, SendGrid email, and an admin UI next. Tell me which of these to implement first, and whether to preconfigure OAuth providers (Google, GitHub, Apple) and which payment models to support (one-time, subscriptions, or both).
