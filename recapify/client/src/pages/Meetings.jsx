import React, { useState } from "react";

export default function Meetings() {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-2">Meeting Management</h1>
      <p className="text-gray-400 mb-6">
        Upload, transcribe, and analyze your meetings.
      </p>

      <div className="flex space-x-3 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "upload"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "history"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
      </div>

      {activeTab === "upload" ? (
        <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold mb-2">Upload Meeting Recording</h2>
          <p className="text-gray-400 mb-6">
            Upload an audio or video file to transcribe and analyze.
          </p>

          <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 hover:border-blue-500 transition-all">
            <p className="text-gray-300 mb-2">📁 Drag & drop your file here</p>
            <p className="text-sm text-gray-500 mb-4">or click to browse</p>
            <button className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700">
              Select File
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold mb-4">Upload History</h2>
          <p className="text-gray-400">No past uploads yet.</p>
        </div>
      )}
    </div>
  );
}
