import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32">

      <motion.div

        initial={{ opacity: 0, scale: .9 }}

        whileInView={{ opacity: 1, scale: 1 }}

        transition={{ duration: .8 }}

        className="max-w-6xl mx-auto
        rounded-[40px]
        bg-gradient-to-r
        from-violet-700
        via-indigo-700
        to-blue-600
        p-20
        text-center"

      >

        <h2 className="text-6xl font-black">

          Donnons vie à votre projet.

        </h2>

        <p className="mt-8 text-xl max-w-3xl mx-auto">

          Que ce soit une application web,
          mobile ou une plateforme innovante,
          je peux transformer votre idée en réalité.

        </p>

        <button
          className="mt-12
          bg-white
          text-black
          px-10
          py-5
          rounded-2xl
          font-bold
          hover:scale-105
          duration-300"
        >

          Me Contacter

        </button>

      </motion.div>

    </section>
  );
}