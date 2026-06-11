import { productsData } from "@/utils/mockProducts";
import Card from "@/components/Card";

function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Promo Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Ofertas Especiales
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-white tracking-wide mb-4">
              HASTA 40% OFF
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Aprovechá descuentos exclusivos en smartphones, laptops y
              accesorios. Solo por tiempo limitado.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block font-display text-3xl text-accent">
                  24
                </span>
                <span className="text-white/50 text-xs uppercase">Horas</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-3xl text-accent">
                  59
                </span>
                <span className="text-white/50 text-xs uppercase">Min</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-3xl text-accent">
                  30
                </span>
                <span className="text-white/50 text-xs uppercase">Seg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl text-foreground tracking-wide">
            OFERTAS DEL DÍA
          </h2>
          <p className="text-muted mt-2 text-sm">
            Productos seleccionados con los mejores precios
          </p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {productsData.map((product) => (
            <div key={product.id} className="snap-start shrink-0 w-80">
              <Card product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-display text-3xl text-foreground tracking-wide text-center mb-12">
            ¿POR QUÉ ELEGIRNOS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-accent-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Envío Express</h4>
              <p className="text-muted text-sm">
                Recibí tus productos en 24-48 horas
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-accent-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">100% Original</h4>
              <p className="text-muted text-sm">
                Todos nuestros productos son genuinos
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-accent-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Devolución Fácil</h4>
              <p className="text-muted text-sm">
                30 días para cambios y devoluciones
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-accent-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Soporte 24/7</h4>
              <p className="text-muted text-sm">
                Atención personalizada cuando la necesites
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
