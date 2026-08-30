
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
      "Une application mobile pensée pour réunir les services, la mobilité, les commerces et les informations utiles au Sénégal.",
    longDescription:
      "SenApp est un projet de plateforme numérique conçu pour simplifier l'accès aux services du quotidien au Sénégal. L'application rassemble dans une même expérience différents besoins comme la recherche de commerces et de restaurants, la découverte de lieux utiles, la mobilité, le tourisme et les services de proximité. L'ambition du projet est de créer un véritable point d'accès numérique aux services disponibles dans les différentes localités du pays, avec une approche basée sur la géolocalisation et les données territoriales.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
    features: [
      "Recherche de services à proximité",
      "Géolocalisation des points d'intérêt",
      "Découverte de restaurants et commerces",
      "Recherche de transports et solutions de mobilité",
      "Informations sur les lieux utiles",
      "Découverte touristique du Sénégal",
      "Intégration de solutions de paiement mobile",
      "Exploitation de données territoriales et statistiques",
    ],
    images: [
      "/projects/senapp/1.WebP",
      "/projects/senapp/2.WebP",
      "/projects/senapp/3.WebP",
      "/projects/senapp/4.WebP",
    ],
  },

  "diant-bi": {
    title: "Diant Bi",
    category: "Application mobile",
    description:
      "Une plateforme numérique sénégalaise qui facilite la recherche et la mise en relation autour de l'immobilier, des véhicules et des services.",
    longDescription:
      "Diant Bi est une plateforme mobile développée pour faciliter la mise en relation entre les personnes qui proposent des biens ou des services et celles qui recherchent des opportunités. Le projet rassemble plusieurs catégories importantes dans une même application : immobilier, terrains, maisons, véhicules et services. L'objectif est de proposer un espace numérique local permettant de publier, découvrir et rechercher facilement des annonces tout en rapprochant directement vendeurs, propriétaires, prestataires et clients.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
    features: [
      "Publication d'annonces immobilières",
      "Recherche de terrains et de biens immobiliers",
      "Vente et location de véhicules",
      "Référencement de services et prestataires",
      "Recherche et consultation d'annonces",
      "Gestion des profils utilisateurs",
      "Ajout et stockage d'images",
      "Mise en relation entre offreurs et demandeurs",
    ],
    images: [
      "/projects/diant-bi/1.WebP",
      "/projects/diant-bi/2.WebP",
      "/projects/diant-bi/3.WebP",
      "/projects/diant-bi/4.WebP",
    ],
  },

  ecotech: {
    title: "EcoTech",
    category: "Site web",
    description:
      "Un site web professionnel dédié aux solutions solaires, électriques et de sécurité pour les particuliers et les entreprises.",
    longDescription:
      "EcoTech est un projet web réalisé pour présenter les activités et les solutions d'une entreprise spécialisée dans les domaines de l'énergie et de la sécurité. Le site permet de mettre en avant les solutions solaires, les installations électriques ainsi que les systèmes de sécurité proposés aux particuliers et aux professionnels. L'objectif est de donner à l'entreprise une présence numérique professionnelle et de permettre aux visiteurs de comprendre rapidement les services proposés.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    features: [
      "Présentation des solutions solaires",
      "Présentation des installations électriques",
      "Présentation des solutions de sécurité",
      "Présentation des services de l'entreprise",
      "Interface responsive",
      "Navigation simple et intuitive",
      "Mise en valeur des prestations",
      "Expérience adaptée aux appareils mobiles",
    ],
    images: [
      "/projects/ecotech/1.WebP",
      "/projects/ecotech/2.WebP",
      "/projects/ecotech/3.WebP",
      "/projects/ecotech/4.WebP",
    ],
    github:
      "https://github.com/khadijandiayeeeh-cpu/ecotech/",
    demo:
      "https://ecotechsn.netlify.app/",
  },

  trezobank: {
    title: "TrezoBank",
    category: "Site web",
    description:
      "Une expérience web inspirée des plateformes bancaires numériques, centrée sur la simplicité et l'expérience utilisateur.",
    longDescription:
      "TrezoBank est un projet web orienté vers l'univers de la fintech et des services bancaires numériques. Le projet explore la conception d'une interface bancaire claire permettant de présenter des services financiers et d'organiser les informations importantes dans un espace numérique. Une attention particulière a été portée à la hiérarchie visuelle, à la navigation et à l'expérience utilisateur afin de créer une interface qui se rapproche des standards des plateformes financières modernes.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: [
      "Tableau de bord bancaire",
      "Présentation de services financiers",
      "Organisation claire des informations",
      "Interface orientée fintech",
      "Navigation fluide",
      "Design responsive",
      "Composants d'interface réutilisables",
      "Expérience utilisateur intuitive",
    ],
    images: [
      "/projects/trezobank/1.WebP",
      "/projects/trezobank/2.WebP",
      "/projects/trezobank/3.WebP",
      "/projects/trezobank/4.WebP",
    ],
    github:
      "https://github.com/khadijandiayeeeh-cpu/trezobank",
    demo:
      "https://trezobank.netlify.app/",
  },

  "teranga-saveurs": {
    title: "Teranga Saveurs",
    category: "Site web",
    description:
      "Un site web qui met en valeur la richesse de la gastronomie sénégalaise à travers une expérience numérique moderne.",
    longDescription:
      "Teranga Saveurs est un projet web consacré à la découverte et à la valorisation de la gastronomie sénégalaise. Le site présente différentes spécialités culinaires et met l'accent sur leur présentation visuelle afin de faire découvrir la diversité des plats et des produits du Sénégal. Le projet associe identité culturelle, design web et expérience utilisateur pour créer une vitrine numérique accessible aussi bien sur ordinateur que sur mobile.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    features: [
      "Présentation des spécialités sénégalaises",
      "Mise en valeur des plats et produits",
      "Présentation visuelle des contenus",
      "Navigation intuitive",
      "Interface responsive",
      "Design adapté aux appareils mobiles",
      "Organisation claire des informations",
      "Expérience utilisateur simple et accessible",
    ],
    images: [
      "/projects/teranga-saveurs/1.WebP",
      "/projects/teranga-saveurs/2.WebP",
      "/projects/teranga-saveurs/3.WebP",
      "/projects/teranga-saveurs/4.WebP",
    ],
    github:
      "https://github.com/khadijandiayeeeh-cpu/teranga-saveurs",
    demo:
      "https://teranga-saveurs.netlify.app/",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();

  const project =
    projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main
        className="
          min-h-screen
          bg-[#050816]
          text-white
          flex
          items-center
          justify-center
          px-6
        "
      >
        <div className="text-center">
          <h1 className="text-4xl font-black">
            Projet introuvable
          </h1>

          <Link
            to="/#projects"
            className="
              inline-flex
              mt-6
              px-6
              py-3
              rounded-xl
              bg-violet-600
            "
          >
            Retour aux projets
          </Link>
        </div>
      </main>
    );
  }

  /*
   * Les boutons GitHub et Ouvrir le projet
   * sont masqués uniquement pour SenApp et Diant Bi.
   */
  const isMobileApp =
    slug === "senapp" ||
    slug === "diant-bi";

  return (
    <main
      className="
        min-h-screen
        bg-[#050816]
        text-white
      "
    >
      {/* =========================
          HEADER
      ========================== */}

      <section
        className="
          relative
          pt-32
          pb-20
          px-6
          overflow-hidden
        "
      >
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

        <div
          className="
            relative
            max-w-6xl
            mx-auto
          "
        >
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
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-12"
          >
            <span
              className="
                text-violet-400
                font-semibold
              "
            >
              {project.category}
            </span>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                mt-4
              "
            >
              {project.title}

              <span className="text-violet-500">
                .
              </span>
            </h1>

            <p
              className="
                text-xl
                text-gray-400
                max-w-3xl
                leading-8
                mt-6
              "
            >
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          PRESENTATION
      ========================== */}

      <section
        className="
          px-6
          pb-24
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            grid
            lg:grid-cols-[1.5fr_1fr]
            gap-12
          "
        >
          {/* CONTENU */}

          <div>
            <h2
              className="
                text-3xl
                font-bold
              "
            >
              À propos du projet
            </h2>

            <p
              className="
                text-gray-400
                leading-8
                mt-6
              "
            >
              {project.longDescription}
            </p>

            <h2
              className="
                text-3xl
                font-bold
                mt-14
              "
            >
              Fonctionnalités
            </h2>

            <div
              className="
                grid
                sm:grid-cols-2
                gap-4
                mt-6
              "
            >
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
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <FaCode
                      className="text-violet-400"
                    />

                    <span
                      className="
                        text-gray-300
                      "
                    >
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              INFORMATIONS
          ========================== */}

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
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Technologies
              </h3>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  mt-5
                "
              >
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

              {/* =========================
                  BOUTONS
                  Uniquement pour les sites web
              ========================== */}

              {!isMobileApp && (
                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    mt-8
                  "
                >
                  {/* GITHUB */}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  )}

                  {/* DEMO */}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          GALERIE
      ========================== */}

      <section
        className="
          px-6
          pb-28
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
          "
        >
          <div className="mb-10">
            <p
              className="
                text-violet-400
                font-semibold
                uppercase
                tracking-widest
                text-sm
              "
            >
              Galerie
            </p>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-black
                mt-3
              "
            >
              Présentation du projet
            </h2>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              gap-6
            "
          >
            {project.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.04, 0.12),
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
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    h-auto
                    object-cover
                    hover:scale-[1.03]
                    transition-transform
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
