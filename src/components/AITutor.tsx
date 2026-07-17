import { useState } from "react";
import { Bot, Send, X } from "lucide-react";


interface Message {
  id:number;
  role:"user" | "ai";
  text:string;
}


const AITutor = () => {


const [open,setOpen] = useState(false);


const [input,setInput] = useState("");


const [messages,setMessages] = useState<Message[]>([
{
id:1,
role:"ai",
text:"Hi 👋 I am your AI Tutor. Ask me anything about this course!"
}
]);



const sendMessage =()=>{


if(!input.trim()) return;



const userMessage:Message={
id:Date.now(),
role:"user",
text:input
};



setMessages(prev=>[
...prev,
userMessage
]);



setInput("");



// Demo AI response

setTimeout(()=>{


setMessages(prev=>[
...prev,
{
id:Date.now(),
role:"ai",
text:"Great question! I will help you understand this topic step by step 🚀"
}
])

},800)


}



return (

<>


{
open &&

<div className="
fixed
bottom-24
right-8
w-96
bg-white
rounded-2xl
shadow-2xl
border
overflow-hidden
">


{/* Header */}

<div className="
bg-indigo-600
text-white
p-4
flex
justify-between
items-center
">


<div className="flex gap-2 items-center">

<Bot size={24}/>

<h2 className="font-bold">
AI Tutor
</h2>

</div>


<X
className="cursor-pointer"
onClick={()=>setOpen(false)}
/>


</div>



{/* Messages */}

<div className="
h-80
overflow-y-auto
p-4
space-y-3
">


{
messages.map(message=>(


<div
key={message.id}
className={

message.role==="user"
?
"flex justify-end"
:
"flex justify-start"

}
>


<div
className={

message.role==="user"
?
"bg-indigo-600 text-white px-4 py-2 rounded-xl max-w-xs"
:
"bg-gray-100 px-4 py-2 rounded-xl max-w-xs"

}
>

{message.text}

</div>


</div>


))
}



</div>



{/* Input */}

<div className="
border-t
p-3
flex
gap-2
">


<input

value={input}

onChange={(e)=>setInput(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage()

}}

placeholder="Ask your question..."

className="
flex-1
border
rounded-xl
px-3
py-2
outline-none
"

/>


<button

onClick={sendMessage}

className="
bg-indigo-600
text-white
p-3
rounded-xl
"

>

<Send size={18}/>

</button>


</div>



</div>

}



{/* Floating Button */}

<button

onClick={()=>setOpen(true)}

className="
fixed
bottom-8
right-8
bg-indigo-600
text-white
p-5
rounded-full
shadow-xl
hover:scale-110
transition
"

>

<Bot size={30}/>

</button>


</>

)

}


export default AITutor;