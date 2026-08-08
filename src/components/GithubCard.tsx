import { FaGithub } from "react-icons/fa";

export default function GithubCard(){

return(

<section className="py-28">

<div className="max-w-4xl mx-auto">

<div className="bg-gradient-to-r from-violet-700 to-blue-700 rounded-[40px] p-16 text-center">

<FaGithub

size={70}

className="mx-auto"

/>

<h2 className="text-5xl font-bold mt-8">

Mon GitHub

</h2>

<p className="mt-6">

Découvrez tous mes projets open source.

</p>

<a

href="https://github.com/"

target="_blank"

className="inline-block mt-10 bg-white text-black px-10 py-4 rounded-2xl font-bold"

>

Visiter GitHub

</a>

</div>

</div>

</section>

)

}