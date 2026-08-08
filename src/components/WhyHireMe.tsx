import {
  FaBolt,
  FaCode,
  FaBrain,
  FaUsers
} from "react-icons/fa";

const qualities = [
  {
    icon: FaBolt,
    title: "Rapide",
    text: "Je développe rapidement des solutions modernes."
  },
  {
    icon: FaCode,
    title: "Code propre",
    text: "Architecture claire et facilement maintenable."
  },
  {
    icon: FaBrain,
    title: "Innovation",
    text: "Toujours à la recherche de nouvelles idées."
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    text: "Bonne communication et travail d'équipe."
  }
];

export default function WhyHireMe() {
  return (
    <section className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">

          Pourquoi travailler avec moi ?

        </h2>

        <div className="grid lg:grid-cols-4 gap-8 mt-20">

          {qualities.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center"
              >

                <Icon
                  size={45}
                  className="text-violet-400 mx-auto"
                />

                <h3 className="mt-8 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-5 text-gray-400">

                  {item.text}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}