import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

const projects = {
  senapp: {
    title: "SenApp",
    category: "Application mobile",
    description:
      "Une application mobile pensée pour centraliser différents services utiles au quotidien au Sénégal.",
    longDescription:
      "SenApp est un projet conçu pour proposer une expérience numérique centralisée autour des services, de la mobilité, des commerces et des lieux utiles. L'objectif est de faciliter l'accès aux informations et services du quotidien depuis une seule application.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
    features: [
      "Recherche de services à proximité",
      "Localisation",
      "Découverte de restaurants et commerces",
      "Recherche de transports",
      "Informations sur les lieux utiles",
      "Interface mobile moderne",
    ],
    images: [
      "/projects/senapp/1.png",
      "/projects/senapp/2.png",
      "/projects/senapp/3.png",
      "/projects/senapp/4.png",
    ],
    github: "#",
    demo: "#",
  },

  "diant-bi": {
    title: "Diant Bi",
    category: "Plateforme numérique",
    description:
      "Une plateforme dédiée à l'immobilier, aux véhicules et aux services au Sénégal.",
    longDescription:
      "Diant Bi est une plateforme numérique conçue pour faciliter la mise en relation entre particuliers, propriétaires, vendeurs et prestataires. Le projet rassemble plusieurs catégories de services dans une même expérience.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
    features: [
      "Annonces immobilières",
      "Vente et location de véhicules",
      "Services et prestataires",
      "Recherche d'annonces",
      "Gestion des utilisateurs",
      "Stockage des images",
    ],
    images: [
      "/projects/diant-bi/1.png",
      "/projects/diant-bi/2.png",
      "/projects/diant-bi/3.png",
      "/projects/diant-bi/4.png",
    ],
    github: "#",
    demo: "#",
  },

  ecotech: {
    title: "EcoTech",
    category: "Application / plateforme",
    description:
      "Une solution numérique autour de l'innovation et des enjeux environnementaux.",
    longDescription:
      "EcoTech est un projet qui explore la manière dont les technologies numériques peuvent contribuer à sensibiliser, informer et proposer des solutions autour des problématiques environnementales.",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Supabase",
    ],
    features: [
      "Interface moderne",
      "Présentation des solutions écologiques",
      "Gestion des contenus",
      "Expérience responsive",
      "Architecture moderne",
    ],
    images: [
      "/projects/ecotech/1.png",
      "/projects/ecotech/2.png",
      "/projects/ecotech/3.png",
    ],
    github: "#",
    demo: "#",
  },

  trezobank: {
    title: "TrezoBank",
    category: "Site web",
    description:
      "Une interface web moderne inspirée des services bancaires numériques.",
    longDescription:
      "TrezoBank est un projet web conçu autour de l'expérience utilisateur dans les services financiers numériques. Le projet met l'accent sur une interface claire, moderne et intuitive.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: [
      "Interface bancaire moderne",
      "Tableau de bord",
      "Présentation des services",
      "Design responsive",
      "Navigation fluide",
    ],
    images: [
      "/projects/trezobank/1.png",
      "/projects/trezobank/2.png",
      "/projects/trezobank/3.png",
    ],
    github: "#",
    demo: "#",
  },

  "teranga-saveurs": {
    title: "Teranga Saveurs",
    category: "Site web",
    description:
      "Un site web dédié à la découverte et à la valorisation de la gastronomie sénégalaise.",
    longDescription:
      "Teranga Saveurs est un projet web qui met en valeur la richesse de la gastronomie sénégalaise à travers une expérience visuelle moderne et accessible.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    features: [
      "Présentation des plats",
      "Interface responsive",
      "Navigation intuitive",
      "Mise en valeur des produits",
      "Design moderne",
    ],
    images: [
      "/projects/teranga-saveurs/1.png",
      "/projects/teranga-saveurs/2.png",
      "/projects/teranga-saveurs/3.png",
    ],
    github: "#",
    demo: "#",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black">Projet introuvable</h1>

          <Link
            to="/#projects"
            className="inline-flex mt-6 px-6 py-3 rounded-xl bg-violet-600"
          >
            Retour aux projets
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HEADER */}

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">

        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-96
            h-96
            bg-violet-600/20
            blur-[120px]
            rounded-full
          "
        />

        <div className="relative max-w-6xl mx-auto">

          <Link
            to="/#projects"
            className="
              inline-flex
              items-center
              gap-3
              text-gray-400
              hover:text-white
              transition
            "
          >
            <FaArrowLeft />
            Retour aux projets
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-12"
          >

            <span className="text-violet-400 font-semibold">
              {project.category}
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-4">
              {project.title}
              <span className="text-violet-500">.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl leading-8 mt-6">
              {project.description}
            </p>

          </motion.div>

        </div>
      </section>


      {/* PRESENTATION */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-12">

          <div>

            <h2 className="text-3xl font-bold">
              À propos du projet
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              {project.longDescription}
            </p>

            <h2 className="text-3xl font-bold mt-14">
              Fonctionnalités
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">

              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    p-5
                    rounded-2xl
                    bg-white/[0.04]
                    border
                    border-white/10
                  "
                >
                  <div className="flex items-center gap-3">

                    <FaCode className="text-violet-400" />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </div>
                </div>
              ))}

            </div>

          </div>


          {/* INFOS */}

          <div>

            <div
              className="
                sticky
                top-28
                p-7
                rounded-3xl
                bg-white/[0.04]
                border
                border-white/10
              "
            >

              <h3 className="text-xl font-bold">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2 mt-5">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-2
                      rounded-full
                      bg-violet-500/10
                      text-violet-300
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>


              <div className="flex flex-col gap-3 mt-8">

                <a
                  href={project.github}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-white/10
                    hover:bg-white/5
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-5
                    py-3
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-500
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Ouvrir le projet
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* GALERIE */}

      <section className="px-6 pb-28">

        <div className="max-w-6xl mx-auto">

          <div className="mb-10">

            <p className="text-violet-400 font-semibold uppercase tracking-widest text-sm">
              Galerie
            </p>

            <h2 className="text-3xl md:text-4xl font-black mt-3">
              Présentation du projet
            </h2>

          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {project.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                "
              >

                <img
                  src={image}
                  alt={`${project.title} - capture ${index + 1}`}
                  className="
                    w-full
                    h-auto
                    object-cover
                    hover:scale-[1.03]
                    transition
                    duration-500
                  "
                />

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}