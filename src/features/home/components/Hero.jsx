import { Coffee, Clock, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-card to-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Pre-ordena tu café favorito
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Evita las colas y disfruta de tu café recién preparado. Gestiona tu
            negocio y permite a tus clientes ordenar con anticipación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="text-lg px-8 py-2 bg-black rounded-md text-white">
              Explorar Cafeterías
            </button>
            <button className="text-lg px-8">
              Para Negocios
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fácil de usar</h3>
              <p className="text-muted-foreground">
                Interfaz intuitiva para realizar pedidos en segundos
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sin esperas</h3>
              <p className="text-muted-foreground">
                Tu pedido estará listo cuando llegues al local
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Calidad garantizada
              </h3>
              <p className="text-muted-foreground">
                Los mejores cafés de la ciudad en un solo lugar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
