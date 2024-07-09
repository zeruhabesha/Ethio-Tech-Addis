/* eslint-disable react/no-danger */
/* eslint-disable react/no-danger-with-children */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const NewsCard = ({ currentItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const html = (value) => {
    const myHTML = value;
    const mySafeHTML = DOMPurify.sanitize(myHTML);
    return { __html: mySafeHTML }; // Return sanitized HTML wrapped correctly
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Additional news article about ETAT Tech
  const additionalArticle = {
    id: 1001,
    picture: 'https://example.com/path-to-image.jpg',
    author_name: 'ETAT Tech Communications',
    date: 'July 8, 2024',
    slug: 'etat-tech-driving-technological-advancement-in-ethiopia',
    title: 'ETAT Tech: Driving Technological Advancement in Ethiopia',
    body: `
      <p>EthioTech-Addis Trading (ETAT) is a pioneering technology company that has significantly shaped Ethiopia's digital landscape since its establishment in September 2013, headquartered in Addis Ababa. Initially focused on consultancy and importing IT equipment, ETAT has evolved over the past decade to become a leader in various technological domains.</p>
      <h2>Evolution and Services</h2>
      <p>ETAT began its journey by providing essential consultancy services and importing a diverse range of IT equipment. As technology adoption grew in Ethiopia, ETAT expanded its services to include:</p>
      <ul>
        <li>Business Automation and Intelligence: Implementing robust automation solutions that streamline business operations and enhance efficiency.</li>
        <li>Network Installation: Deploying comprehensive network infrastructure tailored to the needs of businesses, ensuring reliable connectivity.</li>
        <li>Data Center Construction: Building modern data centers equipped with state-of-the-art facilities to support data-intensive operations.</li>
        <li>Surveillance Systems: Offering advanced surveillance solutions to enhance security measures across various sectors.</li>
        <li>Software Licensing and Maintenance: Providing licensed software solutions and ensuring seamless maintenance support to optimize software performance.</li>
      </ul>
      <h2>Impact and Innovation</h2>
      <p>ETAT Tech has been pivotal in driving digital transformation across Ethiopia. By leveraging cutting-edge technologies and innovative solutions, ETAT has not only empowered businesses but also contributed significantly to the country's technological advancement. The company's commitment to quality and reliability has earned it a reputation as a trusted partner in the tech industry.</p>
      <h2>Future Outlook</h2>
      <p>Looking ahead, ETAT Tech continues to innovate and expand its service offerings. With a focus on sustainable growth and technological excellence, ETAT aims to further enhance its capabilities in emerging technologies such as AI, IoT, and cybersecurity. The company remains dedicated to fostering a digital ecosystem that supports Ethiopia's development goals and empowers businesses to thrive in the digital age.</p>
    `,
  };

  return (
    <>
      {/* Display additional news article */}
      <div key={additionalArticle.id} className="mx-4 md:mx-auto max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm overflow-hidden rounded-sm bg-white shadow my-10">
        <img src={additionalArticle.picture} alt="" />
        <div className="p-4">
          <p className="mb-1 text-sm text-primary-500">
            By: {additionalArticle.author_name} <time>{additionalArticle.date}</time>
          </p>
          <Link
            to={`/newspost/${additionalArticle.slug}`}
            className="text-xl font-medium text-gray-900 hover:text-mainColor"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            {additionalArticle.title}
          </Link>
          <div className="mt-1 text-gray-500 line-clamp-2" dangerouslySetInnerHTML={html(additionalArticle.body)} />
          <div className="mt-4 flex gap-2">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              onClick={() => openModal(additionalArticle.body)}
            >
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4 inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-screen-sm overflow-y-auto h-screen">
            <div className="text-lg font-bold mb-4">Full Article</div>
            <div dangerouslySetInnerHTML={html(modalContent)} />
            <div className="mt-4 text-right">
              <button
                className="text-blue-700 hover:underline focus:outline-none"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
