import { motion } from "framer-motion";

export default function Quote() {

  return (

<section className="py-32">

<motion.div

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:1}}

className="max-w-5xl mx-auto rounded-[40px]
bg-gradient-to-r
from-violet-700
to-indigo-700
p-20 text-center"

>

<h2 className="text-5xl font-black leading-tight">

"J'aime transformer des idées ambitieuses en applications utiles, modernes et performantes."

</h2>

<p className="mt-10 text-xl">

— Khadija Ndiaye

</p>

</motion.div>

</section>

)

}