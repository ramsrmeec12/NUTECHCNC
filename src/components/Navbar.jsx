import { useState, useEffect } from 'react';
import logo from '../assets/navbarimg/LOGO.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300); // adjust if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-8 py-4">
        <Link to="/"><img src={logo} alt="Logo" className="h-14" /></Link>

        <div className={`hidden md:flex space-x-8 text-lg font-medium ${isSticky ? 'text-black' : 'text-white'}`}>
          <a href="/" className="hover:text-yellow-600">Home</a>
          <a href="#products" className="hover:text-yellow-600">Products</a>
          <a href="#credentials" className="hover:text-yellow-600">Credentials</a>
          <a href="#contact" className="hover:text-yellow-600">Contact Us</a>
          <a href="#contact" className="hover:text-yellow-600">Management Team</a>
          <a href="#contact" className="hover:text-yellow-600">Infrastructure</a>
          <a href="#contact" className="hover:text-yellow-600">Quality</a>
        </div>

        <div className="hidden md:block">
          <button className={`${isSticky ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-1 rounded hover:bg-gray-200`}>
            Login
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className={`text-3xl focus:outline-none ${isSticky ? 'text-black' : 'text-white'}`}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-2">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
