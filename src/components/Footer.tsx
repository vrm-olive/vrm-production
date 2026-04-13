import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-cream-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="VRM Production"
                width={48}
                height={36}
                className="object-contain opacity-90 rounded"
              />
              <div>
                <p className="font-display font-semibold text-cream-100 text-lg leading-tight">
                  VRM Production
                </p>
                <p className="text-xs text-cream-300">Artisan oléiculteur</p>
              </div>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed">
              Fabricant artisanal d&apos;olives barquettes. Sans colorants ni
              conservateurs, avec des épices régionales françaises.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-cream-100 mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-cream-300">
              {[
                { href: "/boutique", label: "Boutique" },
                { href: "/a-propos", label: "À propos" },
                { href: "/partenaires", label: "Partenaires B2B" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-cream-100 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-cream-100 mb-3 text-sm uppercase tracking-wider">
              Nous trouver
            </h3>
            <address className="not-italic text-sm text-cream-300 space-y-2">
              <p>VRM Production</p>
              <p>Vergèze, Gard (30)</p>
              <p>
                <a
                  href="mailto:contact@vrmproduction.com"
                  className="hover:text-cream-100 transition-colors"
                >
                  contact@vrmproduction.com
                </a>
              </p>
              <p>
                <a
                  href="https://vrmproduction.com"
                  className="hover:text-cream-100 transition-colors"
                >
                  vrmproduction.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-10 pt-6 text-center text-xs text-cream-400">
          <p>
            © {new Date().getFullYear()} VRM Production — Tous droits réservés
          </p>
          <p className="mt-1">
            Olives qualité 1er choix, catégorie A · DLC 6 mois à température ambiante
          </p>
        </div>
      </div>
    </footer>
  );
}
