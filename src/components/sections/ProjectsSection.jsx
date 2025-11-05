"use client";
import { motion } from "framer-motion";
import { ExpandableProjectCard } from "../ExpandableProjectCard";

const projects = [
  {
    title: "Further Academy Platform",
    subtitle: "Plataforma educativa integral",
    role: "Desarrollo Frontend + Integración Firebase",
    challenge:
      "Crear una experiencia educativa inmersiva y escalable para miles de alumnos con seguimiento en tiempo real.",
    solution:
      "Diseñé e implementé un ecosistema completo con Next.js y Firebase, incluyendo dashboards, roles dinámicos, sistema de exámenes, y traducción multiidioma.",
    result:
      "La plataforma soporta usuarios simultáneos, analíticas en vivo y un rendimiento optimizado (Core Web Vitals 95+).",
    image: "/images/project-further.jpg",
    link: "https://further.academy",
    tags: ["Next.js", "Firebase", "Tailwind", "i18n"],
  },
  
  
];

export default function ProjectsSection() {
  return (
    <section className="relative py-28 px-6 bg-brand-dark overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(123,92,255,0.07),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(0,224,255,0.07),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent">
          Proyectos destacados
        </h2>

        <p className="mt-4 text-brand-muted text-lg md:text-xl max-w-3xl mx-auto font-[var(--font-inter)]">
          Casos reales donde combiné tecnología, diseño e inteligencia
          artificial para construir soluciones con impacto tangible.
        </p>

        {/* GRID */}
<div className="mt-20 grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center max-w-7xl mx-auto px-4">
  {projects.map((p, i) => (
    <ExpandableProjectCard key={i} project={p} index={i} />
  ))}
</div>


      </motion.div>
    </section>
  );
}
