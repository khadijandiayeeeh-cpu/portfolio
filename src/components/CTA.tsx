import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-violet-500/20
            bg-gradient-to-br
            from-violet-600/15
            via-purple-600/10
            to-blue-600/10
            p-8
            md:p-12
            text-center
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              left-1/2
              -top-32
              -translate-x-1/2
              w-72
              h-72
              rounded-full
              bg-violet-600/20
              blur-[100px]
            "
          />

          <div className="relative">

            <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase">
              Une opportunité ?
            </p>

            <h2
              className="
                mt-4
                text-3xl
                md:text-5xl
                font-black
                text-white
              "
            >
              Échangeons sur vos besoins.
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                mx-auto
                text-gray-400
                leading-7
              "
            >
              Je suis ouverte aux opportunités professionnelles,
              collaborations et projets numériques.
            </p>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                px-7
                py-3.5
                rounded-xl
                bg-white
                text-black
                font-semibold
                hover:bg-gray-200
                transition
              "
            >
              Me contacter

              <FaArrowRight size={13} />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}