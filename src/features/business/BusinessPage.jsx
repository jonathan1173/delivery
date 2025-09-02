import { useParams } from "react-router-dom";
import { BusinessHeader } from "./components/BusinessHeader";
import { MenuList } from "./components/MenuList"; // importamos la lista de productos

// Datos de ejemplo de negocios
const businesses = [
  {
    id: 1,
    name: "Café Central",
    description: "Café con especialidad en espresso y pastelería.",
    image: "/cafe1.jpg",
    rating: 4.5,
    deliveryTime: "30-40 min",
    specialty: "Espresso",
  },
  {
    id: 2,
    name: "La Taza Feliz",
    description: "Ambiente acogedor y café orgánico.",
    image: "/cafe2.jpg",
    rating: 4.8,
    deliveryTime: "25-35 min",
    specialty: "Cappuccino",
  },
];

export default function BusinessPage() {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === parseInt(id));

  if (!business) return <p className="text-center mt-12">Negocio no encontrado</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado del negocio */}
      <BusinessHeader cafe={business} />

      {/* Menú del negocio */}
      <MenuList />
    </div>
  );
}
