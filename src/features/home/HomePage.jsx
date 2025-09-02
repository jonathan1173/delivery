import Hero from "./components/Hero";
import CafeList from "./components/BusinessList";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <CafeList />
    </div>
  );
}
