"use client"
export function CartSummary({ items, clearCart }) {
  const formatPrice = (price) => price.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal ;

  return (
    <div className="border rounded-lg p-4 sticky top-20">
      <h2 className="font-bold text-lg mb-2">Resumen</h2>
      <div className="flex justify-between mb-1">Subtotal: <span>{formatPrice(subtotal)}</span></div>
      <hr className="my-2"/>
      <div className="flex justify-between font-bold text-lg mb-4">Total: <span>{formatPrice(total)}</span></div>
      <button className="w-full bg-yellow-500 py-2 rounded text-white font-semibold mb-2" onClick={clearCart}>Vaciar carrito</button>
      <button className="w-full bg-green-600 py-2 rounded text-white font-semibold">Proceder pedido</button>
    </div>
  )
}
