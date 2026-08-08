import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity:0,y:50 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0.8 }}
          className="text-5xl font-bold text-center"
        >
          Mes Projets
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
          Une sélection de projets que j'ai réalisés en développement web,
          mobile et backend.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">

          {projects.map((project,index)=>(
            <motion.div
              key={project.id}
              initial={{ opacity:0,y:60 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*0.15 }}
              whileHover={{ scale:1.04 }}
              className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
            >

              <img

src={project.image}

alt={project.name}

className="w-full h-60 object-cover"

/>

              <div className="p-7">

                <p className="text-gray-300 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech)=>(
                    <span
                      key={tech}
                      className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-5 mt-8">

                  <a
href="#"
                    className="flex items-center gap-2 text-white hover:text-violet-400"
                  >
                    <FaGithub/>
                    GitHub
                  </a>

                  <a
href="#"
                    className="flex items-center gap-2 text-white hover:text-violet-400"
                  >
                    <FaExternalLinkAlt/>
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;