import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

const Navbar = () =>{

    const[isMenuOpen, setIsMenuOpen] = useState(false);


    return (
    <div className="w-full bg-stone-200 sticky top-0 z-50">
        <header className="  flex  justify-between items-center  text-black py-1 px-2 md:px-28 bg-white drop-shadow-md">
        <Link to="hero" smooth={true} duration={500} spy={true} offset={-80}>
            <img src='/' alt="Mandir Logo" className='w-[80px] hover:scale-56 transition-all cursor-pointer'/>
        </Link>
        <ul className="hidden xl:flex items-center gap-6 font-serif text-lg">
        <li><Link to="hero" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Home</Link></li>
        <li><Link to="aboutus" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">About Us</Link></li>
        <li><Link to="activities" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Activities</Link></li>
        <li><Link to="blogs" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Blogs</Link></li>
        <li><Link to="gallery" smooth={true} duration={500} spy={true}offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Gallery</Link></li>
        <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-500" className="cursor-pointer hover:text-sky-600">Contact Us</Link></li>
        </ul>
    <div className='relative hidden xl:flex items-center justify-center '>
            <a href="/" target='_blank' >
            <button className='rounded-lg p-2 w-[120px] font-semibold bg-orange-500 font-sans text-white hover:bg-orange-400 shadow-md'>Donation </button>
            </a>
    </div>

        <i className={`xl:hidden block text-5xl cursor-pointer ${isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}`} onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-full left-0 w-full bg-[#F8F8FF] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform z-50 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="hero" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="aboutus" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="activities" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Activities</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="blogs" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="gallery" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><Link to="contact" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>



            <button className='rounded-full w-[90%] p-3 mb-3 font-semibold bg-orange-500 text-white font-sans hover:bg-orange-600 shadow-md'><a href="/" target='_blank' >Donation</a></button>

        </div>
        </header>

    </div>
    );

}
export default Navbar;