import React from 'react'
import photo1 from '../assets/photo1.jpeg'

export const Activities = () => {
  return (
    <div id= "activities"className=' bg-[#F8F8FF] py-5 px-5 md:px-10'>
        <h1 className='text-3xl font-bold mb-6 text-center '>Activities</h1>
        <div class="mt-10 grid grid-flow-col grid-rows-2 grid-cols-3 gap-5 ">
        <div>
        <img src={photo1} alt="" loading="lazy" className='rounded-lg'/>
        </div>
        <div class="col-start-3">
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
        <div>
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
        <div>
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
        <div>
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
        <div>
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
         <div>
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
         <div>
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
         <div>
            <img src={photo1} alt="mg" loading="lazy" className='rounded-lg'/>
        </div>
        <div class="row-start-1 col-start-2 col-span-2">
            <img src={photo1} alt="mgg" loading="lazy" className='rounded-lg '/>
        </div>
        </div>
        <div className='flex justify-center items-center mt-3'>
        <button className='bg-orange-500 text-center p-2 rounded-lg text-white w-[120px] text-lg hover:bg-orange-600'> Load More</button>
        </div>

    </div>
  )
}
