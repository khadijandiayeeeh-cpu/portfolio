import { motion } from "framer-motion";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">

          Mes Services

        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">

          Je conçois des solutions numériques modernes,
          performantes et sécurisées adaptées aux entreprises,
          startups et institutions.

        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div

                key={index}

                whileHover={{
                  y: -10,
                  scale: 1.03
                }}

                className="rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                p-8
                hover:border-violet-500
                duration-300"

              >

                <div className="w-20 h-20 rounded-2xl bg-violet-500/20 flex items-center justify-center">

                  <Icon
                    size={42}
                    className="text-violet-400"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-8">

                  {service.title}

                </h3>

                <p className="text-gray-400 leading-8 mt-6">

                  {service.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}