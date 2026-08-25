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

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

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
          bg-violet-600/15
          blur-[90px]
          sm:blur-[110px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto w-full">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-20
            items-center
          "
        >

          {/* =========================
              TEXTE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-center
              lg:text-left
              order-2
              lg:order-1
            "
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
              <span className="w-2 h-2 rounded-full bg-green-400" />

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
              Khadidiatou
              <span className="text-violet-500">.</span>
            </h1>


            {/* ANIMATION TEXTE */}

            <div className="mt-5 min-h-[44px]">

              <TypeAnimation
                sequence={[
                  "Développeuse Full Stack",
                  2200,
                  "Développeuse Mobile",
                  2200,
                  "Passionnée par l'IA",
                  2200,
                  "Passionnée par la cybersécurité",
                  2200,
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
              Je conçois des sites web et des applications mobiles
              modernes, ainsi que des solutions numériques adaptées
              aux besoins des utilisateurs.
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
                  transition-all
                  duration-300
                  font-semibold
                  shadow-lg
                  shadow-violet-600/20
                  hover:-translate-y-1
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
                  transition-all
                  duration-300
                  font-semibold
                  hover:-translate-y-1
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
                href="https://github.com/khadijandiayeeeh-cpu"
                target="_blank"
                rel="noopener noreferrer"
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
                  transition-all
                  duration-300
                "
              >
                <FaGithub />
              </a>


              <a
                href="https://www.linkedin.com/in/khadidiatou-ndiaye-329a70374/"
                target="_blank"
                rel="noopener noreferrer"
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
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin />
              </a>


              <a
                href="mailto:khadijandiayeeeh@gmail.com"
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
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>


          {/* =========================
              PHOTO
          ========================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              flex
              justify-center
              order-1
              lg:order-2
            "
          >

            {/* GLOW PRINCIPAL */}

            <div
              className="
                absolute
                w-56
                h-56
                sm:w-72
                sm:h-72
                lg:w-[400px]
                lg:h-[400px]
                rounded-full
                bg-violet-600/25
                blur-[70px]
                sm:blur-[90px]
              "
            />


            {/* PHOTO */}

            <div className="relative">

              {/* Halo autour de la photo */}

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
                  opacity-30
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
                  alt="Khadidiatou - Développeuse Full Stack"
                  loading="eager"
                  decoding="async"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>


              {/* BADGE 1 */}

              <div
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
                  bg-[#0b1020]/95
                  border
                  border-white/10
                  shadow-xl
                "
              >

                <p className="text-[10px] sm:text-xs text-gray-400">
                  Spécialisation
                </p>

                <p className="text-xs sm:text-sm font-bold text-white mt-1">
                  Full Stack • Mobile
                </p>

              </div>


              {/* BADGE 2 */}

              <div
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
                  bg-[#0b1020]/95
                  border
                  border-white/10
                  shadow-xl
                "
              >

                <p className="text-[10px] sm:text-xs text-gray-400">
                  Focus
                </p>

                <p className="text-xs sm:text-sm font-bold text-violet-400 mt-1">
                  IA • Innovation
                </p>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =========================
            SCROLL
        ========================== */}

        <a
          href="#about"
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
            transition
            hover:text-violet-400
          "
          aria-label="Descendre vers À propos"
        >
          <FaArrowDown />
        </a>

      </div>

    </section>
  );
}