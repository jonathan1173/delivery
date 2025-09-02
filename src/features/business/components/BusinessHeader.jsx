import { Star, Clock, MapPin } from "lucide-react"

export function BusinessHeader({ cafe }) {
  return (
    <div className="relative">
      <div className="h-64 md:h-80 overflow-hidden">
        <img src={cafe.image || "/placeholder.svg"} alt={cafe.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{cafe.name}</h1>
          <p className="text-white/90 mb-4 max-w-2xl">{cafe.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{cafe.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{cafe.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>2.5 km</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-sm font-medium">{cafe.specialty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
