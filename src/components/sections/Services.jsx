"use client";
import { motion } from "framer-motion";
import { Cpu, Code, Workflow } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web Moderno",
    icon: <Code className="w-8 h-8 text-brand-cyan" />,
    description:
      "Diseño y desarrollo sitios y aplicaciones con React y Next.js, enfocados en velocidad, diseño y resultados.",
  },
  {
    title: "Automatizaciones Inteligentes",
    icon: <Workflow className="w-8 h-8 text-brand-violet" />,
    description:
      "Optimizo tareas repetitivas mediante flujos automáticos y bots que integran APIs y servicios en tiempo real.",
  },
  {
    title: "Sistemas con IA",
    icon: <Cpu className="w-8 h-8 text-brand-pink" />,
    description:
      "Integro modelos de inteligencia artificial y chatbots personalizados que aprenden de tu negocio y mejoran la eficiencia.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-brand-dark text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent">
          Lo que hago
        </h2>

        <p className="mt-4 text-brand-muted font-[var(--font-inter)] max-w-2xl mx-auto">
          Transformo ideas en productos y flujos reales. Desde sitios web hasta sistemas automatizados impulsados por IA.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
