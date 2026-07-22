import Link from 'next/link'

export default function Blog() {
  // For now we ship with a single example post. You can add more under /app/blog/[slug]/page.tsx or create static pages.
  const posts = [
    { title: 'Welcome post', slug: 'welcome' }
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <ul className="space-y-3">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-blue-600">{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
