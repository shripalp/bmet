
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample Data (Replace with real data from API or CMS)
const newsUpdates = [
  { id: 1, title: "Certification Renewal Deadline", content: "The renewal deadline for certifications is March 30, 2024. Ensure you submit your renewal forms on time." },
 
];

const galleryImages = [
  "/documents/photo1.jpg",
  "/documents/photo2.jpg",
  "/documents/photo3.jpg"
];

function Home() {
  const [showFullNews, setShowFullNews] = useState(false);

  return (
    <div className="relative text-black">
      {/* Hero Section */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 mb-8 mt-8">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
          Elevate Your Career with Professional Certification!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Get certified as a biomedical or dialysis technician in Canada and stand out in your field.
        </p>
        <div className="flex space-x-4">
          <Link
            to="certification"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Get Certified
          </Link>
          <Link
            to="contact"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* News & Notices Section */}
      <div className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">News & Notices</h2>
          <ul className="space-y-4">
            {newsUpdates.slice(0, showFullNews ? newsUpdates.length : 2).map((news) => (
              <li key={news.id} className="p-4 border rounded-lg shadow-md bg-white">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600">{news.content}</p>
              </li>
            ))}
          </ul>
          {newsUpdates.length > 2 && (
            <button
              onClick={() => setShowFullNews(!showFullNews)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
            >
              {showFullNews ? "Show Less" : "View All News"}
            </button>
          )}
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="bg-white text-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No images available at the moment.</p>
          )}
        </div>
      </div>

      {/* Why Choose Our Certification? Section */}
      <div className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Certification?</h2>
          <p className="text-lg mb-6">
            Our certification program ensures that biomedical and dialysis technicians meet the highest professional standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Recognized Standards</h3>
              <p className="text-gray-600">Gain industry-recognized certification and boost your professional credibility.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">Increase your job opportunities and career prospects with a verified certification.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Support & Resources</h3>
              <p className="text-gray-600">Access study guides and professional support throughout your certification journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
