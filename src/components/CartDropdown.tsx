import React from 'react';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDropdown() {
    const { state, removeItem, updateQuantity, toggleCart } = useCart();
    const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (!state.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleCart} />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="w-screen max-w-md transform transition-transform duration-500 ease-in-out">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                <div className="ml-3 flex h-7 items-center">
                                    <button
                                        type="button"
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                        onClick={toggleCart}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close panel</span>
                                        <X className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    {state.items.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-12">
                                            <ShoppingBag className="h-12 w-12 text-gray-400" />
                                            <p className="mt-4 text-sm text-gray-500">Your cart is empty</p>
                                        </div>
                                    ) : (
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {state.items.map((item) => (
                                                <li key={`${item.id}-${item.color}-${item.size}`} className="flex py-6">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>{item.name}</h3>
                                                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500">
                                                                {item.color} / {item.size}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <div className="flex items-center space-x-2">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                                    className="rounded-md p-1 hover:bg-gray-100"
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                </button>
                                                                <span className="text-gray-500">Qty {item.quantity}</span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                    className="rounded-md p-1 hover:bg-gray-100"
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                </button>
                                                            </div>

                                                            <div className="flex">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeItem(item.id)}
                                                                    className="font-medium text-blue-600 hover:text-blue-500"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        {state.items.length > 0 && (
                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>${total.toFixed(2)}</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                    >
                                        Checkout
                                    </a>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        or{' '}
                                        <button
                                            type="button"
                                            className="font-medium text-blue-600 hover:text-blue-500"
                                            onClick={toggleCart}
                                        >
                                            Continue Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 