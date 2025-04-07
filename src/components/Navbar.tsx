import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-zinc-50">GRACIAS</h1>

      <div className="space-x-8 hidden md:flex">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/calendar" className="hover:text-blue-300">Calendar</Link>
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/bookmarked" className="hover:text-blue-300">Bookmark</Link>
        <Link to="/Bible" className="hover:text-blue-300">KJV English Version</Link>
        <Link to="/yoruba-Bible" className="hover:text-blue-300">Yoruba Version</Link>
      </div>

      {/* Mobile Hamburger/Close Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-0 right-0 w-full bg-blue-600 text-white p-4 flex flex-col space-y-4 mt-16">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/calendar" className="hover:text-blue-300">Yearly Bible Calendar</Link>
          <Link to="/Bible" className="hover:text-blue-300">KJV English Version</Link>
          <Link to="/yoruba-Bible" className="hover:text-blue-300">Yoruba Version</Link>
          <Link to="/bookmarked" className="hover:text-blue-300">Bookmark</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
