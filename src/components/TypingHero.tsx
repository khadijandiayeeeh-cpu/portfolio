import { useEffect, useState } from "react";

const texts=[

"Développeuse Full Stack",

"Développeuse React Native",

"Créatrice de GovAction",

"Créatrice de Diant Bi",

"Passionnée d'IA",

"Future Ingénieure"

];

export default function TypingHero(){

const[index,setIndex]=useState(0);

const[text,setText]=useState("");

useEffect(()=>{

let i=0;

const current=texts[index];

const interval=setInterval(()=>{

setText(current.slice(0,i));

i++;

if(i>current.length){

clearInterval(interval);

setTimeout(()=>{

setIndex((index+1)%texts.length);

setText("");

},1500)

}

},80);

return()=>clearInterval(interval);

},[index]);

return(

<h2 className="text-3xl text-violet-400 h-10">

{text}

</h2>

)

}