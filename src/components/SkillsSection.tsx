import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center"
        >
          Mes Compétences
        </motion.h2>

        <p className="text-center text-gray-400 mt-6">
          Les technologies que j'utilise au quotidien.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {skillCategories.map((category) => (

            <motion.div
              key={category.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >

              <div className={`bg-gradient-to-r ${category.color} h-2`} />

              <div className="p-8">

                <h3 className="text-3xl font-bold">

                  {category.title}

                </h3>

                <div className="flex flex-wrap gap-3 mt-8">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="bg-violet-500/10 border border-violet-500/20 px-4 py-2 rounded-full hover:bg-violet-600 transition"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}