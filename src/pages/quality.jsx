import React, { useState } from 'react';
import iso9001 from '../assets/quality/quality1.jpg';
import iso14001 from '../assets/quality/quality2.jpg';
import iso45001 from '../assets/quality/quality3.jpg';
import groupimg from '../assets/quality/quality4.jpg'
import { CheckCircle, X } from 'lucide-react';
import Navbar2 from '../components/Navbar2';

const certifications = [
    { name: 'ISO 9001: Quality Management', img: iso9001 },
    { name: 'EEPC INDIA', img: iso14001 },
    { name: 'IT DEPT OF INDIA', img: iso45001 },
];

const Quality = () => {
    const [activeCert, setActiveCert] = useState(null); // { name, img } or null

    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            setActiveCert(null);
        }
    };

    return (
        <div>
            <div className="bg-white text-gray-800 px-6 md:px-20 py-12 relative">
                <div className='pt-20'>
                    <Navbar2></Navbar2>
                </div>

                {/* Modal */}
                {activeCert && (
                    <div
                        id="overlay"
                        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
                        onClick={handleOverlayClick}
                    >
                        <div className="bg-white rounded-lg shadow-lg relative p-4 max-w-3xl w-full mx-4">
                            <button
                                onClick={() => setActiveCert(null)}
                                className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={activeCert.img}
                                alt={activeCert.name}
                                className="w-full h-auto rounded-lg mb-4"
                            />
                            <p className="text-center font-semibold text-gray-800">{activeCert.name}</p>
                        </div>
                    </div>
                )}

                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Page Heading */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-2">Our Commitment to Quality & Trust</h2>
                        <div className="border-t-4 border-yellow-500 w-20 mx-auto mb-4"></div>
                        <p className="text-gray-600 italic">Precision. Safety. Satisfaction. Always guaranteed.</p>
                    </div>

                    {/* Priority Support */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">🎯 Priority Customer Support</h3>
                            <p className="text-gray-700 mb-4">
                                We believe every customer is premium. Our dedicated support team ensures fast and reliable communication across all stages — from inquiry to delivery. We offer same-day responses and resolution guarantees.
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                <li>Dedicated account managers</li>
                                <li>24/7 email and phone support</li>
                                <li>Post-sale quality checks & reporting</li>
                            </ul>
                        </div>
                        <img
                            src={groupimg}
                            alt="Customer support"
                            className="rounded-lg shadow-md w-full h-72 object-cover"
                        />
                    </section>

                    {/* Certifications Section */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 text-center">📜 Certifications & Standards</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {certifications.map((cert, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-md transition cursor-pointer"
                                    onClick={() => setActiveCert(cert)}
                                >
                                    <img src={cert.img} alt={cert.name} className="h-24 mx-auto mb-4" />
                                    <p className="font-medium">{cert.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quality Assurance */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-4">🔬 Quality Assurance</h3>
                        <p className="text-gray-700 mb-6">
                            Our products undergo strict multi-stage inspection protocols, from raw material checks to final delivery. Our advanced measurement tools and continuous improvement ensure defect-free outputs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-green-600 mt-1" />
                                <span>Raw material inspection</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-green-600 mt-1" />
                                <span>In-process quality checks</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-green-600 mt-1" />
                                <span>Final QC & packaging integrity</span>
                            </div>
                        </div>
                    </section>

                    {/* Environment & Safety */}
                    <section className="bg-gray-50 rounded-xl p-6 md:p-10 shadow">
                        <h3 className="text-2xl font-semibold mb-2">🌱 Environment & Worker Safety</h3>
                        <p className="text-gray-700">
                            We follow ISO 14001 and ISO 45001 to ensure our operations are eco-conscious and our team is protected. Waste management, recycling, air quality control, and safe work environments are top priorities.
                        </p>
                    </section>

                    {/* Trust Badge / Final CTA */}
                    <section className="text-center py-10">
                        <div className="text-3xl font-semibold text-yellow-600 mb-2">100% Quality Guarantee</div>
                        <p className="text-gray-600 mb-4">When you choose us, you choose durability, precision, and trust.</p>
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full transition">
                            Explore Our Manufacturing Process
                        </button>
                    </section>
                </div>
            </div>
        </div>

    );
};

export default Quality;
