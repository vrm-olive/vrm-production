"use client";

import type { Metadata } from "next";
import { useState } from "react";

// Note: metadata export doesn't work in client components, move to a server wrapper if needed.
// For now the page is client-only due to the form state.

const advantages = [
  {
    title: "Franco de port",
    description: "Livraison offerte à partir de 8 colis commandés.",
  },
  {
    title: "Tarification B2B",
    description: "Tarifs grossiste négociés selon les volumes. Remises dégressives disponibles.",
  },
  {
    title: "12 références",
    description: "Une gamme complète pour garnir vos rayons ou proposer à vos clients.",
  },
  {
    title: "Réassort rapide",
    description: "Production en flux régulier. Délais maîtrisés depuis notre atelier gardois.",
  },
  {
    title: "Produit différenciant",
    description: "Artisanal, sans additifs, avec une histoire locale : un argument de vente fort.",
  },
  {
    title: "Flexibilité",
    description: "Commandes ponctuelles ou approvisionnements réguliers selon vos besoins.",
  },
];

export default function PartenairesPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, subject: "Demande partenariat B2B" }),
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ company: "", name: "", email: "", phone: "", type: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-forest-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-olive-300 text-sm font-medium tracking-widest uppercase mb-2">
            Professionnels
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Espace partenaires
          </h1>
          <p className="text-cream-300 max-w-xl leading-relaxed text-lg">
            Supermarchés, épiceries fines, restaurateurs, cavistes — référencez
            nos olives artisanales et offrez à vos clients l&apos;authenticité
            du terroir gardois.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl text-forest-800 font-bold text-center mb-10">
            Pourquoi référencer VRM Production ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="bg-white border border-olive-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-2 h-8 bg-forest-500 rounded-full mb-4" />
                <h3 className="font-semibold text-forest-800 mb-2">{a.title}</h3>
                <p className="text-sm text-bark-600 leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarif indicatif */}
      <section className="bg-cream-100 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-forest-800 font-bold mb-6 text-center">
            Tarification indicative 2026
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th className="text-left px-5 py-4 font-semibold">Référence</th>
                  <th className="text-center px-4 py-4 font-semibold">Poids</th>
                  <th className="text-right px-4 py-4 font-semibold">Prix unitaire HT</th>
                  <th className="text-right px-5 py-4 font-semibold">PVM conseillé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-100">
                {[
                  ["Vertes (7 variétés)", "200g", "1,95 €", "2,99 €"],
                  ["Noires (2 variétés)", "200g", "2,10 €", "3,29 €"],
                  ["Farcies (2 variétés)", "180g", "2,65 €", "3,99 €"],
                  ["Dénoyautées Provençales", "170g", "1,95 €", "2,99 €"],
                ].map(([ref, poids, ht, pvm]) => (
                  <tr
                    key={ref}
                    className="hover:bg-cream-50 transition-colors"
                  >
                    <td className="px-5 py-3 font-medium text-forest-800">{ref}</td>
                    <td className="px-4 py-3 text-center text-bark-600">{poids}</td>
                    <td className="px-4 py-3 text-right text-bark-700">{ht}</td>
                    <td className="px-5 py-3 text-right font-semibold text-forest-700">
                      {pvm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-bark-400 mt-3 text-center">
            Colis de 30 barquettes · Franco de port dès 8 colis · Tarifs HT,
            TVA 5,5% · Prix susceptibles de modification
          </p>
        </div>
      </section>

      {/* Formulaire contact B2B */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl text-forest-800 font-bold text-center mb-3">
          Demande de partenariat
        </h2>
        <p className="text-bark-600 text-center mb-10">
          Renseignez vos coordonnées, nous vous recontactons sous 48h.
        </p>

        {status === "sent" ? (
          <div className="bg-forest-50 border border-forest-200 rounded-2xl p-8 text-center">
            <svg
              className="w-12 h-12 text-forest-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="font-display text-xl font-semibold text-forest-800 mb-2">
              Message envoyé !
            </h3>
            <p className="text-bark-600">
              Merci pour votre intérêt. Nous vous recontactons dans les meilleurs
              délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-forest-800 mb-1.5">
                  Entreprise *
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                  placeholder="Nom de votre société"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-800 mb-1.5">
                  Votre nom *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                  placeholder="Prénom Nom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-forest-800 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                  placeholder="vous@entreprise.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-800 mb-1.5">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                  placeholder="06 XX XX XX XX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-800 mb-1.5">
                Type de commerce
              </label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent text-bark-700"
              >
                <option value="">— Sélectionnez —</option>
                <option value="supermarche">Supermarché / Grande surface</option>
                <option value="epicerie">Épicerie fine</option>
                <option value="restaurateur">Restaurateur</option>
                <option value="caviste">Caviste / Bar à vins</option>
                <option value="grossiste">Grossiste / Distributeur</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-800 mb-1.5">
                Message / Besoins
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent resize-none"
                placeholder="Décrivez votre activité, vos volumes estimés, vos besoins…"
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Une erreur est survenue. Veuillez réessayer ou nous contacter par
                email directement.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-forest-700 hover:bg-forest-800 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
            </button>
          </form>
        )}
      </section>
    </>
  );
}
