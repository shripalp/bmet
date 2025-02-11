function Home() {
    return (
      <div className="relative bg-red-900 text-white">
        {/* Hero Section */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Elevate Your Career with Professional Certification
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Get certified as a biomedical or dialysis technician in Canada and stand out in your field.
          </p>
          <div className="flex space-x-4">
            <a
              href={import.meta.env.BASE_URL + "certification"}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Get Certified
            </a>
            <a
              href={import.meta.env.BASE_URL + "contact"}
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
  
        {/* Additional Section */}
        <div className="bg-white text-gray-900 py-16 px-6">
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
  
