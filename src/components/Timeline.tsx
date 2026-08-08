import { motion } from "framer-motion";
import { timeline } from "../data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 bg-[#050816]">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center"
        >
          Mon Parcours
        </motion.h2>

        <p className="text-center text-gray-400 mt-6">
          Mon évolution en tant que développeuse.
        </p>

        <div className="relative mt-24">

          <div className="absolute left-8 top-0 bottom-0 w-1 bg-violet-600 rounded-full"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .15 }}
              className="flex gap-8 mb-16 relative"
            >

              <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold z-10">
                {index + 1}
              </div>

              <div className="flex-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

                <span className="text-violet-400 text-sm font-bold">

                  {item.year}

                </span>

                <h3 className="text-2xl font-bold mt-2">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-5 leading-8">

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}