import React from 'react';

// Mock data to replace Redux selectors
const mockServices = [
  {
    title: 'Business Automation and Intelligence',
    body: 'Harness the power of automation and intelligence to streamline your business processes, reduce operational costs, and enhance decision-making through advanced data analytics and AI-driven insights.',
    picture: 'https://img.freepik.com/free-psd/futuristic-robot-illustration_23-2150978986.jpg?w=1060&t=st=1720428176~exp=1720428776~hmac=6c49a3767c94b9e4bf92536636c160cdaa4ea0e516b7212e8fb78c4356ebea26',
  },
  {
    title: 'Cyber Security',
    body: 'Protect your business from cyber threats with our comprehensive cyber security solutions, including vulnerability assessments, threat intelligence, and real-time monitoring to ensure the safety and integrity of your data.',
    picture: 'https://img.freepik.com/free-vector/creative-abstract-ssl-illustration_52683-79682.jpg?t=st=1720428415~exp=1720432015~hmac=8559e45eb687d77c28dfcf104f271b6c932505860751bc729ebce2a1b5e7fd60&w=1060',
  },
  {
    title: 'Modern DC and Networking',
    body: 'Upgrade your IT infrastructure with our modern data center and networking solutions, designed to enhance connectivity, optimize performance, and ensure scalability to meet the growing demands of your business.',
    picture: 'https://img.freepik.com/free-photo/rag-doll-blue-circles_1156-233.jpg?t=st=1720428457~exp=1720432057~hmac=8e3c8106a962273435c1b7fbdab7b359a589dca655709f591f077fe0a231b73b&w=1480',
  },
];

export default function WhatWeDo() {
  const services = mockServices;

  return (
    <section className="pt-20 lg:pt-[80px] pb-12 lg:pb-[0px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-14 max-w-[510px]">
              <span className="font-semibold text-lg text-mainColor mb-2 block">
                Our Services
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-raleway">
                What We Offer
              </h2>
              <p className="text-base font text-gray-400">
              At EthioTech-Addis Trading (ETAT), we deliver innovative solutions and services tailored to meet the diverse needs of our clients.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-0 -mx-2">
          {services.slice(0, 3).length === 0 ? <h1>No service available</h1>
            : services.slice(0, 3).map((item, index) => (
              <div className="w-full md:w-1/2 md:mt-4 lg:w-1/3 h-96 px-4" key={index}>
                <div className="p-4 pt-9 h-full md:px-7 xl:px-10 bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out flex flex-col justify-start relative group overflow-hidden">
                  <img className="absolute z-0 top-0 left-0 object-center object-cover w-full h-full transition duration-200 ease-in-out group-hover:opacity-0" src={item.picture} alt="img" />
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out flex flex-col justify-start">
                    <h4 className="font-semibold font-raleway text-2xl text-dark mb-3">
                      {item.title}
                    </h4>
                    <div className="w-1/3 h-1.5 bg-secondColor mb-4"></div>
                    <p className="text-body-color text-sm font-poppins">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <a href="/services" className="bg-red-600 hover:bg-secondColor text-white font-semibold py-3 px-20 text-sm mt-6 inline-flex items-center group">
            <p> READ MORE </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
