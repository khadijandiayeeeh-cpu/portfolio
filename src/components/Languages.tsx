const languages = [
  {
    language: "Français",
    level: "★★★★★"
  },
  {
    language: "Anglais",
    level: "★★★☆☆"
  },
  {
    language: "Wolof",
    level: "★★★★★"
  }
];

export default function Languages(){

return(

<section className="py-28">

<div className="max-w-5xl mx-auto">

<h2 className="text-5xl font-bold text-center">

Langues

</h2>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{

languages.map(item=>(

<div

key={item.language}

className="bg-white/5 rounded-3xl border border-white/10 p-10 text-center"

>

<h3 className="text-2xl font-bold">

{item.language}

</h3>

<p className="text-violet-400 text-2xl mt-5">

{item.level}

</p>

</div>

))

}

</div>

</div>

</section>

)

}