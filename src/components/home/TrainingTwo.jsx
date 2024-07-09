import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineBook } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';

// Mock data for CISSP, PMP, and CISA
const mockTrainings = [
  {
    id: 1,
    phases: 1,
    status_training: true,
    picture: 'https://certify.cybervista.net/wp-content/uploads/2020/02/563685_CISSP_Training-Course.png',
    title: 'CISSP Certification Training',
    start_date: new Date('2024-08-01T09:00:00Z').toISOString(),
    end_date: new Date('2024-08-05T17:00:00Z').toISOString(),
    location: 'Online',
    cost: 'Free',
    description: 'Comprehensive training program for CISSP certification, covering all domains and exam preparation.',
  },
  {
    id: 2,
    phases: 2,
    status_training: true,
    picture: 'https://i.ytimg.com/vi/gvFxDuB9euY/maxresdefault.jpg',
    title: 'PMP Certification Training',
    start_date: new Date('2024-08-10T09:00:00Z').toISOString(),
    end_date: new Date('2024-08-15T17:00:00Z').toISOString(),
    location: 'New York, NY',
    cost: '$500',
    description: 'Prepare for the PMP exam with our structured training program, focusing on project management principles.',
  },
  {
    id: 3,
    phases: 1,
    status_training: true,
    picture: 'https://assets-global.website-files.com/63eef1be981a383fb127661f/6468c3c0276e5718758c0462_CISA.png',
    title: 'CISA Certification Training',
    start_date: new Date('2024-08-20T09:00:00Z').toISOString(),
    end_date: new Date('2024-08-25T17:00:00Z').toISOString(),
    location: 'San Francisco, CA',
    cost: '$400',
    description: 'Learn essential auditing and control skills required for the CISA certification exam.',
  },
];

export default function TrainingTwo() {
  const trainings = mockTrainings;

  const duration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const durationInMilliseconds = endDate - startDate;
    const durationInSeconds = Math.floor(durationInMilliseconds / 1000);
    const durationInMinutes = Math.floor(durationInSeconds / 60);
    const durationInHours = Math.floor(durationInMinutes / 60);
    const durationInDays = Math.floor(durationInHours / 24);
    return `${durationInDays} days, ${durationInHours % 24}:${durationInMinutes % 60}:${durationInSeconds % 60} seconds`;
  };

  return (
    <div className="relative z-20 min-h-screen bg-white flex flex-col justify-center items-center px-4 pt-10 pb-20">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-raleway">Trainings</h2>
            <p className="text-base font text-gray-400">
            At EthioTech-Addis Trading (ETAT), we are dedicated to empowering professionals with cutting-edge skills and knowledge in the ever-evolving landscape of technology. As a leading provider of IT trainings, we offer comprehensive programs designed to equip individuals and teams with expertise across a wide range of domains.            </p>
          </div>
        </div>
      </div>
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {trainings.filter((training) => training.status_training === true).length === 0 ? <h1>There is no training</h1>
          : trainings.filter((training) => training.status_training === true).map((item) => (
            <div key={item.id} className="w-full bg-white border px-6 pt-6 pb-2 rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 relative">
              <h3 className="mb-3 text-xl font-bold text-mainColor">{item.phases === 1 ? 'Beginner Friendly' : 'Advanced'}</h3>
              <div className="relative">
                <img className="w-full h-56 rounded-xl" src={item.picture} alt="Training" />
                <p className="absolute top-0 bg-secondColor text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{item.cost}</p>
              </div>
              <h1 className="mt-4 text-gray-800 text-2xl font-bold break-words cursor-pointer">{item.title}</h1>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="my-4 flex flex-col gap-2">
                <div className="flex space-x-1 items-center">
                  <span className="text-2xl text-mainColor">
                    <BiTimeFive />
                  </span>
                  <p>{duration(item.start_date, item.end_date)}</p>
                </div>
                <div className="flex space-x-1 items-center">
                  <span className="text-2xl text-mainColor">
                    <AiOutlineBook />
                  </span>
                  <p>
                    {item.phases}
                    {' '}
                    phases
                  </p>
                </div>
                <div className="flex space-x-1 pb-4 items-center">
                  <span className="text-2xl text-mainColor">
                    <GoLocation />
                  </span>
                  <p>
                    {' '}
                    {item.location}
                  </p>
                </div>
                <div className="pb-auto mb-6">
                  <div className="flex justify-center bg-red-600 items-center">
                    <Link to="/trainings" className="text-white font-medium py-2 rounded-sm shadow-lg">READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
