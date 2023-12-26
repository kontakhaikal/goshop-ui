export type Product = {
  id: string;
  name: string;
  picture: string;
  price: number;
  stock: number;
};

export async function getFeaturedProducts(): Promise<Product[]> {
  return [
    {
      id: "1",
      name: 'Lenovo Legion 5i 15.6" Laptop, Intel Core i5-10500H',
      picture: "/product/p1.png",
      price: 10_000,
      stock: 100,
    },
    {
      id: "2",
      name: "Apple AirPods Pro with MagSafe Charging Case",
      picture: "/product/p2.png",
      price: 10_000,
      stock: 100,
    },
    {
      id: "3",
      name: "Razer Power Up Gaming Bundle V2 - Cynosa Lite, Gigantus",
      picture: "/product/p3.png",
      price: 10_000,
      stock: 100,
    },
    {
      id: "4",
      name: "ASUS ROG Strix GL10 Gaming Desktop, AMD Ryzen 5-3600X",
      picture: "/product/p4.png",
      price: 10_000,
      stock: 100,
    },
    {
      id: "5",
      name: "Apple AirPods Pro with MagSafe Charging Case",
      picture: "/product/p5.png",
      price: 10_000,
      stock: 100,
    },
    {
      id: "6",
      name: "Apple AirPods Pro with MagSafe Charging Case",
      picture: "/product/p6.png",
      price: 10_000,
      stock: 100,
    },
  ];
}
