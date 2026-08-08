import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function BackToTop(){

const [visible,setVisible]=useState(false)

useEffect(()=>{

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

setVisible(true)

}else{

setVisible(false)

}

})

},[])

return(

<button

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-violet-600 text-white shadow-xl duration-300 ${visible?"opacity-100":"opacity-0 pointer-events-none"}`}

>

<FaArrowUp/>

</button>

)

}