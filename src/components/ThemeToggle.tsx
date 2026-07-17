import {
Moon,
Sun
} from "lucide-react";

import {
useState
} from "react";


const ThemeToggle=()=>{


const [dark,setDark]=useState(false);


const toggle=()=>{

setDark(!dark);

document.documentElement.classList.toggle(
"dark"
);

}


return (

<button

onClick={toggle}

className="
p-3
rounded-full
bg-gray-200
dark:bg-gray-800
"

>

{
dark
?
<Sun/>
:
<Moon/>
}

</button>

)

}


export default ThemeToggle;