import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="fixed w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[180px] top-20 left-10 -z-10"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        className="fixed w-[500px] h-[500px] rounded-full bg-blue-700/20 blur-[180px] bottom-0 right-0 -z-10"
      />
    </>
  );
}