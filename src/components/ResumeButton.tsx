import { FaDownload } from "react-icons/fa";

export default function ResumeButton() {
  return (
    <section className="py-20 text-center">

      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-violet-600 hover:bg-violet-500 duration-300 font-bold"
      >
        <FaDownload />

        Télécharger mon CV
      </a>

    </section>
  );
}