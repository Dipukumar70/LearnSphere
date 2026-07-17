import {
CheckCircle
} from "lucide-react";


const lessons=[

"Introduction",
"React Components",
"React Hooks",
"API Integration",
"Final Project"

]


const LessonSidebar=()=>{


return (

<div className="
bg-white
rounded-2xl
p-5
shadow
">


<h2 className="
font-bold
text-xl
mb-5
">

Course Content

</h2>


<div className="space-y-4">


{
lessons.map((lesson,index)=>(

<div
key={index}
className="
flex
items-center
gap-3
cursor-pointer
hover:text-indigo-600
"
>


<CheckCircle
size={18}
className="text-green-500"
/>


<span>
{lesson}
</span>


</div>

))
}


</div>


</div>

)

}


export default LessonSidebar;