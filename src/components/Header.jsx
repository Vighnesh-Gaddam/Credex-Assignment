import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact-form" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef();
  const backdropRef = useRef();
  const linksRef = useRef([]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Apply dark mode based on state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  // Animate mobile menu open/close
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: 0, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.2,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 dark:text-white">SoftSell</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-indigo-600 dark:hover:text-indigo-400">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Button section for mobile and larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-gray-700 dark:text-white hover:text-indigo-600 transition"
          >
            {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Sell Now
          </button>
        </div>
        <button className="md:hidden text-gray-700 dark:text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>
      <div
        ref={backdropRef}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? "block" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 px-6 py-8 shadow-lg flex flex-col dark:bg-gray-800"
      >
        <div className="flex justify-end mb-6">
          <button onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 text-lg font-medium text-gray-800 dark:text-gray-200">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (linksRef.current[index] = el)}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex justify-between items-center mt-8 space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-gray-700 dark:text-white hover:text-indigo-600 transition"
          >
            {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Sell Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
