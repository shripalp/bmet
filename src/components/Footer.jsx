import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-red-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Certification Links */}
          <div>
            <h2 className="text-lg font-semibold">Certifications</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/certification" className="hover:text-gray-400">
                  Certification Process
                </Link>
              </li>
              <li>
                <Link to="/certification" className="hover:text-gray-400">
                  Study Guides
                </Link>
              </li>
              <li>
                <a
                  href={import.meta.env.BASE_URL + "documents/application_form.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Download Application Form
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-2 space-y-2">
              <li>📧 Email:  
                <a href="mailto:bmetcertcanada@ncf.ca" className="hover:text-gray-400 ml-1">
                  bmetcertcanada@ncf.ca
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} BMET Certification Canada. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

