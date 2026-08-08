const skills = [
  { name: "React", value: 95 },
  { name: "React Native", value: 92 },
  { name: "Node.js", value: 90 },
  { name: "Supabase", value: 88 },
  { name: "PostgreSQL", value: 86 },
  { name: "TypeScript", value: 85 },
  { name: "Cybersecurity", value: 70 },
  { name: "Artificial Intelligence", value: 72 }
];

export default function SkillProgress() {
  return (
    <section className="py-32 bg-[#050816]">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Niveau de compétences
        </h2>

        <div className="mt-20 space-y-8">

          {skills.map((skill) => (

            <div key={skill.name}>

              <div className="flex justify-between mb-2">

                <span>{skill.name}</span>

                <span>{skill.value}%</span>

              </div>

              <div className="w-full h-4 rounded-full bg-white/10">

                <div
                  className="h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                  style={{ width: `${skill.value}%` }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}