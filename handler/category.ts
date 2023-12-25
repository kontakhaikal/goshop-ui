export type Category = {
  id: string;
  name: string;
};

export async function getCategories(): Promise<Category[]> {
  return [
    {
      id: "1",
      name: "Phones",
    },
    {
      id: "2",
      name: "Laptops",
    },
  ];
}
