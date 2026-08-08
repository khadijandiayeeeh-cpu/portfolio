import { useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const responses: Record<string, string> = {
  govaction:
    "GovAction est une plateforme GovTech permettant les signalements citoyens, les paiements administratifs et les tableaux de bord.",
  diant:
    "Diant Bi est une plateforme de vente de terrains, véhicules et services au Sénégal.",
  senapp:
    "SenApp est une application destinée à simplifier plusieurs services numériques au Sénégal.",
  ecotech:
    "EcoTech est un projet orienté vers les solutions technologiques durables.",
  trezopay:
    "TrezoPay est une solution FinTech facilitant les paiements numériques.",
  bonjour:
    "Bonjour 👋, je suis l'assistant IA de Khadija. Pose-moi une question.",
};

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Bonjour 👋 Je suis Khadija AI. Posez-moi une question.",
    },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;

    const text = input.toLowerCase();

    setMessages((m) => [...m, { sender: "user", text: input }]);

    let answer =
      "Je n'ai pas encore la réponse. Cette version sera bientôt connectée à une IA.";

    Object.keys(responses).forEach((key) => {
      if (text.includes(key)) answer = responses[key];
    });

    setTimeout(() => {
      setMessages((m) => [...m, { sender: "ai", text: answer }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-violet-600 text-white shadow-xl z-50"
      >
        <FaRobot size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            className="fixed bottom-28 right-8 w-[380px] h-[560px] bg-[#0f172a] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden z-50"
          >
            <div className="flex justify-between items-center p-5 border-b border-white/10">
              <h2 className="font-bold text-xl">🤖 Khadija AI</h2>

              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`${
                    m.sender === "user"
                      ? "bg-violet-600 ml-auto"
                      : "bg-white/10"
                  } p-3 rounded-2xl max-w-[85%]`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="p-4 flex gap-3 border-t border-white/10">
              <input
                className="flex-1 bg-white/5 rounded-xl px-4 outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
              />

              <button
                onClick={send}
                className="bg-violet-600 w-12 rounded-xl"
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