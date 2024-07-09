import React, { useState, useEffect } from 'react';
import './Testimonials.css'; // Import CSS file for styling

const testimonialsData = [
  {
    entity: "AI",
    quote: "Working with AI has been transformative for our business. Their expertise in artificial intelligence and machine learning has helped us innovate and achieve significant milestones.",
    description: "AI provides cutting-edge technology solutions tailored to your business needs."
  },
  {
    entity: "GCS",
    quote: "GCS has been instrumental in enhancing our global communication strategies. Their solutions have enabled us to connect with our stakeholders effectively and efficiently.",
    description: "GCS offers unparalleled global communication services ensuring seamless connectivity."
  },
  {
    entity: "MINT",
    quote: "MINT's financial advisory services have been invaluable to our organization. Their insights and strategic advice have guided us through complex financial decisions.",
    description: "MINT delivers expert financial advisory services for optimal decision-making."
  },
  {
    entity: "TECHIN",
    quote: "TECHIN's IT solutions have greatly improved our operational efficiency. Their support and technical expertise have ensured our systems run smoothly.",
    description: "TECHIN specializes in IT solutions that enhance operational efficiency."
  },
  {
    entity: "PMO",
    quote: "PMO's project management services have been crucial in delivering our projects on time and within budget. Their structured approach and leadership have been commendable.",
    description: "PMO provides top-notch project management services ensuring timely and budget-friendly delivery."
  },
  {
    entity: "Addis Ababa Airport Customs Branch Office",
    quote: "The Addis Ababa Airport Customs Branch Office has significantly improved our customs clearance process. Their dedication and efficiency have streamlined our operations.",
    description: "Efficient customs clearance services at the Addis Ababa Airport."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
      <div className="testimonial-slider relative">
        <div className="testimonial-content" style={{padding:`10%`}}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
              aria-hidden={index !== currentSlide}
            >
              <TestimonialDetail
                entity={testimonial.entity}
                quote={testimonial.quote}
                description={testimonial.description}
              />
            </div>
          ))}
        </div>
        <button className="prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={prevSlide}>&#10094;</button>
        <button className="next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={nextSlide}>&#10095;</button>
        <div className="dots text-center mt-4">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot inline-block w-3 h-3 mx-1 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialDetail = ({ entity, quote, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg text-center">
    <h2 className="text-2xl font-semibold mb-2">{entity}</h2>
    <p className="mt-2 italic">"{quote}"</p>
    <p className="mt-4 text-sm text-gray-600">{description}</p>
  </div>
);

export default Testimonials;
