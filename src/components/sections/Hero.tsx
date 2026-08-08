import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";
import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#050816] px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
initial={{opacity:0,x:80}}
animate={{opacity:1,x:0}}
transition={{duration:.8}}
className="flex justify-center"
>
<div className="flex gap-6 mt-10">

<a href="#">

<FaGithub
size={28}
className="hover:text-violet-400 duration-300"
/>

</a>

<a href="#">

<FaLinkedin
size={28}
className="hover:text-violet-400 duration-300"
/>

</a>

<a href="#">

<FaEnvelope
size={28}
className="hover:text-violet-400 duration-300"
/>

</a>

</div>
<div className="relative">

<div className="absolute inset-0 rounded-full bg-violet-600 blur-[80px] opacity-40"></div>
<div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-5 py-2 mb-6">

<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

<p className="text-violet-300">

Disponible pour travailler

</p>

</div>
<img
src={profile}
alt="Khadija Ndiaye"
className="relative w-[420px] h-[420px] object-cover rounded-full border-4 border-violet-500 shadow-[0_0_60px_rgba(139,92,246,.5)]"
/>
<div className="absolute

w-[450px]

h-[450px]

rounded-full

bg-violet-600/30

blur-[140px]

animate-pulse">

</div>
<span className="text-violet-500">

Full Stack Developer

</span>
<div className="flex gap-3 mt-8">

<span className="bg-violet-500/20 px-5 py-2 rounded-full">

React

</span>

<span className="bg-violet-500/20 px-5 py-2 rounded-full">

Node.js

</span>

<span className="bg-violet-500/20 px-5 py-2 rounded-full">

Supabase

</span>

<span className="bg-violet-500/20 px-5 py-2 rounded-full">

AI

</span>

<span className="bg-violet-500/20 px-5 py-2 rounded-full">

Cybersecurity

</span>

</div>
</div>
<TypeAnimation

sequence={[

"Développeuse Full Stack",

2000,

"React Native Developer",

2000,

"AI Engineer",

2000,

"Cybersecurity Enthusiast",

2000

]}

repeat={Infinity}

speed={30}

className="text-3xl font-bold text-violet-400"
/>
<div className="flex gap-8 mt-12">

<div>

<h2 className="text-5xl font-black">

7+

</h2>

<p>Projets</p>

</div>

<div>

<h2 className="text-5xl font-black">

20+

</h2>

<p>Technologies</p>

</div>

<div>

<h2 className="text-5xl font-black">

2

</h2>

<p>Applications</p>

</div>

</div>
<div className="flex flex-wrap gap-5 mt-10">

<button
className="px-8 py-4 rounded-2xl
bg-violet-600
hover:bg-violet-500
transition
font-semibold
shadow-[0_0_30px_rgba(139,92,246,.5)]">

Voir mes projets

</button>

<button
className="px-8 py-4 rounded-2xl
border border-violet-500
hover:bg-violet-500/10
transition">

Télécharger mon CV

</button>

</div>
</motion.div>

      </div>

    </section>
  );
}