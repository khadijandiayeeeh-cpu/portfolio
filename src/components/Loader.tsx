import { motion } from "framer-motion";

export default function Loader(){

return(

<div className="fixed inset-0 bg-[#050816] flex justify-center items-center z-[9999]">

<motion.div

animate={{

rotate:360

}}

transition={{

repeat:Infinity,

duration:1,

ease:"linear"

}}

className="w-20 h-20 rounded-full border-4 border-violet-500 border-t-transparent"

>

</motion.div>

</div>

)

}