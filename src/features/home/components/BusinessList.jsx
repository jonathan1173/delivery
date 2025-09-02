import { CafeCard } from "./BusinessCard";

// Datos de ejemplo
const cafes = [
  {
    id: 1,
    name: "Café Central",
    description: "Café con especialidad en espresso y pastelería.",
    image: "/",
    rating: 4.5,
    deliveryTime: "30-40 min",
    specialty: "Espresso",
  },
  {
    id: 2,
    name: "La Taza Feliz",
    description: "Ambiente acogedor y café orgánico.",
    image: "/",
    rating: 4.8,
    deliveryTime: "25-35 min",
    specialty: "Cappuccino",
  },
];

export default function CafeList() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Cafeterías Afiliadas</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </div>
    </section>
  );
}
