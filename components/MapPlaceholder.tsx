"use client"

export default function MapPlaceholder(){
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden border">
      <iframe
        title="Tambe Guest House location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.123456789!2d3.0000000!3d6.0000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDAnMDAuMCJOIDPCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v0000000000000"
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  )
}
