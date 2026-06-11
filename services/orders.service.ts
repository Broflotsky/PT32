export const createOrder = async (token: string, products: number[]) => {
  try {
    const res = await fetch("http://localhost:3005/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    const orders = await res.json();
    return orders;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getAllOrders = async (token: string) => {
  const res = await fetch("http://localhost:3005/users/orders", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });
  const orders = await res.json();
  return orders;
};
