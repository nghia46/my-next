import axios from "axios";
import { Product } from "../models/product";

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

export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await axios.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as Product;
  }
}
