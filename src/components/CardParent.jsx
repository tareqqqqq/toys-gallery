import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const CardParent = () => {
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // asc / desc
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // ✅ Unique Category বের করা (Filtering এর জন্য)
  const categories = ["all", ...new Set(toys.map((toy) => toy.subCategory))];

  // ✅ Filtering (SAFE)
let filteredToys =
  selectedCategory === "all"
    ? [...toys] // ✅ copy created here
    : toys.filter((toy) => toy.subCategory === selectedCategory);

// ✅ Sorting (SAFE)
if (sortOrder === "asc") {
  filteredToys = [...filteredToys].sort((a, b) => a.price - b.price);
} else if (sortOrder === "desc") {
  filteredToys = [...filteredToys].sort((a, b) => b.price - a.price);
}


  return (
    <section className="my-16 bg-gray-100">
      <div className="container m-auto">
        <h1 className="text-3xl py-4 md:text-4xl font-bold text-center mb-6 text-gray-800">
          Popular <span className="text-red-400">Toys</span>
        </h1>

        {/* ✅ Sorting + Filtering Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          
          {/* ✅ Filter */}
          <select
            className="p-2 border rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* ✅ Sort */}
          <select
            className="p-2 border rounded-md"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* ✅ Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardParent;
