import React from 'react'
import imagexa from '../assets/photo1.jpeg'

export const AboutUs = () => {
  return (
    <div id="aboutus" className=' bg-[#F8F8FF] py-3 px-0 md:px-1'>
        <h1 className='text-3xl font-bold mb-6 text-center'> About Us</h1>
        <div className='flex flex-col justify-start md:flex-row p-3 '>
            <div className='md:w-1/2 p-5 text-justify font-serif text-lg'>
                <img src={imagexa} alt="imagexa" className='w-full mt-4 rounded-lg' />
            </div>
            <div className='md:w-1/2 flex flex-col justify-start md:mt-10 '>
            <h1 className='text-center font-3xl font-bold'>सलकपुर कृष्ण प्रणामी मन्दिर </h1>
            <p className='mt-4 font-serif text-center p-3'>स्वागतम् छ सलाकपुर कृष्ण प्राणामी मन्दिरमा, जो भगवान् कृष्णको समर्पित पवित्र स्थान हो। हाम्रो मन्दिर एक आध्यात्मिक केन्द्र हो जहाँ भक्तजन शान्ति, सद्भाव र प्राणामी सम्प्रदायका शिक्षाहरू अनुभव गर्न आउँछन्।

            हाम्रो मन्दिरमा हरेक दिन भजन, पूजा र आध्यात्मिक प्रवचन आयोजना गरिन्छ, जसले भक्तजनहरूबीच भक्ति र एकता प्रबर्धन गर्छ।

            सालभरि हामी जन्माष्टमी, होली र अन्य परम्परागत हिन्दू चाडपर्वहरू हर्षोल्लासका साथ मनाउँछौं, जसले स्थानिय समुदायलाई भक्ति र सांस्कृतिक धरोहरको आनन्द सँगै अनुभव गराउँछ।

            हाम्रो उद्देश्य सबै भक्तजनहरूलाई स्वागतयोग्य वातावरण प्रदान गर्नु हो, जहाँ उनीहरूले आध्यात्मिक शिक्षा, सहिष्णुता र सामुदायिक सेवाको माध्यमबाट प्राणामी सम्प्रदायको परम्परालाई जोगाउन सकून्। यहाँ आउने सबैले पूजा गर्न, सिक्न वा सांस्कृतिक गतिविधिमा भाग लिन सक्ने अवसर पाउँछन्।</p>
            <div className='flex justify-center items-center lg:justify-start'>
            <button className='bg-orange-500 w-[120px] mt-2 rounded-lg p-2 text-white mx-3 flex justify-center items-center'>Read More →</button>
            </div>
             </div>
        </div>
        <div>

        </div>
    </div>
  )
}
