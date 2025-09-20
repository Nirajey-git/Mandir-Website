import React from "react";

export const MapSection = () => {
  return (
    <div id="location" className="w-full py-10 bg-[#F8F8FF] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
      <p className="text-center mb-6 max-w-xl mx-2">
        Visit Shri Krishna Pranami Mandir, Salakpur. Find us on Google Maps below for easy directions.
      </p>
      <div className="w-[90%] rounded-lg md:w-3/4 lg:w-2/3 h-[400px] overflow-hidden shadow-lg  ">
        <iframe 
          title="Salakpur Krishna Pranami Mandir Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7130.615193500859!2d87.3678101118706!3d26.670643158701274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6f4c540d43b3%3A0x3dbfd366d931f04d!2sSalakpur%20Shree%20Krishna%20Pranami%20Mandir!5e0!3m2!1sen!2sau!4v1758340167960!5m2!1sen!2sau" 
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
