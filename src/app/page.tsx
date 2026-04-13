import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/lib/products";

const qualities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Qualité 1er choix",
    text: "Catégorie A, calibre 10/34. Sélection rigoureuse pour une olive généreuse et charnue.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "100% naturel",
    text: "Sans colorants, sans conservateurs. Aromatisées à l'unité avec des épices régionales françaises.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Fabrication artisanale",
    text: "Code des procédures loyales d'olives de bouche et de table. Fait à Vergèze, dans le Gard.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "12 variétés",
    text: "Provençales, Orientales, Catalanes, Basilic, Noires, Farcies… Une gamme riche pour tous les goûts.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-olives.jpg"
          alt="Olives méditerranéennes VRM Production"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-800/60 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-lg">
            <p className="text-olive-300 text-sm font-medium tracking-widest uppercase mb-4">
              Vergèze · Gard · Artisan depuis 2014
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
              L&apos;olive comme
              <br />
              <span className="text-olive-300">on la fait ici</span>
            </h1>
            <p className="text-cream-200 text-lg leading-relaxed mb-8">
              Fabriquées à la main à Vergèze, nos olives barquettes sont
              aromatisées avec des épices régionales françaises. Sans colorants,
              sans conservateurs. Juste du goût et du terroir.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/boutique"
                className="bg-forest-500 hover:bg-forest-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm inline-flex items-center gap-2"
              >
                Découvrir la boutique
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/a-propos"
                className="border border-cream-300 text-cream-200 hover:bg-white/10 font-medium px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Notre histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUALITÉS ─── */}
      <section className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((q) => (
              <div key={q.title} className="text-center p-5">
                <div className="w-14 h-14 bg-forest-100 text-forest-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {q.icon}
                </div>
                <h3 className="font-display font-semibold text-forest-800 mb-2 text-base">
                  {q.title}
                </h3>
                <p className="text-sm text-bark-600 leading-relaxed">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUITS VEDETTES ─── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-forest-500 text-sm font-medium tracking-widest uppercase mb-2">
            Nos spécialités
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-900 font-bold">
            La sélection du moment
          </h2>
          <p className="text-bark-600 mt-3 max-w-md mx-auto">
            Nos recettes phares, appréciées sur les tables du Gard et au-delà.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 bg-olive-600 hover:bg-olive-700 text-white font-medium px-8 py-3 rounded-xl transition-colors"
          >
            Voir toute la gamme — 12 variétés
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── AMBIANCE / BANNIÈRE ─── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/ambiance-olives.jpg"
          alt="Olives du terroir"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-6">
            Une fabrication respectueuse du terroir
          </h2>
          <p className="text-cream-200 text-lg leading-relaxed mb-8">
            Chez VRM Production, chaque barquette est préparée dans le respect du
            code des procédures loyales d&apos;olives de bouche et de table.
            Nos épices viennent de France. Notre exigence, du Gard.
          </p>
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 border-2 border-olive-300 text-olive-300 hover:bg-olive-300 hover:text-forest-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            En savoir plus sur VRM
          </Link>
        </div>
      </section>

      {/* ─── B2B CTA ─── */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-forest-900 font-bold mb-2">
              Vous êtes professionnel ?
            </h2>
            <p className="text-bark-600">
              Supermarchés, épiceries, restaurateurs : nous proposons des tarifs
              grossiste franco de port à partir de 8 colis.
            </p>
          </div>
          <Link
            href="/partenaires"
            className="shrink-0 bg-forest-700 hover:bg-forest-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Espace partenaires B2B
          </Link>
        </div>
      </section>
    </>
  );
}
