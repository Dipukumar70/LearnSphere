import type { Course } from "../data/courses";
import { Star } from "lucide-react";
import { motion } from "framer-motion";


interface Props {
 course: Course;
}


const CourseCard = ({course}:Props)=>{

<motion.div

whileHover={{
scale:1.05
}}

transition={{
duration:0.3
}}

className="
bg-white
rounded-2xl
shadow-lg
overflow-hidden
"

></motion.div>
return (



<div className="
bg-white 
rounded-2xl 
shadow-lg 
overflow-hidden
hover:-translate-y-2
transition
">


<img
src={course.image}
className="h-48 w-full object-cover"
/>


<div className="p-5">


<h2 className="text-xl font-bold">
{course.title}
</h2>


<p className="text-gray-500 mt-2">
{course.instructor}
</p>


<div className="flex items-center gap-2 mt-3">

<Star 
size={18}
className="text-yellow-400 fill-yellow-400"
/>

<span>
{course.rating}
</span>

</div>



<div className="flex justify-between mt-4 text-sm">

<span>
{course.lessons} Lessons
</span>

<span>
{course.level}
</span>

</div>


<button className="
mt-5 
w-full 
bg-indigo-600 
text-white 
py-2 
rounded-xl
hover:bg-indigo-700
">

View Course

</button>


</div>


</div>

)

}


export default CourseCard;