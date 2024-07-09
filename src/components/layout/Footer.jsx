import React from 'react';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import img from '../../assets/image/ethiotech.jpeg'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src={img} alt="logo" className="w-40 mb-2" />
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p>Phone: +1234567890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex gap-3 text-lg text-red-600">
            <a href="https://whatsapp.com/channel/" className="hover:opacity-60">
              <BsWhatsapp />
            </a>
            <a href="https://twitter.com/EtatTech" className="hover:opacity-60">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.linkedin.com/company/etat-tech/" className="hover:opacity-60">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <a href="/" className="hover:underline">Home</a>
          <a href="/aboutUs" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
