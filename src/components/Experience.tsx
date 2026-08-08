import { FaBriefcase } from "react-icons/fa";

const experiences = [

{
company:"GovAction",
job:"Fondatrice & Développeuse",
year:"2026"
},

{
company:"Diant Bi",
job:"Fondatrice & Développeuse",
year:"2026"
},

{
company:"Freelance",
job:"Développeuse Full Stack",
year:"2024 - Aujourd'hui"
}

];

export default function Experience(){

return(

<section className="py-32">

<div className="max-w-5xl mx-auto">

<h2 className="text-5xl font-bold text-center">

Expériences

</h2>

<div className="mt-20 space-y-8">

{

experiences.map(exp=>(

<div

key={exp.company}

className="bg-white/5 border border-white/10 rounded-3xl p-8 flex gap-8 items-center"

>

<div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center">

<FaBriefcase/>

</div>

<div>

<h3 className="text-2xl font-bold">

{exp.company}

</h3>

<p>

{exp.job}

</p>

<span className="text-violet-400">

{exp.year}

</span>

</div>

</div>

))

}

</div>

</div>

</section>

)

}