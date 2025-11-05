"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Linkedin, Github, MessageSquare, CheckCircle, XCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="pt-28 md:pt-32 relative py-28 px-6 bg-brand-dark overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,92,255,0.08),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(0,224,255,0.08),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* === Header === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[var(--font-space-grotesk)] font-bold bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent mb-4">
            Hablemos
          </h2>
          <p className="text-brand-muted text-lg md:text-xl font-[var(--font-inter)] max-w-2xl mx-auto leading-relaxed">
            Si tenés un proyecto, una idea o querés colaborar, completá el formulario o escribime directamente.
          </p>
        </div>

        {/* === Contenedor principal === */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulario conectado a API */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.03)] overflow-hidden"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-brand-muted mb-2">Nombre</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-brand-cyan focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm text-brand-muted mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-brand-cyan focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-brand-muted mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-brand-cyan focus:outline-none resize-none"
                  placeholder="Contame brevemente tu idea o proyecto..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={status === "loading"}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-violet to-brand-cyan text-white font-semibold shadow-[0_0_20px_rgba(123,92,255,0.3)] transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                <Send className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Modal de feedback */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md rounded-2xl"
                >
                  <CheckCircle className="w-14 h-14 text-green-400 mb-4" />
                  <p className="text-white text-lg font-semibold">¡Mensaje enviado correctamente!</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-4 text-brand-cyan hover:text-brand-violet transition"
                  >
                    Cerrar
                  </button>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md rounded-2xl"
                >
                  <XCircle className="w-14 h-14 text-red-400 mb-4" />
                  <p className="text-white text-lg font-semibold">Error al enviar el mensaje.</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-4 text-brand-cyan hover:text-brand-violet transition"
                  >
                    Intentar nuevamente
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Información lateral */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center justify-center md:justify-start gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-brand-cyan" />
              <h3 className="text-2xl font-semibold text-white font-[var(--font-space-grotesk)]">
                Información de contacto
              </h3>
            </div>

            <p className="text-brand-muted font-[var(--font-inter)] leading-relaxed mb-10 max-w-md">
              También podés escribirme directamente por correo o en mis redes.  
              Siempre estoy abierto a charlar sobre nuevas ideas y oportunidades.
            </p>

            <ul className="space-y-4 font-[var(--font-inter)]">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-cyan" />
                <a href="mailto:tadeoabbruzzese@gmail.com" className="text-white hover:text-brand-cyan transition">
                  tadeoabbruzzese@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-brand-cyan" />
                <a
                  href="https://www.linkedin.com/in/tadeoabbruzzese/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-cyan transition"
                >
                  linkedin.com/in/tadeoabbruzzese
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="w-5 h-5 text-brand-cyan" />
                <a
                  href="https://github.com/tadeoabbruzzese"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-cyan transition"
                >
                  github.com/tadeoabbruzzese
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
