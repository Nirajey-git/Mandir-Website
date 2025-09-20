import React, { useEffect, useState } from 'react'
import client, { urlFor } from '../sanityClient'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export const Activities = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "activities"][0]{ images }`)
      .then((data) => setImages(data?.images || []))
      .catch(console.error)
  }, [])

  return (
    <div id="activities" className="bg-[#F8F8FF] py-5 px-5 md:px-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Activities</h1>

      {images.length > 0 ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          className="mySwiper"
          style={{'--swiper-navigation-color': '#ffffff', 
  }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={urlFor(img).width(400).height(300).url()}
                alt={`activity-${i}`}
                className="rounded-lg object-cover w-full h-[250px]"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No activities uploaded yet.</p>
      )}
    </div>
  )
}
