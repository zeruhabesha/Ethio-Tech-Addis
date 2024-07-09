import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/ethiotech2.png';

// Mock data to replace Redux selectors
const mockEvents = [
  {
    id: 1,
    picture: 'https://media.list.ly/production/248592/6161516/6161516-techspo-global-technology-expo-series_600px.png?ver=0679309856',
    status_event: true,
    start_date: new Date('2024-09-15T09:00:00Z').toISOString(),
    title: 'IT Conference 2024',
    body: 'Join us for the IT Conference 2024 where industry leaders will discuss the latest trends in technology.',
  },
  {
    id: 2,
    picture: 'https://example.com/event2.jpg',
    status_event: true,
    start_date: new Date('2024-10-22T09:00:00Z').toISOString(),
    title: 'Tech Expo 2024',
    body: 'Attend the Tech Expo 2024 to explore innovative technologies and network with professionals.',
  },
  {
    id: 3,
    picture: 'https://example.com/event3.jpg',
    status_event: true,
    start_date: new Date('2024-11-05T09:00:00Z').toISOString(),
    title: 'Developer Summit',
    body: 'Participate in the Developer Summit and enhance your skills with sessions from expert developers.',
  },
];


function formatDate(dateString) {
  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    hour12: true,
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleString('en-US', options).replace(',', '');

  const [month, day, time, hour12] = formattedDate.split(' ');

  return {
    month,
    day,
    time,
    hour12,
  };
}

export default function Events() {
  const [day, setDay] = useState('05');
  const [hour, setHour] = useState('03');
  const [min, setMin] = useState('00');
  const [sec, setSec] = useState('00');

  let interval = useRef();

  const setTimer = (month, dayy, year) => {
    const countDownDate = new Date(`${month} ${dayy}, ${year} 00:00:00`).getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // run timer
        setDay(days.toString().padStart(2, '0'));
        setHour(hours.toString().padStart(2, '0'));
        setMin(minutes.toString().padStart(2, '0'));
        setSec(seconds.toString().padStart(2, '0'));
      }
    }, 1000);
  };

  useEffect(() => {
    const item = mockEvents.find(event => event.status_event === true);
    if (item) {
      setTimer(formatDate(item.start_date).month, formatDate(item.start_date).day, 2023);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="relative z-10 mx-auto h-auto pt-10 md:14 flex w-full flex-col items-center md:gap-14 gap-10 justify-center px-4 md:px-8">
      <h2 className="font-bold text-2xl sm:text-2xl md:text-[40px] text-dark font-raleway">Events</h2>
      <div className="mx-auto relative mb-20 flex flex-col w-full items-center gap-12 justify-center md:px-8">
        {mockEvents.filter((event) => event.status_event === true).slice(0, 1).length === 0 ? (
          <h1 className="text-2xl font-bold text-center">No Event Available</h1>
        ) : (
          mockEvents.filter((event) => event.status_event === true).slice(0, 1).map((item) => (
            <div key={item.id} className="flex flex-col w-full bg-white rounded shadow-2xl sm:w-3/4 md:w-1/2 lg:w-full">
              <div className="w-full h-64 bg-top bg-cover rounded-t" style={{ backgroundImage: `url(${item.picture})`, backgroundSize: 'contain', backgroundPosition: 'contain', backgroundRepeat: 'no-repeat' }} />
              <div className="flex flex-col w-full md:flex-row">
                <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                  <div className="md:text-3xl">{formatDate(item.start_date).month}</div>
                  <div className="md:text-6xl">{formatDate(item.start_date).day}</div>
                  <div className="md:text-xl">
                    {formatDate(item.start_date).time}
                    {' '}
                    {formatDate(item.start_date).hour12}
                  </div>
                </div>
                <div className="p-4 font-normal text-gray-800 md:w-3/4">
                  <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{item.title}</h1>
                  <p className="leading-normal">{item.body.split(' ').slice(0, 40).join(' ')}..........</p>
                  <div className="flex flex-row items-center mt-4 text-gray-700">
                    <div className="w-1/2 pb-10 md:pb-0">
                      <Link to="/event" className="md:bg-red-600 hover:bg-secondColor md:text-white font-semibold md:py-2 text-red-600 md:px-9 bg-transparent text-md inline-flex items-center group">
                        <span>LEARN MORE</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    <div className="w-1/2 flex justify-end">
                      <img src={logo} alt="" className="w-20" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 text-white flex gap-3 px-4 rounded-br-lg py-2 bg-red-700 z-20">
                <div className="flex flex-col">
                  <div className="flex gap-2 justify-center items-center">
                    <span className="text-4xl flex items-center justify-center font-poppins font-medium">{day}</span>
                    <span className="text-lg">:</span>
                  </div>
                  <span className="text-xs">Days</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 justify-center items-center">
                    <span className="text-4xl flex items-center justify-center font-poppins font-medium">{hour}</span>
                    <span className="text-lg">:</span>
                  </div>
                  <span className="text-xs">Hours</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 justify-center items-center">
                    <span className="text-4xl flex items-center justify-center font-poppins font-medium">{min}</span>
                    <span className="text-lg">:</span>
                  </div>
                  <span className="text-xs">Minutes</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl flex items-center justify-center font-poppins font-medium">{sec}</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
