import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import Reviews from './components/Reviews';
import ProductSkeleton from './components/ProductSkeleton';
import CartDropdown from './components/CartDropdown';
import { CartProvider, useCart } from './context/CartContext';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useProduct } from './hooks/useProduct';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Oops! Something went wrong</h2>
          <p className="mb-6 text-gray-600">We're having trouble loading this page. Please try again later.</p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function Navigation() {
  const { toggleCart, state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button className="rounded-lg p-2 hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="text-xl font-bold text-gray-900">SNEAKERS</div>
          </div>
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-600 transition-colors hover:text-gray-900">
                Men
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-gray-900">
                Women
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-gray-900">
                Kids
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-gray-900">
                Sale
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
              <Search className="h-6 w-6" />
            </button>
            <button
              className="relative rounded-lg p-2 transition-colors hover:bg-gray-100"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ProductPage() {
  const { data: product, isLoading, error } = useProduct(1);

  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Failed to load product</h2>
        <p className="mb-6 text-gray-600">We couldn't load the product information. Please try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CartDropdown />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <ProductGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
        <Reviews reviews={product.reviews} />
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <RelatedProducts />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Kids
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Help</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">About</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600">© 2024 SNEAKERS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <ProductPage />
        </CartProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;