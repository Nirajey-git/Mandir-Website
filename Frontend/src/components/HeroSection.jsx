import React from 'react'
import mandirImage from '../assets/photo1.jpeg';
import krishna from '../assets/krishna.png';
import rajshaman from '../assets/rajshama.jpg';

export const HeroSection = () => {
  return (
    <div id="hero" className=' relative h-auto flex flex-col md:flex-row  justify-center gap-1  md:gap-20 px-5 md:px-5 bg-[#F8F8FF]'>
        <div className=' mt-8 lg:w-1/2 flex flex-col justify-center align-middle h-auto'>
            <h1 className='text-4xl font-bold text-center '>ॐ कृष्णाय वासुदेवाय हरये परमात्मने | प्रणतः क्लेशनाशाय गोविंदाय नमो नमः॥</h1>

        </div>
        <div className='h-[330px] lg:w-1/2 flex justify-center lg:h-[650px] mb-5 md:p-4 mt-2'>
            <img src={rajshaman} alt="Mandir Image" className='w-full h-[150px]] object-cover rounded-md'/>
        </div>
    </div>
  )
}
