import { motion } from "framer-motion";

const timeline = [

{
year:"2024",
title:"Développement Web",
description:"Création de plusieurs applications web."
},

{
year:"2025",
title:"Développement Mobile",
description:"Applications React Native."
},

{
year:"2026",
title:"GovAction",
description:"Plateforme GovTech."
},

{
year:"2026",
title:"Intelligence Artificielle",
description:"Développement d'assistants IA."
},

{
year:"2026",
title:"Cybersécurité",
description:"Formation avancée."
}

]

export default function Experience(){

return(

<section className="py-28 bg-[#090b1a]">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20">

Mon Parcours

</h2>

<div className="space-y-12">

{

timeline.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,x:-80}}

whileInView={{opacity:1,x:0}}

transition={{delay:index*0.2}}

className="border-l-4 border-violet-500 pl-8"

>

<h3 className="text-violet-400 text-xl">

{item.year}

</h3>

<h2 className="text-3xl font-bold mt-2">

{item.title}

</h2>

<p className="text-gray-300 mt-3">

{item.description}

</p>

</motion.div>

))

}

</div>

</div>

</section>

)

}