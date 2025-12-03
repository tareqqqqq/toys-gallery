import React from "react";
import { Link } from "react-router";

const TopRatedItems = () => {
  const topRated = [
    {
      id: 1,
      title: "Remote Control Car",
      img: "https://www.shutterstock.com/image-photo/remote-controlled-toy-car-game-600nw-2459100459.jpg",
      desc: "High speed remote car for kids."
    },
    {
      id: 2,
      title: "Lego Classic Bricks",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmwSKUyQSKTb9eHuzEK-YcoDXAZ_s-67ELw&s",
      desc: "Colorful Lego bricks set for creativity."
    },
    {
      id: 3,
      title: "Barbie Dreamhouse",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_pA_FTleOKXctsphvznAldFK8D3qyKHOUw&s",
      desc: "3-story dreamhouse with furniture."
    },
    {
      id: 4,
      title: "Wooden Train Set",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4EcWb3efGeYHJR-67qIGs2vjCWEQRZMLlg&s",
      desc: "Classic wooden train with track pieces."
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Top Rated Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topRated.map(item => (
          <div key={item.id} className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
            <img src={item.img} alt={item.title} className="h-48 w-full object-cover"/>
            <div className="p-4 flex flex-col grow">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 grow">{item.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedItems;
