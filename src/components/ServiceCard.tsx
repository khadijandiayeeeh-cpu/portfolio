import { motion } from "framer-motion";
import type { ComponentType } from "react";

interface Props {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="rounded-3xl bg-white/5 border border-white/10 p-8"
    >
      <div className="mb-6 text-violet-500">
        <Icon size={45} />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-5 text-gray-400">
        {description}
      </p>

    </motion.div>
  );
}