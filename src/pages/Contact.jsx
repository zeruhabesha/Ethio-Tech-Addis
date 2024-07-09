import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen py-12"
      style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp6944127.jpg")' }}
    >
      <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-6 py-8 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
            <p className="text-gray-600 mb-4">
              We are here to help you with all your IT needs. Whether you have a question, need support, or want to learn more about our services, feel free to reach out to us.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Get in Touch:</strong><br />
              Phone: +1 (555) 123-4567<br />
              Email: info@companyname.com<br />
              Office Hours: Monday to Friday, 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Visit Our Office:</strong><br />
              EthioTech-Addis Trading (ETAT)<br />
              1234 Innovation Drive, Suite 100<br />
              Tech City, State, ZIP Code<br />
              Country
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Follow Us on Social Media:</strong><br />
              LinkedIn: <a href="https://linkedin.com/company/companyname" className="text-blue-500 hover:underline">linkedin.com/company/companyname</a><br />
              Twitter: <a href="https://twitter.com/companyname" className="text-blue-500 hover:underline">twitter.com/companyname</a><br />
              Facebook: <a href="https://facebook.com/companyname" className="text-blue-500 hover:underline">facebook.com/companyname</a>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Facebook icon SVG */}
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Twitter icon SVG */}
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* LinkedIn icon SVG */}
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Instagram icon SVG */}
                </svg>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 mt-8 md:mt-0">
            <div className="grid grid-cols-1 gap-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
