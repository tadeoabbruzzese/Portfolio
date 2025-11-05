"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // efecto scroll para fondo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleProjectClick = async (e) => {
    e.preventDefault();

    if (pathname === "/") {
      // ya estás en home → scroll suave
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // estás en otra ruta → navegar a home y luego hacer scroll
      router.push("/");

      // esperar a que cargue la home antes de hacer scroll
      setTimeout(() => {
        const el = document.getElementById("projects");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 700); // ajustá el delay si tu transición tarda más
    }

    setOpen(false);
  };

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    // el de proyectos no usa href directo
    { href: "/projects", label: "Proyectos", onClick: handleProjectClick },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[85%] md:w-[70%]"
    >
      <motion.nav
        className={`flex items-center justify-between rounded-full px-6 py-3 backdrop-blur-2xl border transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-white/[0.08] shadow-[0_0_25px_rgba(255,255,255,0.08)]"
            : "border-white/5 bg-white/[0.05]"
        }`}
      >
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent tracking-tight hover:opacity-90 transition"
        >
          tadeo.dev
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label, onClick }) => (
            <li key={href}>
              {onClick ? (
                <a
                  href={href}
                  onClick={onClick}
                  className="text-white/70 hover:text-white transition font-[var(--font-inter)]"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className="text-white/70 hover:text-white transition font-[var(--font-inter)]"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Botón mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </motion.nav>

      {/* Menú mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="md:hidden mt-3 rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-2xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <ul className="flex flex-col items-center gap-5">
              {links.map(({ href, label, onClick }) => (
                <li key={href}>
                  {onClick ? (
                    <a
                      href={href}
                      onClick={onClick}
                      className="text-white/90 hover:text-brand-cyan font-medium text-lg transition"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-white/90 hover:text-brand-cyan font-medium text-lg transition"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
