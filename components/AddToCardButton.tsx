"use client";

import { useCart } from "@/contexts/CartContext";
import { IProduct } from "@/interfaces/product.interface";

interface AddToCartProps {
  product: IProduct;
}

function AddToCardButton({ product }: AddToCartProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
      onClick={() => addToCart(product)}
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
  );
}

export default AddToCardButton;
