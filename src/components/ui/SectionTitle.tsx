import { motion } from "framer-motion";

interface Props{

title:string

subtitle?:string

}

export default function SectionTitle({

title,

subtitle

}:Props){

return(

<motion.div

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.8

}}

className="text-center"

>

<h2 className="text-5xl font-black">

{title}

</h2>

{

subtitle&&(

<p className="mt-6 text-gray-400 max-w-2xl mx-auto">

{subtitle}

</p>

)

}

</motion.div>

)

}