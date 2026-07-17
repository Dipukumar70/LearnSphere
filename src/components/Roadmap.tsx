const Roadmap =()=>{


const steps=[
{
title:"Frontend Developer",
desc:"HTML, CSS, JavaScript, React"
},

{
title:"Backend Developer",
desc:"Node.js, Database, APIs"
},

{
title:"AI Engineer",
desc:"Python, ML, Generative AI"
}

]


return (

<section className="
min-h-screen
bg-gray-50
py-16
">


<div className="
max-w-6xl
mx-auto
px-6
">


<h1 className="
text-4xl
font-bold
text-center
">

Learning Roadmap 🚀

</h1>


<div className="
grid
md:grid-cols-3
gap-8
mt-10
">


{
steps.map((item,index)=>(

<div
key={index}
className="
bg-white
p-6
rounded-2xl
shadow
hover:-translate-y-2
transition
"
>


<h2 className="
text-xl
font-bold
text-indigo-600
">

{item.title}

</h2>


<p className="
mt-3
text-gray-600
">

{item.desc}

</p>


</div>

))
}


</div>


</div>


</section>

)

}


export default Roadmap;