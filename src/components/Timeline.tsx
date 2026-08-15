import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBrain } from "react-icons/fa";

const timeline = [
  {
    year: "Aujourd'hui",
    title: "Développement de projets",
    description:
      "Conception d'applications mobiles, sites web et solutions numériques autour de problématiques concrètes.",
    icon: FaCode,
  },
  {
    year: "2026",
    title: "Université Amadou Makhtar Mbow",
    description:
      "Formation en mathématiques, physique et informatique avec développement progressif de compétences en programmation.",
    icon: FaGraduationCap,
  },
  {
    year: "En parallèle",
    title: "IA & Cybersécurité",
    description:
      "Approfondissement progressif de l'intelligence artificielle, de la sécurité informatique et de l'ingénierie logicielle.",
    icon: FaBrain,
  },
];

export default function Timeline() {
  return (
    <section id="parcours" className="py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase">
            Mon parcours
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Mon évolution
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Une progression construite autour de la formation, de la pratique
            et de projets personnels.
          </p>
        </div>

        <div className="relative">

          {/* Ligne uniquement sur desktop */}
          <div className="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-violet-500
            via-white/10
            to-transparent
          " />

          <div className="space-y-10 md:space-y-0">

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className={`
                    relative
                    md:w-1/2
                    ${isRight ? "md:ml-auto md:pl-12" : "md:pr-12"}
                  `}
                >

                  {/* POINT CENTRAL */}

                  <div className="
                    hidden
                    md:flex
                    absolute
                    top-7
                    w-10
                    h-10
                    rounded-full
                    bg-[#080b18]
                    border
                    border-violet-500/40
                    items-center
                    justify-center
                    z-10
                  "
                    style={{
                      [isRight ? "left" : "right"]: "-20px",
                    }}
                  >
                    <Icon className="text-violet-400" size={16} />
                  </div>

                  {/* CARTE */}

                  <div className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-6
                    md:p-7
                    hover:border-violet-500/30
                    hover:bg-white/[0.06]
                    transition
                  ">

                    <div className="flex items-center justify-between gap-4">

                      <span className="
                        text-sm
                        font-semibold
                        text-violet-400
                      ">
                        {item.year}
                      </span>

                      <div className="
                        md:hidden
                        w-10
                        h-10
                        rounded-xl
                        bg-violet-500/10
                        flex
                        items-center
                        justify-center
                      ">
                        <Icon className="text-violet-400" />
                      </div>

                    </div>

                    <h3 className="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-white
                      mt-4
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      text-gray-400
                      leading-7
                      mt-3
                    ">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}