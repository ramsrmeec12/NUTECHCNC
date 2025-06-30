import { useState } from 'react';
import Navbar2 from './Navbar2';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const sendToWhatsApp = () => {
        const phoneNumber = '919025416751'; 
        const text = `Name: ${name}\nEmail: ${email}\nService: ${selectedOption}\nMessage: ${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        setName('');
        setEmail('');
        setMessage('');
        setSelectedOption('');
    };

    return (
        <div>
            <Navbar2 />

            <div id="contact" className="bg-gray-100 py-12 px-4 md:px-16">
                <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Form Section */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Select Service</label>
                            <select
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="Mould Preparation">Mould Preparation</option>
                                <option value="Mould Design">Mould Design</option>
                                <option value="Product Design">Product Design</option>
                                <option value="CNC Machining">CNC Machining</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Message</label>
                            <textarea
                                className="w-full border border-gray-300 rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message"
                            />
                        </div>

                        <button
                            onClick={sendToWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition duration-300"
                        >
                            Send via WhatsApp
                        </button>
                    </div>

                    {/* Contact Info + Map */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-yellow-600">Reach Us</h3>
                        <p className="mb-2"><strong>📞 Phone:</strong> +91 98765 43210</p>
                        <p className="mb-2"><strong>✉️ Email:</strong> info@nutechcnc.com</p>
                        <p className="mb-4"><strong>📍 Address:</strong> Chennai, Tamil Nadu, India</p>

                        <div className="relative pt-[56.25%] rounded overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4609.864397472257!2d80.1545962757243!3d13.08318931242064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613e9776a52b%3A0xab18353c7f517aa6!2sNutech%20CNC%20Private%20Limited%20%7C%20Plastic%20injection%20mold%20and%20products%20manufacturer%20%7C%20Chennai%2CIndia!5e1!3m2!1sen!2sin!4v1749834075005!5m2!1sen!2sin"
                                title="Nutech CNC Pvt Ltd"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Contact;
