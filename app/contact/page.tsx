export default function ContactPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-4">Send us a message — the form below posts to /api/contact (server will log and store if configured).</p>
      <form method="post" action="/api/contact" className="space-y-3 max-w-lg">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" className="mt-1 block w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" className="mt-1 block w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={5} className="mt-1 block w-full p-2 border rounded" />
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </div>
      </form>
    </section>
  )
}
