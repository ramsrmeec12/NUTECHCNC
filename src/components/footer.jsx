import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import footerBg from '../assets/footer/footer.webp';

const Footer = () => {
  return (
    <footer
      className="relative text-white py-10 px-6 overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-lg max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">NUTECH CNC PVT. LTD.</h2>
          <p className="text-gray-300 mt-2">
            Delivering exceptional design and manufacturing solutions with cutting-edge
            technology and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/aboutus" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/clients" className="hover:text-white">Clients</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>New Product Design (NPD)</li>
            <li>3D Printing</li>
            <li>Mould Design</li>
            <li>CNC Machining</li>
            <li>Plastic Injection Moulding</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Contact</h3>
          <address className="text-gray-200 not-italic">
            📍 No. 162 Munusamy Street, 3rd Main Rd, Vanagaram,<br />
            Chennai, Tamil Nadu 600058
          </address>
          <p>
            📞 <a href="tel:+919876543210" className="text-gray-200 hover:text-white">+91 98765 43210</a>
          </p>
          <p>
            ✉️ <a href="mailto:info@desco.com" className="text-gray-200 hover:text-white">info@desco.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919025416751"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-10 right-10 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Copyright */}
      <div className="relative z-10 text-center text-sm text-black mt-6 font-bold">
        © {new Date().getFullYear()} NUTECH CNC PRIVATE LIMITED. All rights reserved.
        <p>Brought to you by PEACE MEDIA COMPANY.</p>
      </div>
    </footer>
  );
};

export default Footer;
