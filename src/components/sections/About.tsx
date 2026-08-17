import { motion } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaCode,
    title: "Développement",
    text: "Je conçois des applications web et mobiles avec une approche orientée utilisateur.",
  },
  {
    icon: FaLightbulb,
    title: "Résolution de problèmes",
    text: "J'aime transformer un besoin concret en solution numérique simple et efficace.",
  },
  {
    icon: FaRocket,
    title: "Projets concrets",
    text: "J'ai déjà conçu plusieurs applications et sites web autour de problématiques réelles.",
  },
  {
    icon: FaGraduationCap,
    title: "Apprentissage continu",
    text: "Je développe progressivement mes compétences en IA, cybersécurité et ingénierie logicielle.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase">
            À propos de moi
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Une développeuse qui construit
            <span className="text-violet-400"> des solutions.</span>
          </h2>
        </motion.div>


        {/* CONTENU */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Qui suis-je ?
            </h3>

            <div className="space-y-5 mt-6 text-gray-400 leading-8">

              <p>
                Je suis <strong className="text-white">Khadidiatou NDIAYE</strong>,
                étudiante en mathématiques, physique et informatique à
                l'Université Amadou Makhtar Mbow, avec un intérêt particulier
                pour le développement logiciel et les technologies numériques.
              </p>

              <p>
                Je développe des{" "}
                <span className="text-violet-400 font-medium">
                  applications mobiles, des sites web et des solutions backend
                </span>
                , en cherchant toujours à transformer une idée en produit
                réellement utilisable.
              </p>

              <p>
                À travers mes projets comme{" "}
                <strong className="text-white">
                  SenApp, Diant Bi, EcoTech, TrezoBank et Teranga Saveur
                </strong>
                , j'expérimente différentes architectures, interfaces et
                technologies afin de renforcer mes compétences par la pratique.
              </p>

            </div>

          </motion.div>


          {/* CARTE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-6
              md:p-8
            "
          >

            <div className="grid sm:grid-cols-2 gap-4">

              {highlights.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    className="
                      p-5
                      rounded-2xl
                      bg-white/[0.03]
                      border
                      border-white/5
                      hover:border-violet-500/30
                      hover:bg-violet-500/5
                      transition
                    "
                  >

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-violet-500/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon className="text-violet-400" />
                    </div>

                    <h4 className="text-white font-bold mt-4">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500 leading-6 mt-2">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}