import { motion } from "framer-motion";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -20 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1 }}
      whileHover={{
        rotateY: 10,
        rotateX: -5,
        scale: 1.03,
      }}
      className="relative w-[330px] h-[670px]"
      style={{ perspective: 1200 }}
    >
      <div className="absolute inset-0 rounded-[55px] bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400 p-[5px] shadow-[0_0_80px_rgba(139,92,246,.45)]">

        <div className="relative h-full rounded-[50px] bg-[#050816] overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 rounded-b-3xl bg-black z-50"></div>

          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-black"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <h2 className="text-4xl font-black">
              GOVACTION
            </h2>

            <p className="text-violet-400 mt-4">
              Smart Government
            </p>

            <div className="mt-14 w-64 h-3 rounded-full bg-white/10"></div>

            <div className="mt-5 w-52 h-3 rounded-full bg-white/10"></div>

            <div className="mt-5 w-44 h-3 rounded-full bg-white/10"></div>

            <div className="mt-16 grid grid-cols-2 gap-5">

              <div className="w-24 h-24 rounded-3xl bg-violet-500/30"></div>

              <div className="w-24 h-24 rounded-3xl bg-blue-500/30"></div>

              <div className="w-24 h-24 rounded-3xl bg-cyan-500/30"></div>

              <div className="w-24 h-24 rounded-3xl bg-emerald-500/30"></div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}