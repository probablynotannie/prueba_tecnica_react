const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async () => {
  await delay(1000);

  const res = await fetch("https://dummyjson.com/products?limit=0");
  const data = await res.json();

  return data.products;
};