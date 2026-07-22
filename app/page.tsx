export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-extrabold mb-4">Welcome to Tambe's Finder</h2>
      <p className="mb-4">A company site scaffolded with Next.js, TypeScript and Tailwind. This starter includes homepage, about, blog, contact form, auth & payments placeholders and an admin area scaffold.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <a href="/about" className="p-4 bg-white border rounded">About</a>
        <a href="/blog" className="p-4 bg-white border rounded">Blog</a>
        <a href="/contact" className="p-4 bg-white border rounded">Contact</a>
        <a href="/admin" className="p-4 bg-white border rounded">Admin (protected)</a>
      </div>
    </section>
  )
}
