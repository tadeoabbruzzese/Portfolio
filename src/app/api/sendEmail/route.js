import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Faltan campos obligatorios." }), {
        status: 400,
      });
    }

    // Configuración del transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // o tu propio SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h3>Nuevo contacto desde el portfolio</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(JSON.stringify({ error: "Error al enviar el correo." }), {
      status: 500,
    });
  }
}
