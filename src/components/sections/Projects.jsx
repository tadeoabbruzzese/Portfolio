"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Camping Fossa Lupara",
    description:
      "Plataforma educativa full-stack con Next.js, Firebase e i18n. Dashboards, roles y automatización de progreso en tiempo real.",
    image: "/images/fossalupara.png",
    link: "https://new-camping-v3.vercel.app/",
    tags: ["Next.js", "Firebase", "Tailwind", "i18n"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-brand-dark overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(123,92,255,0.08),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(0,224,255,0.08),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent">
          Proyectos destacados
        </h2>

        <p className="mt-4 text-brand-muted text-lg md:text-xl max-w-3xl mx-auto font-[var(--font-inter)]">
          Algunos de los sistemas y experiencias digitales que desarrollé para
          potenciar marcas, automatizar tareas y conectar tecnología con
          resultados reales.
        </p>

        
        {/* GRID adaptable y centrado */}
<div className="mt-16 grid gap-10 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center place-items-start">
  {projects.map((p, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.03)] hover:shadow-[0_0_35px_rgba(255,255,255,0.07)] transition-all duration-500 max-w-md w-full"
    >
      {/* Imagen */}
      <div className="relative w-full h-52 md:h-48 overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17]/90 via-[#0B0D17]/40 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-white font-[var(--font-space-grotesk)] mb-2">
          {p.title}
        </h3>
        <p className="text-sm text-brand-muted leading-relaxed font-[var(--font-inter)] mb-4">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((tag, t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:text-brand-violet transition"
        >
          Ver proyecto
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Overlay decorativo */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#0B0D17]/70 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  ))}
</div>

      </motion.div>
    </section>
  );
}
