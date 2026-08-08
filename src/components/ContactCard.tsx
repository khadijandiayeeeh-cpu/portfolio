import {
FaEnvelope,
FaPhone,
FaMapMarkerAlt
} from "react-icons/fa";

export default function ContactCard(){

return(

<section className="py-32">

<div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

<div className="bg-white/5 p-10 rounded-3xl border border-white/10">

<FaEnvelope
size={35}
className="text-violet-400"/>

<h3 className="text-2xl font-bold mt-6">

Email

</h3>

<p className="text-gray-400 mt-4">

ton-email@example.com

</p>

</div>

<div className="bg-white/5 p-10 rounded-3xl border border-white/10">

<FaPhone
size={35}
className="text-violet-400"/>

<h3 className="text-2xl font-bold mt-6">

Téléphone

</h3>

<p className="text-gray-400 mt-4">

+221 XX XXX XX XX

</p>

</div>

<div className="bg-white/5 p-10 rounded-3xl border border-white/10">

<FaMapMarkerAlt
size={35}
className="text-violet-400"/>

<h3 className="text-2xl font-bold mt-6">

Localisation

</h3>

<p className="text-gray-400 mt-4">

Dakar, Sénégal

</p>

</div>

</div>

</section>

)

}