const techs = [
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"Supabase",
"React Native",
"Expo",
"IA",
"Cybersécurité"
];

export default function TechTimeline(){

return(

<section className="py-28">

<div className="max-w-6xl mx-auto">

<h2 className="text-center text-5xl font-bold">

Mon évolution

</h2>

<div className="flex flex-wrap justify-center gap-6 mt-20">

{

techs.map((tech,index)=>(

<div
key={tech}
className="flex items-center gap-4"
>

<div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center font-bold">

{index+1}

</div>

<p className="text-xl">

{tech}

</p>

</div>

))

}

</div>

</div>

</section>

)

}