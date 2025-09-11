import React from "react";

export const MapSection = () => {
  return (
    <div className="w-full py-10 bg-[#F8F8FF] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
      <p className="text-center mb-6 max-w-xl">
        Visit Shri Krishna Pranami Mandir, Salakpur. Find us on Google Maps below for easy directions.
      </p>
      <div className="w-full md:w-3/4 lg:w-2/3 h-[400px] rounded-lg overflow-hidden shadow-lg ">
        <iframe
          title="Salakpur Krishna Pranami Mandir Map"
          src="https://www.google.com/maps/dir/Salakpur+Shree+Krishna+Pranami+Mandir/Biratchowk,+Koshi+Haraicha+56600/@26.6728192,87.3789537,16.36z/data=!4m14!4m13!1m5!1m1!1s0x39ef6f4c540d43b3:0x3dbfd366d931f04d!2m2!1d87.3765482!2d26.6706442!1m5!1m1!1s0x39ef65f840c1eab1:0x39b3f89f4bf15bae!2m2!1d87.3761105!2d26.6724847!3e0?hl=en&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
