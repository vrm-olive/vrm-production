export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  weight: string;
  priceHT: number;      // prix HT en centimes
  priceTTC: number;     // prix TTC (PVM) en centimes
  ean: string;
  image: string;
  category: "vertes" | "noires" | "farcies" | "denoyautees";
  featured?: boolean;
  // Stripe price ID (à renseigner après création dans Stripe Dashboard)
  stripePriceId?: string;
}

export const products: Product[] = [
  {
    id: "provencales",
    name: "Olives Vertes Provençales",
    shortName: "Provençales",
    description:
      "Nos olives vertes marinées à la provençale : herbes de Provence, thym, laurier. La recette emblématique de notre atelier, typique du terroir méditerranéen.",
    weight: "200g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460372",
    image: "/images/products/provencales.png",
    category: "vertes",
    featured: true,
  },
  {
    id: "persil-ail",
    name: "Olives Vertes Persil-Ail",
    shortName: "Persil-Ail",
    description:
      "Olives vertes fraîches relevées d'un mélange de persil frais et d'ail du terroir. Une association classique pleine de caractère.",
    weight: "200g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460389",
    image: "/images/products/persil-ail.png",
    category: "vertes",
    featured: true,
  },
  {
    id: "provencail",
    name: "Olives Vertes Provenç'Ail",
    shortName: "Provenç'Ail",
    description:
      "Le mariage de nos herbes provençales avec une touche généreuse d'ail. Un parfum irrésistible qui rappelle les marchés du Sud.",
    weight: "200g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460396",
    image: "/images/products/provencail.png",
    category: "vertes",
    featured: true,
  },
  {
    id: "basilic",
    name: "Olives Vertes Basilic-Ail",
    shortName: "Basilic-Ail",
    description:
      "Olives vertes marinées au basilic frais et à l'ail. Une saveur estivale qui évoque la Méditerranée à chaque dégustation.",
    weight: "200g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460259",
    image: "/images/products/basilic.png",
    category: "vertes",
  },
  {
    id: "echalotes-ail",
    name: "Olives Vertes Échalotes-Ail",
    shortName: "Échalotes-Ail",
    description:
      "Une marinade originale mêlant la douceur des échalotes et la puissance de l'ail. Pour les amateurs de saveurs affirmées.",
    weight: "200g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460174",
    image: "/images/products/provencales.png",
    category: "vertes",
  },
  {
    id: "orientales",
    name: "Olives Vertes Orientales",
    shortName: "Orientales",
    description:
      "Un voyage de saveurs : épices orientales, cumin, coriandre. Une recette dépaysante pour varier les plaisirs.",
    weight: "200g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460426",
    image: "/images/products/orientales.png",
    category: "vertes",
    featured: true,
  },
  {
    id: "catalane",
    name: "Olives Vertes Catalanes",
    shortName: "Catalanes",
    description:
      "Inspirée de la tradition catalane, cette recette marie anchois, poivrons et herbes aromatiques pour un résultat caractériel.",
    weight: "200g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460433",
    image: "/images/products/catalane.png",
    category: "vertes",
    featured: true,
  },
  {
    id: "denoyautees-provencales",
    name: "Olives Vertes Dénoyautées Provençales",
    shortName: "Dénoyautées Prov.",
    description:
      "Nos olives provençales en version dénoyautée — idéales en cuisine, pour garnir pizzas, tartes et salades composées.",
    weight: "170g",
    priceHT: 195,
    priceTTC: 299,
    ean: "3760204460082",
    image: "/images/products/provencales.png",
    category: "denoyautees",
  },
  {
    id: "noires-provencales",
    name: "Olives Noires Provençales",
    shortName: "Noires Provençales",
    description:
      "Olives noires marinées aux herbes de Provence. Généreuses et fondantes, elles accompagnent apéritifs et plats mijotés.",
    weight: "200g",
    priceHT: 210,
    priceTTC: 329,
    ean: "3760204460365",
    image: "/images/products/noires.png",
    category: "noires",
    featured: true,
  },
  {
    id: "noires-facon-grece",
    name: "Olives Noires Façon Grèce",
    shortName: "Noires Façon Grèce",
    description:
      "À la façon grecque : fermes, légèrement amères, marinées à l'huile d'olive et au thym. Un classique indétrônable.",
    weight: "200g",
    priceHT: 210,
    priceTTC: 329,
    ean: "3760204460044",
    image: "/images/products/noires.png",
    category: "noires",
  },
  {
    id: "farcies-poivrons",
    name: "Olives Vertes Farcies Pâte de Poivrons",
    shortName: "Farcies Poivrons",
    description:
      "Olives vertes farcies d'une pâte de poivrons douce et parfumée. La gourmandise qui fait l'unanimité à l'apéritif.",
    weight: "180g",
    priceHT: 265,
    priceTTC: 399,
    ean: "3760204460068",
    image: "/images/products/provencales.png",
    category: "farcies",
  },
  {
    id: "farcies-poivrons-provencales",
    name: "Olives Farcies Poivrons Provençales",
    shortName: "Farcies Prov.",
    description:
      "L'alliance de notre farce poivron avec les arômes provençaux. Une recette signature alliant gourmandise et terroir.",
    weight: "180g",
    priceHT: 265,
    priceTTC: 399,
    ean: "3760204460730",
    image: "/images/products/provencales.png",
    category: "farcies",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return (cents / 100).toFixed(2).replace(".", ",") + "\u00a0€";
}
