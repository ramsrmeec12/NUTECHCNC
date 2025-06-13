import { FaListUl, FaCogs, FaCertificate, FaBusinessTime } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const RAndDStats = () => {
  return (
    <div className="text-center py-12 px-4 md:px-16 bg-white">
      {/* Heading & Description */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">R&D</h2>
      <p className="italic text-gray-600 mb-8 max-w-3xl mx-auto">
        Through relentless research and development, DESCO is shaping its present and future as a leader in innovative solutions.
      </p>

      {/* Learn More Button */}
      <div className="mb-12">
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition">
          Learn more →
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center border-t-4 border-gray-300 pt-4">
          <div className="text-yellow-500 font-semibold flex items-center gap-2 mb-1">
            <FaListUl className="text-xl" />
            <span>Grades</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">300+</div>
        </div>

        <div className="flex flex-col items-center border-t-4 border-gray-300 pt-4">
          <div className="text-yellow-500 font-semibold flex items-center gap-2 mb-1">
            <FaCogs className="text-xl" />
            <span>OEM Specs</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">65</div>
        </div>

        <div className="flex flex-col items-center border-t-4 border-gray-300 pt-4">
          <div className="text-yellow-500 font-semibold flex items-center gap-2 mb-1">
            <FaBusinessTime className="text-xl" />
            <span>Clients</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">100+</div>
        </div>

        <div className="flex flex-col items-center border-t-4 border-gray-300 pt-4">
          <div className="text-yellow-500 font-semibold flex items-center gap-2 mb-1">
            <FaCertificate className="text-xl" />
            <span>Certifications</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">10+</div>
        </div>
      </div>
    </div>
  );
};

export default RAndDStats;
