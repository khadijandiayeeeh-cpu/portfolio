import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaCheck,
  FaRocket,
} from "react-icons/fa";

type Project = {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  images: string[];
  github?: string;
  demo?: string;
};

const projects: Record<string, Project> = {
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
      "Un site web moderne conçu pour présenter une entreprise et ses services à travers une interface claire et responsive.",

    longDescription:
      "EcoTech est un projet web réalisé avec une approche moderne et responsive. Le site a été conçu pour proposer une expérience simple, claire et adaptée aux différents appareils. L'objectif était de créer une présence digitale professionnelle tout en mettant en valeur les services et les informations importantes de l'entreprise.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "EmailJS",
    ],

    features: [
      "Design responsive",
      "Interface moderne",
      "Présentation des services",
      "Navigation fluide",
      "Formulaire de contact",
      "Intégration EmailJS",
      "Adaptation mobile et desktop",
    ],

    // Les captures ne sont volontairement pas affichées
    // pour les sites web.
    images: [],

    github:
      "https://github.com/khadijandiayeeeh-cpu/ecotech/",

    demo:
      "https://ecotechsn.netlify.app/",
  },

  trezobank: {
    title: "TrezoBank",
    category: "Site web",

    description:
      "Une interface web bancaire moderne pensée pour présenter une expérience digitale simple et professionnelle.",

    longDescription:
      "TrezoBank est un projet de site web orienté vers l'univers bancaire et financier. Le projet met l'accent sur une interface moderne, une organisation claire des informations et une expérience utilisateur adaptée aux différents écrans. Il m'a permis de travailler davantage sur la conception d'interfaces web professionnelles.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Interface bancaire moderne",
      "Design responsive",
      "Navigation structurée",
      "Présentation des services",
      "Interface adaptée aux utilisateurs",
      "Expérience mobile et desktop",
    ],

    images: [],

    github:
      "https://github.com/khadijandiayeeeh-cpu/trezobank",

    demo:
      "https://trezobank.netlify.app/",
  },

  "teranga-saveurs": {
    title: "Teranga Saveurs",
    category: "Site web",

    description:
      "Un site web dédié à la découverte et à la présentation de saveurs et produits inspirés de la gastronomie sénégalaise.",

    longDescription:
      "Teranga Saveurs est un projet web réalisé autour de l'univers de la gastronomie. Le site a été pensé pour présenter les produits et l'identité du projet à travers une interface visuelle moderne, simple et responsive. Ce projet m'a permis de travailler sur la présentation de contenu, l'organisation d'une interface et l'expérience utilisateur.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Présentation des produits",
      "Design responsive",
      "Interface moderne",
      "Navigation simple",
      "Organisation claire du contenu",
      "Expérience adaptée au mobile",
    ],

    images: [],

    github:
      "https://github.com/khadijandiayeeeh-cpu/teranga-saveurs",

    demo:
      "https://teranga-saveurs.netlify.app/",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const project = slug ? projects[slug] : undefined;

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-8">
            <FaCode className="text-3xl text-violet-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black">
            Projet introuvable
          </h1>

          <p className="text-gray-400 mt-5 leading-7">
            Le projet que vous recherchez n'existe pas ou n'est plus
            disponible.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors font-semibold"
          >
            <FaArrowLeft />
            Retour au portfolio
          </Link>
        </div>
      </main>
    );
  }

  const isMobileApp =
    slug === "senapp" ||
    slug === "diant-bi";

  const isWebsite = project.category === "Site web";

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] rounded-full bg-violet-600/10 blur-[100px]" />

        <div className="absolute top-[35%] right-[-180px] w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[110px]" />

        <div className="absolute bottom-[-200px] left-[30%] w-[420px] h-[420px] rounded-full bg-fuchsia-600/5 blur-[100px]" />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <FaArrowLeft />
            Retour au portfolio
          </Link>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 pt-16 md:pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Category */}

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold">
              {isMobileApp ? <FaMobileAlt /> : <FaGlobe />}
              {project.category}
            </div>

            {/* Title */}

            <h1 className="mt-7 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
              {project.title}
            </h1>

            {/* Description */}

            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl">
              {project.description}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-9">
              {/* Website buttons */}

              {isWebsite && project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-colors font-bold shadow-lg shadow-violet-900/20"
                >
                  <FaExternalLinkAlt />
                  Ouvrir le projet
                </a>
              )}

              {isWebsite && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors font-semibold"
                >
                  <FaGithub />
                  Voir le code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MOBILE APP GALLERY
          UNIQUEMENT POUR SENAPP ET DIANT BI
      ========================================================= */}

      {isMobileApp && project.images.length > 0 && (
        <section className="relative z-10 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-violet-400 font-semibold">
                Aperçu
              </p>

              <h2 className="text-3xl md:text-4xl font-black mt-2">
                Découvrez l'application
              </h2>

              <p className="text-gray-400 mt-3">
                Quelques aperçus de l'interface et de l'expérience utilisateur.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {project.images.map((image, index) => (
                <div
                  key={image}
                  className="group relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10"
                >
                  <div className="aspect-[9/16] overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} - capture ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={1067}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-white/70">
                      Écran {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      

      {/* =========================================================
          DESCRIPTION
      ========================================================= */}

      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_0.6fr] gap-10">
          {/* Long description */}

          <article className="rounded-[2rem] bg-white/[0.035] border border-white/10 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <FaRocket className="text-violet-400" />
              </div>

              <h2 className="text-2xl md:text-3xl font-black">
                À propos du projet
              </h2>
            </div>

            <p className="text-gray-400 leading-8 mt-7">
              {project.longDescription}
            </p>
          </article>

          {/* Project information */}

          <aside className="rounded-[2rem] bg-white/[0.035] border border-white/10 p-8 md:p-10 h-fit">
            <h2 className="text-2xl font-black">
              Informations
            </h2>

            <div className="mt-7 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Type
                </p>

                <p className="text-gray-200 font-semibold mt-2">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Technologies
                </p>

                <p className="text-gray-300 font-semibold mt-2">
                  {project.technologies.length} technologies
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Fonctionnalités
                </p>

                <p className="text-gray-300 font-semibold mt-2">
                  {project.features.length} fonctionnalités
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGIES
      ========================================================= */}

      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-400 font-semibold">
              Stack technique
            </p>

            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Technologies utilisées
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="px-5 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-200 font-medium"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-400 font-semibold">
              Fonctionnalités
            </p>

            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Ce que j'ai développé
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-violet-500/20 hover:bg-white/[0.05] transition-colors"
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <FaCheck className="text-violet-400 text-sm" />
                </div>

                <p className="text-gray-300 leading-6">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/10 to-blue-600/10 p-8 md:p-12 text-center">
            <p className="text-violet-400 font-semibold">
              Merci pour votre visite
            </p>

            <h2 className="text-3xl md:text-5xl font-black mt-3">
              Vous souhaitez voir mes autres projets ?
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
              Découvrez l'ensemble de mes réalisations en développement web,
              mobile et backend.
            </p>

            <Link
              to="/#projects"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-colors font-bold"
            >
              <FaArrowLeft />
              Voir mes projets
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Khadidiatou Ndiaye
          </p>

          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </footer>
    </main>
  );
}