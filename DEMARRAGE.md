# VRM Production — Guide de démarrage

## Lancer le site en local

### 1. Variables d'environnement

Copie `.env.example` en `.env.local` et remplis les valeurs :

```bash
cp .env.example .env.local
```

| Variable | Où la trouver |
|---|---|
| `STRIPE_SECRET_KEY` | dashboard.stripe.com → Développeurs → Clés API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Même page, clé "publiable" |
| `RESEND_API_KEY` | resend.com → API Keys |
| `CONTACT_EMAIL` | L'adresse qui reçoit les formulaires |

> En mode dev, sans `RESEND_API_KEY`, les formulaires loggent en console (pas d'erreur).

### 2. Installer et lancer

```bash
npm install
npm run dev
# → http://localhost:3000
```

### 3. Tester le paiement Stripe

Utilisez les cartes de test Stripe :
- **Succès** : `4242 4242 4242 4242` · n'importe quelle date future · n'importe quel CVC

---

## Déployer sur Vercel

1. Crée un repo GitHub, pousse le code
2. Connecte le repo sur vercel.com (import)
3. Dans Vercel → Settings → Environment Variables, ajoute les mêmes variables qu'en `.env.local` (avec les clés **live** pour la production)
4. Déploie → c'est en ligne

---

## Structure des fichiers

```
src/
├── app/
│   ├── page.tsx              ← Accueil
│   ├── boutique/page.tsx     ← Boutique avec filtre par catégorie
│   ├── a-propos/page.tsx     ← Histoire & valeurs
│   ├── partenaires/page.tsx  ← Espace B2B + formulaire
│   ├── contact/page.tsx      ← Contact
│   └── api/
│       ├── checkout/route.ts ← Crée la session Stripe Checkout
│       └── contact/route.ts  ← Envoie l'email via Resend
├── components/
│   ├── Header.tsx            ← Navigation + bouton panier
│   ├── Footer.tsx
│   ├── CartDrawer.tsx        ← Panier latéral
│   └── ProductCard.tsx       ← Carte produit avec "Ajouter"
├── context/CartContext.tsx   ← État global du panier (localStorage)
└── lib/
    ├── products.ts           ← Catalogue des 12 produits + prix
    └── stripe.ts             ← Client Stripe
```

## Ajouter / modifier un produit

Edite `src/lib/products.ts`. Chaque produit a :
- `id` — identifiant unique
- `name` / `shortName` — nom complet et court
- `description` — texte affiché sur la carte
- `weight` — "200g", "180g", etc.
- `priceTTC` — prix en **centimes** (ex: 299 = 2,99 €)
- `priceHT` — prix HT en centimes
- `image` — chemin depuis `/public/`
- `category` — "vertes" | "noires" | "farcies" | "denoyautees"
- `featured` — `true` pour afficher en page d'accueil
- `stripePriceId` — (optionnel) ID de prix Stripe si créés dans le dashboard

## Ajouter les prix Stripe (recommandé en production)

Pour éviter que les prix soient modifiables côté client, crée les produits
dans le Stripe Dashboard et renseigne les `stripePriceId` dans `products.ts`.
La route `/api/checkout` les utilisera automatiquement en priorité.
