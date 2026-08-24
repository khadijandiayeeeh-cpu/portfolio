import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SkillsCardProps {
  title: string;
  description?: string;
  skills: string[];
  icon?: ReactNode;
}

export default function SkillsCard({
  title,
  description,
  skills,
  icon,
}: SkillsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="
        rounded-3xl
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        p-7
        hover:border-violet-500/30
        transition-all
        duration-300
      "
    >
      {icon && (
        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-violet-500/10
            border border-violet-500/20
            flex
            items-center
            justify-center
            text-violet-400
            mb-5
          "
        >
          {icon}
        </div>
      )}

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-gray-400 leading-7">
          {description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3
              py-1.5
              rounded-full
              bg-violet-500/10
              border border-violet-500/20
              text-violet-300
              text-sm
              hover:bg-violet-500/20
              transition
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}