import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
    <div className='flex justify-evenly p-4 '>
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
        <h1 className='text-xl font-semibold mb-3'> Follow Us :</h1>
        <div>
            <img src="" alt="facebook" />
            <img src="" alt="instagram" />
            <img src="" alt="twitter" />
            <img src="" alt="youtube" />
        </div>
       </div>
      
    </div>
    <footer>
        <div className='text-center p-3 bg-gray-200'>
            <p>© {currentYear} Salakpur Krishna Pranami Mandir. All rights reserved.</p>
        </div>
    </footer>
    
    </div>
  )
}
