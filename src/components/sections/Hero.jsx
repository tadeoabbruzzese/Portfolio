"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] overflow-hidden px-6">
      {/* === Fondo con gradiente animado === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(123,92,255,0.25),transparent_70%),radial-gradient(circle_at_70%_80%,rgba(0,224,255,0.25),transparent_70%)] pointer-events-none" />

      {/* === Contenido === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="font-[var(--font-space-grotesk)] text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent">
          Construyo sistemas que hacen crecer tu negocio
        </h1>

        <p className="mt-6 text-brand-muted text-lg md:text-xl font-[var(--font-inter)]">
          Combino inteligencia artificial, automatización y diseño para crear
  herramientas digitales que te ahorran tiempo y hacen crecer tu negocio.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-violet to-brand-cyan text-white font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Ver proyectos
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white font-medium px-6 py-3 hover:bg-white/10 transition-colors"
          >
            Sobre mí
          </a>
        </div>
      </motion.div>
    </section>
  );
}
