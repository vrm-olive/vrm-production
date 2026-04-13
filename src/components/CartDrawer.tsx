"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import { useState } from "react";

export default function CartDrawer() {
  const { state, removeItem, updateQty, closeCart, totalTTC } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (state.items.length === 0) return;
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: state.items.map((i) => ({
          productId: i.product.id,
          quantity: i.quantity,
        })),
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Erreur lors de la redirection vers le paiement. Veuillez réessayer.");
      setLoading(false);
    }
  }

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-cream-50 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-olive-200">
          <h2 className="font-display text-xl font-semibold text-forest-800">
            Mon panier
          </h2>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-full hover:bg-olive-100 text-bark-600 transition-colors"
            aria-label="Fermer le panier"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {state.items.length === 0 ? (
            <div className="text-center py-12 text-bark-500">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-sm">Votre panier est vide</p>
            </div>
          ) : (
            state.items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-3 items-start bg-white rounded-xl p-3 shadow-sm">
                <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-cream-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-forest-800 leading-snug line-clamp-2">
                    {product.shortName}
                  </p>
                  <p className="text-xs text-bark-500 mt-0.5">{product.weight}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-olive-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQty(product.id, quantity - 1)}
                        className="px-2 py-1 text-forest-700 hover:bg-olive-50 text-sm font-bold transition-colors"
                      >
                        −
                      </button>
                      <span className="px-2 text-sm font-medium min-w-[24px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQty(product.id, quantity + 1)}
                        className="px-2 py-1 text-forest-700 hover:bg-olive-50 text-sm font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-xs text-bark-400 hover:text-red-500 transition-colors ml-auto"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
                <p className="text-sm font-semibold text-forest-800 shrink-0">
                  {formatPrice(product.priceTTC * quantity)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-olive-200 px-5 py-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-bark-600">Total TTC</span>
              <span className="text-xl font-display font-bold text-forest-800">
                {formatPrice(totalTTC)}
              </span>
            </div>
            <p className="text-xs text-bark-400">Frais de port calculés à la commande</p>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-forest-600 hover:bg-forest-700 disabled:opacity-60 text-white font-medium py-3 rounded-xl transition-colors text-sm"
            >
              {loading ? "Redirection…" : "Passer commande"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
