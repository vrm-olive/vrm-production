import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VRM Production — Olives artisanales du terroir",
    template: "%s | VRM Production",
  },
  description:
    "Fabricant artisanal d'olives barquettes basé à Vergèze (Gard). 12 variétés sans colorants ni conservateurs, avec des épices régionales françaises.",
  keywords: [
    "olives artisanales",
    "olives barquettes",
    "VRM Production",
    "Vergèze",
    "Gard",
    "olives provençales",
    "terroir méditerranéen",
  ],
  metadataBase: new URL("https://vrmproduction.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://vrmproduction.com",
    siteName: "VRM Production",
    title: "VRM Production — Olives artisanales du terroir",
    description:
      "12 variétés d'olives barquettes artisanales, sans colorants ni conservateurs. Fabrication française à Vergèze, Gard.",
    images: [{ url: "/images/hero-olives.jpg", width: 1920, height: 1080 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
