import React from "react";
import image1 from '../assets/photo1.jpeg';

const blogs = [
  {
    id: 1,
    title: "Celebrating Janmashtami at Salakpur Mandir",
    image: image1,
    excerpt: "Join us in celebrating the vibrant festival of Janmashtami with bhajans, decorations, and devotional activities...",
    link: "#",
  },
  {
    id: 2,
    title: "Community Activities and Spiritual Learning",
    image: image1,
    excerpt: "Our Mandir organizes weekly spiritual classes and community events to engage devotees of all ages...",
    link: "#",
  },
  {
    id: 3,
    title: "Cultural Festivals at Salakpur Mandir",
    image: image1,
    excerpt: "Experience Holi, Diwali, and other cultural celebrations that bring the community together in devotion...",
    link: "#",
  },
];

export const Blogs = () => {
  return (
    <div id="blogs" className="bg-[#F8F8FF]">
      <div className=' px-1 md:px-7'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Blogs</h1>
      </div>

      <div className="bg-[#F8F8FF] py-3 px-5 md:px-20">
        <div className="grid gap-8 md:grid-cols-3 mt-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a href={blog.link} className="text-grey-900 hover:text-grey-600 font-semibold">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center mt-2'>
        <button className='bg-orange-500 text-center p-2 rounded-lg text-white w-[120px] text-lg hover:bg-orange-600'> Load More</button>
        </div>
    </div>
  );
};
