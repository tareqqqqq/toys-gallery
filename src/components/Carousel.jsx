import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Auto Slide Logic (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">

      {/* Auto scroll to slide */}
      <a href={`#slide${currentSlide}`} className="hidden"></a>

      <div className="carousel w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-lg">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative flex flex-col md:flex-row-reverse items-center w-full h-full">
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src="https://www.shutterstock.com/image-photo/remote-controlled-toy-car-game-600nw-2459100459.jpg"
              className="w-full h-full object-cover rounded-t-2xl md:rounded-r-2xl"
              alt="Car"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Remote Controlled Car</h2>
            <p className="text-gray-700 mb-6 max-w-md">
              Experience the thrill of remote-controlled cars for endless fun and adventure.
            </p>
            <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black px-6">Explore</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative flex flex-col md:flex-row-reverse items-center w-full h-full">
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src="https://thetoyinsider.com/wp-content/uploads/2023/09/Mattel_BarbieDreamhouse-jpg.webp"
              className="w-full h-full object-cover rounded-t-2xl md:rounded-r-2xl"
              alt="Blocks"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Colorful Toy Blocks</h2>
            <p className="text-gray-700 mb-6 max-w-md">
              Build creativity with colorful toy blocks for kids of all ages.
            </p>
            <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black px-6">Explore</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative flex flex-col md:flex-row-reverse items-center w-full h-full">
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src="https://img.pikbest.com/origin/09/21/36/998pIkbEsTz5R.png!sw800"
              className="w-full h-full object-cover rounded-t-2xl md:rounded-r-2xl"
              alt="Educational Toys"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Educational Toy Set</h2>
            <p className="text-gray-700 mb-6 max-w-md">
              Learn and play with fun educational toys for children.
            </p>
            <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black px-6">Explore</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative flex flex-col md:flex-row-reverse items-center w-full h-full">
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src="https://i5.walmartimages.com/seo/Costway-Kids-Wooden-Play-Set-Kitchen-Toy-Strawberry-Pretend-Cooking-Playset-Toddler_55efb712-b559-468c-be01-20e8932e29c5.fa054fd1f9c9b5da0d7036c37b08e4c2.jpeg"
              className="w-full h-full object-cover rounded-t-2xl md:rounded-r-2xl"
              alt="Toy Train"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Toy Train Set</h2>
            <p className="text-gray-700 mb-6 max-w-md">
              Enjoy hours of fun with colorful toy train sets for kids.
            </p>
            <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black px-6">Explore</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
