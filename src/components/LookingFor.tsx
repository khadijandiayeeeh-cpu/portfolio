import { motion } from "framer-motion";

const opportunities = [
  "Développeuse Full Stack",
  "Développeuse React / React Native",
  "Développeuse Backend",
  "Développeuse IA",
  "Stage ou premier emploi en informatique",
  "Opportunités internationales et remote"
];

export default function LookingFor() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="rounded-[40px] border border-violet-500/20 bg-violet-500/5 p-10 md:p-16">

          <p className="text-violet-400 font-semibold">
            OBJECTIF PROFESSIONNEL
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Je recherche ma prochaine opportunité.
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl leading-8">
            Je souhaite rejoindre une équipe où je pourrai mettre
            mes compétences techniques en pratique, apprendre auprès
            de professionnels expérimentés et contribuer à des projets
            ambitieux.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-10">

            {opportunities.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05
                }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/20 border border-white/5"
              >

                <span className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />

                <span className="text-gray-200">
                  {item}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}