"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Instagram, Twitter, ArrowUp } from "lucide-react";

export default function SocialSidebar() {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      icon: <Instagram className="w-7 h-7" />,
      href: "https://www.instagram.com/tadeooo___/",
      label: "Instagram",
    },
    {
      icon: <Github className="w-7 h-7" />,
      href: "https://github.com/tadeoabbruzzese",
      label: "GitHub",
    },
    {
      icon: <Twitter className="w-7 h-7" />,
      href: "https://twitter.com/TAbrruzzes50018",
      label: "Twitter",
    },
  ];

  return (
    <>
      {/* === DESKTOP SIDEBAR === */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-6">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ rotate: 8, x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-white/80 hover:text-brand-cyan transition-colors"
          >
            {s.icon}
          </motion.a>
        ))}
        <div className="w-px h-24 bg-white/20 mt-4" />
      </div>

      {/* === MOBILE BUTTON === */}
      <div className="fixed bottom-20 left-6 z-50 md:hidden">
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-brand-violet flex items-center justify-center shadow-lg hover:bg-brand-cyan transition-colors"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.div>
        </motion.button>

        {/* === MENU DESPLEGABLE === */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 left-0 flex flex-col items-center gap-4 bg-brand-card/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white/90 hover:text-brand-cyan transition"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
