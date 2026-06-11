import AddToCardButton from "@/components/AddToCardButton";
import { IProduct } from "@/interfaces/product.interface";
import { getProductById } from "@/services/products.service";
import { notFound } from "next/navigation";

interface ProductDetailParams {
  params: Promise<{
    idProduct: string;
  }>;
}

async function ProductDetail({ params }: ProductDetailParams) {
  const { idProduct } = await params;
  let product: IProduct;
  try {
    product = await getProductById(idProduct);
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-white/60 text-sm">
            Inicio / Productos /{" "}
            <span className="text-accent">Producto #{product.id}</span>
          </p>
        </div>
      </section>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-surface border border-border rounded-xl p-8 flex items-center justify-center">
            <div className="w-full h-80 bg-linear-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-24 h-24 text-muted"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z"
                />
              </svg>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <span className="inline-block bg-success/10 text-success text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
              En stock
            </span>
            <h1 className="font-display text-4xl text-foreground tracking-wide mb-3">
              PRODUCTO {product.name}
            </h1>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="border-t border-border pt-6 mb-6">
              <span className="text-3xl font-bold text-primary">
                ${product.price}
              </span>
              <p className="text-muted text-xs mt-1">IVA incluido</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <span className="px-4 py-2 text-foreground text-sm font-medium">
                  -
                </span>
                <span className="px-4 py-2 text-foreground text-sm font-semibold border-x border-border">
                  1
                </span>
                <span className="px-4 py-2 text-foreground text-sm font-medium">
                  +
                </span>
              </div>
              <AddToCardButton product={product} />
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <svg
                  className="w-4 h-4 text-accent-dark"
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
                Envío gratis en compras mayores a $500
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <svg
                  className="w-4 h-4 text-accent-dark"
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
                Garantía de 12 meses
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <svg
                  className="w-4 h-4 text-accent-dark"
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
                Devolución en 30 días
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
