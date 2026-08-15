export default function Stats() {
  const stats = [
    { number: "5+", title: "Projets" },
    { number: "20+", title: "Technologies" },
    { number: "3+", title: "Années de pratique" },
    { number: "100%", title: "Motivation" },
  ];

  return (
    <section className=" tech-grid py-24 bg-[#050816]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white/5 rounded-3xl p-10 text-center border border-white/10 backdrop-blur-xl"
          >
            <h2 className="text-6xl font-black text-violet-400">
              {item.number}
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}