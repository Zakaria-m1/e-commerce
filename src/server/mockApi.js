const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router({
  products: [
    {
      id: 1,
      name: "Classic White Sneakers",
      sku: "SNK-CWS-001",
      price: 89.99,
      description:
        "Versatile white sneakers perfect for any casual outfit. Made with premium materials for comfort and durability.",
      rating: 4.5,
      reviewCount: 128,
      colors: [
        {
          name: "White",
          code: "#FFFFFF",
          inStock: true,
        },
        {
          name: "Black",
          code: "#000000",
          inStock: true,
        },
        {
          name: "Gray",
          code: "#808080",
          inStock: true,
        },
      ],
      sizes: [
        {
          name: "US 7",
          inStock: true,
        },
        {
          name: "US 8",
          inStock: true,
        },
        {
          name: "US 9",
          inStock: true,
        },
        {
          name: "US 10",
          inStock: true,
        },
        {
          name: "US 11",
          inStock: true,
        },
      ],
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          alt: "Classic White Sneakers - Main View",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
          alt: "Classic White Sneakers - Side View",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
          alt: "Classic White Sneakers - Back View",
        },
      ],
      reviews: [
        {
          id: 1,
          author: "John D.",
          rating: 5,
          date: "2024-02-15",
          comment:
            "Extremely comfortable for all-day wear. True to size and great quality.",
        },
        {
          id: 2,
          author: "Sarah M.",
          rating: 4,
          date: "2024-02-10",
          comment:
            "Love the style and comfort, but took a few days to break in.",
        },
      ],
      shipping: {
        estimatedDelivery: "3-5 business days",
        freeShipping: true,
        express: {
          available: true,
          cost: 15.99,
          estimatedDelivery: "1-2 business days",
        },
      },
    },
    {
      id: 2,
      name: "Premium Leather Backpack",
      sku: "PLB-001",
      price: 129.99,
      description:
        "Handcrafted leather backpack with multiple compartments. Perfect for daily use or weekend trips.",
      rating: 4.8,
      reviewCount: 89,
      colors: [
        {
          name: "Brown",
          code: "#8B4513",
          inStock: true,
        },
        {
          name: "Black",
          code: "#000000",
          inStock: true,
        },
        {
          name: "Tan",
          code: "#D2B48C",
          inStock: true,
        },
      ],
      sizes: [
        {
          name: "One Size",
          inStock: true,
        },
      ],
      images: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
          alt: "Premium Leather Backpack - Main View",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1581605405669-123e1d1ae60d",
          alt: "Premium Leather Backpack - Inside View",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1622560480654-d96214fdc887",
          alt: "Premium Leather Backpack - Back View",
        },
      ],
      reviews: [
        {
          id: 1,
          author: "Mike R.",
          rating: 5,
          date: "2024-02-12",
          comment:
            "Excellent quality and craftsmanship. Perfect for daily use.",
        },
        {
          id: 2,
          author: "Emily S.",
          rating: 4,
          date: "2024-02-08",
          comment: "Beautiful bag, just wish it had more small pockets inside.",
        },
      ],
      shipping: {
        estimatedDelivery: "2-4 business days",
        freeShipping: true,
        express: {
          available: true,
          cost: 12.99,
          estimatedDelivery: "1-2 business days",
        },
      },
    },
  ],
  relatedProducts: [
    {
      id: 3,
      name: "Sport Socks 3-Pack",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Shoe Care Kit",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2",
      rating: 4.6,
    },
  ],
});

// Enable CORS for all routes
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Use default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Use router
server.use("/api", router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
