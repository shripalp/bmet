function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-center text-black px-6"
        style={{ backgroundImage: "url('/documents/contact_banner.jpg')" }}
      >
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg mt-2 max-w-2xl">
          We are here to assist you with your certification and inquiries.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg mt-6 rounded-lg">
        
        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Details</h2>
          <div className="space-y-4 text-lg">
            <p className="flex items-center">
              📧 <span className="ml-2">Email: <a href="mailto:bmetcertcanada@ncf.ca" className="text-blue-600 hover:underline">bmetcertcanada@ncf.ca</a></span>
            </p>
            {/* <p className="flex items-center">
              📍 <span className="ml-2">Address: 123 Certification Street, Toronto, ON, Canada</span>
            </p>
            <p className="flex items-center">
              📞 <span className="ml-2">Phone: +1 (555) 123-4567</span>
            </p> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;


