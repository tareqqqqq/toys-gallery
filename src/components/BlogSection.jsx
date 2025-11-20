import React from 'react';

const BlogSection = () => {
    return (
         <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">
            How STEM Toys Make Learning Fun for Kids
          </h2>
          <p className="text-gray-700">
            STEM (Science, Technology, Engineering, Math) toys turn learning into a fun and interactive experience. 
            They enhance problem-solving skills, creativity, and critical thinking from an early age, helping children explore and discover the world around them.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://www.stemschool.com/img/article/stem-toys-introduce-children-to-stem-education-with-toys.jpg"
            alt="STEM Toys"
            className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
          />
        </div>

      </div>
    </div>
    );
};

export default BlogSection;