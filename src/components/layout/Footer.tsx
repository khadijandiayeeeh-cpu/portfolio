import {
 FaGithub,
 FaLinkedin,
 FaEnvelope
} from "react-icons/fa";

export default function Footer() {

 return (

<footer className="py-20 border-t border-white/10">

<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-center gap-8">

<div>

<h2 className="text-3xl font-bold">

Khadija

<span className="text-violet-500">

.

</span>

</h2>

<p className="text-gray-400 mt-3">

Développeuse Full Stack • IA • Cybersécurité

</p>

</div>

<div className="flex gap-6">

<a href="#">

<FaGithub size={28}/>

</a>

<a href="#">

<FaLinkedin size={28}/>

</a>

<a href="#">

<FaEnvelope size={28}/>

</a>

</div>

</div>

<hr className="my-10 border-white/10"/>

<p className="text-center text-gray-500">

© 2026 Khadija Ndiaye.

Tous droits réservés.

</p>

</div>

</footer>

)

}