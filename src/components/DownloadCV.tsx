import { FaDownload } from "react-icons/fa";

export default function DownloadCV() {
  return (
    <section className="py-20 bg-[#050816]">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Mon CV
        </h2>

        <p className="text-gray-400 mt-5">
          Téléchargez mon CV pour découvrir mon parcours,
          mes compétences et mes projets.
        </p>

        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-3 mt-10 bg-violet-600 hover:bg-violet-700 duration-300 px-8 py-4 rounded-full font-semibold"
        >
          <FaDownload />

          Télécharger le CV
        </a>

      </div>

    </section>
  );
}