import Card from "@/components/Card";
import { IProduct } from "@/interfaces/product.interface";
import { getAllProducts } from "@/services/products.service";

export default async function Home() {
  const productsData: IProduct[] = await getAllProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl text-white tracking-wide mb-6">
              TECNOLOGÍA QUE INSPIRA
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Descubrí los dispositivos electrónicos más avanzados del mercado.
              Calidad premium, envío rápido y garantía extendida.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-lg text-sm uppercase tracking-wider">
                Ver Catálogo
              </span>
              <span className="inline-block border border-white/30 text-white font-semibold px-8 py-3 rounded-lg text-sm uppercase tracking-wider">
                Ofertas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-accent-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Envío Gratis
                </p>
                <p className="text-xs text-muted">En compras mayores a $500</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-accent-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Garantía Extendida
                </p>
                <p className="text-xs text-muted">
                  12 meses en todos los productos
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-accent-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Pago Seguro
                </p>
                <p className="text-xs text-muted">
                  Todas las tarjetas y transferencias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-foreground tracking-wide">
            PRODUCTOS DESTACADOS
          </h2>
          <p className="text-muted mt-3 text-sm">
            Selección curada de los mejores dispositivos electrónicos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {productsData.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl text-foreground tracking-wide">
                NEWSLETTER
              </h3>
              <p className="text-muted mt-2 text-sm">
                Suscribite para recibir ofertas exclusivas y novedades
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-4 py-3 rounded-lg border border-border bg-surface text-foreground text-sm w-full md:w-64 outline-none focus:border-accent transition-colors"
                readOnly
              />
              <span className="bg-accent text-primary font-semibold px-6 py-3 rounded-lg text-sm whitespace-nowrap">
                Suscribir
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
