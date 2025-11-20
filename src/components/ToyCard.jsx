import React from "react";
import { Link } from "react-router";


const ToyCard = ({ toy }) => {
  const { pictureURL, toyName, rating, availableQuantity, price, toyId } = toy;

  return (
    <div className="card w-full bg-base-100 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
     
      <figure className="h-56 bg-gray-50">
        <img
          src={pictureURL}
          alt={toyName}
          className="object-contain h-full w-full p-4"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {toyName}
        </h2>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <p>
            <span className="font-medium">Rating:</span> ⭐ {rating}
          </p>
          <p>
            <span className="font-medium">In Stock:</span> {availableQuantity}
          </p>
        </div>
        <p className="text-lg font-bold text-green-600 mt-3">${price}</p>

        <div className="card-actions justify-end mt-4">
          <Link
            to={`/details/${toyId}`}
            className="btn btn-primary bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

