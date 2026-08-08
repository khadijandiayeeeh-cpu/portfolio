import { motion } from "framer-motion";

const particles = Array.from({ length: 80 });

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-violet-500/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -1000],
            opacity: [0.2, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}