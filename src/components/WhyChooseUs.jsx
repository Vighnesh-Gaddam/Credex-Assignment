import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, DollarSign, Zap, Smile } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <ShieldCheck size={32} className="text-indigo-600" />,
    title: "Trusted & Secure",
    description: "All transactions are protected with industry-standard encryption and verification.",
  },
  {
    icon: <DollarSign size={32} className="text-indigo-600" />,
    title: "Get the Best Value",
    description: "We ensure fair market valuation to get you the highest return for your software licenses.",
  },
  {
    icon: <Zap size={32} className="text-indigo-600" />,
    title: "Fast & Easy Process",
    description: "Upload your license and receive a valuation in just a few steps — no technical knowledge needed.",
  },
  {
    icon: <Smile size={32} className="text-indigo-600" />,
    title: "1000+ Happy Clients",
    description: "Join a growing community of sellers who’ve earned more with SoftSell.",
  },
];

const WhyChooseUs = () => {
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
        },
      }
    );

    gsap.utils.toArray(".feature-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why Choose SoftSell?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">We make software license selling simple, secure, and rewarding.</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition-all"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
