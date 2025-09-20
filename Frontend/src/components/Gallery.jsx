import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="bg-[#F8F8FF] py-5 px-5 md:px-10">
      <h1 id="gallery" className="text-3xl font-bold mb-6 text-center">Gallery</h1>

      <div className=" flex flex-col justify-center md:grid grid-cols-3 gap-4 p-4">
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

      {images.length > 6 && (
        <div className="flex justify-center mt-4">
          <Link to="/gallery-full">
            <button className="bg-orange-500 text-white p-2 rounded-lg w-[140px] hover:bg-orange-600">
              Load More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Gallery;
