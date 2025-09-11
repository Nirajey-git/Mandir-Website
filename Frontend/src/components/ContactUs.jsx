import React from 'react'

export const ContactUs = () => {
  return (
    <div className='bg-[#F8F8FF] py-3 px-5 md:px-10'>
        <h1 id="contact" className='text-3xl font-bold mb-6 text-center'>Contact Us</h1>
        <form action="">
            <div className='m-auto flex mt-1 justify-center items-center gap-1'>
               
                <input type="text" placeholder='Enter Your Name' className='border-2 border-gray-200 rounded-2xl p-2 w-[420px] mt-1 mb-2'/>
            </div>
             <div className='m-auto flex mt-1 justify-center items-center gap-2'>
                <input type="email" placeholder='Enter Your Email' className='border-2 border-gray-200 rounded-2xl p-2 w-[420px] mt-1 mb-2'/>
            </div>
            <div className='m-auto flex mt-1 justify-center items-center gap-2'>
               <textarea name="" id="" placeholder='Message' className='border-2 border-gray-200 rounded-2xl p-2 w-[420px] mt-1 mb-2'></textarea>
            </div>
            <div className='flex justify-center items-center'>
            <button className='bg-orange-500 w-[420px] mt-2 mb-4 rounded-lg p-2 text-xl text-white mx-3 flex justify-center items-center'>Send Message</button>
            </div>
        </form>
    </div>
  )
}
