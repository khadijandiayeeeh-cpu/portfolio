import { motion } from "framer-motion";

export default function BannerProjects() {

  return (

    <section className="py-28">

      <motion.div

        initial={{opacity:0}}

        whileInView={{opacity:1}}

        transition={{duration:1}}

        className="max-w-6xl mx-auto rounded-[40px]
        bg-gradient-to-r
        from-violet-700
        via-blue-700
        to-cyan-500
        p-20"

      >

        <h2 className="text-6xl font-black">

          Construire le futur,

          <br/>

          un projet à la fois.

        </h2>

        <p className="mt-8 text-xl">

          Applications web • Mobile • IA • Cybersécurité • GovTech

        </p>

      </motion.div>

    </section>

  );

}