import React from 'react';
import { useProduct, useRelatedProducts } from '../hooks/useProduct';

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function RelatedProducts() {
  const { data: product } = useProduct(1); // Get the current product
  const { data: relatedProducts, isLoading } = useRelatedProducts(product?.id || 1);

  if (isLoading || !relatedProducts) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product: RelatedProduct) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
            </div>
            <button className="absolute bottom-4 right-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 hover:bg-blue-700 group-hover:opacity-100">
              Quick view
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}