import { useQuery } from "react-query";
import type { Product } from "../../api/_data/products";

async function fetchProduct(id: number): Promise<Product> {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    const error = await response.text();
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch product");
  }
  return response.json();
}

async function fetchRelatedProducts(
  id: number
): Promise<Product["relatedProducts"]> {
  const response = await fetch(`/api/products/${id}/related`);
  if (!response.ok) {
    const error = await response.text();
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch related products");
  }
  return response.json();
}

async function fetchReviews(id: number): Promise<Product["reviews"]> {
  const response = await fetch(`/api/products/${id}/reviews`);
  if (!response.ok) {
    const error = await response.text();
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch reviews");
  }
  return response.json();
}

export function useProduct(id: number) {
  return useQuery(["product", id], () => fetchProduct(id), {
    retry: 1,
    onError: (error) => {
      console.error("Query error:", error);
    },
  });
}

export function useRelatedProducts(id: number) {
  return useQuery(["relatedProducts", id], () => fetchRelatedProducts(id), {
    retry: 1,
    onError: (error) => {
      console.error("Query error:", error);
    },
  });
}

export function useReviews(id: number) {
  return useQuery(["reviews", id], () => fetchReviews(id), {
    retry: 1,
    onError: (error) => {
      console.error("Query error:", error);
    },
  });
}

export type { Product };
