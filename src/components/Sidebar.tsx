import {
  Home,
  BookOpen,
  Award,
  Settings
} from "lucide-react";


const Sidebar =()=>{

return (

<aside className="
w-64
min-h-screen
bg-white
shadow-lg
p-6
">


<h1 className="
text-2xl
font-bold
text-indigo-600
mb-10
">
LearnSphere
</h1>


<nav className="space-y-6">


<div className="flex gap-3 items-center">
<Home size={20}/>
Dashboard
</div>


<div className="flex gap-3 items-center">
<BookOpen size={20}/>
My Courses
</div>


<div className="flex gap-3 items-center">
<Award size={20}/>
Certificates
</div>


<div className="flex gap-3 items-center">
<Settings size={20}/>
Settings
</div>


</nav>


</aside>

)

}


export default Sidebar;