import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      {/* Hero / Banner */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          Get in touch with us for any inquiries, feedback, or support.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-600">
          <div>
            <h2 className="font-semibold text-xl mb-1">Address</h2>
            <p>📍 Dhaka, Bangladesh</p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-1">Phone</h2>
            <p>📞 +880-123456789</p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-1">Email</h2>
            <p>📧 support@yourstore.com</p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            <a href="#" className="text-blue-800 hover:underline">LinkedIn</a>
            <a href="#" className="text-gray-800 hover:underline">GitHub</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid gap-4">
          <input className="border p-2 rounded" placeholder="Your Name" />
          <input className="border p-2 rounded" placeholder="Your Email" />
          <input className="border p-2 rounded" placeholder="Subject" />
          <textarea className="border p-2 rounded" placeholder="Message"></textarea>
          <button className="bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </div>
      </div>

      {/* Optional Google Map */}
      <section>
        <iframe
          title="Our Location"
          src="https://maps.google.com/maps?q=Dhaka,Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 rounded shadow mt-8"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
