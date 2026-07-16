import { useState } from "react";
import Emmylogo from "../assets/Emmy-logo1.png";
import { Star, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header
        className="
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        bg-black backdrop-blur-md
        text-white h-16 md:h-18 px-2
        border-b border-white/10
        shadow-xl shadow-cyan-500/10
      "
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Emmylogo}
            alt="logo"
            className="
            w-22 md:w-20
            mx-4 md:mx-6
            transition-all duration-300
            hover:scale-110 hover:rotate-3
            cursor-pointer
          "
          />

          <Star
            size={20}
            className="
            text-yellow-400
            fill-yellow-400
            ml-[-30px]
            animate-pulse
          "
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center text-lg gap-8 font-medium">
          <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
            <a href="#Home">Home</a>
          </li>

          <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
            <a href="#featured">Featured</a>
          </li>

          <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
            <a href="#Skills">Skills</a>
          </li>

          <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a
              href="#contact"
              className="
              border border-cyan-400
              px-4 py-2
              rounded-lg
              hover:bg-cyan-400
              hover:text-black
              hover:scale-105
              transition-all duration-300
              shadow-md hover:shadow-cyan-400/50
            "
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          mr-2
          transition-all duration-300
          hover:text-cyan-300
          hover:scale-125
        "
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Gradient Line */}
      <div className="fixed top-16 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-40"></div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          fixed
          top-16
          left-0
          w-full
          bg-black
          text-white
          backdrop-blur-md
          shadow-lg
          animate-fadeIn
        "
        >
          <ul className="flex flex-col items-center py-8 gap-6 text-lg font-medium">
            <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <a href="#Home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>

            <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <a href="#featured" onClick={() => setOpen(false)}>
                Featured
              </a>
            </li>

            <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <a href="#Skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>

            <li className="hover:text-cyan-300 hover:scale-110 transition-all duration-300">
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                bg-cyan-500
                text-white
                font-semibold
                px-6 py-2
                rounded-lg
                hover:bg-cyan-300
                hover:scale-105
                transition-all duration-300
              "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;