import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">DESCO</h2>
          <p className="text-gray-400 mt-2">
            Delivering exceptional design and manufacturing solutions with cutting-edge technology and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#clients" className="hover:text-white">Clients</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>New Product Design (NPD)</li>
            <li>3D Printing</li>
            <li>Mould Design</li>
            <li>CNC Machining</li>
            <li>Plastic Injection Moulding</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Contact</h3>
          <p className="text-gray-300">📍 Chennai, India</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>
          <p className="text-gray-300">✉️ info@desco.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DESCO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
