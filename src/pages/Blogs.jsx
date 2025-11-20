import React from 'react';
import BlogSection from '../components/BlogSection';

const Blogs = () => {
    return (
        <div className="bg-gray-50 py-16 px-4">
          <title>Blogs</title>
          <BlogSection/>
      <div className="container m-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">
          The Importance of Toys in Child Development
        </h2>

        {/* Paragraph 1 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            1. Toys Are More Than Just Playthings
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            Toys are not just for fun — they are essential tools that help children learn, grow, and
            explore the world around them.{" "}
            <span className="text-black-500 font-medium">
              The bright colors, shapes, and textures stimulate sensory development and strengthen
              early learning skills.
            </span>{" "}
            When kids play, they build curiosity, confidence, and imagination — the foundations for
            lifelong growth and happiness.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            2. Educational Toys Build Knowledge Through Fun
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            Educational toys play a vital role in a child’s early learning process. Toys like
            puzzles, building blocks, and science kits enhance problem-solving and logical thinking.{" "}
            <span className=" font-semibold">
              They turn learning into a game — where education and entertainment walk hand in hand.
            </span>{" "}
            This playful approach makes children more curious and eager to learn, turning every
            moment of play into a new discovery.
          </p>
          <iframe
          width="50%"
          height="500"
           src="https://www.youtube.com/embed/94WZNSwmdg4" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-md container m-auto mt-5"
        ></iframe>
        </div>

        {/* Paragraph 3 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            3. Colorful Toys Stimulate the Senses
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            Colors have a strong impact on a child’s emotional and intellectual development.{" "}
           
              Brightly colored toys catch a child’s attention and encourage visual memory and focus.
            {" "}
            Sensory toys with different textures, sounds, and colors boost fine motor skills and
            hand-eye coordination. The more vivid the toy, the deeper the child’s engagement.
          </p>
        </div>

        {/* Paragraph 4 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Toys Encourage Social and Emotional Development
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            Playing with toys teaches children how to share, cooperate, and express emotions.{" "}
            <span className=" font-medium">
              Role-play toys help kids build empathy by stepping into different roles and
              understanding others’ feelings.
            </span>{" "}
            These moments of imaginative play lay the foundation for emotional intelligence and
            healthy social relationships later in life.
          </p>
        </div>

        {/* Paragraph 5 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            5. Entertainment That Inspires Creativity
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            Toys are not just for fun — they are a gateway to creativity and innovation.{" "}
            
              Entertainment toys inspire imagination and build resilience as kids experiment,
              create, and learn from their own experiences.
           {" "}
            Whether it’s a musical instrument or a painting kit, playtime becomes a creative lab for
            growing minds.
          </p>
        </div>

        {/* Paragraph 6 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            6. The Perfect Blend of Fun, Learning, and Growth
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            The best toys combine joy with purpose — nurturing the body, mind, and imagination.{" "}
            
              A toy in a child’s hand is more than an object; it’s a tool for learning, creativity,
              and emotional growth.
           {" "}
            Parents who choose a mix of educational and entertainment toys help children explore
            freely and think independently. Every toy is a step toward a brighter, smarter, and
            happier future.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Blogs;