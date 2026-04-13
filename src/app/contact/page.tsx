"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "sent" : "error");
    if (res.ok) setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <>
      {/* Header */}
      <section className="bg-forest-800 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-olive-300 text-sm font-medium tracking-widest uppercase mb-2">
            Parlez-nous
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Contact
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Informations */}
        <div>
          <h2 className="font-display text-2xl text-forest-800 font-bold mb-8">
            Nos coordonnées
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-forest-100 text-forest-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-forest-800 text-sm">Adresse</p>
                <p className="text-bark-600 text-sm mt-1">
                  VRM Production<br />
                  Vergèze, Gard (30310)<br />
                  France
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-forest-100 text-forest-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-forest-800 text-sm">Email</p>
                <a
                  href="mailto:contact@vrmproduction.com"
                  className="text-forest-600 hover:text-forest-800 text-sm mt-1 block transition-colors"
                >
                  contact@vrmproduction.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-forest-100 text-forest-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-forest-800 text-sm">Téléphone</p>
                <p className="text-bark-600 text-sm mt-1">
                  Disponible sur demande par email
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-5 bg-cream-100 rounded-2xl border border-olive-100">
            <p className="font-semibold text-forest-800 text-sm mb-2">
              Vous êtes professionnel ?
            </p>
            <p className="text-sm text-bark-600 mb-3">
              Pour les demandes de partenariat B2B, tarifs grossiste et
              référencement, rendez-vous sur notre espace dédié.
            </p>
            <Link
              href="/partenaires"
              className="text-sm font-medium text-forest-600 hover:text-forest-800 inline-flex items-center gap-1 transition-colors"
            >
              Espace partenaires
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Formulaire */}
        <div>
          <h2 className="font-display text-2xl text-forest-800 font-bold mb-8">
            Envoyer un message
          </h2>

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
              <p className="text-bark-600 text-sm">
                Merci pour votre message. Nous vous répondrons dans les meilleurs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-forest-800 mb-1.5">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
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
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-800 mb-1.5">
                  Sujet
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-800 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-olive-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent resize-none"
                  placeholder="Votre message…"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Erreur lors de l&apos;envoi. Merci de réessayer ou de nous
                  contacter directement par email.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-forest-700 hover:bg-forest-800 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {status === "sending" ? "Envoi…" : "Envoyer"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
