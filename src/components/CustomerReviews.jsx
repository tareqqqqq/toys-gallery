import React from 'react';

const CustomerReviews = () => {
     const reviews = [
    {
      id: 1,
      name: "Sarah Khan",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQMd6uiC4gD00TrWGGyXLWl4NKJzJjLIvJw&s",
      rating: 5,
      review:
        "The toys are of amazing quality! My kids loved them. Highly recommend Toy Gallery.",
    },
    {
      id: 2,
      name: "Amit Roy",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy65Ehzb0rAIM6wvEG5bDZEdvLotZ3B_k6A&s",
      rating: 4,
      review:
        "Great variety of toys and fast delivery. I’ll definitely buy again.",
    },
    {
      id: 3,
      name: "Rashid Ahmed",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsJlWC1-obMtYp75i2puM0xH1B1spndksJQ&s",
      rating: 5,
      review:
        "Fantastic experience! The customer support team was very helpful.",
    },
  ];

    return (
         <div className="bg-pink-100 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-500">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Don't just take our words — explore honest feedback from real
          customers about their experience with us!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={r.photo}
                alt={r.name}
                className="w-14 h-14 rounded-full border-2 border-yellow-400"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{r.name}</h3>
                <p className="text-yellow-500">
                  {"⭐".repeat(r.rating)}{" "}
                  <span className="text-gray-400">
                    {5 - r.rating > 0 && "☆".repeat(5 - r.rating)}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{r.review}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default CustomerReviews;