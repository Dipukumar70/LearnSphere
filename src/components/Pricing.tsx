const Pricing =()=>{


const plans=[

{
name:"Free",
price:"₹0",
features:[
"Basic Courses",
"Community Access"
]
},

{
name:"Pro",
price:"₹499/month",
features:[
"All Courses",
"Certificates",
"AI Tutor"
]
},


{
name:"Premium",
price:"₹999/month",
features:[
"Live Classes",
"Mentor Support",
"Career Guidance"
]
}


]


return (

<section className="
py-16
bg-gray-50
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

Choose Your Plan

</h1>



<div className="
grid
md:grid-cols-3
gap-8
mt-10
">


{
plans.map((plan,index)=>(


<div
key={index}
className="
bg-white
rounded-2xl
p-8
shadow
"
>


<h2 className="
text-2xl
font-bold
">

{plan.name}

</h2>


<p className="
text-3xl
font-bold
text-indigo-600
mt-4
">

{plan.price}

</p>


<ul className="
mt-6
space-y-3
">


{
plan.features.map((feature)=>(

<li key={feature}>
✓ {feature}
</li>

))
}


</ul>


<button className="
mt-8
w-full
bg-indigo-600
text-white
py-3
rounded-xl
">

Choose Plan

</button>


</div>


))
}


</div>


</div>


</section>

)

}


export default Pricing;