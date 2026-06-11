import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
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
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Tu tienda de confianza para dispositivos electrónicos de última
              generación.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-accent">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href={"/home"}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href={"/landing"}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-accent">MI CUENTA</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={"/dashboard"}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={"/cart"}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  Carrito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-accent">CONTACTO</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/60">soporte@techstore.com</li>
              <li className="text-sm text-white/60">+54 11 1234-5678</li>
              <li className="text-sm text-white/60">
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-white/40">
            © 2025 TechStore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
