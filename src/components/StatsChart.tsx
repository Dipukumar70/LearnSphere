import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


const data=[
{
day:"Mon",
hours:2
},
{
day:"Tue",
hours:5
},
{
day:"Wed",
hours:3
},
{
day:"Thu",
hours:7
},
{
day:"Fri",
hours:6
}
]


const StatsChart=()=>{


return (

<div className="
bg-white
rounded-2xl
p-6
shadow
">


<h2 className="
font-bold
text-xl
mb-5
">
Learning Activity
</h2>


<ResponsiveContainer
width="100%"
height={250}
>


<LineChart data={data}>


<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>


<Line
type="monotone"
dataKey="hours"
stroke="#6366f1"
strokeWidth={3}
/>


</LineChart>


</ResponsiveContainer>


</div>

)

}


export default StatsChart;