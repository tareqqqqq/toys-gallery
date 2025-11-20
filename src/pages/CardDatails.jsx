import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const CardDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.toyId === parseInt(id));
        setToy(found);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Success!",
      text: "You have successfully requested to try this toy!",
      icon: "success",
      confirmButtonText: "Cool 😎",
      confirmButtonColor: "#3085d6",
      background: "#fefefe",
      color: "#333",
    });
  };

  if (!toy)
    return (
      <p className="text-center mt-10 text-lg font-medium text-gray-600 animate-pulse">
        Loading Toy Details...
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-lg">
      <title> {toy.toyName} </title>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-10">
        {toy.toyName}
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-[350px] md:w-[420px] rounded-xl shadow-md object-cover"
          />
        </div>

        <div className="flex-1 space-y-3 text-gray-700">
          <p className="text-lg">
            <span className="font-semibold text-black">Seller:</span>{" "}
            {toy.sellerName}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-black">Email:</span>{" "}
            {toy.sellerEmail}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-black">Price:</span> $
            {toy.price}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-black">Rating:</span> ⭐{" "}
            {toy.rating}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-black">Available:</span>{" "}
            {toy.availableQuantity} pcs
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            {toy.description}
          </p>
          <p className="text-sm text-gray-500 italic">
            Category: {toy.subCategory}
          </p>
        </div>
      </div>

      {/* Try Now Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Try Now
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-lg"
            required
          />
          <button
            type="submit"
            className="btn bg-blue-600 hover:bg-blue-700 text-white w-full mt-2"
          >
            Try Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardDetails;
