import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("portfolio-light");
    }
  }, []);

  const toggleTheme = () => {
    const nextLight = !isLight;

    setIsLight(nextLight);

    if (nextLight) {
      document.documentElement.classList.add("portfolio-light");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.documentElement.classList.remove("portfolio-light");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        fixed
        bottom-6
        left-6
        z-[9999]
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center
        bg-violet-600
        text-white
        border
        border-white/20
        shadow-[0_0_25px_rgba(139,92,246,0.5)]
        hover:scale-110
        transition-all
        duration-300
      "
      title={isLight ? "Mode sombre" : "Mode clair"}
    >
      {isLight ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
}