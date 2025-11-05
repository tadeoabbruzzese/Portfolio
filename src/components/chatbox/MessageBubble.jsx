"use client";

export default function MessageBubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-gradient-to-r from-brand-violet to-brand-cyan text-white"
            : "bg-white/5 text-white border border-white/10"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
