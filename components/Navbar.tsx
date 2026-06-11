"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

function Navbar() {
  const { dataUser, logout } = useAuth();

  return (
    <nav className="w-full bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="font-display text-2xl tracking-wide">
              TECHSTORE
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href={"/"}
              className="text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              href={"/home"}
              className="text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200"
            >
              Productos
            </Link>
            <Link
              href={"/landing"}
              className="text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200"
            >
              Ofertas
            </Link>
            {dataUser?.user.name ? (
              <Link
                href={"/dashboard"}
                className="text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200"
              >
                {dataUser?.user.name}
              </Link>
            ) : (
              <Link
                href={"/auth/login"}
                className="text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200"
              >
                {"Iniciar sesion"}
              </Link>
            )}
            {dataUser ? (
              <button onClick={() => logout()}>Cerrar sesion</button>
            ) : null}
            <Link
              href={"/cart"}
              className="relative p-2 text-white/80 hover:text-accent transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
