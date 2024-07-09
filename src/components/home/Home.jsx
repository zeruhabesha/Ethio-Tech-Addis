import React, { useState, useEffect } from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import Hero from './Hero';
import News from './News';
import Information from './Information';
import Partners from './Partners';
import WorkWithUs from './WorkWithUs';
import Events from './Events';
// import Trainings from './Trainings'; // Uncomment if needed
import TrainingTwo from './TrainingTwo';
import Testimonals from './Testimonals';
import LoadingScreen from '../../conditions/LoadingScreen';
import img from '../../assets/image/ethiotech.jpeg'; // Import your logo image

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState({});
  const [contacts, setContacts] = useState({
    phone: '+1234567890', // Mock data
  });
  const [news, setNews] = useState([
    // Mock data
    { id: 1, title: 'News 1', description: 'Description of news 1' },
    { id: 2, title: 'News 2', description: 'Description of news 2' },
  ]);
  const [trainings, setTrainings] = useState([
    // Mock data
    { id: 1, title: 'Training 1', description: 'Description of training 1' },
    { id: 2, title: 'Training 2', description: 'Description of training 2' },
  ]);
  const [events, setEvents] = useState([
    // Mock data
    { id: 1, title: 'Event 1', description: 'Description of event 1' },
    { id: 2, title: 'Event 2', description: 'Description of event 2' },
  ]);
  const [partners, setPartners] = useState([
    // Mock data
    { id: 1, name: 'Partner 1', description: 'Description of partner 1' },
    { id: 2, name: 'Partner 2', description: 'Description of partner 2' },
  ]);
  const [projects, setProjects] = useState([
    // Mock data
    { id: 1, name: 'Project 1', description: 'Description of project 1' },
    { id: 2, name: 'Project 2', description: 'Description of project 2' },
  ]);
  const [services, setServices] = useState([
    // Mock data
    { id: 1, name: 'Service 1', description: 'Description of service 1' },
    { id: 2, name: 'Service 2', description: 'Description of service 2' },
  ]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1 second loading time
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
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
            <a href="https://whatsapp.com/channel/" className="hover:opacity-60"><BsWhatsapp /></a>
            <a href="https://twitter.com/EtatTech" className="hover:opacity-60"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/company/etat-tech/" className="hover:opacity-60"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>
      <Hero />
      <Information />
      <WorkWithUs />
      <TrainingTwo />
      <News/>
      <Partners/>
      <Events/>
      <Testimonals />
    </>
  );
}
