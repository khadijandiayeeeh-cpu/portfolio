import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-20
          w-96
          h-96
          bg-violet-600/10
          blur-[120px]
          rounded-full
        "
      />


      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Travaillons ensemble
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-8">
            Vous avez un projet, une opportunité professionnelle ou souhaitez
            simplement échanger ? N'hésitez pas à me contacter.
          </p>

        </motion.div>


        {/* CONTENT */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">


          {/* INFORMATIONS */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              md:p-10
            "
          >

            <h3 className="text-2xl font-bold text-white">
              Parlons de votre projet
            </h3>

            <p className="text-gray-400 leading-7 mt-4">
              Je suis ouverte aux opportunités de stage, d'emploi junior,
              de collaboration et aux projets numériques intéressants.
            </p>


            {/* EMAIL */}

            <a
              href="mailto:khadijandiayeeeh@gmail.com"
              className="
                flex
                items-center
                gap-4
                mt-8
                p-4
                rounded-2xl
                bg-white/[0.03]
                border
                border-white/5
                hover:border-violet-500/30
                hover:bg-violet-500/5
                transition
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-violet-500/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <FaEnvelope className="text-violet-400" />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Email
                </p>

                <p className="text-white mt-1">
                  khadijandiayeeeh@gmail.com
                </p>
              </div>

            </a>


            {/* LOCALISATION */}

            <div
              className="
                flex
                items-center
                gap-4
                mt-4
                p-4
                rounded-2xl
                bg-white/[0.03]
                border
                border-white/5
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-violet-500/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <FaMapMarkerAlt className="text-violet-400" />
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Localisation
                </p>

                <p className="text-white mt-1">
                  Dakar, Sénégal
                </p>

              </div>

            </div>


            {/* RESEAUX */}

            <div className="flex gap-3 mt-8">

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-violet-600
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-violet-600
                  transition
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>


          {/* FORMULAIRE */}

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              md:p-10
            "
          >

            <h3 className="text-2xl font-bold text-white">
              Envoyer un message
            </h3>


            <div className="grid sm:grid-cols-2 gap-4 mt-7">

              <input
                type="text"
                placeholder="Votre nom"
                className="
                  w-full
                  px-4
                  py-4
                  rounded-xl
                  bg-black/20
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  focus:border-violet-500/50
                  transition
                "
              />

              <input
                type="email"
                placeholder="Votre email"
                className="
                  w-full
                  px-4
                  py-4
                  rounded-xl
                  bg-black/20
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  focus:border-violet-500/50
                  transition
                "
              />

            </div>


            <input
              type="text"
              placeholder="Sujet"
              className="
                w-full
                mt-4
                px-4
                py-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-violet-500/50
                transition
              "
            />


            <textarea
              rows={6}
              placeholder="Votre message..."
              className="
                w-full
                mt-4
                px-4
                py-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-violet-500/50
                transition
                resize-none
              "
            />


            <button
              type="submit"
              className="
                w-full
                mt-5
                py-4
                rounded-xl
                bg-violet-600
                hover:bg-violet-500
                transition
                font-semibold
                flex
                items-center
                justify-center
                gap-3
              "
            >

              Envoyer le message

              <FaPaperPlane size={14} />

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}