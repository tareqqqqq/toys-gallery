import React from 'react';
import { ShieldCheck, Truck, Star, Smile } from "lucide-react";

const ChooseUs = () => {
   const reasons = [
    {
      id: 1,
      icon: <ShieldCheck size={40} className="text-yellow-400" />,
      title: "Safe & Quality Toys",
      desc: "All our toys are made with child-safe, non-toxic materials and tested for quality.",
    },
    {
      id: 2,
      icon: <Truck size={40} className="text-yellow-400" />,
      title: "Fast & Reliable Delivery",
      desc: "We ensure quick and safe delivery right to your doorstep across the country.",
    },
    {
      id: 3,
      icon: <Star size={40} className="text-yellow-400" />,
      title: "Top Rated by Parents",
      desc: "Thousands of parents trust our toys for their kids’ fun and learning.",
    },
    {
      id: 4,
      icon: <Smile size={40} className="text-yellow-400" />,
      title: "Excellent Customer Support",
      desc: "Our support team is always ready to help you with any issue, any time.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Why Choose Us
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          We are dedicated to providing high-quality, safe, and exciting toys that make every child smile.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;