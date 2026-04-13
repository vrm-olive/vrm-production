"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/lib/products";

type Category = "all" | "vertes" | "noires" | "farcies" | "denoyautees";

const categoryLabels: Record<Category, string> = {
  all: "Toutes",
  vertes: "Vertes",
  noires: "Noires",
  farcies: "Farcies",
  denoyautees: "Dénoyautées",
};

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered: Product[] =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page header */}
      <section className="bg-forest-800 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-olive-300 text-sm font-medium tracking-widest uppercase mb-2">
            12 variétés artisanales
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Notre boutique
          </h1>
          <p className="text-cream-300 max-w-xl leading-relaxed">
            Olives qualité 1er choix, catégorie A. Aromatisées à l&apos;unité avec
            des épices régionales françaises. DLC 6 mois à température ambiante.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-20 bg-cream-50/95 backdrop-blur border-b border-olive-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-forest-700 text-white"
                  : "bg-cream-200 text-bark-700 hover:bg-cream-300"
              }`}
            >
              {categoryLabels[cat]}
              {cat !== "all" && (
                <span className="ml-1 text-xs opacity-70">
                  ({products.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-sm text-bark-500 mb-6">
          {filtered.length} produit{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all" && ` · ${categoryLabels[activeCategory]}`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Info livraison */}
      <section className="bg-cream-100 border-t border-olive-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-center">
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <p className="font-medium text-forest-800">Colis de 30 barquettes</p>
            <p className="text-bark-500">Colisage standard pour particuliers et pros</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            <p className="font-medium text-forest-800">Franco de port</p>
            <p className="text-bark-500">Dès 8 colis commandés</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="font-medium text-forest-800">Paiement sécurisé</p>
            <p className="text-bark-500">Via Stripe — CB, Apple Pay, Google Pay</p>
          </div>
        </div>
      </section>
    </>
  );
}
