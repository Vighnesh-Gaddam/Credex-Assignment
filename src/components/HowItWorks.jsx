import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Upload, Search, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <Upload size={36} className="text-indigo-600" />,
    title: "Upload Your License",
    description: "Easily upload your unused software license in just a few clicks."
  },
  {
    icon: <Search size={36} className="text-indigo-600" />,
    title: "Get a Free Valuation",
    description: "We analyze your license and give you an instant valuation."
  },
  {
    icon: <DollarSign size={36} className="text-indigo-600" />,
    title: "Receive Payment",
    description: "Accept the offer and get paid through your preferred method."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          end: "bottom top",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
    gsap.utils.toArray(".step-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "bottom top",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">How It Works</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Selling your unused software licenses has never been easier.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
