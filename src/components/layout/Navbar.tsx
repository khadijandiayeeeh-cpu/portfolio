import { motion } from "framer-motion";
import MobileMenu from "../MobileMenu";
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          Khadija<span className="text-violet-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8">

        <MobileMenu />
          <a href="#about" className="hover:text-violet-400 duration-300">
            À propos
          </a>

          <a href="#skills" className="hover:text-violet-400 duration-300">
            Compétences
          </a>

          <a href="#projects" className="hover:text-violet-400 duration-300">
            Projets
          </a>

          <a href="#contact" className="hover:text-violet-400 duration-300">
            Contact
          </a>

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;