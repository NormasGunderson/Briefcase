import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";

import Logo from "../assets/logo.ico";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[55px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div> 
        {/* logo on the left upper corner  */}
        <img src={Logo} alt="for now!" style={{ width: "55px", color: "red" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/skills'>Skills</a>
        </li>
        <li>
          <a href='/work'>Work</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        {/* <Link to="home" smooth={true} duration={500} >Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} >About</Link></li>
        <li><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
        <li><Link to="work" smooth={true} duration={500} >Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500} >contact</Link></li> */}
      </ul>

      {/*Hamburger menu*/}
      <div onClick={handleClick} className="md:hidden z-15">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-3 text-2xl">
          <a href='/'>Home</a>
        </li>
        <li className="py-3 text-2xl">
          <a href='/about'>About</a>
        </li>
        <li className="py-3 text-2xl">
          <a href='skills'>Skills</a>
        </li>
        <li className="py-3 text-2xl">
          <a href='work'>Work</a>
        </li>
        <li className="py-3 text-2xl">
          <a href='contact'>Contact</a>
        </li>

      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* the next line will hide and un-hide the social icons */}
          <li className="w-[160px] h-[60px] flex justify--between items-center ml-[-60px] hover:ml-[-20px] duration-300 bg-purple-900">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              Git Hub <FaGithub size={30} />
              {/* Linkedin <FaLinkedin size={30} />
                Facebook <FaFacebook size={30} /> */}
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify--between items-center ml-[-60px] hover:ml-[-20px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify--between items-center ml-[-60px] hover:ml-[-20px] duration-300 bg-gray-600">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify--between items-center ml-[-60px] hover:ml-[-10px] duration-300 bg-red-900">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
