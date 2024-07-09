import React, { useState, useEffect } from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img from '../../assets/image/ethiotech.jpeg';

export default function Header() {
  const [contacts, setContacts] = useState({
    phone: '',
  });

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      // Simulating fetch data from an API endpoint
      const response = await fetch('https://api.example.com/contacts');
      if (!response.ok) {
        throw new Error('Failed to fetch contact data');
      }
      const data = await response.json();
      // Assuming `data` structure matches { phone: 'phone number', ... }
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  };

  return (
    <div className="md:flex hidden justify-between items-center px-4 py-2">
      <div className="w-40">
        <img src={img} alt="logo" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-medium text-md font-poppins hover:text-mainColor hover:underline cursor-pointer">
          call:
          {' '}
          {contacts.phone}
        </span>
        <div className="flex gap-3 text-lg text-red-600">
          <Link to="https://whatsapp.com/channel/" className="hover:opacity-60"><BsWhatsapp /></Link>
          <Link to="https://twitter.com/EtatTech" className="hover:opacity-60"><AiFillTwitterCircle /></Link>
          <Link to="https://www.linkedin.com/company/etat-tech/" className="hover:opacity-60"><AiFillLinkedin /></Link>
        </div>
      </div>
    </div>
  );
}
