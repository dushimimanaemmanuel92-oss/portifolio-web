import { FaGithub, FaInstagram, FaLinkedin,FaEnvelope, FaWhatsapp, FaTwitter} from "react-icons/fa6";

function Footer (){
    return (
        <div className="bg-[#24193e] h-30 shadow-slate-900 " >
<div className="h-px md:h-0.005 bg-gradient-to-r from-transparent via-white to-transparent"></div>
<div className="flex flex-col items-center mt-4">
    <div className="flex items-center gap-4">
 <a href="#" className="focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full">
    <FaEnvelope className="text-white  w-11 md:w-12 h-10 md:h-12 p-3 rounded-full bg-white/10 cursor-pointer transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-90 md:hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/60" />
  </a>

  <a href="https://www.instagram.com/" className="focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full">
    <FaInstagram className="text-white text-2xl w-11 md:w-12 h-10 md:h-12 p-3 rounded-full bg-white/10 cursor-pointer transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-90 md:hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/60" />
  </a>

  <a href="https://www.linkedin.com/in/emmy-dushimimana" className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full">
    <FaLinkedin className="text-white  w-11 md:w-12 h-10 md:h-12 p-3 rounded-full bg-white/10 cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-90 md:hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/60" />
  </a>

  <a href="https://twitter.com/" className="focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full">
    <FaTwitter className="text-white  w-11 md:w-12 h-10 md:h-12 p-3 rounded-full bg-white/10 cursor-pointer transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-90 md:hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/60" />
  </a>
</div>
<p className="text-yellow-100 mt-2">© {new Date().getFullYear()} Emmy. All rights reserved.</p>
</div>

   </div>
    )
}
export default Footer;