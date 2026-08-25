import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="text-violet-400 font-semibold mb-3">
            À PROPOS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Qui suis-je ?
          </h2>

          <p className="mt-6 text-gray-400 leading-8 text-lg">
            Je suis une développeuse passionnée par la création de
            solutions numériques. Je conçois principalement des
            applications web, mobiles et des solutions backend.
          </p>

        </motion.div>


        {/* CARTES */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* FAÇON DE TRAVAILLER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="
              p-8
              rounded-3xl
              bg-white/5
              border
              border-white/10
              transition-colors
              duration-300
              hover:border-violet-500/30
            "
          >

            <h3 className="text-2xl font-bold text-white mb-4">
              Ma façon de travailler
            </h3>

            <p className="text-gray-400 leading-8">
              Je pars d'un besoin concret, j'analyse le problème puis
              je construis une solution simple, moderne et adaptée
              aux utilisateurs.
            </p>

          </motion.div>


          {/* OBJECTIF */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: 0.04 }}
            className="
              p-8
              rounded-3xl
              bg-white/5
              border
              border-white/10
              transition-colors
              duration-300
              hover:border-violet-500/30
            "
          >

            <h3 className="text-2xl font-bold text-white mb-4">
              Mon objectif
            </h3>

            <p className="text-gray-400 leading-8">
              Développer continuellement mes compétences à travers
              des projets concrets et contribuer à la création de
              produits numériques utiles dans le web, le mobile
              et les technologies émergentes.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}