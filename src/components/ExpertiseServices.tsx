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
      "Conception et gestion de bases de données structurées, sécurisées et adaptées aux applications.",
    technologies: "PostgreSQL • Supabase • Firebase",
  },
  {
    icon: FaBrain,
    title: "Solutions IA",
    description:
      "Intégration d'intelligence artificielle, assistants intelligents et automatisation dans les applications.",
    technologies: "Python • APIs IA • Automatisation",
  },
  {
    icon: FaShieldAlt,
    title: "Sécurité applicative",
    description:
      "Mise en place de bonnes pratiques de sécurité pour protéger les utilisateurs, données et API.",
    technologies: "Authentication • JWT • OWASP",
  },
];

export default function ExpertiseServices() {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITRE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="text-violet-400 font-semibold tracking-widest">
            EXPERTISES & SERVICES
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-4">
            Ce que je peux réaliser
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            De la conception d'une interface jusqu'au développement
            complet d'une application, je transforme les idées en
            solutions numériques modernes.
          </p>

        </motion.div>

        {/* CARTES */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                  overflow-hidden
                  transition
                  hover:border-violet-500/40
                "
              >

                {/* GLOW */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    w-40
                    h-40
                    bg-violet-600/20
                    blur-3xl
                    rounded-full
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

                {/* ICONE */}

                <div
                  className="
                    relative
                    w-16
                    h-16
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
                    size={28}
                    className="text-violet-400"
                  />

                </div>

                {/* TITRE */}

                <h3 className="relative text-2xl font-bold text-white mt-8">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="relative text-gray-400 mt-4 leading-7">
                  {service.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="relative mt-7">

                  <p className="text-sm text-violet-300">
                    {service.technologies}
                  </p>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}