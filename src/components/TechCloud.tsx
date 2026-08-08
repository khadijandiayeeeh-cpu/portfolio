const techs = [
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind",
  "Firebase",
  "Git",
  "GitHub",
  "REST API",
  "JWT",
  "Docker",
  "Python",
  "OpenAI",
  "PHP",
  "HTML",
  "CSS",
  "JavaScript"
];

export default function TechCloud() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold">

          Stack Technique

        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-20">

          {techs.map((tech) => (

            <span
              key={tech}
              className="px-5 py-3 rounded-full bg-white/5 border border-violet-500/20 hover:bg-violet-600 duration-300"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

    </section>
  );
}