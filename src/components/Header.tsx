"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À propos" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems, toggleCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-olive-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="VRM Production"
              width={52}
              height={40}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-xs text-forest-600 font-medium leading-tight">
                Production artisanale
              </p>
              <p className="text-xs text-bark-600 leading-tight">Vergèze · Gard</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-forest-700 bg-forest-50 font-semibold"
                    : "text-bark-700 hover:text-forest-700 hover:bg-olive-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart button + mobile menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleCart}
              aria-label={`Panier — ${totalItems} article${totalItems !== 1 ? "s" : ""}`}
              className="relative p-2 rounded-full text-forest-700 hover:bg-forest-50 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-forest-600 text-white text-xs rounded-full flex items-center justify-center px-1 font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-bark-700 hover:bg-olive-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-olive-100 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-forest-700 bg-forest-50 font-semibold"
                    : "text-bark-700 hover:text-forest-700 hover:bg-olive-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
