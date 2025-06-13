import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import footerBg from '../assets/footer/footer.webp'; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="relative text-white py-10 px-6 overflow-hidden">
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-lg max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">NUTECH CNC PVT. LTD.</h2>
          <p className="text-gray-300 mt-2">
            Delivering exceptional design and manufacturing solutions with cutting-edge technology and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#clients" className="hover:text-white">Clients</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
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

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Contact</h3>
          <p className="text-gray-200">📍 Chennai, India</p>
          <p className="text-gray-200">📞 +91 98765 43210</p>
          <p className="text-gray-200">✉️ info@desco.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-sm text-white mt-6">
        © {new Date().getFullYear()} NUTECH CNC PRIVATE LIMITED. All rights reserved.
        <h1>Brought to you by PEACE MEDIA COMPANY</h1>
      </div>
      
    </footer>
  );
};

export default Footer;
