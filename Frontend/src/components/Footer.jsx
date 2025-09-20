import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
    <div className='flex justify-evenly p-4 bg-white/70 '>
       <div className='mt-3'>
        <img src="" alt="Mandir logo" />
       </div>
       <div className='flex flex-col justify-center items-center p-3'>
        <h1 className='text-xl font-semibold mb-2'>Quick Links</h1>
        <ul className='flex flex-col justify-center items-center gap-3 font-normal text-md'>
            <li><a href="/">Home</a></li>
            <li>About Us</li>
            <li>Activities</li>
            <li>Blogs</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
       </div>
       <div className=' p-3'>
        <h1 className='text-xl font-medium mb-3'> Follow Us</h1>
        <div className='flex gap-4 '>
            <BsFacebook  className='size-6 text-blue-500'/>
            <FaInstagram className='size-6 text-pink-600' />
        </div>
       </div>
      
    </div>
    <hr className='mx-14'/>
    <footer>
        <div className='text-center p-3 bg-white/70'>
            <p>© {currentYear} Salakpur Krishna Pranami Mandir. All rights reserved.</p>
        </div>
    </footer>
    
    </div>
  )
}
