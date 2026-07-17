import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";


const Hero = () => {

  return (

    <section className="
      min-h-[650px]
      bg-gradient-to-br
      from-indigo-600
      via-purple-600
      to-pink-500
      flex
      items-center
      overflow-hidden
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-8
        grid
        md:grid-cols-2
        gap-12
        items-center
      ">


        {/* Left Content */}

        <div className="text-white">


          <motion.h1

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >

            Learn New Skills.
            <br />

            Build Your Future 🚀

          </motion.h1>



          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:0.3
            }}

            className="
              mt-6
              text-lg
              text-indigo-100
              max-w-xl
            "
          >

            Master coding, artificial intelligence,
            design and business with expert-led
            courses from industry professionals.

          </motion.p>



          <motion.div

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:0.5
            }}

            className="
              mt-8
              flex
              gap-4
            "
          >

            <button className="
              bg-white
              text-indigo-600
              px-8
              py-3
              rounded-xl
              font-semibold
              flex
              items-center
              gap-2
              hover:scale-105
              transition
            ">

              Explore Courses

              <ArrowRight size={20}/>

            </button>



            <button className="
              border
              border-white
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-white
              hover:text-indigo-600
              transition
            ">

              Watch Demo

            </button>


          </motion.div>



          {/* Stats */}


          <div className="
            flex
            gap-8
            mt-12
            flex-wrap
          ">


            <Stat
              icon={<Users/>}
              number="10K+"
              text="Students"
            />


            <Stat
              icon={<BookOpen/>}
              number="500+"
              text="Courses"
            />


            <Stat
              icon={<Award/>}
              number="98%"
              text="Success"
            />


          </div>


        </div>





        {/* Right Illustration */}

        <div className="
          relative
          hidden
          md:block
        ">


          <motion.div

            animate={{
              y:[0,-15,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
              bg-white
              rounded-3xl
              p-6
              shadow-2xl
            "
          >


            <h3 className="
              text-2xl
              font-bold
              text-gray-800
            ">

              React Masterclass

            </h3>


            <p className="
              text-gray-500
              mt-2
            ">

              Learn React from beginner
              to advanced level.

            </p>



            <div className="
              mt-6
              bg-indigo-100
              rounded-xl
              p-5
            ">


              <div className="
                flex
                justify-between
                text-sm
              ">

                <span>
                  Course Progress
                </span>

                <span>
                  75%
                </span>


              </div>



              <div className="
                mt-3
                h-3
                bg-white
                rounded-full
              ">


                <div className="
                  h-3
                  w-3/4
                  bg-indigo-600
                  rounded-full
                ">


                </div>


              </div>


            </div>


          </motion.div>



          {/* Floating Card */}


          <motion.div

            animate={{
              y:[0,20,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
              absolute
              -bottom-8
              -left-10
              bg-white
              rounded-2xl
              shadow-xl
              p-5
            "
          >

            <p className="
              text-sm
              text-gray-500
            ">

              Completed

            </p>


            <h2 className="
              text-3xl
              font-bold
              text-indigo-600
            ">

              25

            </h2>


            <p>
              Lessons

            </p>


          </motion.div>


        </div>


      </div>


    </section>

  )

}



interface StatProps {

 icon:React.ReactNode;
 number:string;
 text:string;

}


const Stat = ({
 icon,
 number,
 text
}:StatProps)=>{


return (

<div className="
flex
items-center
gap-3
">


<div className="
bg-white/20
p-3
rounded-xl
">

{icon}

</div>


<div>

<h3 className="
text-2xl
font-bold
">

{number}

</h3>


<p className="
text-indigo-100
">

{text}

</p>


</div>


</div>

)

}



export default Hero;