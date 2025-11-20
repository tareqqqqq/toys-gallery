import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";


const CardParent = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/data.json")  // Assuming data.json is placed inside the public folder
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <section className="my-16 bg-gray-100">
     <div className="container m-auto">
       <h1 className="text-3xl py-4 md:text-4xl font-bold text-center mb-10 text-gray-800">
         Popular <span className='text-red-400'>Toys</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
     </div>
    </section>
  );
};

export default CardParent;
