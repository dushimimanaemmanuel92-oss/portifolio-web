import { FaGithub, FaInstagram, FaLinkedin,FaEnvelope, FaWhatsapp, FaTwitter} from "react-icons/fa6";

function Home() {
    return (
        <>
        <section id="Home" className="min-h-screen">  
            <div className="flex justify-between items-center gap-2 md:gap-36 mt-1 md:mt-18 mx-18 ">
       <div className="text">
      <h1 className='bg-gradient-to-r from-[#310149]  via-[#be54ce] to-[#100d18] text-white  text-sm md:text-2xl  px-4 md:px-6 mt-20 md:mt-6 border-1 w-[30vw] md:w-[28vw] '>Welcome to my Portfolio</h1>
<h2 className="flex items-baselinetext-lg md:text-4xl font-bold text-white mt-6 md:mt-4">
  Hi, {" "}
  <span className="typing">
    I'm Emmy Full-stack Developer
  </span>
</h2>
      <p className="mt-2 md:mt-4  text-italic text-amber-100 ">I'm a full-stack developer specializing in React, Next.js, Node.js, and React Native. 
      I build fast, modern web and mobile experiences — from pixel-perfect UI to powerful backend systems. 
      Whether it's a SaaS app, mobile Apps, or custom API — I make ideas come to life with clean, production-ready code.
       </p>
    </div>
    {/* mmm */}
<style>{`
  .circle {
    width: clamp(120px, 15vw, 200px);
    height: clamp(120px, 15vw, 200px);
    border: 3px solid #00e0ff;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 10px #00e0ff,
                0 0 20px #00e0ff,
                0 0 30px #00e0ff;
    animation: rotate 3s linear infinite;
  }

  .circle::before,
  .circle::after {
    content: "";
    position: absolute;
    width: clamp(8px, 1.5vw, 12px);
    height: clamp(8px, 1.5vw, 12px);
    background: #00e0ff;
    border-radius: 50%;
    box-shadow: 0 0 10px #00e0ff,
                0 0 20px #00e0ff;
  }

  .circle::before {
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
  }

  .circle::after {
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Hide on medium screens */
 @media (max-width: 767px) {
  .circle {
    display: none;
    }
  }
`}</style>

      <div className="container">
        <div className="circle"></div>
      </div>
  </div>
     {/* # CV  */}

     <div className="flex  flex-col md:flex-row gap-4 md:gap-6  mt-3 md:mt-4  mx-18 ">
        <a  href="/emmy_cv.pdf" download className="bg-green-600 text-white px-20 md:px-5 
       py-2 md:py-2 rounded-lg hover:bg-blue-700 text-2xl">Download CV</a>
      <a href="#contact" className=" border-2 border-blue-600 text-white px-20 md:px-5 py-2 md:py-2 rounded-lg hover:bg-yellow-800 text-2xl">Get In Touch</a>
     </div>
     
     <div className="flex items-center gap-8 md:gap-22  mt-4 md:mt-4 mx-10 md:mx-18">
      <div className="relative  bg-green-300 w-12 md:w-15 h-12 md:h-15 rounded-4xl ">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tex-black font-bold text-3xl">15</p>
        <p className="mt-15 md:mt-16 text-white text-sm ">Projects completed</p>
      </div>
        <div className="relative  bg-green-300 w-12 md:w-15 h-12 md:h-15 rounded-4xl ">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tex-black font-bold text-3xl">10</p>
        <p className="mt-15 md:mt-16 text-white text-sm ">Code Commits </p>
      </div>
        <div className="relative  bg-green-300 w-12 md:w-15 h-12 md:h-15 rounded-4xl ">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tex-black font-bold text-3xl">3</p>
        <p className="mt-15 md:mt-16 text-white text-sm ">Years Experience</p>
      </div>
        <div className="relative  bg-green-300 w-12 md:w-15 h-12 md:h-15 rounded-4xl ">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tex-black font-bold text-3xl">5</p>
        <p className="mt-15 md:mt-16 text-white text-sm ">Technology Mastered</p>
      </div>
     </div>

<div className=" hidden md:flex flex-col gap-2 fixed top-28 right-8 ">
 <a href="#"> <FaEnvelope size={25} className="text-white bg-indigo-950 rounded-full p-1 w-8 h-8   hover:bg-cyan-300 transition-all duration-300 scale-110" />  </a>
 <a href="https://www.instagram.com/"> <FaInstagram size={25} className="text-white bg-indigo-950 rounded-full p-1 w-8 h-8 hover:text-pink-500 hover:bg-cyan-300 transition-all duration-300 scale-110"  />  </a>
 <a href="https://x.com/home"> <FaTwitter size={25} className="text-white bg-indigo-950 rounded-full p-1 w-8 h-8  hover:bg-cyan-300 transition-all duration-300 scale-110" />
  </a> <a href="https://www.linkedin.com/in/emmy-dushimimana"> <FaLinkedin size={25} className="text-white bg-indigo-950 rounded-full p-1 w-8 h-8  hover:bg-cyan-300 transition-all duration-300 scale-110" />  </a>
 <a href="https://github.com/dushimimanaemmanuel92-oss"> <FaGithub size={25} className="text-white bg-indigo-950 rounded-full p-1 w-8 h-8  hover:bg-cyan-300 transition-all duration-300 hover:scale-105" />
  </a>
</div>
</section>

</>
    )
}
export default Home;