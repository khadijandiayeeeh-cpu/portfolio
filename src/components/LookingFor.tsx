import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

export default function LookingFor() {
  return (
    <section
      id="objectif"
      className="py-24 px-6 relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-8
            md:p-12
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              -right-32
              -top-32
              w-72
              h-72
              rounded-full
              bg-violet-600/20
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              -left-32
              -bottom-32
              w-64
              h-64
              rounded-full
              bg-blue-600/10
              blur-[90px]
            "
          />


          <div className="relative grid lg:grid-cols-[auto_1fr] gap-8 items-start">

            {/* ICONE */}

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-violet-500/10
                border
                border-violet-500/20
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <FaBriefcase
                size={26}
                className="text-violet-400"
              />

            </div>


            {/* TEXTE */}

            <div>

              <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm">
                Objectif professionnel
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
                Prête à relever de nouveaux défis
              </h2>

              <p className="text-gray-400 leading-8 mt-6 max-w-4xl">
                Je souhaite intégrer une entreprise, une startup ou une équipe
                technologique dans laquelle je pourrai mettre en pratique mes
                compétences en développement web et mobile, tout en continuant
                à progresser sur des technologies modernes.
              </p>

              <p className="text-gray-400 leading-8 mt-4 max-w-4xl">
                Mon objectif à moyen terme est de renforcer mon expertise en
                ingénierie logicielle, en intelligence artificielle et en
                cybersécurité afin de participer à la conception de solutions
                numériques innovantes et utiles.
              </p>


              {/* POINTS */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="flex gap-3 items-start">

                  <div className="mt-1 text-violet-400">
                    <FaCode />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Apprendre par la pratique
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Participer à des projets réels et progresser au contact
                      d'une équipe expérimentée.
                    </p>
                  </div>

                </div>


                <div className="flex gap-3 items-start">

                  <div className="mt-1 text-violet-400">
                    <FaCode />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Créer des solutions utiles
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Transformer des besoins concrets en produits numériques
                      simples et efficaces.
                    </p>
                  </div>

                </div>

              </div>


              {/* CTA */}

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-9
                  px-6
                  py-3
                  rounded-xl
                  bg-violet-600
                  hover:bg-violet-500
                  transition
                  font-semibold
                "
              >

                Échanger avec moi

                <FaArrowRight size={14} />

              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}