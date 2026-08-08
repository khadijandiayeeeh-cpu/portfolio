import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#050816]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="text-5xl font-bold text-center"
        >
          Contact
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Vous souhaitez collaborer avec moi ?
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
          >

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-violet-400 text-3xl"/>

                <div>

                  <h3>Email</h3>

                  <p className="text-gray-400">
                    tonemail@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaPhone className="text-violet-400 text-3xl"/>

                <div>

                  <h3>Téléphone</h3>

                  <p className="text-gray-400">
                    +221 XX XXX XX XX
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaGithub className="text-violet-400 text-3xl"/>

                <div>

                  <h3>Github</h3>

                  <p className="text-gray-400">
                    github.com/tonprofil
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaLinkedin className="text-violet-400 text-3xl"/>

                <div>

                  <h3>LinkedIn</h3>

                  <p className="text-gray-400">
                    linkedin.com/in/tonprofil
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          <motion.form
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            className="space-y-6"
          >

            <input
              placeholder="Nom"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            />

            <input
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Votre message"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            />

            <button
              className="bg-violet-600 hover:bg-violet-500 duration-300 px-8 py-4 rounded-xl w-full"
            >
              Envoyer
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}