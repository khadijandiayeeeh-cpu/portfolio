import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-violet-400 font-semibold text-center">
            À PROPOS DE MOI
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-center mt-4">
            Je transforme les idées en solutions numériques.
          </h2>

        </motion.div>


        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

          <div className="space-y-6 text-gray-400 leading-8 text-lg">

            <p>
              Je suis une développeuse passionnée par la création
              de solutions numériques modernes et utiles.
            </p>

            <p>
              Mon parcours m'a permis de travailler sur des projets
              web, mobiles et backend avec des technologies comme
              React, React Native, Node.js, Supabase et PostgreSQL.
            </p>

            <p>
              Je m'intéresse également à l'intelligence artificielle,
              à la cybersécurité et aux technologies capables
              d'améliorer les services destinés aux citoyens.
            </p>

            <p>
              Mon objectif est de continuer à progresser techniquement
              tout en travaillant sur des projets ayant un impact réel
              au Sénégal et à l'international.
            </p>

          </div>


          <div className="grid grid-cols-2 gap-5">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">

              <p className="text-4xl font-black text-violet-400">
                7+
              </p>

              <p className="text-gray-400 mt-3">
                Projets réalisés
              </p>

            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">

              <p className="text-4xl font-black text-violet-400">
                20+
              </p>

              <p className="text-gray-400 mt-3">
                Technologies
              </p>

            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">

              <p className="text-4xl font-black text-violet-400">
                Web
              </p>

              <p className="text-gray-400 mt-3">
                Applications modernes
              </p>

            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">

              <p className="text-4xl font-black text-violet-400">
                Mobile
              </p>

              <p className="text-gray-400 mt-3">
                React Native & Expo
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}