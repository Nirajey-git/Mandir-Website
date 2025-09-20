import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

const Navbar = () =>{

    const[isMenuOpen, setIsMenuOpen] = useState(false);


    return (
    <div className="w-ful sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 ">
        <header className="  flex  justify-between items-center h-16 text-black py-1 px-2 md:px-28 bg-white/70 drop-shadow-md">
        <Link to="hero" smooth={true} duration={500} spy={true} offset={-80}>
            <img src='/' alt="Mandir Logo" className='w-[80px] hover:scale-56 transition-all cursor-pointer'/>
        </Link>
        <ul className="hidden xl:flex items-center gap-6 text-md font-medium">
        <li><Link to="hero" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Home</Link></li>
        {/* <li><Link to="news" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">News</Link></li> */}
        <li><Link to="aboutus" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">About Us</Link></li>
        <li><Link to="activities" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Activities</Link></li>
        <li><Link to="gallery" smooth={true} duration={500} spy={true}offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Gallery</Link></li>
        <li><Link to="location" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Location</Link></li>
        </ul>

        <i className={`xl:hidden block text-5xl cursor-pointer ${isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}`} onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-full left-0 w-full bg-[#F8F8FF] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform z-50 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="hero" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="aboutus" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="activities" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Activities</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="gallery" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="contact" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>




        </div>
        </header>

    </div>
    );

}
export default Navbar;