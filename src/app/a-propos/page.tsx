import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "L'histoire de VRM Production, fabricant artisanal d'olives barquettes à Vergèze dans le Gard. Nos valeurs, notre méthode.",
};

export default function AProposPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest-800 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-olive-300 text-sm font-medium tracking-widest uppercase mb-2">
            Notre histoire
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            À propos de VRM
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl text-forest-800 font-bold mb-6">
              L&apos;olive comme métier, la passion comme moteur
            </h2>
            <p className="text-bark-700 leading-relaxed mb-4">
              VRM Production est un fabricant artisanal d&apos;olives barquettes
              basé à Vergèze, dans le Gard. Nichés au cœur du terroir
              méditerranéen, nous transformons des olives de qualité supérieure
              en créations aromatiques qui subliment les apéritifs, les tables
              et les cuisines.
            </p>
            <p className="text-bark-700 leading-relaxed mb-4">
              Notre atelier produit douze variétés différentes — Provençales,
              Orientales, Catalanes, Basilic-Ail, Noires façon Grèce, Farcies
              aux poivrons… Chaque recette est le fruit d&apos;un savoir-faire
              précis et d&apos;une sélection méticuleuse d&apos;épices régionales
              françaises.
            </p>
            <p className="text-bark-700 leading-relaxed">
              Chez VRM Production, l&apos;artisanat ne s&apos;affiche pas, il
              se goûte. C&apos;est notre engagement depuis le premier jour.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/products/photo-1.jpg"
              alt="Atelier VRM Production"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-cream-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-forest-800 font-bold text-center mb-12">
            Ce qui nous définit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Artisanat authentique",
                body: "Chaque barquette est préparée selon le code des procédures loyales d'olives de bouche et de table. Une référence que nous respectons scrupuleusement.",
                icon: "🫒",
              },
              {
                title: "Zéro additif",
                body: "Aucun colorant, aucun conservateur. Nos olives sont aromatisées à l'unité, au naturel, avec des épices régionales ou françaises.",
                icon: "🌿",
              },
              {
                title: "Terroir du Gard",
                body: "Vergèze, c'est le Gard, c'est la Méditerranée. Un ancrage géographique qui inspire chaque recette et garantit l'authenticité de notre production.",
                icon: "🏔",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm text-center"
              >
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="font-display font-bold text-forest-800 text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-bark-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-40 rounded-xl overflow-hidden">
              <Image
                src="/images/products/photo-2.jpg"
                alt="Production d'olives"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden mt-6">
              <Image
                src="/images/products/photo-3.jpg"
                alt="Olives barquettes artisanales"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden col-span-2">
              <Image
                src="/images/products/photo-4.jpg"
                alt="Sélection d'olives VRM"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-forest-800 font-bold mb-6">
              La qualité comme standard
            </h2>
            <ul className="space-y-4 text-bark-700">
              {[
                "Olives qualité 1er choix, catégorie A",
                "Calibre 10/34 — olive généreuse et charnue",
                "Provenance : Maroc, Espagne, France, Pérou",
                "Aromatisation unitaire façon artisanale au fût",
                "DLC 6 mois à température ambiante",
                "Colis de 30 barquettes · 12 variétés disponibles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <svg
                    className="w-5 h-5 text-forest-500 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-700 text-white py-14 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">
          Goûtez par vous-même
        </h2>
        <p className="text-cream-200 max-w-md mx-auto mb-8">
          12 variétés artisanales disponibles en ligne. Livraison dans toute la France.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/boutique"
            className="bg-olive-400 hover:bg-olive-500 text-forest-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Commander en ligne
          </Link>
          <Link
            href="/contact"
            className="border border-cream-300 text-cream-200 hover:bg-white/10 px-6 py-3 rounded-xl transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
