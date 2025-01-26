import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
      <div className="mt-6 space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5"
                      fill={star <= review.rating ? 'currentColor' : 'none'}
                      color={star <= review.rating ? '#FCD34D' : '#E5E7EB'}
                    />
                  ))}
                </div>
                <p className="font-medium text-gray-900">{review.author}</p>
              </div>
              <time className="text-sm text-gray-500">{review.date}</time>
            </div>
            <p className="mt-4 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}