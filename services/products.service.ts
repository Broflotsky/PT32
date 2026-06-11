import { IProduct } from "@/interfaces/product.interface";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  const response = await fetch(`${APIURL}/products`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  const data: IProduct[] = await response.json();
  return data;
};

export const getProductById = async (idProduct: string) => {
  const allProducts = await getAllProducts();
  const product = allProducts.find(
    (product) => product.id === Number(idProduct),
  );
  if (!product) {
    throw new Error(`No se encontro un producto con este ID`);
  }
  return product;
};
