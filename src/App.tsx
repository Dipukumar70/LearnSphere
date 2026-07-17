import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Learning from "./pages/Learning";
import Login from "./components/Login";
import Roadmap from "./components/Roadmap";
import Pricing from "./components/Pricing";
import CourseDetails from "./pages/CourseDetails";

function App(){

return (

<BrowserRouter>

<Routes>

<Route 
path="/"
element={<Home/>}
/>


<Route
path="/courses"
element={<Courses/>}
/>


<Route
path="/dashboard"
element={<Dashboard/>}
/>
<Route
path="/roadmap"
element={<Roadmap/>}
/>


<Route
path="/pricing"
element={<Pricing/>}
/>


<Route
path="/login"
element={<Login/>}
/>
<Route
path="/learning"
element={<Learning/>}
/>

<Route
path="/course/:id"
element={<CourseDetails/>}
/>

</Routes>

</BrowserRouter>

)

}


export default App;