import {

FaGithub,

FaLinkedin,

FaWhatsapp,

FaEnvelope

} from "react-icons/fa";

export default function FloatingSocial(){

return(

<div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">

<a

href="#"

className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center hover:scale-110 duration-300"

>

<FaGithub/>

</a>

<a

href="#"

className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 duration-300"

>

<FaLinkedin/>

</a>

<a

href="#"

className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center hover:scale-110 duration-300"

>

<FaWhatsapp/>

</a>

<a

href="#"

className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center hover:scale-110 duration-300"

>

<FaEnvelope/>

</a>

</div>

)

}