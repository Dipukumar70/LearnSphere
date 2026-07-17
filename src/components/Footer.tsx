import { BookOpen } from "lucide-react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";


const Footer = () => {

  return (

    <footer className="
      bg-gray-900
      text-gray-300
      pt-16
      pb-8
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
      ">


        <div className="
          grid
          md:grid-cols-4
          gap-10
        ">


          {/* Brand Section */}

          <div>

            <div className="
              flex
              items-center
              gap-3
            ">

              <div className="
                bg-indigo-600
                p-2
                rounded-xl
                text-white
              ">

                <BookOpen size={24}/>

              </div>


              <h2 className="
                text-2xl
                font-bold
                text-white
              ">

                LearnSphere

              </h2>


            </div>



            <p className="
              mt-5
              text-gray-400
              leading-relaxed
            ">

              Learn coding, AI, design and
              business skills with expert-led
              online courses.

            </p>



            {/* Social Icons */}

            <div className="
              flex
              gap-4
              mt-6
            ">


              <SocialIcon>
                <FaFacebook />
              </SocialIcon>


              <SocialIcon>
                <FaTwitter />
              </SocialIcon>


              <SocialIcon>
                <FaInstagram />
              </SocialIcon>


              <SocialIcon>
                <FaLinkedin />
              </SocialIcon>


            </div>


          </div>





          {/* Courses */}

          <div>

            <h3 className="
              text-white
              font-bold
              text-lg
              mb-5
            ">
              Courses
            </h3>


            <ul className="space-y-3">

              <li className="hover:text-indigo-400 cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-indigo-400 cursor-pointer">
                Artificial Intelligence
              </li>

              <li className="hover:text-indigo-400 cursor-pointer">
                UI/UX Design
              </li>

              <li className="hover:text-indigo-400 cursor-pointer">
                Data Science
              </li>

            </ul>


          </div>





          {/* Company */}

          <div>

            <h3 className="
              text-white
              font-bold
              text-lg
              mb-5
            ">
              Company
            </h3>


            <ul className="space-y-3">


              <li className="hover:text-indigo-400 cursor-pointer">
                About Us
              </li>


              <li className="hover:text-indigo-400 cursor-pointer">
                Careers
              </li>


              <li className="hover:text-indigo-400 cursor-pointer">
                Blog
              </li>


              <li className="hover:text-indigo-400 cursor-pointer">
                Contact
              </li>


            </ul>


          </div>





          {/* Newsletter */}

          <div>


            <h3 className="
              text-white
              font-bold
              text-lg
              mb-5
            ">
              Newsletter
            </h3>


            <p className="
              text-gray-400
              mb-4
            ">

              Subscribe for latest courses
              and learning updates.

            </p>



            <div className="
              flex
              gap-2
            ">


              <input

                type="email"

                placeholder="Your email"

                className="
                  w-full
                  px-4
                  py-2
                  rounded-lg
                  bg-gray-800
                  border
                  border-gray-700
                  text-white
                  outline-none
                "

              />



              <button className="
                bg-indigo-600
                px-5
                rounded-lg
                text-white
                hover:bg-indigo-700
              ">

                Join

              </button>


            </div>


          </div>


        </div>





        {/* Bottom */}

        <div className="
          border-t
          border-gray-800
          mt-12
          pt-6
          text-center
          text-gray-500
        ">


          © 2026 LearnSphere. All rights reserved.


        </div>


      </div>


    </footer>

  )

}




interface SocialIconProps {

children: React.ReactNode;

}


const SocialIcon = ({
children
}:SocialIconProps)=>{


return (

<button className="
w-10
h-10
flex
items-center
justify-center
rounded-full
bg-gray-800
text-gray-300
hover:bg-indigo-600
hover:text-white
transition
text-lg
">

{children}

</button>

)

}



export default Footer;