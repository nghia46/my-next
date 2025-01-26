// app/products/page.js (or app/products/page.tsx if using TypeScript)
import Card from "@/components/Card/Card";
import { fetchProducts } from "@/lib/api/products";

export const revalidate = 15; // Revalidate every 15 seconds (using ISR-like behavior)

export default async function ProductPage() {
  // Fetch data from the API on the server
  const products = await fetchProducts();

  return (
    <div className="container mx-auto px-4 pt-4 pb-4">
      <div className="flex flex-wrap -mx-2">
        {products.map((product) => (
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
