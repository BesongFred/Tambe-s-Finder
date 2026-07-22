"use client"

export default function TeamCard({ name, role, img }:{ name:string, role:string, img:string }){
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{name}</h4>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </article>
  )
}
