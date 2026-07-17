import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";


const Courses =()=>{


return (

<section className="bg-gray-50 min-h-screen py-12">


<div className="max-w-6xl mx-auto px-8">


<h1 className="
text-4xl
font-bold
text-center
">

Explore Courses

</h1>


<p className="text-center text-gray-500 mt-3">

Learn from industry experts

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-10
">


{
courses.map(course=>(

<CourseCard
key={course.id}
course={course}
/>

))
}


</div>


</div>


</section>

)


}


export default Courses;