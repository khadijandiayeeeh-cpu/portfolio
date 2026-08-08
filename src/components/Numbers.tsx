const numbers = [
  ["7+", "Projets"],
  ["20+", "Technologies"],
  ["100%", "Motivation"],
  ["24/7", "Apprentissage"],
];

export default function Numbers() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">

        {numbers.map(([value, title]) => (

          <div
            key={title}
            className="rounded-3xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-white/10 p-10 text-center"
          >

            <h2 className="text-6xl font-black text-violet-400">

              {value}

            </h2>

            <p className="mt-4 text-gray-300">

              {title}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}