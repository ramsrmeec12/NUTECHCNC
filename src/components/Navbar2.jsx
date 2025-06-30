import { useState } from 'react';
import logo from '../assets/navbarimg/LOGO.jpg';
import { Link, useNavigate } from 'react-router-dom';

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        <Link to="/" aria-label="Home">
          <img src={logo} alt="Nutech CNC Logo" className="h-14" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-lg font-medium text-black">
          <Link to="/" className="hover:text-yellow-600" aria-label="Home">Home</Link>
          <Link to="/products" className="hover:text-yellow-600" aria-label="Products">Products</Link>
          <Link to="/contact" className="hover:text-yellow-600" aria-label="Contact Us">Contact Us</Link>
          <Link to="/team" className="hover:text-yellow-600" aria-label="Management Team">Management Team</Link>
          <Link to="/infrastructure" className="hover:text-yellow-600" aria-label="Infrastructure">Infrastructure</Link>
          <Link to="/credentials" className="hover:text-yellow-600" aria-label="Credentials">Credentials</Link>
          <Link to="/quality" className="hover:text-yellow-600" aria-label="Quality">Quality</Link>
        </div>

        {/* Blog Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate('/blog')}
            className="bg-black text-white px-4 py-1 rounded hover:bg-yellow-600"
            aria-label="Blog"
          >
            Blogs
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none text-black"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="block py-2">Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2">Contact Us</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)} className="block py-2">Management Team</Link>
          <Link to="/infrastructure" onClick={() => setMenuOpen(false)} className="block py-2">Infrastructure</Link>
          <Link to="/credentials" onClick={() => setMenuOpen(false)} className="block py-2">Credentials</Link>
          <Link to="/quality" onClick={() => setMenuOpen(false)} className="block py-2">Quality</Link>
          <button
            className="mt-4 block w-full bg-white text-black py-2 rounded hover:bg-gray-200"
            onClick={() => {
              navigate('/blog');
              setMenuOpen(false);
            }}
          >
            Blogs
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
