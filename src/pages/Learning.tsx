import VideoPlayer from "../components/VideoPlayer";
import LessonSidebar from "../components/LessonSidebar";
import Tabs from "../components/Tabs";
import AITutor from "../components/AITutor";


const Learning=()=>{


return (

<div className="
bg-gray-50
min-h-screen
p-8
">


<h1 className="
text-3xl
font-bold
mb-6
">

React Development Masterclass

</h1>



<div className="
grid
lg:grid-cols-3
gap-6
">


<div className="
lg:col-span-2
space-y-6
">


<VideoPlayer/>


<Tabs/>


</div>



<LessonSidebar/>


</div>



<AITutor/>


</div>

)

}


export default Learning;