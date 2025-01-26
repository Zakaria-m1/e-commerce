import React from 'react';

interface Color {
  name: string;
  code: string;
  inStock: boolean;
}

interface ColorSelectorProps {
  colors: Color[];
  selectedColor: string | null;
  onSelectColor: (color: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onSelectColor,
}: ColorSelectorProps) {
  return (
    <div>
      <h2 className="font-semibold text-gray-900">Select Color</h2>
      <div className="mt-2 flex space-x-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => color.inStock && onSelectColor(color.name)}
            disabled={!color.inStock}
            className={`group relative h-8 w-8 rounded-full border-2 ${
              selectedColor === color.name
                ? 'border-blue-500'
                : 'border-transparent hover:border-gray-300'
            } ${!color.inStock ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <span
              className="absolute inset-0.5 rounded-full"
              style={{ backgroundColor: color.code }}
            />
            <span className="sr-only">{color.name}</span>
            {!color.inStock && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-0.5 w-full rotate-45 bg-gray-500" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}