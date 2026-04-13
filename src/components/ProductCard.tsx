"use client";

import Image from "next/image";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem, toggleCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
    setTimeout(() => toggleCart(), 300);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group">
      {/* Image */}
      <div className="relative h-48 bg-cream-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-semibold text-forest-800 text-base leading-snug">
            {product.shortName}
          </h3>
          <span className="text-xs text-bark-500 bg-cream-100 px-2 py-0.5 rounded-full shrink-0">
            {product.weight}
          </span>
        </div>

        <p className="text-sm text-bark-600 leading-relaxed flex-1 mt-1 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-cream-200">
          <div>
            <p className="text-lg font-bold text-forest-700">
              {formatPrice(product.priceTTC)}
            </p>
            <p className="text-xs text-bark-400">
              {formatPrice(product.priceHT)} HT
            </p>
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              added
                ? "bg-forest-500 text-white scale-95"
                : "bg-forest-600 hover:bg-forest-700 text-white"
            }`}
          >
            {added ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Ajouté !
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Ajouter
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
