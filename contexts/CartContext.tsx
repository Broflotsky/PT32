//! 1- Almacenar los productos a comprar. ESTADO
//! 2- Agregar productos al carro de compras.  FUNCION
//! 3- Eliminar un producto del carro. FUNCION
//! 4- Limpiar completamente el carro de compras. FUNCION
//! 5- Retornar los IDS de los productos de mi carrito. FUNCION      [1,4,5,6]
// 6- Total del precio del carro de compras. FUNCION
"use client";

import { IProduct } from "@/interfaces/product.interface";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface CartContextProps {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (idProduct: number) => void;
  clearCart: () => void;
  getIdItems: () => number[];
  //   getTotalCartPrice: () => number;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getIdItems: () => [],
  //   getTotalCartPrice: () => 0,
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { dataUser } = useAuth();

  const [cartItems, setCartItems] = useState<IProduct[] | []>(() => {
    //!PREVENCION A UN SSR
    if (typeof window === "undefined") return [];
    const cartdata = localStorage.getItem("cart");
    return cartdata ? JSON.parse(cartdata) : [];
  });

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartItems]);

  const addToCart = (product: IProduct) => {
    if (!dataUser) {
      alert("Debes iniciar sesion");
      return;
    }
    const productDuplicated = cartItems.some(
      (productItem) => product.id === productItem.id,
    );
    if (productDuplicated) {
      alert("Este producto no puede agregarse mas de una unidad.");
      return;
    }
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (idProduct: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== idProduct),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const getIdItems = () => {
    return cartItems.map((item) => item.id);
  };
  //   const getTotalCartPrice = () => {};

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, clearCart, getIdItems, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
