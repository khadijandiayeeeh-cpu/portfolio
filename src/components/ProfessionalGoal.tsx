import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBrain,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const goals = [
  {
    icon: FaBriefcase,
    title: "Intégrer une équipe",
    text: "Rejoindre une entreprise ou une équipe tech où je pourrai contribuer à des projets concrets et progresser au contact de professionnels expérimentés.",
  },
  {
    icon: FaBrain,
    title: "Évoluer vers l'IA",
    text: "Approfondir progressivement mes compétences en intelligence artificielle, data et automatisation afin de construire des solutions plus intelligentes.",
  },
  {
    icon: FaUsers,
    title: "Créer de la valeur",
    text: "Mettre mes compétences techniques et mon esprit analytique au service de solutions utiles aux entreprises et aux utilisateurs.",
  },
];

export default function ProfessionalGoal() {
  return (
    <section
      id="objectif"
      className="py-28 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase">
            Objectif professionnel
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Construire une carrière dans la
            <span className="text-violet-400"> technologie.</span>
          </h2>

          <p className="text-gray-400 leading-8 mt-6">
            Mon objectif est de commencer ma carrière dans le domaine
            informatique au sein d'une équipe où je pourrai mettre en pratique
            mes compétences, apprendre rapidement et participer à la création
            de produits numériques utiles.
          </p>

        </motion.div>


        {/* CARTES */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {goals.map((goal, index) => {

            const Icon = goal.icon;

            return (
              <motion.div
                key={goal.title}
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
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{ y: -6 }}
                className="
                  p-7
                  rounded-3xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  hover:border-violet-500/30
                  transition
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-violet-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={23}
                    className="text-violet-400"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mt-6">
                  {goal.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4">
                  {goal.text}
                </p>

              </motion.div>
            );
          })}

        </div>


        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-12
            p-7
            md:p-10
            rounded-3xl
            bg-gradient-to-r
            from-violet-600/10
            to-blue-600/10
            border
            border-violet-500/20
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <div>

            <h3 className="text-xl md:text-2xl font-bold text-white">
              Vous avez un projet ou une opportunité ?
            </h3>

            <p className="text-gray-400 mt-2">
              Je serais ravie d'échanger avec vous.
            </p>

          </div>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              bg-violet-600
              hover:bg-violet-500
              transition
              font-semibold
              whitespace-nowrap
            "
          >
            Me contacter
            <FaArrowRight size={14} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}