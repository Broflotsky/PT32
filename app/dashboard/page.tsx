"use client";

import { useAuth } from "@/contexts/AuthContext";
import { IOrder } from "@/interfaces/orders.interface";
import { getAllOrders } from "@/services/orders.service";
import { useEffect, useState } from "react";

function DashboardPage() {
  const { dataUser } = useAuth();

  const [data, setData] = useState<IOrder[] | null>(null);

  useEffect(() => {
    const ordersData = async () => {
      if (dataUser?.token) {
        const res = await getAllOrders(dataUser?.token);
        setData(res);
      }
    };

    ordersData();
  }, [dataUser]);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-display text-4xl text-white tracking-wide">
            MI CUENTA
          </h1>
          <p className="text-white/60 mt-2 text-sm">
            Gestioná tu perfil y revisá tus pedidos
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-10 h-10 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">
                  {dataUser?.user.name}
                </h3>
                <p className="text-muted text-xs">{dataUser?.user.email}</p>
              </div>
              <nav className="space-y-1">
                <span className="block px-4 py-2 text-sm font-medium text-primary bg-primary/5 rounded-lg">
                  Resumen
                </span>
                <span className="block px-4 py-2 text-sm text-muted rounded-lg">
                  Mis Pedidos
                </span>
                <span className="block px-4 py-2 text-sm text-muted rounded-lg">
                  Configuración
                </span>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-muted text-xs uppercase tracking-wider mb-1">
                  Pedidos
                </p>
                <p className="font-display text-3xl text-foreground">0</p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-muted text-xs uppercase tracking-wider mb-1">
                  En Camino
                </p>
                <p className="font-display text-3xl text-foreground">0</p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-muted text-xs uppercase tracking-wider mb-1">
                  Wishlist
                </p>
                <p className="font-display text-3xl text-foreground">0</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-display text-xl text-foreground tracking-wide mb-6">
                PEDIDOS RECIENTES
              </h3>

              {data ? (
                <div>
                  <p>{JSON.stringify(data)}</p>
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-muted"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted text-sm">
                    No tenés pedidos recientes
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
