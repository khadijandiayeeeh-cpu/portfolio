import { motion } from "framer-motion";
import {
  FaReact,
  FaMobileAlt,
  FaServer,
  FaShieldAlt,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

const expertises = [
  {
    icon: FaReact,
    title: "Frontend",
    description:
      "Interfaces modernes, rapides et responsives avec React, TypeScript et Tailwind CSS.",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: FaMobileAlt,
    title: "Applications Mobiles",
    description:
      "Développement d'applications Android et iOS avec React Native & Expo.",
    color: "from-violet-500 to-purple-500",
  },

  {
    icon: FaServer,
    title: "Backend",
    description:
      "API REST, Node.js, Express, Supabase, PostgreSQL et Firebase.",
    color: "from-green-500 to-emerald-500",
  },

  {
    icon: FaDatabase,
    title: "Bases de données",
    description:
      "Conception de bases de données performantes et sécurisées.",
    color: "from-orange-500 to-red-500",
  },

  {
    icon: FaBrain,
    title: "Intelligence Artificielle",
    description:
      "Chatbots, assistants IA et automatisation intelligente.",
    color: "from-pink-500 to-fuchsia-500",
  },

  {
    icon: FaShieldAlt,
    title: "Cybersécurité",
    description:
      "Authentification, sécurité API, bonnes pratiques OWASP.",
    color: "from-indigo-500 to-violet-600",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center text-5xl font-bold"
        >
          Mes Expertises
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
          J'accompagne les entreprises, startups et institutions
          dans la conception d'applications modernes et performantes.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {expertises.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -10,
                  scale: 1.04
                }}
                className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
              >

                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

                <div className="p-8">

                  <div className="w-20 h-20 rounded-2xl bg-violet-500/10 flex items-center justify-center">

                    <Icon
                      size={45}
                      className="text-violet-400"
                    />

                  </div>

                  <h3 className="text-2xl font-bold mt-8">

                    {item.title}

                  </h3>

                  <p className="text-gray-400 mt-6 leading-8">

                    {item.description}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}