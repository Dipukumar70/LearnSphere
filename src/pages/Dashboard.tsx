import Sidebar from "../components/Sidebar";
import ProgressCard from "../components/ProgressCard";
import StatsChart from "../components/StatsChart";


const Dashboard=()=>{


return (

<div className="flex bg-gray-50">


<Sidebar/>


<main className="
flex-1
p-8
">


<h1 className="
text-4xl
font-bold
">
Welcome back, Alex 👋
</h1>


<p className="text-gray-500 mt-2">
Continue your learning journey
</p>



<div className="
grid
md:grid-cols-2
gap-6
mt-8
">


<ProgressCard
title="React Development"
progress={80}
/>


<ProgressCard
title="AI Fundamentals"
progress={50}
/>


</div>



<div className="mt-8">

<StatsChart/>

</div>


</main>


</div>

)

}


export default Dashboard;