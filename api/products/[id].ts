import type { VercelRequest, VercelResponse } from "@vercel/node";
import { products } from "../_data/products";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("Request received:", {
    method: req.method,
    url: req.url,
    query: req.query,
    headers: req.headers,
  });

  // Enable CORS
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const { id } = req.query;
    console.log("Looking for product with ID:", id);

    const product = products.find((p) => p.id === Number(id));
    console.log("Product found:", product ? "yes" : "no");

    if (!product) {
      console.log("Product not found for ID:", id);
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Sending product data");
    return res.status(200).json(product);
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
