import React from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Cars", img: "https://cdn-icons-png.flaticon.com/512/743/743007.png" },
    { id: 2, name: "Blocks", img: "https://cdn-icons-png.flaticon.com/512/2910/2910766.png" },
    { id: 3, name: "Dolls", img: "https://cdn-icons-png.flaticon.com/512/4390/4390101.png" },
    { id: 4, name: "Trains", img: "https://cdn-icons-png.flaticon.com/512/4462/4462762.png" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map(cat => (
          <div key={cat.id} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105">
            <img src={cat.img} alt={cat.name} className="w-20 h-20 mb-4"/>
            <h3 className="font-semibold text-lg text-gray-900">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
