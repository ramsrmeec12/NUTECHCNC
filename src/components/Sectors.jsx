import { FaIndustry, FaCarSide, FaStethoscope, FaShieldAlt, FaPlane, FaMobileAlt } from "react-icons/fa";

const sectors = [
  {
    icon: <FaPlane className="text-white text-xl" />,
    title: "Aerospace",
    desc: "NUTECH is a leading Aerospace components manufacturer & supplier.",
  },
  {
    icon: <FaCarSide className="text-white text-xl" />,
    title: "Automotive",
    desc: "Critical parts for the automotive industry across wide applications.",
  },
  {
    icon: <FaMobileAlt className="text-white text-xl" />,
    title: "Consumer",
    desc: "Custom engineered plastic and metal components for consumer goods.",
  },
  {
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: "Defence",
    desc: "Trusted global supplier of precision defence components.",
  },
  {
    icon: <FaIndustry className="text-white text-xl" />,
    title: "Industrial",
    desc: "End-to-end solutions for complex industrial component needs.",
  },
  {
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "Medical",
    desc: "Precision-engineered parts for reliable medical devices.",
  },
];

const SectorsWeServe = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Sectors We Serve</h2>
      <div className="border-t-4  border-yellow-500 w-16 mx-auto mb-10"></div>

      <div className="grid md:grid-cols-3 gap-6">
        {sectors.map((sector, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow hover:shadow-md transition">
            <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full mb-4">
              {sector.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{sector.title}</h3>
            <p className="text-gray-600 text-sm">{sector.desc}</p>
            <a href="#" className="text-blue-600 font-medium text-sm mt-2 inline-block hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsWeServe;
