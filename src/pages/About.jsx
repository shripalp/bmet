function About() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-center text-black px-6"
             style={{ backgroundImage: "url('/documents/about_banner.jpg')" }}>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2 max-w-2xl">
            Empowering Biomedical and Dialysis Professionals with Trusted Certifications.
          </p>
        </div>
  
        {/* Main Content */}
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg mt-6 rounded-lg">
          
          {/* Mission & Vision Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-700">
              We are committed to providing high-quality certification for biomedical and dialysis technologists and technicians in Canada.
              Our goal is to maintain high standards and support professionals in their career growth.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-lg text-gray-700">
              We aim to be the leading certification body, ensuring that healthcare technology professionals meet industry standards 
              and contribute to excellence in patient care.
            </p>
          </section>
  
          {/* Certification Program Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Certification Program</h2>
            <a
              href={import.meta.env.BASE_URL + "documents/certification_program.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 inline-block"
            >
              📄 Download Certification Program
            </a>
          </section>
  
          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-lg text-gray-700">
              Have questions? We’re here to help. Feel free to reach out to us for more information.
            </p>
           
          </section>
        </div>
      </div>
    );
  }
  
  export default About;
  