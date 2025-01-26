import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../hooks/useProduct';
import { useCart } from '../context/CartContext';
import ColorSelector from './ColorSelector';
import DeliveryInfo from './DeliveryInfo';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { addItem, toggleCart } = useCart();

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    if (!selectedSize || !selectedColor) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      color: selectedColor,
      size: selectedSize,
      image: product.images[0].url,
    });

    // Show cart dropdown
    toggleCart();

    // Reset selections
    setQuantity(1);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  const hasDiscount = product.price < 100;
  const originalPrice = hasDiscount ? product.price * 1.2 : null;

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="mt-2 text-sm text-gray-500">SKU: {product.sku}</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-5 w-5"
              fill={star <= product.rating ? 'currentColor' : 'none'}
              color={star <= product.rating ? '#FCD34D' : '#E5E7EB'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          {hasDiscount && (
            <>
              <p className="text-lg text-gray-500 line-through">${originalPrice?.toFixed(2)}</p>
              <span className="rounded-md bg-red-100 px-2 py-1 text-sm font-medium text-red-700">
                Save {Math.round((1 - product.price / (originalPrice || 0)) * 100)}%
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-green-600">In stock and ready to ship</p>
      </div>

      <div>
        <h2 className="font-semibold text-gray-900">Description</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
      </div>

      <ColorSelector
        colors={product.colors}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />

      <div>
        <h2 className="font-semibold text-gray-900">Select Size</h2>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.name}
              onClick={() => setSelectedSize(size.name)}
              disabled={!size.inStock}
              className={`rounded-md border px-4 py-2 text-sm transition-all
                ${selectedSize === size.name
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : size.inStock
                    ? 'border-gray-200 hover:border-gray-300'
                    : 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400'
                }
              `}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      <DeliveryInfo shipping={product.shipping} />

      <div className="flex items-center space-x-4">
        <div className="flex items-center rounded-lg border border-gray-200">
          <button
            onClick={decreaseQuantity}
            className="p-2 transition-colors hover:bg-gray-50"
            disabled={quantity <= 1}
          >
            <Minus className="h-5 w-5 text-gray-600" />
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button onClick={increaseQuantity} className="p-2 transition-colors hover:bg-gray-50">
            <Plus className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <button
          onClick={addToCart}
          className="group flex flex-1 items-center justify-center space-x-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!selectedSize || !selectedColor}
        >
          <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}