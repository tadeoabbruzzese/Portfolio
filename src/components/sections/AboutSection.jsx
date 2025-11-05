"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbulb, Zap, Sparkles, Calendar } from "lucide-react";

export default function AboutSection() {
  const timeline = [
    {
      year: "2019",
      title: "Comienzo mi camino en desarrollo web",
      description:
        "Aprendí las bases de HTML, CSS y JavaScript, creando mis primeros proyectos personales y experimentando con interfaces.",
    },
    {
      year: "2021",
      title: "Primeros proyectos freelance",
      description:
        "Empecé a trabajar con clientes pequeños, desarrollando sitios web modernos con React y mejorando mi enfoque en UI/UX.",
    },
    {
      year: "2023",
      title: "Integración de IA y automatización",
      description:
        "Descubrí el potencial de la inteligencia artificial aplicada al desarrollo. Empecé a crear bots, asistentes y flujos automatizados.",
    },
    {
      year: "2025",
      title: "Fundación de proyectos profesionales",
      description:
        "Lidero y colaboro en plataformas y sistemas complejos con Next.js, Firebase e IA, combinando tecnología, diseño y estrategia digital.",
    },
  ];

  return (
    <>
      {/* === Sección principal === */}
      <section className="pt-28 md:pt-32 relative py-28 px-6 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(123,92,255,0.08),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(0,224,255,0.08),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Texto principal */}
            <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
            <h1 className="text-4xl md:text-5xl font-[var(--font-space-grotesk)] font-bold bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent mb-6">
              Soy Tadeo Abbruzzese
            </h1>

            <p className="text-brand-muted text-lg md:text-xl font-[var(--font-inter)] leading-relaxed mb-6">
              Desarrollador web y creador de productos digitales. Combino{" "}
              <span className="bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent font-semibold">
                tecnología, diseño e inteligencia artificial
              </span>{" "}
              para construir herramientas que automatizan tareas, optimizan
              procesos y hacen crecer negocios.
            </p>

            <p className="text-brand-muted text-base md:text-lg font-[var(--font-inter)] leading-relaxed">
              Me apasiona crear sistemas que mezclen performance, estética y
              propósito. Cada línea de código es una forma de resolver un
              problema real con inteligencia, empatía y precisión.
            </p>
          </motion.div>

          {/* Imagen lateral */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-sm">
              <Image
                src="/images/profile.PNG"
                alt="Tadeo Abbruzzese"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Sección: Enfoque === */}
      <section className="py-20 px-6 bg-[#0C0F1A] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-[var(--font-space-grotesk)] font-bold bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent mb-12">
            Mi enfoque
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-brand-cyan mx-auto mb-3" />,
                title: "Creatividad estratégica",
                desc: "Cada solución está pensada desde la lógica y el diseño, para ser funcional, usable y con identidad.",
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-violet mx-auto mb-3" />,
                title: "Automatización inteligente",
                desc: "Integro IA y flujos automáticos que ahorran tiempo, reducen errores y escalan sin fricción.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-brand-cyan mx-auto mb-3" />,
                title: "Experiencia centrada",
                desc: "Me enfoco en la experiencia humana detrás de cada producto. Tecnología que simplifica, no que complica.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl hover:scale-[1.02] transition-transform shadow-[0_0_25px_rgba(255,255,255,0.03)]"
              >
                {item.icon}
                <h3 className="text-white text-lg font-semibold mb-2 font-[var(--font-space-grotesk)]">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed font-[var(--font-inter)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

     {/* === Sección: Timeline elegante === */}
<section className="relative py-28 px-6 bg-[#0C0F1A] overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="relative z-10 max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-[var(--font-space-grotesk)] font-semibold bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent text-center mb-20">
      Mi trayectoria
    </h2>

    <div className="relative border-l border-white/10 ml-6">
      {[
        {
    year: "2022",
    title: "Inicios en desarrollo web",
    desc: "Comencé mi formación con cursos de HTML, CSS y JavaScript, sentando las bases del desarrollo frontend y la lógica de programación.",
  },
  {
    year: "2023",
    title: "Capacitación profesional en desarrollo moderno",
    desc: "Completé una capacitación intensiva en desarrollo web moderno con Santander y Fundación Pescar, adquiriendo conocimientos en frameworks y metodologías actuales.",
  },
  {
    year: "2024",
    title: "Freelance y colaboración en proyectos",
    desc: "Participé y colaboré en distintos proyectos, comenzando mi camino como desarrollador freelance. También participé en hackatones como Code for Good de J.P. Morgan, potenciando mis habilidades en trabajo en equipo y resolución de problemas.",
  },
  {
    year: "2025",
    title: "AI Department en Further",
    desc: "Me uní a Further, donde actualmente formo parte del área de inteligencia artificial, desarrollando soluciones escalables y eficientes basadas en IA para productos y sistemas internos.",
  },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative pl-10 pb-14 group"
        >
          {/* Punto */}
          <span className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(0,224,255,0.4)] group-hover:scale-125 transition-transform" />

          {/* Contenido */}
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
            <span className="text-sm text-brand-cyan font-medium">{item.year}</span>
            <h3 className="text-white text-lg font-[var(--font-space-grotesk)] font-semibold mt-1 mb-2">
              {item.title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed font-[var(--font-inter)]">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


{/* === Sección: Cierre personal / CTA === */}
      <section className="py-24 px-6 bg-[radial-gradient(circle_at_20%_20%,rgba(123,92,255,0.08),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(0,224,255,0.08),transparent_70%)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-[var(--font-space-grotesk)] font-bold bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent mb-6">
            Más allá del código
          </h2>
          <p className="text-brand-muted text-lg md:text-xl font-[var(--font-inter)] leading-relaxed mb-8">
            Disfruto aprender, enseñar y crear tecnología con propósito.
            Mi objetivo es combinar innovación, diseño y empatía
            para construir productos que realmente generen impacto.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan text-white font-semibold hover:opacity-90 transition"
          >
            Hablemos
          </a>
        </motion.div>
      </section>
    </>
  );
}
