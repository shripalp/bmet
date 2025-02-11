

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Branding / Logo */}
          <div className="text-2xl font-bold">
            <Link to={import.meta.env.BASE_URL}>BMET Board of Examiners</Link>
          </div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="certification">Certification</NavLink>
            <NavLink to="board-members">Board Members</NavLink>
            <NavLink to="about">About Us</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Shows when toggled) */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="certification" onClick={toggleMenu}>Certification</MobileNavLink>
            <MobileNavLink to="board-members" onClick={toggleMenu}>Board Members</MobileNavLink>
            <MobileNavLink to="about" onClick={toggleMenu}>About Us</MobileNavLink>
            <MobileNavLink to="contact" onClick={toggleMenu}>Contact Us</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

/* Reusable Component for Desktop Navigation Links */
import PropTypes from 'prop-types';

const NavLink = ({ to, children }) => (
  <Link
    to={import.meta.env.BASE_URL + to}
    className="hover:text-gray-300 transition duration-300"
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/* Reusable Component for Mobile Navigation Links */

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={import.meta.env.BASE_URL + to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
  >
    {children}
  </Link>
);

MobileNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navigation;

//export default Navigation;


