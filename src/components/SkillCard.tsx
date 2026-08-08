import { motion } from "framer-motion";

interface Props{
title:string
skills:string[]
}

export default function SkillCard({title,skills}:Props){

return(

<motion.div

whileHover={{
y:-10,
scale:1.02
}}

className="bg-white/5 rounded-3xl border border-white/10 p-8"

>

<h2 className="text-3xl font-bold mb-8 text-violet-400">

{title}

</h2>

<div className="flex flex-wrap gap-3">

{

skills.map(skill=>(

<div

key={skill}

className="px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500"

>

{skill}

</div>

))

}

</div>

</motion.div>

)

}