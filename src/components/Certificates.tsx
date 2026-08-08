import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center"
        >
          Formations & Certifications
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Formation continue et perfectionnement.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {certificates.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >

              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

              <div className="p-8">

                <FaAward
                  size={45}
                  className="text-violet-400"
                />

                <h3 className="text-2xl font-bold mt-6">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-3">

                  {item.organization}

                </p>

                <span className="inline-block mt-6 bg-violet-500/20 px-4 py-2 rounded-full text-sm">

                  {item.year}

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}