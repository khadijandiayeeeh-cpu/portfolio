import SkillCard from "../SkillCard";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Mes Compétences
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
}