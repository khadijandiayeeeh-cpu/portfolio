import { motion } from "framer-motion";

const technologies = [
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Firebase",
  "Git",
  "GitHub",
  "Python",
  "REST API",
  "JWT",
  "Docker",
  "OpenAI"
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-[#050816]">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            Stack technique
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
            Les technologies utilisées pour concevoir mes applications,
            plateformes web et solutions mobiles.
          </p>

        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-16">

          {technologies.map((technology, index) => (

            <motion.div
              key={technology}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.03
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.03
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                text-center
                hover:border-violet-500/50
                hover:bg-violet-500/10
                transition
              "
            >

              <div className="w-10 h-10 mx-auto rounded-xl bg-violet-500/20 flex items-center justify-center">

                <span className="text-violet-400 font-bold">
                  {technology.charAt(0)}
                </span>

              </div>

              <p className="mt-4 text-white font-medium">
                {technology}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}