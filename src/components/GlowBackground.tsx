import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Fond général */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Lumière violette principale */}
      <motion.div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-600/20
          blur-[120px]
        "
        animate={{
          x: ["-10%", "35%", "-5%"],
          y: ["5%", "30%", "10%"],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lumière bleue */}
      <motion.div
        className="
          absolute
          right-[-100px]
          top-[20%]
          w-[450px]
          h-[450px]
          rounded-full
          bg-blue-600/15
          blur-[130px]
        "
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 120, -80, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lumière violette basse */}
      <motion.div
        className="
          absolute
          left-[25%]
          bottom-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-fuchsia-600/10
          blur-[140px]
        "
        animate={{
          x: [-100, 150, -50, -100],
          y: [0, -100, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Petite lumière flottante */}
      <motion.div
        className="
          absolute
          left-[45%]
          top-[35%]
          w-[180px]
          h-[180px]
          rounded-full
          bg-violet-400/10
          blur-[80px]
        "
        animate={{
          x: [-80, 100, -50, -80],
          y: [50, -80, 100, 50],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.35)_100%)]
        "
      />

    </div>
  );
}