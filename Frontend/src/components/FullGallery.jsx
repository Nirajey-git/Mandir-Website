import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {Footer} from "./Footer";
import client, { urlFor } from "../sanityClient";

function FullGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "gallery"]{ images }`;
      const data = await client.fetch(query);
      const allImages = data.flatMap(doc => doc.images || []);
      setImages(allImages);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#F8F8FF] min-h-screen">
      <Navbar />

      <div className="py-5 px-5 md:px-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>

        {images.length === 0 ? (
          <p className="text-center text-gray-500">No images available.</p>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {images.map((img, index) => (
              <div key={index} className="w-full h-64 overflow-hidden">
                <img
                  src={urlFor(img).width(400).url()}
                  alt={img.alt || "Gallery Image"}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default FullGallery;
