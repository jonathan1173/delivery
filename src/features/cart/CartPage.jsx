"use client";
import { useState } from "react";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";

export default function CartPage() {
  const [items, setItems] = useState([
    // ejemplo inicial
    {
      id: 1,
      name: "Espresso",
      description: "Café concentrado",
      price: 1500,
      quantity: 2,
      image: "/images/espresso.jpg",
    },
  ]);

  const updateQuantity = (id, quantity) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-4">
          Agrega productos para empezar tu pedido
        </p>
        <a href="/" className="px-4 py-2 bg-yellow-500 text-white rounded">
          Volver a la tienda
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdate={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
        <div className="lg:col-span-1">
          <CartSummary items={items} clearCart={clearCart} />
        </div>
      </div>
    </div>
  );
}
