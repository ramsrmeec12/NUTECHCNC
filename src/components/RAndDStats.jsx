import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaListUl, FaGlobe, FaFlag, FaCheckCircle } from "react-icons/fa";

const RAndDStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Count only once when section comes into view
    threshold: 0.3,     // Trigger when 30% of the component is visible
  });

  return (
    <div ref={ref} className="text-center py-12 px-4 md:px-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">R&D</h2>
      <div className="border-t-4 border-yellow-500 w-16 mb-6 mx-auto"></div>
      <p className="italic text-gray-600 mb-8 max-w-3xl mx-auto">
        Through relentless research and development, NUTECH is shaping its present and future as a leader in innovative solutions.
      </p>

      <div className="mb-12">
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition">
          Learn more →
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {[
          { icon: <FaListUl />, label: "Grades", value: 300 },
          { icon: <FaGlobe />, label: "Customers Globally", value: 100 },
          { icon: <FaFlag />, label: "Countries Serving", value: 10 },
          { icon: <FaCheckCircle />, label: "Successful Projects", value: 1000 },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center border-t-4 border-gray-300 pt-4">
            <div className="text-yellow-500 font-semibold flex items-center gap-2 mb-1 text-xl">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {inView ? <CountUp end={item.value} duration={2.5} /> : "0"}+
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RAndDStats;
