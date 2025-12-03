import React, { useState } from "react";

const faqData = [
  {
    question: "How to place an order?",
    answer: "You can place an order by adding products to your cart and proceeding to checkout.",
  },
  {
    question: "What is the delivery time?",
    answer: "Delivery usually takes 3-7 business days depending on your location.",
  },
  {
    question: "What is the return policy?",
    answer: "You can return products within 14 days if they are unopened and in original condition.",
  },
  {
    question: "Which payment methods are accepted?",
    answer: "We accept credit/debit cards, mobile banking, and cash on delivery.",
  },
  {
    question: "Having trouble logging in?",
    answer: "Use the 'Forgot Password' option or contact our support team for help.",
  },
  {
    question: "How to request a refund?",
    answer: "Please contact our support team with your order ID to initiate a refund.",
  },
];

const orderSupport = [
  "Track Order",
  "Cancel Order",
  "Return Product",
];

const techSupport = [
  "Website not loading",
  "Login issues",
  "Payment failed",
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Hero / Banner */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Support Center</h1>
        <p className="text-gray-600 text-lg">
          We're here to help! Find answers or send us a message.
        </p>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className=" rounded-md p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-gray-800 font-medium">{faq.question}</h3>
                <span className="text-xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Order Support */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Order Support</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-1">
          {orderSupport.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Technical Support */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Support</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-1">
          {techSupport.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Message Box */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <div className="max-w-md mx-auto grid gap-4">
          <input className="border p-2 rounded" placeholder="Your Name" />
          <input className="border p-2 rounded" placeholder="Your Email" />
          <textarea className="border p-2 rounded" placeholder="Your Message"></textarea>
          <button className="bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default Support;
