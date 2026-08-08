import { motion } from "framer-motion";

interface Props {
  number: string;
  label: string;
}

export default function Counter({ number, label }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
    >
      <h2 className="text-6xl font-black text-violet-500">
        {number}
      </h2>

      <p className="mt-4 text-gray-400">
        {label}
      </p>
    </motion.div>
  );
}