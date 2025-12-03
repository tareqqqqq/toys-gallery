import React from "react";

const Newsletter = () => {
  return (
    <section className="py-12 px-4 md:px-20 bg-black text-white rounded-lg my-8 mx-4 md:mx-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-6">Get the latest updates and offers straight to your inbox!</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input type="email" placeholder="Enter your email" className="input input-bordered w-full md:w-1/3"/>
        <button className="btn btn-primary px-8">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
