import React from 'react';
import serviceIcon from '../assets/navbarimg/LOGO.jpg'; // Placeholder image

const services = [
  {
    title: 'New Product Design (NPD)',
    image: serviceIcon,
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
    image: serviceIcon,
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
    image: serviceIcon,
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
    image: serviceIcon,
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
    image: serviceIcon,
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
    image: serviceIcon,
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
    <div className="text-center py-10 px-4 md:px-8 bg-white mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">OUR SERVICES</h2>
      <p className="italic text-gray-600 mb-8 max-w-3xl mx-auto">
        We specialize in delivering end-to-end product development services from ideation to production, ensuring precision and quality at every stage.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-[48%] md:w-[30%] bg-white shadow-sm rounded-md p-4"
          >
            <div className="bg-yellow-500 rounded-full p-4 w-24 h-24 flex items-center justify-center mb-3">
              <img src={service.image} alt={service.title} className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
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
