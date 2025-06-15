import { Link } from 'react-router-dom';
import {
  FaCarSide,
  FaBolt,
  FaBuilding,
  FaShoppingCart,
  FaShoePrints,
  FaStethoscope,
} from 'react-icons/fa';

const sectors = [
  {
    icon: <FaCarSide className="text-white text-xl" />,
    title: "Automobiles",
    slug: "automobiles",
    desc: "Precision components and assemblies tailored for the automobile industry.",
  },
  {
    icon: <FaBolt className="text-white text-xl" />,
    title: "Electrical & Electronics",
    slug: "electrical-and-electronics",
    desc: "Advanced solutions for electrical systems and electronic assemblies.",
  },
  {
    icon: <FaBuilding className="text-white text-xl" />,
    title: "Construction",
    slug: "construction",
    desc: "Durable parts and systems to support modern construction projects.",
  },
  {
    icon: <FaShoppingCart className="text-white text-xl" />,
    title: "FMCG",
    slug: "fmcg",
    desc: "High-volume, quality components for fast-moving consumer goods.",
  },
  {
    icon: <FaShoePrints className="text-white text-xl" />,
    title: "Footwear",
    slug: "footwear",
    desc: "Customized plastic and metal parts for the footwear manufacturing sector.",
  },
  {
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "Medical & Pharmaceutical",
    slug: "medical-and-pharmaceutical",
    desc: "Reliable and safe components for medical devices and pharmaceutical tools.",
  },
];

const SectorsWeServe = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Sectors We Serve</h2>
      <div className="border-t-4 border-yellow-500 w-16 mx-auto mb-10"></div>

      <div className="grid md:grid-cols-3 gap-6">
        {sectors.map((sector, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow hover:shadow-md transition">
            <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full mb-4">
              {sector.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{sector.title}</h3>
            <p className="text-gray-600 text-sm">{sector.desc}</p>
            <Link
              to="/products"
              className="text-blue-600 font-medium text-sm mt-2 inline-block hover:underline"
            >
              Learn More
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsWeServe;
