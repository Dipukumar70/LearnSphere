import {
  Star,
  Users,
  ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";


const FeaturedCourses = () => {


const courses = [

{
id:1,
title:"React Development Masterclass",
category:"Frontend",
price:"₹499",
students:"10K+",
rating:"4.8",
image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee"
},


{
id:2,
title:"Artificial Intelligence & Machine Learning",
category:"AI",
price:"₹799",
students:"8K+",
rating:"4.9",
image:"https://images.unsplash.com/photo-1677442136019-21780ecad995"
},


{
id:3,
title:"UI/UX Design Complete Course",
category:"Design",
price:"₹599",
students:"5K+",
rating:"4.7",
image:"https://images.unsplash.com/photo-1559028012-481c04fa702d"
}


];



return (


<section className="
relative
overflow-hidden

py-20
 bg-gradient-to-br
      from-purple-600
      via-pink-500
      to-indigo-700
      
">


{/* Glow Effects */}


<div className="
absolute
top-0
right-0

w-96
h-96

bg-[#B532DC]/40

rounded-full

blur-3xl
">
</div>



<div className="
absolute
bottom-0
left-0

w-96
h-96

bg-[#5E32F0]/40

rounded-full

blur-3xl
">
</div>






<div className="
max-w-7xl
mx-auto

px-6

relative
z-10
">





{/* Heading */}


<div className="
text-center
text-white
">


<h2 className="
text-4xl
md:text-5xl

font-bold
">

Featured Courses 🚀

</h2>



<p className="
mt-4

text-purple-100

text-lg
">

Upgrade your skills with
industry-ready courses.

</p>


</div>








{/* Course Cards */}


<div className="
grid

md:grid-cols-3

gap-8

mt-12
">





{
courses.map((course)=>(



<div

key={course.id}

className="

bg-white/95

backdrop-blur-xl

rounded-3xl

overflow-hidden

shadow-2xl

hover:-translate-y-3

transition-all

duration-300

"

>





{/* Image */}


<div className="
relative
">


<img

src={course.image}

alt={course.title}

className="
h-52

w-full

object-cover
"

/>




<div className="
absolute

top-4

left-4

bg-white

text-indigo-600

px-4

py-1

rounded-full

text-sm

font-semibold
">

{course.category}

</div>



</div>









{/* Content */}


<div className="
p-6
">



<h3 className="
text-xl

font-bold

text-gray-900
">

{course.title}

</h3>





<div className="
flex

items-center

gap-5

mt-5

text-gray-600

text-sm
">


<div className="
flex
items-center
gap-1
">


<Star

size={18}

className="
text-yellow-500

fill-yellow-500
"

/>


{course.rating}


</div>





<div className="
flex

items-center

gap-1
">


<Users size={18}/>


{course.students}


</div>



</div>







<div className="
flex

items-center

justify-between

mt-7
">



<h4 className="
text-2xl

font-bold

text-indigo-600
">

{course.price}

</h4>







<Link

to={`/course/${course.id}`}

className="

flex

items-center

gap-2

bg-gradient-to-r

from-[#5E32F0]

to-[#B532DC]

text-white

px-5

py-2

rounded-xl

hover:scale-105

transition

"


>

View Course

<ArrowRight size={18}/>


</Link>



</div>



</div>




</div>



))

}



</div>






</div>


</section>


)

}



export default FeaturedCourses;