import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ananya Singh",
    role: "IT Manager",
    company: "TechBridge Pvt Ltd",
    text: "SoftSell made our software license resale effortless. The team is super responsive and the process was seamless.",
  },
  {
    name: "Rahul Mehta",
    role: "Procurement Lead",
    company: "InnoTech Solutions",
    text: "Within hours of submitting, we got a fair valuation. Definitely a game-changer in asset recovery.",
  },
  {
    name: "Priya Desai",
    role: "Operations Head",
    company: "CloudNest",
    text: "The process was quick and professional. We recovered unused licenses that were just sitting idle.",
  },
  {
    name: "Karan Kapoor",
    role: "Finance Director",
    company: "ByteBazaar",
    text: "SoftSell helped us liquidate our surplus licenses with zero hassle. Highly recommended for all orgs!",
  },
];

const Testimonials = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2 }
    );

    gsap.utils.toArray(".testimonial-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", 
            end: "bottom top", 
            toggleActions: "play none none none", // Play animation when the card scrolls into view
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="bg-gray-50 py-16 px-6 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">What Our Clients Say</h2>
        <p className="text-gray-600 mb-10 dark:text-gray-300">Real feedback from happy customers who trusted SoftSell</p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="testimonial-card bg-white shadow-md rounded-lg p-6 text-left dark:bg-gray-800"
            >
              <p className="text-gray-700 italic mb-4 dark:text-white">“{review.text}”</p>
              <div className="text-sm text-gray-500 font-medium dark:text-gray-300">
                {review.name} · {review.role}, <span className="text-indigo-600">{review.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
