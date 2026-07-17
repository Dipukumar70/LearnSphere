import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Login =()=>{


const [mode,setMode]=useState<"signin"|"signup">("signin");


const [showPassword,setShowPassword]=useState(false);



return (

<div className="
min-h-screen
bg-gradient-to-br
from-indigo-600
to-purple-700
flex
items-center
justify-center
px-5
">


<div className="
bg-white
w-full
max-w-md
rounded-3xl
shadow-2xl
p-8
">


{/* Header */}

<h1 className="
text-3xl
font-bold
text-center
text-indigo-600
">

LearnSphere

</h1>


<p className="
text-center
text-gray-500
mt-2
">

Start your learning journey

</p>





{/* Tabs */}

<div className="
flex
bg-gray-100
rounded-xl
p-1
mt-8
">


<button

onClick={()=>setMode("signin")}

className={

mode==="signin"
?
"flex-1 bg-white shadow rounded-xl py-2 text-indigo-600 font-bold"
:
"flex-1 py-2"

}

>

Sign In

</button>



<button

onClick={()=>setMode("signup")}

className={

mode==="signup"
?
"flex-1 bg-white shadow rounded-xl py-2 text-indigo-600 font-bold"
:
"flex-1 py-2"

}

>

Sign Up

</button>


</div>





{
mode==="signup" &&

<input

placeholder="Full Name"

className="
w-full
border
rounded-xl
p-3
mt-6
outline-none
focus:ring-2
focus:ring-indigo-500
"

/>

}





<input

placeholder="Email Address"

className="
w-full
border
rounded-xl
p-3
mt-6
outline-none
focus:ring-2
focus:ring-indigo-500
"

/>





<div className="
relative
mt-4
">


<input

type={
showPassword
?
"text"
:
"password"
}

placeholder="Password"

className="
w-full
border
rounded-xl
p-3
pr-12
outline-none
focus:ring-2
focus:ring-indigo-500
"

/>



<button

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-3
text-gray-500
"

>

{

showPassword

?

<EyeOff size={20}/>

:

<Eye size={20}/>

}


</button>


</div>





{
mode==="signup" &&

<input

type="password"

placeholder="Confirm Password"

className="
w-full
border
rounded-xl
p-3
mt-4
outline-none
focus:ring-2
focus:ring-indigo-500
"

/>

}






<button className="
w-full
bg-indigo-600
text-white
py-3
rounded-xl
mt-6
font-semibold
hover:bg-indigo-700
transition
">

{

mode==="signin"

?

"Sign In"

:

"Create Account"

}


</button>






<div className="
flex
items-center
gap-3
my-6
">


<div className="h-px bg-gray-200 flex-1"/>

<span className="text-gray-400">
OR
</span>

<div className="h-px bg-gray-200 flex-1"/>


</div>






<button className="
w-full
border
py-3
rounded-xl
flex
items-center
justify-center
gap-3
hover:bg-gray-50
">

<FaGithub size={20}></FaGithub>

Continue with Github

</button>



<button className="
w-full
border
py-3
rounded-xl
flex
items-center
justify-center
gap-3
mt-3
hover:bg-gray-50
">

<Mail size={20}/>

Continue with Email

</button>





</div>


</div>

)

}


export default Login;