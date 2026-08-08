import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBrain,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

const features = [
  {
    icon: FaLaptopCode,
    title: "Développement Full Stack",
    description:
      "Création d'applications web et mobiles modernes avec React, React Native, Node.js, Supabase et PostgreSQL."
  },

  {
    icon: FaBrain,
    title: "Intelligence Artificielle",
    description:
      "Conception d'assistants IA, automatisation et intégration d'API d'intelligence artificielle."
  },

  {
    icon: FaShieldAlt,
    title: "Cybersécurité",
    description:
      "Développement sécurisé, authentification, bonnes pratiques OWASP et protection des données."
  },

  {
    icon: FaRocket,
    title: "Innovation",
    description:
      "Création de solutions innovantes comme GovAction et d'autres plateformes numériques."
  }
];

export default function WhyMe() {
  return (
    <section className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Pourquoi me choisir ?
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto">
          Je développe des applications performantes,
          modernes et évolutives en utilisant les meilleures
          technologies actuelles.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.04
                }}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl"
              >

                <Icon
                  size={55}
                  className="text-violet-400 mb-6"
                />

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-5 leading-8">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}