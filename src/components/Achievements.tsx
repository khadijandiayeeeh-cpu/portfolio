import { motion } from "framer-motion";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section className="py-32 bg-[#070B1A']">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.7}}
          className="text-5xl font-bold text-center"
        >
          Mes Réalisations
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Quelques chiffres qui résument mon parcours.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {achievements.map((item)=>(
            <motion.div
              key={item.title}
              whileHover={{
                y:-10,
                scale:1.05
              }}
              className="bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl p-10"
            >

              <h2 className="text-6xl font-black text-violet-500">

                {item.number}

              </h2>

              <h3 className="text-2xl font-bold mt-8">

                {item.title}

              </h3>

              <p className="text-gray-400 mt-5 leading-8">

                {item.description}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}