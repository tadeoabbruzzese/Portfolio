"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const [mounted, setMounted] = useState(false);

  // Evita render doble por transición inicial
  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <motion.div
      key={mounted} // fuerza un solo render tras hidratar
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
