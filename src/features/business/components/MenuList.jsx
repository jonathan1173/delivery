// src/features/business/components/MenuList.jsx
import { MenuItemCard } from "./MenuItemCard";
import { useState } from "react";
import { menuItems } from "../data/menu";
import { Link } from "react-router-dom";

export function MenuList() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // categorías únicas
  const categories = [
    "Todos",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  // aplicar filtro
  const filteredItems =
    selectedCategory === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Menú</h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedCategory === cat
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Columna de productos */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} onAdd={handleAddToCart} />
          ))}
        </div>

        {/* Columna carrito */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-gray-100 rounded-lg p-4 shadow-md">
            <h3 className="font-bold mb-3 text-lg">Carrito</h3>
            {cart.length === 0 ? (
              <p className="text-gray-500">Sin productos</p>
            ) : (
              <>
                <ul className="space-y-2 mb-4">
                  {cart.map((i) => (
                    <li
                      key={i.id}
                      className="flex justify-between items-center text-sm"
                    >
                      <span>
                        {i.name} x {i.quantity}
                      </span>
                      <span className="font-medium">
                        ${(i.price * i.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Total */}
                <div className="flex justify-between items-center border-t pt-3 font-bold text-lg">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                {/* Botón para ir al carrito */}
                <Link to="/cart">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition-colors">
                    Ir al Carrito
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
