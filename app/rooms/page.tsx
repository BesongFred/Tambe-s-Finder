export default function RoomsPage() {
  return (
    <section className="pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Rooms</h1>
        <p className="mb-6">Discover our comfortable and stylish rooms. Replace this placeholder with room listings, photos, and booking links.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Standard Room</h3>
            <p className="text-sm text-gray-600">Cozy room with queen bed, free WiFi, and ensuite bathroom.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Deluxe Room</h3>
            <p className="text-sm text-gray-600">Spacious room with king bed, seating area, and city view.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
