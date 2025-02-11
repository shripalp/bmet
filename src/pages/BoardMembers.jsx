import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

function BoardMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'documents/board_members.xlsx')
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMembers(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error reading Excel file:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-center text-black px-6"
        style={{ backgroundImage: "url('/documents/board_banner.jpg')" }}
      >
        <h1 className="text-4xl font-bold">Meet Our Board Members</h1>
        <p className="text-lg mt-2 max-w-2xl">
          Dedicated professionals leading the way in certification and healthcare standards.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg mt-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Board of Directors
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Position</th>
                  <th className="p-4 text-left">Profile</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition duration-300"
                  >
                    <td className="p-4">{member.Name}</td>
                    <td className="p-4">{member.Position}</td>
                    <td className="p-4">{member.Profile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default BoardMembers;

