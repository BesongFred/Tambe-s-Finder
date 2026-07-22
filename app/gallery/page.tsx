export default function GalleryPage() {
  return (
    <section className="pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <p className="mb-6">A selection of photos showcasing the property, rooms, and amenities.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-48 bg-gray-200 rounded-lg" />
          <div className="h-48 bg-gray-200 rounded-lg" />
          <div className="h-48 bg-gray-200 rounded-lg" />
          <div className="h-48 bg-gray-200 rounded-lg" />
          <div className="h-48 bg-gray-200 rounded-lg" />
          <div className="h-48 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </section>
  )
}
