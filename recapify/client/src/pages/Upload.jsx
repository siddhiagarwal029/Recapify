import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    host: "",
    platform: "Zoom",
    dateTime: "",
    durationMinutes: 30,
    participants: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    setFile(e.target.files?.[0] ?? null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const draft = `Draft MoM for "${form.title}"\nHost: ${form.host}\nPlatform: ${form.platform}\nTime: ${form.dateTime}\nParticipants: ${form.participants}\n\nKey points:\n- (auto-generated summary placeholder)\n\nAction Items:\n- Assign owners and due dates after review.`;

    navigate("/summary", { state: { meeting: form, fileName: file?.name, draft } });
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">Upload / Record Meeting</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-sm text-gray-300 block mb-1">Meeting Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
            placeholder="Weekly sync / Product review"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-300 block mb-1">Host</label>
            <input
              name="host"
              value={form.host}
              onChange={handleChange}
              required
              className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">Platform</label>
            <select
              name="platform"
              value={form.platform}
              onChange={handleChange}
              className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
            >
              <option>Zoom</option>
              <option>Google Meet</option>
              <option>Microsoft Teams</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-300 block mb-1">Meeting Time</label>
            <input
              name="dateTime"
              value={form.dateTime}
              onChange={handleChange}
              required
              type="datetime-local"
              className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">Duration (minutes)</label>
            <input
              name="durationMinutes"
              value={form.durationMinutes}
              onChange={handleChange}
              type="number"
              min={1}
              className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
  <label className="text-sm text-gray-300 block mb-1">Number of Participants</label>
  <input
    type="number"
    name="participants"
    value={form.participants}
    onChange={handleChange}
    placeholder="e.g. 5"
    min="1"
    className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
  />
</div>


        <div>
          <label className="text-sm text-gray-300 block mb-1">Upload recording (optional)</label>
          <input type="file" onChange={handleFile} className="text-sm" />
          {file && <div className="text-xs mt-2 text-gray-400">Selected: {file.name}</div>}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] rounded-md text-sm font-medium"
          >
            Generate Draft MoM
          </button>

          <button
            type="button"
            onClick={() => alert("Recording flow placeholder — implement with MediaRecorder / WebRTC")}
            className="px-4 py-2 bg-[#0b1220] border border-gray-800 rounded-md text-sm"
          >
            Start Live Recording
          </button>
        </div>
      </form>
    </div>
  );
}
