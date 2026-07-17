interface Props{
title:string;
progress:number;
}


const ProgressCard=({
title,
progress
}:Props)=>{


return (

<div className="
bg-white
rounded-2xl
p-6
shadow
">


<h3 className="font-bold text-lg">
{title}
</h3>


<div className="
mt-4
bg-gray-200
h-3
rounded-full
">


<div
className="
bg-indigo-600
h-3
rounded-full
"
style={{
width:`${progress}%`
}}
>

</div>


</div>


<p className="mt-3 text-gray-500">
{progress}% Complete
</p>


</div>

)

}


export default ProgressCard;