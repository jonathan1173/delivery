"use client";
import { useCart } from "../../cart/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        XXXXXXX
      </Link>

      {/* Links */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-yellow-500 transition">
          Inicio
        </Link>
        <Link to="/cafeterias" className="hover:text-yellow-500 transition">
          Cafeterías
        </Link>
        <Link to="/nosotros" className="hover:text-yellow-500 transition">
          Nosotros
        </Link>
      </div>

      {/* Carrito */}
      <div className="relative">
        <Link to="/cart" className="flex items-center">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
    