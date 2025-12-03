import React from 'react';
import { Link } from 'react-router';

const ErrorPages = () => {
    return (
       <div className="flex flex-col justify-center items-center h-screen bg-linear-to-br from-purple-100 to-blue-100 text-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIA38LOAuumFUpGAuCoHJTta_eI2N0Cf8rw&s"
        alt="404"
        className="w-64 mb-6"
      />

     
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="btn bg-blue-500 hover:bg-blue-600 text-white px-8 border-none"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default ErrorPages;