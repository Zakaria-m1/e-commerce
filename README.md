# Modern E-Commerce Product Page

A fully responsive, feature-rich e-commerce product page built with React, TypeScript, and TailwindCSS. This project demonstrates modern web development practices and UI/UX patterns commonly used in production e-commerce applications.

[Project Live Demo](https://e-commerce-iota-lime.vercel.app/)

## Features

- 🖼️ **Advanced Image Gallery**

  - Image zoom on hover
  - Thumbnail navigation
  - Responsive design

- 🛒 **Shopping Cart**

  - Add/remove items
  - Quantity adjustment
  - Persistent cart state
  - Animated cart dropdown

- 🎨 **Product Variants**

  - Color selection
  - Size selection
  - Stock status
  - Dynamic pricing

- 💫 **Modern UX**

  - Loading skeletons
  - Error boundaries
  - Smooth animations
  - Toast notifications

- 📱 **Responsive Design**
  - Mobile-first approach
  - Tablet & desktop layouts
  - Touch-friendly interactions

## Tech Stack

- **Frontend**

  - React
  - TypeScript
  - TailwindCSS
  - React Query
  - Lucide Icons

- **Development**
  - Vite
  - ESLint
  - Prettier
  - json-server (mock API)

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn


## Project Structure

```
src/
├── components/        # React components
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── lib/             # Utility functions
├── types/           # TypeScript type definitions
└── App.tsx          # Root component
```

## API Routes

The mock API server provides the following endpoints:

- `GET /api/products/:id` - Get product details
- `GET /api/products/:id/related` - Get related products
- `GET /api/products/:id/reviews` - Get product reviews

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by modern e-commerce platforms
- Icons provided by [Lucide](https://lucide.dev)
- Built with [React](https://reactjs.org) and [TailwindCSS](https://tailwindcss.com)
