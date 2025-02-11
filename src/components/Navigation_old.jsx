import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to={import.meta.env.BASE_URL}>Home</Link></li>
        <li><Link to={import.meta.env.BASE_URL + "certification"}>Certification</Link></li>
        <li><Link to={import.meta.env.BASE_URL + "board-members"}>Board Members</Link></li>
        <li><Link to={import.meta.env.BASE_URL + "about"}>About Us</Link></li>
        <li><Link to={import.meta.env.BASE_URL + "contact"}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
