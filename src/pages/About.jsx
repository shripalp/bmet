import { useState } from "react";

function About() {
  const [selectedTab, setSelectedTab] = useState("bmet");

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar Section */}
      <aside className="w-1/4 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Downloads</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="/documents/certification_program.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              📄 Certification Program
            </a>
          </li>
          
        </ul>
      </aside>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 bg-white shadow-lg rounded-lg">
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedTab("bmet")}
            className={`py-2 px-6 font-semibold rounded-lg transition duration-300 ${
              selectedTab === "bmet" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Biomedical Certification History
          </button>
          <button
            onClick={() => setSelectedTab("dialysis")}
            className={`py-2 px-6 font-semibold rounded-lg transition duration-300 ${
              selectedTab === "dialysis" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Dialysis Certification History
          </button>
        </div>

        {/* BMET Certification History Content */}
        {selectedTab === "bmet" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Biomedical Technician Certification History</h2>
            <iframe
              src="/documents/BMET_Cert_History.pdf"
              className="w-full h-[600px] border border-gray-300 rounded-lg shadow-md"
            ></iframe>
            <p className="text-center text-gray-600 mt-2">
              If the document does not load, 
              <a 
                href="/documents/BMET_Cert_History.pdf" 
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              > click here to download.</a>
            </p>
          </div>
        )}

        {/* Dialysis Certification History Content */}
        {selectedTab === "dialysis" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dialysis Technician Certification History</h2>
            <iframe
              src="/documents/Dialysis_Cert_History.pdf"
              className="w-full h-[600px] border border-gray-300 rounded-lg shadow-md"
            ></iframe>
            <p className="text-center text-gray-600 mt-2">
              If the document does not load, 
              <a 
                href="/documents/Dialysis_Certification_History.pdf" 
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              > click here to download.</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
