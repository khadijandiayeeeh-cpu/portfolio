
import { useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  sender: "ai" | "user";
  text: string;
};

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Bonjour 👋 Je suis Khadidiatou AI. Posez-moi une question sur Khadidiatou, ses compétences ou ses projets.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    // Ajouter le message de l'utilisateur immédiatement
    setMessages((m) => [
      ...m,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la communication avec le serveur.");
      }

      const data = await response.json();

      setMessages((m) => [
        ...m,
        {
          sender: "ai",
          text:
            data.response ||
            "Désolée, je n'ai pas reçu de réponse du serveur.",
        },
      ]);
    } catch (error) {
      console.error("Erreur Khadidiatou AI :", error);

      setMessages((m) => [
        ...m,
        {
          sender: "ai",
          text:
            "Je rencontre actuellement un problème de connexion avec mon intelligence artificielle. Vérifiez que le serveur FastAPI et Ollama sont bien démarrés.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      send();
    }
  };

  return (
    <>
      {/* =====================================================
          BOUTON IA
      ====================================================== */}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-violet-600 text-white shadow-xl z-50 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-violet-700"
        aria-label="Ouvrir Khadidiatou AI"
      >
        <FaRobot size={28} />
      </button>

      {/* =====================================================
          FENÊTRE IA
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 right-8 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] bg-[#0f172a] text-white rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden z-50"
          >

            {/* HEADER */}
            <div className="flex justify-between items-center p-5 border-b border-white/10 bg-[#111827]">
              <div>
                <h2 className="font-bold text-xl">
                  🤖 Khadidiatou AI
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                  Assistant personnel
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition"
                aria-label="Fermer"
              >
                <FaTimes />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-violet-600 text-white"
                        : "bg-white/10 text-gray-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* INDICATEUR DE CHARGEMENT */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-gray-400 p-3 rounded-2xl text-sm">
                    Khadidiatou AI réfléchit...
                  </div>
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="p-4 flex gap-3 border-t border-white/10 bg-[#111827]">

              <input
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none text-white placeholder-gray-500 focus:border-violet-500 transition"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question..."
                disabled={loading}
              />

              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="bg-violet-600 w-12 rounded-xl flex items-center justify-center transition hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Envoyer"
              >
                <FaPaperPlane />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
