import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Tous les champs sont requis." },
                { status: 400 }
            );
        }

        // ✅ Configuration du transporteur (SMTP)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // Ex: smtp.gmail.com
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // ✅ Envoi de l'email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_EMAIL, // ton email de réception
            subject: `📩 Nouveau message de ${name}`,
            text: message,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>📬 Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erreur d’envoi de mail :", error);
        return NextResponse.json(
            { success: false, error: "Erreur lors de l’envoi du message." },
            { status: 500 }
        );
    }
}
