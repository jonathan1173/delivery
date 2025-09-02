import { Link } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";

export function CafeCard({ cafe }) {
  return (
    <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative">
        <img
          src={cafe.image || "/placeholder.svg"}
          alt={cafe.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{cafe.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{cafe.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {cafe.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{cafe.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>2.5 km</span>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg p-3 mb-4">
          <p className="text-sm font-medium ">Especialidad: {cafe.specialty}</p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          to={`/business/${cafe.id}`}
          className="block w-full text-center bg-black hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Ver Menú
        </Link>
      </div>
    </div>
  );
}
