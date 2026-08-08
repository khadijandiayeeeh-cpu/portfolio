import { useState } from "react";

const faq = [
  {
    question: "Quels services proposes-tu ?",
    answer:
      "Je développe des applications web, mobiles, backend et des solutions intégrant l'IA."
  },
  {
    question: "Travail à distance ?",
    answer:
      "Oui, je peux collaborer avec des entreprises au Sénégal comme à l'international."
  },
  {
    question: "Technologies principales ?",
    answer:
      "React, React Native, Node.js, TypeScript, Supabase, PostgreSQL et Tailwind CSS."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Questions fréquentes
        </h2>

        <div className="mt-20 space-y-6">

          {faq.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full p-8 flex justify-between items-center"
              >
                <span className="text-xl font-bold">
                  {item.question}
                </span>

                <span>{open === index ? "-" : "+"}</span>
              </button>

              {open === index && (
                <div className="px-8 pb-8 text-gray-400 leading-8">
                  {item.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}