"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatWindow from "./ChatWindow";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan shadow-lg flex items-center justify-center text-white"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-[#0B0D17]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
