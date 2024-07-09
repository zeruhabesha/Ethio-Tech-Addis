import React from 'react';

const servicesData = [
  {
    title: "IT Consultancy",
    description: "Our IT Consulting Services include assessing the current state of your IT environment, roadmap development, and optimizing your computing environment. We consult on cybersecurity, modern DC and networking, business automation and intelligence, software licensing, surveillance, and tech supply. We analyze your current IT infrastructure, understand your business goals, and recommend tailored solutions that enhance efficiency and drive growth.",
    imageSrc: "https://img.freepik.com/free-vector/online-consulting-concept-illustration_114360-9658.jpg"
  },
  {
    title: "Cybersecurity",
    description: "We protect your business with our comprehensive portfolio of consulting, implementation, managed security services, and solutions, so that you can focus on growth. Safeguard your critical industrial systems, connected devices, and intelligent edge through seamlessly integrated cybersecurity services.",
    imageSrc: "https://image.freepik.com/free-vector/cyber-security-concept_23-2148539596.jpg"
  },
  {
    title: "Data Center & Networking",
    description: "We design and construct state-of-the-art data centers that provide reliable, scalable, and secure environments for your IT infrastructure. Our networking solutions ensure seamless connectivity and efficient data management, supporting your business operations and enabling you to stay connected.",
    imageSrc: "https://img.freepik.com/free-vector/data-networking-isometric-illustration-concept_1124-1117.jpg?w=2000"
  },
  {
    title: "Business Automation & Intelligence",
    description: "ETAT helps businesses automate their processes and harness the power of data. Our business automation solutions streamline operations, reduce manual intervention, and enhance productivity. With our business intelligence services, you can make data-driven decisions that drive growth and efficiency.",
    imageSrc: "https://img.freepik.com/free-photo/automation-software-process-system-business-concept-innovative-business-concept-technology_34237-201.jpg?size=626&ext=jpg"
  },
  {
    title: "Software Licensing",
    description: "We offer a comprehensive range of software licensing solutions to ensure your business has the tools it needs to succeed. Our partnerships with leading software providers enable us to offer competitive pricing and expert support, ensuring you get the most out of your software investments.",
    imageSrc: "https://img.freepik.com/premium-vector/licensing-license-agreement-concept-copyright-protection-law-license-property-rights-business-technology-concept-virtual-screen-wireframe-hand-touching-digital-interface-vector-illustration_127544-2083.jpg"
  },
  {
    title: "Surveillance Systems",
    description: "ETAT provides advanced surveillance solutions to enhance security and monitoring. Our systems include high-quality cameras, sensors, and monitoring tools that help you protect your assets and maintain a safe environment.",
    imageSrc: "https://img.freepik.com/premium-vector/home-security-cameras-video-surveillance-systems-isolated-illustration_41793-756.jpg"
  },
  {
    title: "IT Equipment Supply",
    description: "We supply a wide range of IT equipment, from servers and storage devices to networking gear and peripherals. Our products are sourced from reputable manufacturers, ensuring quality and reliability.",
    imageSrc: "https://slwghana.com/wp-content/uploads/2021/03/Supply-of-IT-Equipment-768x384.jpg"
  },
  {
    title: "Communication Solutions",
    description: "Our VOIP, PBX, and SIP solutions offer efficient and cost-effective communication systems for businesses of all sizes. We design and implement customized solutions that enhance connectivity, support remote work, and reduce communication costs.",
    imageSrc: "https://flex.com/wp-content/uploads/2022/11/the-art-of-supply-chain-communications-0.jpg"
  },
  {
    title: "Maintenance & Support",
    description: "ETAT offers comprehensive maintenance and support services to keep your IT systems running smoothly. Our team of experts provides proactive maintenance, troubleshooting, and support to minimize downtime and ensure your technology works seamlessly.",
    imageSrc: "https://tse3.mm.bing.net/th?id=OIP.w8cLzmfMNmHZXW1P4roa9wHaDl&pid=Api&P=0&h=220"
  }
];

const Service = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
    <div className="space-y-6">
      {servicesData.map((service, index) => (
        <ServiceDetail
          key={index} // Use a unique key for each service
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
        />
      ))}
    </div>
  </div>
);

const ServiceDetail = ({ title, description, imageSrc }) => (
  <details className="bg-white shadow-lg p-4 rounded-lg">
    <summary className="text-xl font-semibold cursor-pointer">{title}</summary>
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="mt-2">{description}</p>
      </div>
      <div className="ml-4" style={{ flex: '0 0 150px' }}>
        <img src={imageSrc} alt={title} className="rounded-lg" />
      </div>
    </div>
  </details>
);

export default Service;
