import Navbar2 from '../components/Navbar2';

import aboutus1 from '../assets/Aboutus/Aboutus1.jpg';
import aboutus2 from '../assets/Aboutus/Aboutus2.jpg';
import aboutus3 from '../assets/Aboutus/Aboutus3.jpg';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {
    const presentSections = [
        {
            text: "Over the years, Nutech has grown its facilities...",
            img: aboutus1,
            alt: "Chikkatirupati Unit",
        },
        {
            text: "Nutech's largest injection molding facility is located at East Aurora, NY, USA.",
            img: aboutus2,
            alt: "East Aurora, Texas",
        },
        {
            text: "NUTECH opened another state-of-the-art facility in 2020...",
            img: aboutus3,
            alt: "New Facility USA",
        },
    ];
    const navigate = useNavigate()

    return (
        <div>
            <Navbar2 />
            <div className="pt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="pt-10 text-center font-bold text-4xl">
                        #1 TAMILNADU'S PLASTIC INJECTION MOULDING COMPANY
                    </h1>
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
                    <div className="bg-gray-50 px-6 py-12 text-gray-800 mt-10 rounded-lg shadow-sm">
                        <h1 className="text-3xl font-bold mb-6 text-black text-center">MOLDING COMPANY</h1>

                        {/* About Us Overview */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                            <p className="leading-relaxed">
                                From a humble beginning in 1997, INDO-MIM has grown to become a leading global supplier of Metal Injection Molded products...
                            </p>
                        </section>

                        {/* Our Roots */}
                        <section className="md:flex items-center gap-10 mb-16">
                            <div className="md:w-1/2 mb-4 md:mb-0">
                                <h3 className="text-xl font-semibold mb-2">Our Roots</h3>
                                <p className="text-gray-700">
                                    In 2002, NUTECH CNC Pvt. Ltd. was founded as a 100% export-oriented unit...
                                </p>
                            </div>
                            <img
                                src={aboutus2}
                                alt="Our Roots"
                                className="rounded shadow-md md:w-1/2 w-full h-64 md:h-80 object-cover"
                            />
                        </section>

                        {/* Present Sections */}
                        <section className="space-y-16">
                            {presentSections.map((item, index) => (
                                <div
                                    key={index}
                                    className={`md:flex gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="rounded shadow-md md:w-1/2 w-full h-64 md:h-80 object-cover mb-4 md:mb-0"
                                    />
                                    <div className="md:w-1/2">
                                        <h3 className="text-xl font-semibold mb-2">The Present</h3>
                                        <p className="text-gray-700">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </section>


                        {/* Timeline */}
                        <section className="mt-16">
                            <h2 className="text-2xl font-bold mb-4 text-center">NUTECH Historic Timeline</h2>
                            <div className="bg-white p-6 rounded-md shadow-md border-l-4 border-yellow-500">
                                <h4 className="font-bold text-lg text-gray-800 mb-2">2002</h4>
                                <p className="text-gray-700">We started with a new plant</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
