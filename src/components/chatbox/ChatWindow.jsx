"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, MessageSquare } from "lucide-react";
import MessageBubble from "./MessageBubble";

const suggestions = [
  "¿Qué servicios ofrece Tadeo?",
  "¿Qué tecnologías domina?",
  "¿Dónde trabaja actualmente?",
  "¿Puedo ver sus proyectos?",
  "¿Cómo puedo contactarlo?",
];

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "¡Hola! Soy el asistente de Tadeo Abbruzzese. ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  async function sendMessage(text) {
    const userMessage = text || input;
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { role: "user", text: userMessage }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage, history: newMessages }),
    });
    const data = await res.json();
    setMessages([...newMessages, { role: "assistant", text: data.text }]);
  }

  return (
  <div className="flex flex-col h-[480px] bg-gradient-to-b from-[#0E101B]/95 to-[#0A0C15]/95 text-white rounded-2xl overflow-hidden">
    {/* === Mensajes === */}
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
      {messages.map((msg, i) => (
        <MessageBubble key={i} role={msg.role} text={msg.text} />
      ))}
    </div>

    {/* === Menú desplegable de preguntas sugeridas === */}
    <div className="border-t border-white/10 bg-[#0C0F1A]/80 backdrop-blur-md">
      <button
        onClick={() => setShowSuggestions(!showSuggestions)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm text-white/70 hover:text-white transition"
      >
        <span className="flex items-center gap-2 font-medium">
          <MessageSquare className="w-4 h-4 text-brand-cyan" />
          Preguntas sugeridas
        </span>
        {showSuggestions ? (
          <ChevronUp className="w-4 h-4 text-white/60" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white/60" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-2 px-3 pb-3"
          >
            {suggestions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  sendMessage(q);
                  setShowSuggestions(false);
                }}
                className="px-3 py-1.5 text-sm rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                {q}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* === Input === */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
      className="flex items-center border-t border-white/10 bg-[#0C0F1A]/80 backdrop-blur-lg px-3"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="flex-1 bg-transparent text-white/90 px-3 py-3 text-sm focus:outline-none placeholder-white/40"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-brand-cyan hover:text-brand-violet transition"
      >
        Enviar
      </button>
    </form>
  </div>
);

}
