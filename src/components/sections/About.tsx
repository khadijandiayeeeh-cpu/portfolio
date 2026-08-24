import { motion } from "framer-motion";

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
            Une développeuse qui construit{" "}
            <span className="text-violet-400">
              des solutions.
            </span>
          </h2>
        </motion.div>

        {/* CONTENU */}
        <div className="max-w-4xl mx-auto">

          {/* TEXTE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Qui suis-je ?
            </h3>

            <div className="space-y-5 mt-6 text-gray-400 leading-8">

              <p>
                Je suis{" "}
                <strong className="text-white">
                  Khadidiatou NDIAYE
                </strong>
                , étudiante en mathématiques, physique et informatique à
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

        </div>
      </div>
    </section>
  );
}