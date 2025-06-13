import React from 'react';
import logo from '../assets/navbarimg/LOGO.jpg'

const approachSteps = [
  {
    phase: 'Phase 1',
    title: 'Conceptualisation',
    description:
      'Creation of concept sketches and drawings based on your requirements. Usually 2 to 3 concept designs will be made, if required.',
    estimate: 'Estimated time: 1 to 3 days',
    image: logo,
  },
  {
    phase: 'Phase 2',
    title: 'Design for Manufacturing (DFM)',
    description:
      'Actual 3D drawings based on the concept design considering the manufacturing methods and production feasibility.',
    estimate: 'Estimated time: 1 to 3 days',
    image: logo,
  },
  {
    phase: 'Phase 3',
    title: 'Prototyping',
    description:
      '3D printing or machining will be done initially and validation of fitments and mechanisms will be done and low volume production can be done.',
    estimate: 'Estimated time: 5 to 10 days',
    image: logo,
  },
  {
    phase: 'Phase 4',
    title: 'Production',
    description:
      'Based on the projects, we will do the production through trending economic manufacturing technologies to achieve the production in a short lead time with quality.',
    estimate: 'Estimated time: 15 to 30 days',
    image: logo,
  },
];

const OurApproach = () => {
  return (
    <div className="relative bg-white py-12 px-4 sm:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">OUR APPROACH</h2>
      <p className="text-center italic text-gray-600 mb-10">Phases of our projects</p>

      <div className="border-l-4 border-yellow-400 ml-6">
        {approachSteps.map((step, index) => (
          <div key={index} className="mb-12 relative pl-8">
            <div className="absolute left-[-18px] top-1 w-11 h-15 rounded-full overflow-hidden ring-4 ring-yellow-400 bg-white">
              <img src={step.image} alt={step.title} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{step.phase} - {step.title}</h3>
            <p className="text-gray-700 mt-1">{step.description}</p>
            <p className="text-sm text-gray-500 mt-1 italic">{step.estimate}</p>
          </div>
        ))}

        <div className="ml-[rem] mt-6">
          <div className="bg-yellow-400 text-white font-semibold  w-36 h-12 flex items-center justify-center shadow-md">
            Launch of Product
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
