import React, { useState } from "react";
import axios from "axios";
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    setFile(e.target.files?.[0] ?? null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const meetingData = {
        title: form.title,
        host: form.host,
        platform: form.platform,
        dateTime: form.dateTime,
        durationMinutes: form.durationMinutes,
        participants: form.participants,
        fileName: file?.name || null,
      };

      const response = await axios.post(
        "http://localhost:5000/api/meetings",
        meetingData
      );

      const savedMeeting = response.data.meeting;
      const draft = `
      Draft MoM for "${savedMeeting.title}"
      Host: ${savedMeeting.host}
      Platform: ${savedMeeting.platform}
      Time: ${savedMeeting.dateTime}
      Participants: ${savedMeeting.participants}

      Key Highlights:
      - AI-generated summary will appear here.

      Action Items:
      - Add/edit tasks after reviewing the MoM.
      `;

      navigate("/summary", {
        state: {
          meeting: savedMeeting,
          draft,
        },
      });

      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Error saving meeting");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">Upload / Record Meeting</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-sm text-gray-300 block mb-1">
            Meeting Title
          </label>
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
            <label className="text-sm text-gray-300 block mb-1">
              Meeting Time
            </label>
            <input
              name="dateTime"
              value={form.dateTime}
              onChange={handleChange}
              type="datetime-local"
              required
              className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">
              Duration (minutes)
            </label>
            <input
              name="durationMinutes"
              type="number"
              min="1"
              value={form.durationMinutes}
              onChange={handleChange}
              className="w-full bg-[#071428] border border-gray-800 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-300 block mb-1">
            Number of Participants
          </label>
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
          <label className="text-sm text-gray-300 block mb-1">
            Upload Recording (optional)
          </label>
          <input type="file" onChange={handleFile} className="text-sm" />
          {file && (
            <p className="text-xs mt-2 text-gray-400">Selected: {file.name}</p>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] rounded-md text-sm font-medium"
          >
            {loading ? "Saving..." : "Generate Draft MoM"}
          </button>

          <button
            type="button"
            onClick={() =>
              alert("Recording will be added later using MediaRecorder/WebRTC")
            }
            className="px-4 py-2 bg-[#0b1220] border border-gray-800 rounded-md text-sm"
          >
            Start Live Recording
          </button>
        </div>
      </form>
    </div>
  );
}
