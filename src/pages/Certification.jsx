import { useState } from "react";

function Certification() {
  const [selectedTab, setSelectedTab] = useState("bmet");

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar Section */}
      <aside className="w-1/4 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Downloads</h2>
        <ul className="space-y-3">
          <li>
            <a
              href={import.meta.env.BASE_URL + "documents/certification_brochure.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              📄 Certification Brochure
            </a>
          </li>
          <li>
            <a
              href={import.meta.env.BASE_URL + "documents/application_form.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              📄 Application Form
            </a>
          </li>
          <li>
            <a
              href={import.meta.env.BASE_URL + "documents/certified_members_1.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              📜 Certified Members List
            </a>
          </li>
          <li hidden>
            <a
              href={import.meta.env.BASE_URL + "documents/biomedical_study_guide.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              📖 Biomedical Study Guide 
            </a>
          </li>
          <li hidden>
            <a
              href={import.meta.env.BASE_URL + "documents/dialysis_study_guide.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
              
            >
              📖 Dialysis Study Guide
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
            Biomedical Certification
          </button>
          <button
            onClick={() => setSelectedTab("dialysis")}
            className={`py-2 px-6 font-semibold rounded-lg transition duration-300 ${
              selectedTab === "dialysis" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Dialysis Certification
          </button>
        </div>

        {/* BMET Certification Content */}
        {selectedTab === "bmet" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Biomedical Technician Certification</h2>
            <iframe
              src="/documents/BMET_Certification.pdf"
             className="w-full h-[600px] border border-gray-300 rounded-lg shadow-md"
            ></iframe>



          </div>
        )}

        {/* Dialysis Certification Content */}
        {selectedTab === "dialysis" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dialysis Technician Certification</h2>
            <iframe
              src="/documents/Dialysis_Certification.pdf"
             className="w-full h-[600px] border border-gray-300 rounded-lg shadow-md"
            ></iframe>

          </div>
        )}
      </div>
    </div>
  );
}

export default Certification;

