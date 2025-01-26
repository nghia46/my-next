import { fetchProductById } from "@/lib/api/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = await fetchProductById(Number(id));

  return (
    <div>
      <div className="flex justify-center items-center py-10 bg-gray-900">
        <div className="flex flex-wrap justify-between bg-white p-8 rounded-xl shadow-lg max-w-7xl w-full gap-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h2>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <p className="text-4xl font-semibold text-red-500">
              Price: ${product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
