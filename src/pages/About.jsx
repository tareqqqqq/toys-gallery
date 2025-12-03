import React from "react";

const About = () => {
  // Team Data
  const team = [
    {
      name: "Azizul Haque",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Md Tareq Mahmud Khan",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Sadia Rahman",
      role: "Support Manager",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          About <span className="text-red-400">Us</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Learn more about our mission, vision, and the team behind our toy store.
        </p>
      </section>

      {/* Who We Are */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Who We Are</h2>
        <p className="text-gray-600">
          We are a trusted toy store providing high-quality, safe, and fun toys for children of all ages. 
          Since our inception in 2015, we have focused on inspiring creativity and learning through play.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To inspire creativity and learning in children through safe, fun, and educational toys.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a leading global toy brand trusted by parents and loved by children worldwide.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Premium Quality Toys</li>
          <li>Fast Delivery</li>
          <li>Secure Payment</li>
          <li>24/7 Customer Support</li>
        </ul>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
