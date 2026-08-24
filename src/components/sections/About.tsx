import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-violet-400 font-semibold mb-3">
            À PROPOS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Qui suis-je ?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8 text-lg">
            Je suis une développeuse passionnée par la création de
            solutions numériques. Je travaille principalement sur des
            applications web, mobiles et des solutions backend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ma façon de travailler
            </h3>

            <p className="text-gray-400 leading-8">
              J'aime partir d'un besoin concret, comprendre le problème
              puis construire une solution simple, moderne et adaptée
              aux utilisateurs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Mon objectif
            </h3>

            <p className="text-gray-400 leading-8">
              Continuer à développer mes compétences à travers des
              projets concrets et contribuer à des produits numériques
              utiles, particulièrement dans les domaines du web,
              du mobile et des technologies émergentes.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}