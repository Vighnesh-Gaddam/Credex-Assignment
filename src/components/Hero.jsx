import { useEffect, useRef} from "react";
import { gsap } from "gsap";
import heroImg from "/HeroImage.svg"; // Replace with your actual path or placeholder image

const Hero = () => {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headlineRef.current, subRef.current, ctaRef.current, imgRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      className="bg-gradient-to-br from-indigo-50 to-white py-20 pt-50 dark:from-gray-900 dark:to-gray-800"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Sell Your Unused Software Licenses Effortlessly
          </h1>
          <p ref={subRef} className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            SoftSell helps you get the best value for your unused software licenses.
            Upload, evaluate, and get paid — all in one seamless flow.
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
            >
              Sell My Licenses
            </a>
            <a
              href="#how-it-works"
              className="text-indigo-600 border border-indigo-600 px-6 py-3 rounded hover:bg-indigo-50 dark:text-indigo-300 dark:border-indigo-500 dark:hover:bg-indigo-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div ref={imgRef} className="w-full flex justify-center">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="max-w-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
