import React from "react";
import { Link } from "react-router";

const Promotional = () => {
  return (
    <section className="py-12 px-4 md:px-20 bg-yellow-50 text-center rounded-lg my-8 mx-4 md:mx-20">
      <h2 className="text-3xl font-bold mb-4">Special Promotions!</h2>
      <p className="mb-6 text-gray-700">Get 20% off on all top-rated toys this week. Limited time offer!</p>
      <Link to="/items" className="btn btn-primary px-8">Shop Now</Link>
    </section>
  );
};

export default Promotional;
