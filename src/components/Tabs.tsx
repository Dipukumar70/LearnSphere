import {
useState
} from "react";


const Tabs=()=>{


const [active,setActive]=useState("Notes");


return (

<div className="
bg-white
rounded-2xl
p-6
shadow
">


<div className="
flex
gap-6
border-b
pb-3
">


{
["Notes","Transcript","Discussion"].map(tab=>(


<button

key={tab}

onClick={()=>setActive(tab)}

className={

active===tab
?
"text-indigo-600 font-bold"
:
""

}

>

{tab}

</button>


))
}


</div>



<p className="mt-5 text-gray-600">

{
active==="Notes"
?
"Write your learning notes here..."
:
active==="Transcript"
?
"Video transcript will appear here..."
:
"Discuss with other students..."
}


</p>


</div>

)

}


export default Tabs;