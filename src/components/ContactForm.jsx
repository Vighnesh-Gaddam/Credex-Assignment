import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', company: '', licenseType: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.company) {
      newErrors.company = 'Company is required';
      valid = false;
    }

    if (!formData.licenseType) {
      newErrors.licenseType = 'License Type is required';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact-form" className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Have questions or need assistance? Reach out to us!</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 font-medium">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div>
              <label htmlFor="licenseType" className="block text-gray-700 dark:text-gray-300 font-medium">License Type</label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select License Type</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Cloud">Cloud</option>
              </select>
              {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
