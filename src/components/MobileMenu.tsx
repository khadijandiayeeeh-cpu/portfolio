import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    "Accueil",
    "À propos",
    "Compétences",
    "Projets",
    "Contact",
  ];

  return (
    <div className="md:hidden">

      <button
        onClick={() => setOpen(true)}
        className="text-2xl text-white"
      >
        <FaBars />
      </button>

      {open && (
        <div className="fixed inset-0 bg-[#050816] z-50 flex flex-col items-center justify-center">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-3xl"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col gap-10 text-3xl">

            {links.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="hover:text-violet-400 duration-300"
              >
                {item}
              </a>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}