
import rajendiranPhoto from '../assets/ManagementTeam/ceo.jpeg'

const ManagingDirectorProfile = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Leadership Profile</h2>
      
      <div className="md:flex gap-10 items-start">
        {/* Photo Section */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src={rajendiranPhoto}
            alt="A.N. Rajendiran - Managing Director"
            className="w-64 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Biography Section */}
        <div className="md:w-2/3 text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">A.N. RAJENDIRAN</h3>
          <p className="text-sm text-yellow-600 font-medium mb-2">
            Managing Director
          </p>
          <p className="leading-relaxed text-[15px]">
            Mechanical Engineer from Annamalai University, Chidambaram, TN, India (1987), 
            Post Graduate in Plastics Engineering from CIPET (Central Institute of Petrochemicals Engineering & Technology), 
            Department of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers, Govt. of India, 
            and Post Graduate Diploma in Business Administration.
          </p>
          <p className="mt-4 leading-relaxed text-[15px]">
            With over <strong>36 years of experience</strong> in the industry, he has deep expertise in:
            Plastics Engineering, Material Selection, New Product Development, 3D Printing, Precision Plastic Mould Manufacturing, 
            Injection Moulding, Blow Moulding, Thermoforming, Production & Planning, Intricate Machining, 
            Jigs, Fixtures, CNC Machining, and CAD/CAM processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagingDirectorProfile;
