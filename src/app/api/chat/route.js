import { NextResponse } from "next/server";

export async function POST(req) {
  const { message, history } = await req.json();

  const context = `
Eres un asistente de Tadeo Abbruzzese, desarrollador web especializado en:
- React, Next.js, Firebase, Tailwind y automatizaciones IA.
Actualmente trabaja en Further y ofrece servicios de desarrollo web e IA.
Horario de contacto: Lunes a Viernes, 10 a 18 hs (GMT-3).
Correo: tadeoabbruzzese@gmail.com
LinkedIn: linkedin.com/in/tadeoabbruzzese
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${context}\n\nHistorial: ${JSON.stringify(history)}\n\nUsuario: ${message}` }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No pude procesar tu mensaje.";
    return NextResponse.json({ text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ text: "Ocurrió un error procesando la respuesta." });
  }
}
