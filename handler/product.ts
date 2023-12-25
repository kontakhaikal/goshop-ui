export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: "1",
      name: "",
      price: 10_000,
      stock: 100,
    },
  ];
}
