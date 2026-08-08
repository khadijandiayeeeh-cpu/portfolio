const techs = [
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "Node.js",
  "Express",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Firebase",
  "Git",
  "GitHub",
  "OpenAI",
  "Docker"
];

export default function TechMarquee() {
  return (
    <section className="overflow-hidden py-10 border-y border-white/10">

      <div className="animate-[scroll_25s_linear_infinite] whitespace-nowrap">

        {techs.concat(techs).map((tech, i) => (
          <span
            key={i}
            className="inline-block mx-6 text-2xl font-bold text-violet-400"
          >
            {tech}
          </span>
        ))}

      </div>

    </section>
  );
}