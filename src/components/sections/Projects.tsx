import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-violet-400 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white mt-3">
            Mes projets
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Quelques projets que j'ai conçus en développement mobile,
            web et backend.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

          {projects.map((project, index) => (

            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white/[0.04]
                border
                border-white/10
                hover:border-violet-500/30
                transition
              "
            >

              {/* IMAGE */}

              <div className="h-56 overflow-hidden bg-gradient-to-br from-violet-700 to-blue-900">

                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>


              {/* CONTENU */}

              <div className="p-6">

                <span className="text-sm text-violet-400 font-medium">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {project.name}
                </h3>

                <p className="text-gray-400 leading-7 mt-3">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.slice(0, 4).map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-violet-500/10
                        text-violet-300
                        text-xs
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* BOUTONS */}

                <div className="flex gap-3 mt-7">

                  <Link
                    to={`/projects/${project.slug}`}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-4
                      py-3
                      rounded-xl
                      bg-violet-600
                      hover:bg-violet-500
                      transition
                      text-sm
                      font-semibold
                    "
                  >
                    <FaExternalLinkAlt size={12} />
                    Voir le projet
                  </Link>


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-12
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      hover:bg-white/5
                      transition
                    "
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}