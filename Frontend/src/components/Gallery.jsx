import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";

function Gallery() {
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
    <div  className="bg-[#F8F8FF] py-5 px-5 md:px-10">
        <h1 id="gallery" className="text-3xl font-bold mb-6 text-center">Gallery</h1>
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.slice(0, 6).map((img, index) => (
        <div key={index} className="w-full h-64 overflow-hidden">
          <img
            src={urlFor(img).width(400).url()}
            alt={img.alt || "Gallery Image"}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Gallery;
