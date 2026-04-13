import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { getProductById } from "@/lib/products";

interface CheckoutItem {
  productId: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: CheckoutItem[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Panier vide" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const lineItems = items
      .map(({ productId, quantity }) => {
        const product = getProductById(productId);
        if (!product) return null;

        // If a Stripe price ID is configured, use it directly
        if (product.stripePriceId) {
          return {
            price: product.stripePriceId,
            quantity,
          };
        }

        // Otherwise create an inline price (unit_amount in centimes)
        return {
          price_data: {
            currency: "eur",
            unit_amount: product.priceTTC,
            product_data: {
              name: product.name,
              description: `${product.weight} — Artisanal, sans conservateurs`,
              images: [`${origin}${product.image}`],
              metadata: { ean: product.ean },
            },
          },
          quantity,
        };
      })
      .filter(Boolean);

    if (lineItems.length === 0) {
      return NextResponse.json({ error: "Produits introuvables" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      locale: "fr",
      line_items: lineItems as Stripe.Checkout.SessionCreateParams.LineItem[],
      shipping_address_collection: {
        allowed_countries: ["FR", "BE", "CH", "LU"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 690, currency: "eur" },
            display_name: "Livraison standard",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 5 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "eur" },
            display_name: "Franco de port (≥ 8 colis)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 5 },
            },
          },
        },
      ],
      success_url: `${origin}/boutique?success=1`,
      cancel_url: `${origin}/boutique?cancelled=1`,
      metadata: {
        source: "vrmproduction.com",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement" },
      { status: 500 }
    );
  }
}
