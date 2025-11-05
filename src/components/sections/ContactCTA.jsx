"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-brand-dark via-[#0E1120] to-brand-dark text-center">
      {/* === Fondo con brillo radial === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,224,255,0.12),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(123,92,255,0.12),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent">
          ¿Querés potenciar tu negocio con tecnología?
        </h2>

        <p className="mt-6 text-brand-muted text-lg md:text-xl font-[var(--font-inter)]">
          Conversemos sobre cómo puedo ayudarte a crear productos digitales que
          automaticen tareas, impulsen resultados y eleven tu marca.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-violet to-brand-cyan text-white font-semibold px-8 py-4 hover:opacity-90 transition-opacity text-lg"
          >
            Hablemos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
