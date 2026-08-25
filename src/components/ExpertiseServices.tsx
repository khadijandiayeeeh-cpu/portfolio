import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaBrain,
  FaShieldAlt,
} from "react-icons/fa";


const services = [
  {
    icon: FaLaptopCode,
    title: "Développement Web",
    description:
      "Création de sites et applications web modernes, responsives et adaptés aux besoins des utilisateurs.",
    technologies: "React • TypeScript • Tailwind CSS",
  },

  {
    icon: FaMobileAlt,
    title: "Applications Mobiles",
    description:
      "Conception d'applications mobiles Android et iOS avec une expérience utilisateur fluide.",
    technologies: "React Native • Expo",
  },

  {
    icon: FaServer,
    title: "Backend & API",
    description:
      "Développement de serveurs, API REST et systèmes d'authentification pour applications web et mobiles.",
    technologies: "Node.js • Express • Supabase",
  },

  {
    icon: FaDatabase,
    title: "Bases de données",
    description:
      "Conception et gestion de bases de données structurées et adaptées aux applications.",
    technologies: "PostgreSQL • Supabase",
  },

  {
    icon: FaBrain,
    title: "Solutions IA",
    description:
      "Exploration et intégration de solutions d'intelligence artificielle dans des applications numériques.",
    technologies: "Python • APIs IA",
  },

  {
    icon: FaShieldAlt,
    title: "Sécurité applicative",
    description:
      "Application de bonnes pratiques de sécurité pour protéger les utilisateurs, les données et les API.",
    technologies: "Authentication • JWT • OWASP",
  },
];


export default function ExpertiseServices() {

  return (

    <section
      id="services"
      className="py-28 px-6 bg-[#050816]"
    >

      <div className="max-w-7xl mx-auto">


        {/* =========================
            TITRE
        ========================== */}

        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >

          <p className="
            text-violet-400
            font-semibold
            tracking-widest
            text-sm
          ">
            EXPERTISES & SERVICES
          </p>


          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              text-white
              mt-4
            "
          >
            Ce que je peux réaliser
          </h2>


          <p
            className="
              text-gray-400
              mt-6
              leading-8
            "
          >
            De la conception d'une interface jusqu'au développement
            d'une application, je transforme les idées en solutions
            numériques modernes.
          </p>

        </div>


        {/* =========================
            CARTES
        ========================== */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            mt-16
          "
        >

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.article
                key={service.title}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.1,
                }}

                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.04, 0.12),
                }}

                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-7
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/30
                "
              >

                {/* ICÔNE */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-violet-500/10
                    border
                    border-violet-500/20
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Icon
                    size={24}
                    className="text-violet-400"
                  />

                </div>


                {/* TITRE */}

                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                    mt-7
                  "
                >
                  {service.title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    text-gray-400
                    mt-4
                    leading-7
                  "
                >
                  {service.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="mt-6">

                  <span
                    className="
                      inline-block
                      text-sm
                      text-violet-300
                      bg-violet-500/5
                      px-3
                      py-1.5
                      rounded-lg
                    "
                  >
                    {service.technologies}
                  </span>

                </div>

              </motion.article>

            );

          })}

        </div>

      </div>

    </section>

  );
}