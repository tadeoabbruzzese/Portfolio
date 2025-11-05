"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark border-t border-white/10 py-10 text-center overflow-hidden">
      {/* === Gradiente de fondo sutil === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(123,92,255,0.08),transparent_70%),radial-gradient(circle_at_80%_90%,rgba(0,224,255,0.08),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center gap-5"
      >
        {/* Nombre y marca */}
        <h3 className="font-[var(--font-space-grotesk)] text-lg text-white font-semibold tracking-wide">
          Tadeo Abbruzzese
        </h3>

        {/* Redes */}
        <div className="flex gap-6 text-white/70">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-cyan transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-cyan transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contacto@tadeo.dev"
            className="hover:text-brand-cyan transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Línea de créditos */}
        <p className="text-sm text-brand-muted font-[var(--font-inter)]">
          © {year} Hecho con Next.js, Tailwind y café ☕ — Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
