const skills = [
"React",
"React Native",
"Expo",
"TypeScript",
"JavaScript",
"HTML",
"CSS",
"Tailwind CSS",
"Node.js",
"Express",
"Supabase",
"PostgreSQL",
"Firebase",
"Git",
"GitHub",
"Docker",
"Python",
"REST API",
"JWT",
"Vercel",
"Netlify"
];

export default function SkillsGrid(){

return(

<section className="py-32">

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-bold text-center">

Technologies maîtrisées

</h2>

<div className="flex flex-wrap justify-center gap-4 mt-20">

{

skills.map(skill=>(

<div

key={skill}

className="px-6 py-3 rounded-full bg-violet-500/10 border border-violet-500/30 hover:bg-violet-600 duration-300"

>

{skill}

</div>

))

}

</div>

</div>

</section>

)

}