import React from "react";

export default function Tasks() {
  const mock = [
    { id: 1, text: "Share presentation deck", owner: "Alice", due: "2025-12-10" },
    { id: 2, text: "Follow up with vendor", owner: "Bob", due: "2025-12-12" },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">Action Items</h1>

      <div className="space-y-3">
        {mock.map((t) => (
          <div key={t.id} className="p-4 bg-[#071428] border border-gray-800 rounded-md flex justify-between items-center">
            <div>
              <div className="font-medium">{t.text}</div>
              <div className="text-xs text-gray-400">Owner: {t.owner} • Due: {t.due}</div>
            </div>
            <button className="px-3 py-1 bg-[#0b1220] border border-gray-800 rounded-md text-sm">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
}
