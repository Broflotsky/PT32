"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { createOrder } from "@/services/orders.service";
import Link from "next/link";

function CartPage() {
  const { cartItems, removeFromCart, clearCart, getIdItems } = useCart();
  const { dataUser } = useAuth();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const hasItems = cartItems.length > 0;

  const handleCheckout = async () => {
    if (!dataUser?.token) {
      return;
    }
    try {
      await createOrder(dataUser.token, getIdItems());
      clearCart();
      alert("Compra procesada con exito.");
    } catch (error) {
      console.error("Error al completar la compra", error);
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-display text-4xl text-white tracking-wide">
            MI CARRITO
          </h1>
          <p className="text-white/60 mt-2 text-sm">
            Revisá tus productos antes de finalizar la compra
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {!hasItems && (
              <div className="bg-surface border border-border rounded-xl p-12 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-muted"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-foreground tracking-wide mb-2">
                  TU CARRITO ESTÁ VACÍO
                </h3>
                <p className="text-muted text-sm mb-6">
                  Explorá nuestros productos y agregá tus favoritos
                </p>
                <Link
                  href="/"
                  className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  Ver productos
                </Link>
              </div>
            )}

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-surface border border-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5"
              >
                <div className="shrink-0 w-full sm:w-28 h-28 bg-linear-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply p-2"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <Link
                      href={`/product/${item.id}`}
                      className="font-display text-xl text-foreground tracking-wide hover:text-primary-light transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-muted text-sm mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div>
                      <span className="text-xl font-bold text-primary">
                        ${item.price}
                      </span>
                      <p className="text-xs text-muted mt-0.5">
                        Stock: {item.stock}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex items-center gap-2 text-danger hover:text-danger/80 text-sm font-medium px-3 py-2 rounded-lg border border-danger/20 hover:bg-danger/5 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {hasItems && (
              <button
                type="button"
                onClick={() => clearCart()}
                className="w-full text-center border border-border text-muted hover:text-foreground hover:border-foreground/20 font-medium py-3 rounded-lg text-sm transition-colors"
              >
                Vaciar carrito
              </button>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-surface border border-border rounded-xl p-6 sticky top-20">
              <h3 className="font-display text-xl text-foreground tracking-wide mb-6">
                RESUMEN DE COMPRA
              </h3>
              <div className="space-y-3 border-b border-border pb-4 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">
                    Subtotal ({cartItems.length}{" "}
                    {cartItems.length === 1 ? "producto" : "productos"})
                  </span>
                  <span className="text-foreground font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Envío</span>
                  <span className="text-success font-medium">
                    {subtotal >= 500 ? "Gratis" : "A calcular"}
                  </span>
                </div>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-foreground font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                disabled={!hasItems}
                onClick={handleCheckout}
                className="block w-full text-center bg-primary hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg text-sm transition-colors"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
