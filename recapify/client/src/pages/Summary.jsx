import { useState } from "react";

export default function Summary() {
  const [momData, setMomData] = useState([
    { topic: "Project Planning", discussion: "Timeline for Q2 tasks was reviewed.", owner: "Amit", deadline: "2025-02-14" },
    { topic: "Feature Requests", discussion: "Added 3 new client requests.", owner: "Riya", deadline: "2025-02-18" },
    { topic: "Bug Fixes", discussion: "Critical login issue assigned.", owner: "Karan", deadline: "2025-02-10" },
  ]);

  const [editing, setEditing] = useState({
    row: null,
    field: null,
  });

  const handleEdit = (rowIdx, field) => {
    setEditing({ row: rowIdx, field });
  };

  const handleChange = (e, rowIdx, field) => {
    const updated = [...momData];
    updated[rowIdx][field] = e.target.value;
    setMomData(updated);
  };

  const handleBlur = () => {
    setEditing({ row: null, field: null });
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold mb-6">Minutes of Meeting</h1>

      <div className="bg-[#1a1e24] backdrop-blur-xl shadow-lg rounded-xl border border-gray-700 p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-gray-300 font-medium">Topic</th>
              <th className="py-3 px-4 text-gray-300 font-medium">Discussion</th>
              <th className="py-3 px-4 text-gray-300 font-medium">Owner</th>
              <th className="py-3 px-4 text-gray-300 font-medium">Deadline</th>
            </tr>
          </thead>

          <tbody>
            {momData.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-gray-800 hover:bg-[#232831] transition">
                {["topic", "discussion", "owner", "deadline"].map((field, colIdx) => (
                  <td
                    key={colIdx}
                    className="py-3 px-4 text-gray-200 cursor-pointer"
                    onClick={() => handleEdit(rowIdx, field)}
                  >
                    {editing.row === rowIdx && editing.field === field ? (
                      <input
                        autoFocus
                        type="text"
                        value={row[field]}
                        onChange={(e) => handleChange(e, rowIdx, field)}
                        onBlur={handleBlur}
                        onKeyDown={(e) => e.key === "Enter" && handleBlur()}
                        className="w-full bg-[#2a2f36] border border-gray-600 text-gray-100 rounded p-2 outline-none"
                      />
                    ) : (
                      <span>{row[field]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
