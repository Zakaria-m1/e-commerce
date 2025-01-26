import React from 'react';

export default function ProductSkeleton() {
    return (
        <div className="min-h-screen animate-pulse bg-white">
            {/* Navigation Skeleton */}
            <nav className="border-b border-gray-200">
                <div className="mx-auto h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="h-full w-32 rounded bg-gray-200" />
                </div>
            </nav>

            {/* Main Content Skeleton */}
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                    {/* Gallery Skeleton */}
                    <div className="space-y-4">
                        <div className="aspect-square rounded-2xl bg-gray-200" />
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square rounded-lg bg-gray-200" />
                            ))}
                        </div>
                    </div>

                    {/* Product Details Skeleton */}
                    <div className="mt-8 space-y-6 lg:mt-0">
                        <div className="space-y-2">
                            <div className="h-8 w-2/3 rounded bg-gray-200" />
                            <div className="h-4 w-1/3 rounded bg-gray-200" />
                        </div>

                        <div className="flex space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-5 w-5 rounded bg-gray-200" />
                            ))}
                        </div>

                        <div className="space-y-2">
                            <div className="h-8 w-1/4 rounded bg-gray-200" />
                            <div className="h-4 w-1/2 rounded bg-gray-200" />
                        </div>

                        <div className="space-y-2">
                            <div className="h-6 w-1/3 rounded bg-gray-200" />
                            <div className="h-20 w-full rounded bg-gray-200" />
                        </div>

                        {/* Color Options Skeleton */}
                        <div className="space-y-2">
                            <div className="h-6 w-1/4 rounded bg-gray-200" />
                            <div className="flex space-x-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-8 w-8 rounded-full bg-gray-200" />
                                ))}
                            </div>
                        </div>

                        {/* Size Options Skeleton */}
                        <div className="space-y-2">
                            <div className="h-6 w-1/4 rounded bg-gray-200" />
                            <div className="grid grid-cols-3 gap-2">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="h-10 rounded bg-gray-200" />
                                ))}
                            </div>
                        </div>

                        {/* Delivery Info Skeleton */}
                        <div className="rounded-lg border border-gray-200 p-4">
                            <div className="space-y-4">
                                <div className="h-6 w-1/3 rounded bg-gray-200" />
                                <div className="space-y-2">
                                    <div className="h-4 w-2/3 rounded bg-gray-200" />
                                    <div className="h-4 w-1/2 rounded bg-gray-200" />
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart Section Skeleton */}
                        <div className="flex space-x-4">
                            <div className="h-12 w-1/3 rounded bg-gray-200" />
                            <div className="h-12 flex-1 rounded bg-gray-200" />
                        </div>
                    </div>
                </div>

                {/* Reviews Section Skeleton */}
                <div className="mt-16 space-y-6">
                    <div className="h-8 w-1/4 rounded bg-gray-200" />
                    <div className="space-y-4">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="space-y-3 border-b border-gray-200 pb-8">
                                <div className="flex justify-between">
                                    <div className="h-6 w-1/4 rounded bg-gray-200" />
                                    <div className="h-6 w-1/6 rounded bg-gray-200" />
                                </div>
                                <div className="h-20 w-full rounded bg-gray-200" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
} 