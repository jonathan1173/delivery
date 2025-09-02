import { Plus } from "lucide-react";

export function MenuItemCard({ item, onAdd }) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(price);

  return (
    <div className="w-full overflow-hidden rounded-lg border border-amber-500 shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-36 object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
          {item.description}
        </p>
        <p className="text-lg font-bold text-yellow-600">
          {formatPrice(item.price)}
        </p>
      </div>

      <div className="p-3 pt-0">
        <button
          onClick={() => onAdd(item)}
          className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Agregar
        </button>
      </div>
    </div>
  );
}
