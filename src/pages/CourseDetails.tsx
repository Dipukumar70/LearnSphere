import {
useParams,
Link
} from "react-router-dom";


import {
Star,
Clock,
Users,
CheckCircle
} from "lucide-react";


// import Button from "../components/Button";



const CourseDetails =()=>{


const {id}=useParams();



const course={

title:"React Development Masterclass",

description:
"Learn React from beginner to advanced level with real world projects.",

price:"₹499",

students:"10,000+ Students",

duration:"35 Hours",

rating:"4.8",

instructor:"Rahul Sharma",


skills:[

"React Components",

"Hooks & State Management",

"API Integration",

"Real Projects"

],


lessons:[

"Introduction to React",

"JSX and Components",

"React Hooks",

"Routing",

"Final Project"

]


}



return (

<div className="
bg-gray-50
min-h-screen
py-12
">


<div className="
max-w-6xl
mx-auto
px-6
">



{/* Hero */}


<div className="
bg-white
rounded-3xl
shadow
p-8
grid
md:grid-cols-2
gap-10
">



<div>


<h1 className="
text-4xl
font-bold
">

{course.title}

</h1>



<p className="
mt-4
text-gray-600
">

{course.description}

</p>




<div className="
flex
gap-6
mt-6
flex-wrap
">


<div className="
flex
items-center
gap-2
">

<Star
className="text-yellow-500"
/>

{course.rating}

</div>




<div className="
flex
items-center
gap-2
">

<Users/>

{course.students}

</div>




<div className="
flex
items-center
gap-2
">

<Clock/>

{course.duration}

</div>



</div>




<p className="
mt-6
font-semibold
">

Instructor:
<span className="text-indigo-600">
{" "}
{course.instructor}
</span>

</p>



</div>





{/* Enrollment Card */}


<div className="
bg-gray-100
rounded-2xl
p-6
">


<h2 className="
text-3xl
font-bold
text-indigo-600
">

{course.price}

</h2>



<Link
to={`/learning/${id}`}
>





</Link>



<p className="
text-sm
text-gray-500
mt-4
text-center
">

30 Days Money Back Guarantee

</p>



</div>




</div>







{/* Skills */}



<div className="
mt-10
bg-white
p-8
rounded-3xl
shadow
">


<h2 className="
text-2xl
font-bold
">

What you'll learn

</h2>



<div className="
grid
md:grid-cols-2
gap-4
mt-6
">


{
course.skills.map(skill=>(

<div
key={skill}
className="
flex
gap-3
items-center
"
>

<CheckCircle
className="text-green-500"
/>


{skill}


</div>

))
}



</div>


</div>








{/* Lessons */}



<div className="
mt-10
bg-white
p-8
rounded-3xl
shadow
">


<h2 className="
text-2xl
font-bold
">

Course Content

</h2>



<div className="
mt-6
space-y-4
">


{
course.lessons.map(
(lesson,index)=>(


<div
key={lesson}
className="
border
p-4
rounded-xl
flex
gap-3
"
>

<span className="
font-bold
text-indigo-600
">

{index+1}

</span>


{lesson}


</div>


))
}



</div>


</div>




</div>


</div>

)

}


export default CourseDetails;