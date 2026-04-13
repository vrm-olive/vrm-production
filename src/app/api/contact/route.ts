import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  email: string;
  phone?: string;
  type?: string;
  subject?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    if (!body.email || !body.message) {
      return NextResponse.json(
        { error: "Email et message sont requis" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      // In dev without Resend key, just log and return success
      console.log("Contact form submission (no RESEND_API_KEY):", body);
      return NextResponse.json({ ok: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const subject =
      body.subject ||
      (body.company ? `Demande partenariat — ${body.company}` : "Message depuis le site VRM Production");

    const htmlBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; color: #2d2d2d;">
        <h2 style="color: #2c5522; margin-bottom: 24px;">${subject}</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${body.name ? `<tr><td style="padding: 6px 0; color: #705836; width: 140px;">Nom</td><td style="padding: 6px 0;">${body.name}</td></tr>` : ""}
          ${body.company ? `<tr><td style="padding: 6px 0; color: #705836;">Entreprise</td><td style="padding: 6px 0;">${body.company}</td></tr>` : ""}
          <tr><td style="padding: 6px 0; color: #705836;">Email</td><td style="padding: 6px 0;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
          ${body.phone ? `<tr><td style="padding: 6px 0; color: #705836;">Téléphone</td><td style="padding: 6px 0;">${body.phone}</td></tr>` : ""}
          ${body.type ? `<tr><td style="padding: 6px 0; color: #705836;">Type</td><td style="padding: 6px 0;">${body.type}</td></tr>` : ""}
        </table>
        <hr style="border: none; border-top: 1px solid #e8e6ce; margin: 20px 0;" />
        <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${body.message}</p>
        <hr style="border: none; border-top: 1px solid #e8e6ce; margin: 20px 0;" />
        <p style="font-size: 12px; color: #aaa;">VRM Production — vrmproduction.com</p>
      </div>
    `;

    await resend.emails.send({
      from: "Site VRM <noreply@vrmproduction.com>",
      to: process.env.CONTACT_EMAIL ?? "contact@vrmproduction.com",
      replyTo: body.email,
      subject,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
