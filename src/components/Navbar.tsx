import { useState } from "react";
import { Link } from "react-router-dom";

import {
  BookOpen,
  Menu,
  X,
  User
} from "lucide-react";


const Navbar = () => {


  const [open, setOpen] = useState(false);



  const closeMenu = () => {
    setOpen(false);
  }



  return (


    <nav className="
      bg-white
      shadow-md
      sticky
      top-0
      z-50
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">


        {/* Logo */}

        <Link
          to="/"
          className="
          flex
          items-center
          gap-2
          "
        >

          <div className="
            bg-indigo-600
            text-white
            p-2
            rounded-xl
          ">

            <BookOpen size={24}/>

          </div>


          <h1 className="
            text-2xl
            font-bold
            text-indigo-600
          ">

            LearnSphere

          </h1>


        </Link>





        {/* Desktop Menu */}

        <div className="
          hidden
          md:flex
          items-center
          gap-8
          text-gray-700
          font-medium
        ">


          <Link
            to="/courses"
            className="
            hover:text-indigo-600
            transition
            "
          >
            Courses
          </Link>



          <Link
            to="/dashboard"
            className="
            hover:text-indigo-600
            transition
            "
          >
            Dashboard
          </Link>



          <Link
            to="/roadmap"
            className="
            hover:text-indigo-600
            transition
            "
          >
            Roadmap
          </Link>



          <Link
            to="/pricing"
            className="
            hover:text-indigo-600
            transition
            "
          >
            Pricing
          </Link>



        </div>






        {/* Desktop Buttons */}


        <div className="
          hidden
          md:flex
          items-center
          gap-4
        ">



          <Link
            to="/login"
            className="
            flex
            items-center
            gap-2
            hover:text-indigo-600
            transition
            "
          >

            <User size={18}/>

            Login

          </Link>




          <Link
            to="/learning"
            className="
            bg-indigo-600
            text-white
            px-5
            py-2
            rounded-xl
            hover:bg-indigo-700
            transition
            "
          >

            Start Learning

          </Link>


        </div>







        {/* Mobile Menu Button */}


        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          text-gray-700
          "

        >

          {
            open
            ?
            <X size={28}/>
            :
            <Menu size={28}/>
          }


        </button>


      </div>








      {/* Mobile Menu */}


      {
        open &&


        <div className="
          md:hidden
          bg-white
          border-t
          px-6
          py-5
          space-y-5
        ">



          <Link
            onClick={closeMenu}
            to="/courses"
            className="
            block
            hover:text-indigo-600
            "
          >
            Courses
          </Link>





          <Link
            onClick={closeMenu}
            to="/dashboard"
            className="
            block
            hover:text-indigo-600
            "
          >
            Dashboard
          </Link>





          <Link
            onClick={closeMenu}
            to="/roadmap"
            className="
            block
            hover:text-indigo-600
            "
          >
            Roadmap
          </Link>





          <Link
            onClick={closeMenu}
            to="/pricing"
            className="
            block
            hover:text-indigo-600
            "
          >
            Pricing
          </Link>





          <Link
            onClick={closeMenu}
            to="/login"
            className="
            block
            hover:text-indigo-600
            "
          >
            Login
          </Link>





          <Link
            onClick={closeMenu}
            to="/learning"
            className="
            block
            text-center
            bg-indigo-600
            text-white
            py-3
            rounded-xl
            "
          >

            Start Learning

          </Link>



        </div>


      }



    </nav>


  )

}


export default Navbar;