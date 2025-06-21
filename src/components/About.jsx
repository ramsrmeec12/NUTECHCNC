import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Side: Text Content */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="border-t-4 border-yellow-500 w-16 mb-6"></div>
          <p className="text-gray-700 mb-4">
            <strong>NUTECH CNC</strong> is a trusted leader in CNC machining, plastic injection moulding, and precision engineering. Established in [Year], we operate with a mission to provide high-performance components for industries such as automotive, electronics, consumer products, and more.
          </p>
          <p className="text-gray-700 mb-4">
            Our facilities in India are equipped with modern CNCs and injection moulding machines to serve global clients with exceptional speed and reliability. Our team of skilled engineers delivers end-to-end manufacturing support—from prototyping to production.
          </p>
          <p className="text-gray-700 mb-6">
            We follow global quality standards and certifications like <strong>ISO 9001</strong>, <strong>ISO 14001</strong>, and <strong>ISO 45001</strong>, ensuring strict adherence to quality, environmental responsibility, and worker safety.
          </p>
          <button
            onClick={() => navigate('/aboutus')}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-2 px-6 rounded-full transition"
          >
            Explore More
          </button>
        </div>

        {/* Right Side: YouTube Video Only */}
        <div className="w-full h-[300px] rounded-md overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0DGTLtCmMXs?si=31th-D00zRc8xafu"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
