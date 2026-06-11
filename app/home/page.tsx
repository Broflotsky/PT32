import { productsData } from "@/utils/mockProducts";
import Card from "@/components/Card";

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl text-white tracking-wide">
            TODOS LOS PRODUCTOS
          </h1>
          <p className="text-white/60 mt-2 text-sm">
            Explorá nuestra colección completa de dispositivos electrónicos
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="bg-surface border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 overflow-x-auto">
            <span className="px-4 py-2 bg-primary text-white text-xs font-medium rounded-full whitespace-nowrap">
              Todos
            </span>
            <span className="px-4 py-2 bg-border/50 text-secondary text-xs font-medium rounded-full whitespace-nowrap">
              Smartphones
            </span>
            <span className="px-4 py-2 bg-border/50 text-secondary text-xs font-medium rounded-full whitespace-nowrap">
              Laptops
            </span>
            <span className="px-4 py-2 bg-border/50 text-secondary text-xs font-medium rounded-full whitespace-nowrap">
              Tablets
            </span>
            <span className="px-4 py-2 bg-border/50 text-secondary text-xs font-medium rounded-full whitespace-nowrap">
              Wearables
            </span>
            <span className="px-4 py-2 bg-border/50 text-secondary text-xs font-medium rounded-full whitespace-nowrap">
              Audio
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted text-sm">
            Mostrando {productsData.length} productos
          </p>
          <span className="text-sm text-secondary font-medium px-3 py-1 border border-border rounded-lg">
            Ordenar por: Relevancia
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {productsData.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
