
import img1 from '../assets/timeline/img1.jpg'
import img2 from '../assets/timeline/img2.png'
import img3 from '../assets/timeline/img3.webp'
import img4 from '../assets/timeline/img4.jpg'
import img5 from '../assets/timeline/img5.jpg'
const approachSteps = [
  {
    phase: 'Phase 1',
    title: 'Ideation & Requirement Analysis',
    description:
      'Brainstorming and sketching multiple initial concepts based on client requirements, ensuring functionality and design direction.',
    estimate: 'Estimated time: 1 to 3 days',
    image: img1,
  },
  {
    phase: 'Phase 2',
    title: 'Design for Manufacturing (DFM)',
    description:
      'Detailed 3D CAD models optimized for manufacturability, cost-efficiency, and production constraints, ensuring production feasibility.',
    estimate: 'Estimated time: 1 to 3 days',
    image: img2,
  },
  {
    phase: 'Phase 3',
    title: 'Prototype Development',
    description:
      'Building functional prototypes using 3D printing or CNC machining to validate design, fit, and functionality before final tooling.',
    estimate: 'Estimated time: 5 to 10 days',
    image: img3,
  },
  {
    phase: 'Phase 4',
    title: 'Tooling & Mould Manufacturing',
    description:
      'Custom moulds and tools are manufactured using advanced machining processes to prepare for mass production.',
    estimate: 'Estimated time: 15 to 30 days',
    image: img4,
  },
   {
    phase: 'Phase 5',
    title: 'Trial & Validation',
    description:
      'We would get updates about quality and precesion on products from customers and do corrections if needed.',
    estimate: 'Estimated time: 15 to 30 days',
    image: img4,
  },
  {
    phase: 'Phase 6',
    title: 'Mass Production & Quality Assurance',
    description:
      'Full-scale production begins with rigorous quality control, ensuring consistency, durability, and timely delivery.',
    estimate: 'Estimated time: 15 to 30 days',
    image: img5,
  },
];

const OurApproach = () => {
  return (
    <div className='bg-gray-100'>
<div className="relative  py-12 px-4 sm:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">OUR APPROACH</h2>
      <div className="border-t-4 border-yellow-500 w-16 mb-6 mx-auto"></div>
      <p className="text-center italic text-gray-600 mb-10">Phases of our projects</p>

      <div className="border-l-4 border-yellow-400 ml-6 ">
        {approachSteps.map((step, index) => (
          <div key={index} className=" relative pl-8 mb-16">
            <div className="absolute left-[0px] top-1 w-15 h-20 rounded-full overflow-hidden ring-4 ring-yellow-400 bg-white">
              <img src={step.image} alt={step.title} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl pl-36 font-bold text-gray-900">{step.phase} - {step.title}</h3>
            <p className="text-gray-700 pl-36 mt-1">{step.description}</p>
            
          </div>
        ))}

        <div className="ml-[rem] mt-6">
          <div className="bg-yellow-400 text-white font-semibold  w-36 h-12 flex items-center justify-center shadow-md">
            Launch of Product
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default OurApproach;
