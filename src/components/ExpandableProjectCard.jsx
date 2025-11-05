"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export function ExpandableProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const p = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-lg shadow-[0_0_25px_rgba(255,255,255,0.03)] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 max-w-[380px] w-full"
    >
      {/* Imagen */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17]/80 via-[#0B0D17]/30 to-transparent" />
      </div>

      {/* Contenido */}
      <motion.div layout className="relative text-left p-8">
        {/* Título y descripción */}
        <h3 className="text-2xl font-bold text-white mb-2 font-[var(--font-space-grotesk)]">
          {p.title}
        </h3>
        <p className="text-brand-muted text-sm mb-4 italic">
          {p.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((tag, t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botones principales */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-brand-cyan hover:text-brand-violet font-medium text-sm transition"
          >
            {expanded ? (
              <>
                Ver menos <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver más <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-violet font-medium text-sm transition"
          >
            Ver proyecto <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Contenido expandible */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 space-y-2 text-sm text-brand-muted font-[var(--font-inter)] leading-relaxed"
            >
              <p>
                <span className="text-brand-cyan font-semibold">Rol: </span>
                {p.role}
              </p>
              <p>
                <span className="text-brand-cyan font-semibold">Desafío: </span>
                {p.challenge}
              </p>
              <p>
                <span className="text-brand-cyan font-semibold">Solución: </span>
                {p.solution}
              </p>
              <p>
                <span className="text-brand-cyan font-semibold">Resultado: </span>
                {p.result}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
