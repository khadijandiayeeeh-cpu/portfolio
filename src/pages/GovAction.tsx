import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaQrcode,
  FaBell,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBell size={35} />,
    title: "Signalement citoyen",
    description:
      "Les citoyens signalent les problèmes de voirie, d'eau, d'électricité, d'incendie ou de sécurité.",
  },
  {
    icon: <FaMoneyBillWave size={35} />,
    title: "Paiements",
    description:
      "Paiement des taxes, factures et services administratifs.",
  },
  {
    icon: <FaQrcode size={35} />,
    title: "Identité numérique",
    description:
      "Carte numérique avec QR Code sécurisé.",
  },
  {
    icon: <FaMapMarkedAlt size={35} />,
    title: "Carte interactive",
    description:
      "Visualisation des incidents en temps réel sur une carte.",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Sécurité",
    description:
      "Authentification sécurisée et gestion des accès.",
  },
  {
    icon: <FaMobileAlt size={35} />,
    title: "Application mobile",
    description:
      "Disponible sur Android et iOS avec React Native.",
  },
];

export default function GovAction() {
  return (
    <div className="bg-[#050816] text-white min-h-screen">

      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

          <motion.div
            initial={{opacity:0,x:-80}}
            animate={{opacity:1,x:0}}
          >

            <span className="bg-violet-600 px-4 py-2 rounded-full">

              GOVTECH SENEGAL

            </span>

            <h1 className="text-7xl font-black mt-8 leading-tight">

              GovAction

            </h1>

            <p className="text-xl text-gray-400 mt-8">

              Une plateforme numérique permettant aux citoyens
              de signaler des problèmes, payer leurs services
              administratifs et accéder à leur identité numérique.

            </p>

            <div className="flex gap-5 mt-12">

              <button className="bg-violet-600 px-8 py-4 rounded-xl">

                Voir la Démo

              </button>

              <button className="border border-violet-500 px-8 py-4 rounded-xl">

                Github

              </button>

            </div>

          </motion.div>

          <motion.div
            initial={{opacity:0,x:80}}
            animate={{opacity:1,x:0}}
            className="flex justify-center items-center"
          >

            <div className="w-[350px] h-[650px] rounded-[50px] bg-gradient-to-br from-violet-600 to-blue-600 p-3 shadow-2xl">

              <div className="bg-black rounded-[40px] h-full flex justify-center items-center">

                <h2 className="text-4xl font-bold">

                  GOVACTION

                </h2>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            Fonctionnalités

          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {features.map((item,index)=>(

              <motion.div

                key={index}

                whileHover={{
                  y:-10,
                  scale:1.03
                }}

                className="bg-white/5 rounded-3xl border border-white/10 p-8"

              >

                <div className="text-violet-400 mb-6">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4">

                  {item.description}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}