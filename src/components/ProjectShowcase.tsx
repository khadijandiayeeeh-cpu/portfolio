import { motion } from "framer-motion";

const showcase = [
  {
    title: "GovAction",
    subtitle: "Plateforme GovTech",
    description:
      "Application permettant aux citoyens de signaler des problèmes, d'effectuer des paiements administratifs et d'interagir avec les services publics.",
    image: "/images/govaction.png",
    technologies: ["React Native", "Expo", "Supabase", "Node.js"]
  },
  {
    title: "Diant Bi",
    subtitle: "Marketplace",
    description:
      "Plateforme de vente de véhicules, terrains et services avec vérification des annonces.",
    image: "/images/diantbi.png",
    technologies: ["React", "Node.js", "PostgreSQL"]
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-32 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Projets phares
        </h2>

        <div className="mt-24 space-y-20">
          {showcase.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-3xl border border-white/10 shadow-2xl"
              />

              <div>
                <p className="text-violet-400 uppercase tracking-widest">
                  {project.subtitle}
                </p>

                <h3 className="text-4xl font-bold mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-8 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-10 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 duration-300">
                  Voir les détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}