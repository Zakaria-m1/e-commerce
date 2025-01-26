export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  colors: Array<{ name: string; inStock: boolean }>;
  sizes: Array<{ name: string; inStock: boolean }>;
  images: Array<{ id: number; url: string; alt: string }>;
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
  }>;
  shipping: {
    estimatedDelivery: string;
    freeShipping: boolean;
    express: boolean;
  };
  relatedProducts: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
  }>;
}

export const products: Product[] = [
  {
    id: 1,
    sku: "SNK-CWS-001",
    name: "Classic White Sneakers",
    description:
      "Premium white sneakers with a minimalist design, perfect for any casual outfit. Made with genuine leather and featuring our signature comfort insole.",
    price: 89.99,
    rating: 4.5,
    reviewCount: 128,
    colors: [
      { name: "White", inStock: true },
      { name: "Black", inStock: true },
      { name: "Gray", inStock: false },
    ],
    sizes: [
      { name: "US 7", inStock: true },
      { name: "US 8", inStock: true },
      { name: "US 9", inStock: true },
      { name: "US 10", inStock: false },
      { name: "US 11", inStock: true },
      { name: "US 12", inStock: true },
    ],
    images: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        alt: "Classic White Sneakers - Front View",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
        alt: "Classic White Sneakers - Side View",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        alt: "Classic White Sneakers - Back View",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
        alt: "Classic White Sneakers - Top View",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John D.",
        rating: 5,
        date: "2024-02-15",
        comment:
          "Best sneakers I've ever owned. Super comfortable and goes with everything!",
      },
      {
        id: 2,
        author: "Sarah M.",
        rating: 4,
        date: "2024-02-10",
        comment:
          "Great quality and style. Runs slightly large but still very happy with the purchase.",
      },
    ],
    shipping: {
      estimatedDelivery: "3-5 business days",
      freeShipping: true,
      express: true,
    },
    relatedProducts: [
      {
        id: 2,
        name: "Running Performance Shoes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id: 3,
        name: "Casual Canvas Sneakers",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      },
      {
        id: 4,
        name: "Athletic Training Shoes",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      },
    ],
  },
];
