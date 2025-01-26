import React from 'react';
import { Truck, Clock } from 'lucide-react';

interface DeliveryInfoProps {
  shipping: {
    estimatedDelivery: string;
    freeShipping: boolean;
    express: {
      available: boolean;
      cost: number;
      estimatedDelivery: string;
    };
  };
}

export default function DeliveryInfo({ shipping }: DeliveryInfoProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900">Delivery Information</h3>
      <div className="mt-4 space-y-4">
        <div className="flex items-center space-x-3">
          <Truck className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium text-gray-900">
              {shipping.freeShipping ? 'Free Standard Shipping' : 'Standard Shipping'}
            </p>
            <p className="text-sm text-gray-600">
              Estimated delivery: {shipping.estimatedDelivery}
            </p>
          </div>
        </div>
        {shipping.express.available && (
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">Express Shipping Available</p>
              <p className="text-sm text-gray-600">
                ${shipping.express.cost.toFixed(2)} - Get it in{' '}
                {shipping.express.estimatedDelivery}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}