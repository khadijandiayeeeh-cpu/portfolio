import { motion } from "framer-motion";

import govaction from "../assets/images/govaction.png";
import diantbi from "../assets/images/diantbi.png";

const featuredProjects = [
  {
    title: "Senapp",
    image: govaction,
    description:
      "Plateforme Senapp permettant les signalements citoyens, les paiements, l'identité numérique et les tableaux de bord administratifs.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Supabase",
      "PostgreSQL"
    ]
  },

  {
    title: "Diant Bi",
    image: diantbi,
    description:
      "Marketplace moderne spécialisée dans les véhicules, les terrains et les services.",
    technologies: [
      "React",
      "Node.js",
      "Supabase"
    ]
  }
];

export default function FeaturedProjects() {

  return (

<section className="py-32 bg-[#050816]">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

Projets en vedette

</h2>

<p className="text-center text-gray-400 mt-5">

Mes réalisations les plus ambitieuses.

</p>

<div className="space-y-24 mt-20">

{

featuredProjects.map((project,index)=>(

<motion.div

key={project.title}

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

className={`grid lg:grid-cols-2 gap-12 items-center ${
index%2!==0?"lg:flex-row-reverse":""
}`}

>

<div>

<img

src={project.image}

alt={project.title}

className="rounded-3xl shadow-2xl border border-white/10"

/>

</div>

<div>

<h2 className="text-4xl font-bold">

{project.title}

</h2>

<p className="text-gray-400 mt-8 leading-8">

{project.description}

</p>

<div className="flex flex-wrap gap-3 mt-8">

{

project.technologies.map((tech)=>(

<span

key={tech}

className="bg-violet-500/20 px-4 py-2 rounded-full"

>

{tech}

</span>

))

}

</div>

<button

className="mt-10 bg-violet-600 px-8 py-4 rounded-xl hover:bg-violet-500 duration-300"

>

Voir le projet

</button>

</div>

</motion.div>

))

}

</div>

</div>

</section>

)

}