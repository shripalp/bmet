import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

function BoardMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + '/documents/board_members.xlsx')
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMembers(jsonData);
      })
      .catch((error) => {
        console.error("Error reading Excel file:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Board Members</h1>
      {members.length === 0 ? (
        <p>Loading board members...</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Position</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td className="border p-2">{member.Name}</td>
                <td className="border p-2">{member.Position}</td>
                <td className="border p-2">{member.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BoardMembers;

