"use client"
export function CartItem({ item, onUpdate, onRemove }) {
  const formatPrice = (price) => price.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  return (
    <div className="border rounded-lg p-4 flex gap-4 items-center">
      <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-cover rounded"/>
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm">{item.description}</p>
        <p className="font-bold">{formatPrice(item.price)}</p>
      </div>
      <div className="flex gap-2 items-center">
        <button onClick={() => onUpdate(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdate(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => onRemove(item.id)}>X</button>
      </div>
    </div>
  )
}
