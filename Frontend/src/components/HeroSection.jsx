import React from 'react'
import mandirImage from '../assets/photo1.jpeg';
import krishna from '../assets/krishna.png';

export const HeroSection = () => {
  return (
    <div id="hero" className='h-[685px] flex flex-col md:flex-row  justify-center gap-10 md:gap-20 px-5 md:px-5 bg-[#F8F8FF]'>
        <div className='lg:w-1/2 flex flex-col justify-center  h-full'>
            <h1 className='text-4xl font-bold text-center '>ॐ कृष्णाय वासुदेवाय हरये परमात्मने | प्रणतः क्लेशनाशाय गोविंदाय नमो नमः॥</h1>
            <p className='text-center mt-4 font-serif text-lg'></p>

        </div>
        <div className='lg:w-1/2 flex justify-center mt-2 h-full'>
            <img src={krishna} alt="Mandir Image" className='w-full h-full object-cover rounded-md'/>
        </div>
    </div>
  )
}
