import axios from "axios";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchProductById(id: number) {
  try {
    const response = await axios.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
