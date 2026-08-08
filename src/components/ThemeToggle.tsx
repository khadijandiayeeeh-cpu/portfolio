import { useState,useEffect } from "react";
import { FaMoon,FaSun } from "react-icons/fa";

export default function ThemeToggle(){

const [dark,setDark]=useState(true)

useEffect(()=>{

document.documentElement.classList.toggle("dark",dark)

},[dark])

return(

<button

onClick={()=>setDark(!dark)}

className="fixed bottom-8 left-8 w-14 h-14 rounded-full bg-violet-600 text-white flex justify-center items-center shadow-xl"

>

{

dark?

<FaSun/>

:

<FaMoon/>

}

</button>

)

}