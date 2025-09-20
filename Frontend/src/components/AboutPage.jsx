import React, { useEffect, useState } from 'react';
import client, { urlFor } from '../sanityClient';
import Navbar from './Navbar';
import { Footer } from './Footer';

export const AboutPage = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "aboutUs"][0]{ heading, image, content }`)
      .then(data => setAbout(data))
      .catch(console.error);
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div className="bg-[#F8F8FF] min-h-screen">
      <Navbar />
    <div className=' py-10 px-5 md:px-10'>
      <h1 className='text-4xl font-bold mb-6 text-center'>{about.heading}</h1>
      {about.image && (
        <img
          src={urlFor(about.image).width(800).url()}
          alt="About"
          className='w-full max-w-3xl mx-auto rounded-lg mb-6'
        />
      )}
      <p className='font-serif text-lg max-w-4xl mx-auto text-justify'>{about.content}</p>
    </div>
    <Footer />
    </div>
  );
};
