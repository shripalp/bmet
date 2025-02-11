function Certification() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-center text-black px-6"
             style={{ backgroundImage: "url('/documents/certification_banner.jpg')" }}>
          <h1 className="text-4xl font-bold">Certification Program</h1>
          <p className="text-lg mt-2 max-w-2xl">
            Elevate your career by obtaining certification in Biomedical Engineering and Dialysis Technology.
          </p>
        </div>
  
        {/* Main Content */}
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg mt-6 rounded-lg">
          
          {/* Program Brochure */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Certification Brochure</h2>
            <a
              href={import.meta.env.BASE_URL + "documents/certification_brochure.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 inline-block"
            >
              📄 Download Certification Brochure
            </a>
          </section>
  
          {/* Forms Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Certification Forms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={import.meta.env.BASE_URL + "documents/application_form.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
              >
                📄 Download Application Form
              </a>
              <a
                href={import.meta.env.BASE_URL + "documents/renewal_form.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
              >
                📄 Download Renewal Form
              </a>
            </div>
          </section>
  
          {/* Certified Members */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Certified Members</h2>
            <a
              href={import.meta.env.BASE_URL + "documents/certified_members_1.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 inline-block"
            >
              📜 View Certified Members List
            </a>
          </section>
  
          {/* Study Guides */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Study Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={import.meta.env.BASE_URL + "documents/biomedical_study_guide.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
              >
                📖 Biomedical Tech Study Guide
              </a>
              <a
                href={import.meta.env.BASE_URL + "documents/dialysis_study_guide.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
              >
                📖 Dialysis Tech Study Guide
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default Certification;
  
