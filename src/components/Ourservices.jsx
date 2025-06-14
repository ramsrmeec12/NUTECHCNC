import React from 'react';
import serviceIcon from '../assets/navbarimg/LOGO.jpg'; // Placeholder image
import img1 from '../assets/OurServices/899692934ContractCNCProgrammer.webp'
import img2 from '../assets/OurServices/img2.jpeg'
import img3 from '../assets/OurServices/img3.webp'
import img4 from '../assets/OurServices/img4.webp'
import img5 from '../assets/OurServices/img5.jpg'
import img6 from '../assets/OurServices/img6.jpeg'

const services = [
  {
    title: 'New Product Design (NPD)',
    image: img1,
    items: [
      'Concept Sketches & Ideation',
      '3D Modeling & CAD',
      'Design for Manufacturing (DFM)',
      'Material Selection',
      'User-Centered Design',
    ],
  },
  {
    title: '3D Printing',
    image: img2,
    items: [
      'FDM, SLA, SLS Printing',
      'Functional Prototypes',
      'Medical Grade Prints',
      'Small Batch Production',
      'Surface Finishing & Polishing',
    ],
  },
  {
    title: 'Mould Design',
    image: img3,
    items: [
      'Injection Mould Design',
      'Blow Mould Design',
      'Hot Runner/Cold Runner Systems',
      'Mould Flow Analysis',
      '2D Drafting & 3D Assembly',
    ],
  },
  {
    title: 'Mould Manufacturing',
    image: img4,
    items: [
      'Precision Machining',
      'CNC EDM & Wirecut',
      'Tool Hardening & Finishing',
      'Prototype to Production Moulds',
      'Mould Testing & Validation',
    ],
  },
  {
    title: 'CNC Machining',
    image: img5,
    items: [
      'Plastic & Metal Parts',
      '3-Axis/5-Axis Machining',
      'Custom Enclosures',
      'Rapid Prototyping',
      'Batch Production',
    ],
  },
  {
    title: 'Plastic Injection Moulding',
    image: img6,
    items: [
      'High-Volume Production',
      'ABS, PP, PC, Nylon, etc.',
      'Insert & Over Moulding',
      'Color Matching',
      'Post-processing & Assembly',
    ],
  },
];

const Services = () => {
  return (
    <div className="text-center py-10 px-4 md:px-8 bg-gray-100 mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">OUR SERVICES</h2>
      <div className="border-t-4 border-yellow-500 w-16 mb-6 mx-auto"></div>
      <p className="italic text-gray-600 mb-8 max-w-3xl mx-auto">
        We specialize in delivering end-to-end product development services from ideation to production, ensuring precision and quality at every stage.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex rounded-2xl flex-col items-center w-full sm:w-[48%] md:w-[30%] bg-white shadow-sm rounded-md p-4"
          >
            <div className="bg-yellow-500 rounded-full  flex items-center justify-center mb-3">
              <img src={service.image} alt={service.title} className="rounded-md w-42 h-20 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <ul className="text-sm text-gray-600 text-left space-y-1">
              {service.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
