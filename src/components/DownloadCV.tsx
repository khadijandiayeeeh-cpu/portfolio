import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

export default function DownloadCV() {
  return (
    <section
      id="cv"
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-8
            md:p-10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              -right-20
              -top-20
              w-56
              h-56
              rounded-full
              bg-violet-600/10
              blur-3xl
            "
          />

          {/* ICONE + TEXTE */}

          <div className="relative flex items-center gap-5">

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-violet-500/10
                border
                border-violet-500/20
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <FaFilePdf
                size={25}
                className="text-violet-400"
              />
            </div>

            <div>

              <p className="text-violet-400 text-sm font-semibold">
                DOCUMENT PROFESSIONNEL
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                Mon CV
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Parcours, compétences et expériences.
              </p>

            </div>

          </div>

          {/* BOUTON */}

          <a
            href="/cv.pdf"
            download
            className="
              relative
              inline-flex
              items-center
              justify-center
              gap-3
              w-full
              md:w-auto
              px-6
              py-3.5
              rounded-xl
              bg-violet-600
              hover:bg-violet-500
              transition
              font-semibold
              shadow-lg
              shadow-violet-600/20
            "
          >

            <FaDownload size={14} />

            Télécharger le CV

          </a>

        </motion.div>

      </div>
    </section>
  );
}