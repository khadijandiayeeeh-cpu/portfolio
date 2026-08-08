import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  name: string;
  icon: IconType;
}

export default function TechCard({ name, icon: Icon }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -8 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-lg"
    >
      <Icon size={45} className="text-violet-400" />

      <h3 className="mt-5 font-semibold">
        {name}
      </h3>
    </motion.div>
  );
}