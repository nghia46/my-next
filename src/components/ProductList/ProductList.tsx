"use client"; // Mark this as a Client Component
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card/Card";
import { fetchProducts } from "@/lib/api/products";

export default function ProductList() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 10,
  }); 
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <div className="container mx-auto px-4 pt-4 pb-4">
      <div className="flex flex-wrap -mx-2">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
            >
              <Card
                id={product.id}
                title={product.title}
                description={product.description}
                imageUrl={product.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
