import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeaturedCourses from "../components/FeaturedCourses";


const Home = () => {

return (

<div>

<Navbar />

<Hero />
<FeaturedCourses />

<section className="min-h-screen 
bg-gradient-to-br
      from-pink-400
      via-purple-600
      to-indigo-800


text-white flex items-center">

<div className="max-w-6xl mx-auto px-8">

<h1 className="text-6xl font-bold">
Learn New Skills 🚀
</h1>


<p className="mt-6 text-xl max-w-xl">
Master coding, AI, design and business
with expert-led courses.
</p>


<button className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold">
Explore Courses
</button>


<div className="flex gap-10 mt-12">

<div>
<h2 className="text-3xl font-bold">
10K+
</h2>
<p>
Students
</p>
</div>


<div>
<h2 className="text-3xl font-bold">
500+
</h2>
<p>
Courses
</p>
</div>


</div>


</div>

</section>

<Footer />
</div>

)

}


export default Home;