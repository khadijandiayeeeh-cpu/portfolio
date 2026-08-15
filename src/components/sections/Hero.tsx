import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-5
        sm:px-8
        lg:px-12
        pt-28
        pb-16
        flex
        items-center
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          w-[280px]
          h-[280px]
          sm:w-[450px]
          sm:h-[450px]
          lg:w-[600px]
          lg:h-[600px]
          bg-violet-600/20
          blur-[100px]
          sm:blur-[140px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================================================= */}
          {/* TEXTE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >

            {/* DISPONIBILITÉ */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/20
                text-green-400
                text-sm
                mb-6
              "
            >

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              Disponible pour travailler

            </div>


            {/* PETIT TITRE */}

            <p className="text-violet-400 font-semibold text-lg">
              Bonjour, je suis
            </p>


            {/* NOM */}

            <h1
              className="
                mt-2
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-black
                tracking-tight
                text-white
              "
            >
              Khadija
              <span className="text-violet-500">.</span>
            </h1>


            {/* ANIMATION */}

            <div className="mt-5 min-h-[44px]">

              <TypeAnimation
                sequence={[
                  "Développeuse Full Stack",
                  2000,
                  "React Native Developer",
                  2000,
                  "Passionnée d'IA",
                  2000,
                  "Cybersécurité",
                  2000,
                ]}
                repeat={Infinity}
                speed={45}
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  text-violet-400
                "
              />

            </div>


            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                text-gray-400
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
              Je conçois des applications web et mobiles modernes,
              des plateformes numériques et des solutions intelligentes
              avec l'intelligence artificielle.
            </p>


            {/* TECHNOLOGIES */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-2
                mt-7
              "
            >

              {[
                "React",
                "React Native",
                "Node.js",
                "Supabase",
                "IA",
                "Cybersecurity",
              ].map((tech) => (

                <span
                  key={tech}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    sm:text-sm
                    bg-white/5
                    border
                    border-white/10
                    text-gray-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>


            {/* BOUTONS */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-center
                lg:justify-start
                gap-3
                sm:gap-4
                mt-9
              "
            >

              <a
                href="#projects"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  justify-center
                  items-center
                  gap-2
                  px-7
                  py-4
                  rounded-2xl
                  bg-violet-600
                  hover:bg-violet-500
                  transition
                  font-semibold
                  shadow-lg
                  shadow-violet-600/20
                "
              >
                Voir mes projets
              </a>


              <a
                href="/cv.pdf"
                download
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  justify-center
                  items-center
                  gap-2
                  px-7
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:bg-white/10
                  transition
                  font-semibold
                "
              >
                <FaDownload size={14} />
                Télécharger mon CV
              </a>

            </div>


            {/* RÉSEAUX */}

            <div
              className="
                flex
                justify-center
                lg:justify-start
                gap-3
                mt-8
              "
            >

              <a
                href="#"
                aria-label="GitHub"
                className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-violet-600
                  hover:border-violet-500
                  transition
                "
              >
                <FaGithub />
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-violet-600
                  hover:border-violet-500
                  transition
                "
              >
                <FaLinkedin />
              </a>


              <a
                href="#contact"
                aria-label="Email"
                className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-violet-600
                  hover:border-violet-500
                  transition
                "
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/* PHOTO */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              relative
              flex
              justify-center
              order-1
              lg:order-2
            "
          >

            {/* GLOW */}

            <div
              className="
                absolute
                w-56
                h-56
                sm:w-72
                sm:h-72
                lg:w-[420px]
                lg:h-[420px]
                rounded-full
                bg-violet-600/30
                blur-[80px]
                sm:blur-[110px]
              "
            />


            {/* PHOTO CONTAINER */}

            <div className="relative">

              <div
                className="
                  absolute
                  -inset-3
                  sm:-inset-4
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-500
                  to-blue-600
                  blur
                  opacity-40
                "
              />


              <div
                className="
                  relative
                  w-56
                  h-56
                  sm:w-72
                  sm:h-72
                  md:w-80
                  md:h-80
                  lg:w-[390px]
                  lg:h-[390px]
                  rounded-full
                  overflow-hidden
                  border
                  border-white/20
                  bg-[#0b1020]
                "
              >

                <img
                  src={profile}
                  alt="Khadija"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>


              {/* BADGE 1 */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -left-3
                  sm:-left-8
                  bottom-8
                  sm:bottom-12
                  px-3
                  sm:px-5
                  py-3
                  rounded-2xl
                  bg-[#0b1020]/90
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-2xl
                "
              >

                <p className="text-[10px] sm:text-xs text-gray-400">
                  Spécialisation
                </p>

                <p className="text-xs sm:text-sm font-bold text-white mt-1">
                  Full Stack • Mobile
                </p>

              </motion.div>


              {/* BADGE 2 */}

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-3
                  sm:-right-8
                  top-8
                  sm:top-12
                  px-3
                  sm:px-5
                  py-3
                  rounded-2xl
                  bg-[#0b1020]/90
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-2xl
                "
              >

                <p className="text-[10px] sm:text-xs text-gray-400">
                  Focus
                </p>

                <p className="text-xs sm:text-sm font-bold text-violet-400 mt-1">
                  IA • Innovation
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>


        {/* ================================================= */}
        {/* STATISTIQUES */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            grid
            grid-cols-3
            max-w-xl
            mx-auto
            lg:mx-0
            lg:max-w-2xl
            gap-3
            sm:gap-6
            mt-14
            lg:mt-16
            text-center
          "
        >

          <div className="py-4">

            <p className="text-2xl sm:text-4xl font-black text-white">
              5+
            </p>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Projets
            </p>

          </div>


          <div className="py-4 border-x border-white/10">

            <p className="text-2xl sm:text-4xl font-black text-white">
              20+
            </p>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Technologies
            </p>

          </div>


          <div className="py-4">

            <p className="text-2xl sm:text-4xl font-black text-white">
              2
            </p>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Apps mobiles
            </p>

          </div>

        </motion.div>


        {/* SCROLL */}

        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            hidden
            lg:flex
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-gray-500
            items-center
            justify-center
          "
        >

          <FaArrowDown />

        </motion.a>

      </div>

    </section>
  );
}