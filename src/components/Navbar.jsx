import { useState, useEffect } from 'react';
import logo from '../assets/navbarimg/LOGO.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate()

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
          <a href="/aboutus" className="hover:text-yellow-600">About Us</a>
          <a href="/products" className="hover:text-yellow-600">Products</a>
          <a href="/contact" className="hover:text-yellow-600">Contact Us</a>
          <a href="/team" className="hover:text-yellow-600">Management Team</a>
          <a href="/infrastructure" className="hover:text-yellow-600">Infrastructure</a>
          <a href="/credentials" className="hover:text-yellow-600">Credentials</a>
          <a href="/quality" className="hover:text-yellow-600">Quality</a>
        </div>

        <div className="hidden md:block">
          <button onClick={() => navigate('/blog')} className={`${isSticky ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-1 rounded hover:bg-gray-200`}>
            Blogs
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
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4">
          <a href="/" onClick={() => setMenuOpen(false)} className="block py-2">Home</a>
          <a href="/products" onClick={() => setMenuOpen(false)} className="block py-2">Products</a>

          <a href="/contact" onClick={() => setMenuOpen(false)} className="block py-2">Contact Us</a>
          <a href="/team" onClick={() => setMenuOpen(false)} className="block py-2">Management Team</a>
          <a href="/infrastructure" onClick={() => setMenuOpen(false)} className="block py-2">Infrastructure</a>
                    <a href="/credentials" onClick={() => setMenuOpen(false)} className="block py-2">Credentials</a>
          <a href="/quality" onClick={() => setMenuOpen(false)} className="block py-2">Quality</a>
          <button className="mt-4 block w-full bg-white text-black py-2 rounded hover:bg-gray-200" onClick={() => navigate('/blog')}>Blogs</button>
        </div>
      )}

    </div>
  );
}

export default Navbar;
