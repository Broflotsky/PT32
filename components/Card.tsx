import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import AddToCardButton from "./AddToCardButton";

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return (
    <div className="group bg-surface rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full max-w-sm">
      <div className="relative overflow-hidden bg-linear-to-br from-slate-50 to-slate-100 p-6">
        <img
          className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          src={product.image}
          alt={product.name}
        />
        {product.stock > 0 && (
          <span className="absolute top-3 right-3 bg-success text-white text-xs font-semibold px-2 py-1 rounded-full">
            En stock
          </span>
        )}
      </div>

      <div className="p-5">
        <Link href={`/product/${product.id}`}>
          <h5 className="font-display text-xl text-foreground tracking-wide hover:text-primary-light transition-colors line-clamp-1">
            {product.name}
          </h5>
        </Link>
        <p className="text-muted text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <span className="text-2xl font-bold text-primary">
            ${product.price}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-primary-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            Agregar
          </button>
          <AddToCardButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default Card;
