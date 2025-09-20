import React, { useEffect, useState } from 'react';
import client, { urlFor } from '../sanityClient';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "aboutUs"][0]{ heading, image, content }`)
      .then(data => setAbout(data))
      .catch(console.error);
  }, []);

  if (!about) return <p>Loading...</p>;

  // Limit content to first 300 chars for homepage preview
  const previewContent =
    about.content.length > 1700
      ? about.content.slice(0, 1700) + '...'
      : about.content;

  return (
    <div id="aboutus" className='bg-[#F8F8FF] py-3 px-0 md:px-1'>
      <h1 className='text-3xl font-bold mb-2 text-center'>About Us</h1>
      <div className='flex flex-col md:flex-row p-1'>
        <div className='md:w-1/2 p-5 text-justify'>
          {about.image && (
            <img
              src={urlFor(about.image).width(300).url()}
              alt="About"
              className='w-full mt-4 rounded-lg'
            />
          )}
        </div>
        <div className='md:w-1/2 flex flex-col justify-start md:mt-10'>
          <h2 className='text-center text-2xl font-bold'>{about.heading}</h2>
          <p className='mt-4 font-serif text-center p-3'>{previewContent}</p>
          <div className='flex justify-center items-center lg:justify-start'>
            <Link to="/about">
              <button className='bg-orange-500 w-[120px] mt-2 rounded-lg p-2 text-white mx-3 flex justify-center items-center'>
                Read More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
