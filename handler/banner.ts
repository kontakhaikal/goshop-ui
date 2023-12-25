export type Banner = {
  id: string;
  image: string;
};

export async function getBanners(): Promise<Banner[]> {
  return [
    {
      id: "1",
      image: "/banner/banner1.png",
    },
    {
      id: "2",
      image: "/banner/banner2.png",
    },
    {
      id: "3",
      image: "/banner/banner3.png",
    },
  ];
}
