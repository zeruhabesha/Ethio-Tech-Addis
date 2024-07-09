import React, { useState } from 'react';
import ImageSwiper from '../components/about/ImageSwiper';
import InfoCards from '../components/about/InfoCard';
import img from '../assets/image/slide 02.png';
import img2 from '../assets/image/slide 03.jpg';
import img3 from '../assets/image/Slide 01.jpg';
import img4 from '../assets/image/Slide automation 01.png';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleModalOpen = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const images = [
    { label: img },
    { label: img2 },
    { label: img3 },
    { label: img4 },
  ];

  const infoData = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      ),
      title: 'Mission',
      description: 'To provide innovative and reliable technology solutions to meet the needs of its clients or customers.',
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      ),
      title: 'Vision',
      description: 'To be trusted and successful global Technology Company.',
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" />
      ),
      title: 'History',
      description: 'EthioTech-Addis Trading (ETAT) is a technology company that was founded on September 2013, in Addis Ababa, Ethiopia. Initially, ETAT provided consultancy services and supplied various IT equipment through imports. Over the past half-decade, ETAT has expanded its scope and services to include business automation and intelligence, network installation, the construction of modern data centers, surveillance systems, software licensing, and maintenance services. As a result of driving digital transformation and technological advancement, ETAT has become one of the most valuable technology companies in Ethiopia and beyond.',
      onClick: () => handleModalOpen('EthioTech-Addis Trading (ETAT) is a technology company that was founded on September 2013, in Addis Ababa, Ethiopia. Initially, ETAT provided consultancy services and supplied various IT equipment through imports. Over the past half-decade, ETAT has expanded its scope and services to include business automation and intelligence, network installation, the construction of modern data centers, surveillance systems, software licensing, and maintenance services. As a result of driving digital transformation and technological advancement, ETAT has become one of the most valuable technology companies in Ethiopia and beyond.'),
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6" />
      ),
      title: 'Our values',
      description: `- We will earn nationwide respect while delivering customer satisfaction and to build long term relationships with our customers. The key elements of our value system include: .
      \n- Trust.
      \n- On time.
      \n- Quality.
      \n- Inovation`,
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-44 flex items-center font-poppins"
        style={{
          backgroundImage: 'url(https://synaxtech.com/wp-content/uploads/2021/08/header-bg-aboutus.png)',
        }}
      >
        <div className="container mx-auto py-12 px-7 sm:px-6 lg:px-8 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl bg-raleway-700-6xl text-white text-center font-railway font-semibold">
            About Us
          </h1>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-screen-lg mx-auto grid grid-row-3">
          <section className="lg:mb-16 mx-6 mb-5">
            <div className="grid grid-cols-1 md:flex-row w-full h-full md:grid-cols-1 lg:grid-cols-2">
              <div className="pr-5">
                <h2 className="text-2xl font-semibold mb-4 text-mainColor text-bold">Our Story</h2>
                <p className="text-lg mb-4">
                  EthioTech-Addis Trading (ETAT) is a technology company that was founded on September 2013,
                  in Addis Ababa, Ethiopia. Initially, ETAT provided consultancy services and supplied various
                  IT equipment through imports. Over the past half-decade, ETAT has expanded its scope and services to include
                  business automation and intelligence, network installation, the construction of modern data centers, surveillance systems,
                  software licensing, and maintenance services. As a result of driving digital transformation and technological advancement,
                  ETAT has become one of the most valuable technology companies in Ethiopia and beyond.
                </p>
                <p className="text-lg">
                  ETAT provides various Information Technology Enabled services mainly
                  on Technology Consulting, Cyber security, Modern DC and Networking,
                  Business Automation and Intelligence, Software Licensing, Surveillance,
                  Tech Supply, VOIP /PBX/SIP Solutions and maintenance and support.
                </p>
              </div>
              <div className="xs:mt-6 lg:mt-0 justify-center items-center mt-5 md:my-6 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?cs=srgb&dl=pexels-marc-mueller-380769.jpg&fm=jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </section>
          <div className="text-center">
            <h1 className="font-bold text-mainColor font-railway-500 lg:text-5xl text-2xl underline-offset-2 mx-5">
              Our Mission, Vision & Objectives
            </h1>
          </div>
          <InfoCards data={infoData} />
        </div>
      </div>
      <ImageSwiper images={images} />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
            <span className="absolute top-0 right-0 p-4" onClick={handleModalClose}>
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <h2 className="text-2xl mb-4">Detailed Information</h2>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
