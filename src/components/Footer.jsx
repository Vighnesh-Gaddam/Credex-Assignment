import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SoftSell</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Modern solutions for growing teams.</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm">Home</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm">About</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
