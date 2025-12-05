import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpTrayIcon, MicrophoneIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-gray-400 mt-1">
            Quick actions and recent meetings.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/upload")}
            className="flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] px-4 py-2 rounded-lg text-sm font-medium shadow"
          >
            <ArrowUpTrayIcon className="w-4 h-4" />
            Upload / Start
          </button>

          <button
            onClick={() => navigate("/upload")}
            className="flex items-center gap-2 bg-[#0b1220] border border-gray-800 px-4 py-2 rounded-lg text-sm text-gray-200"
          >
            <MicrophoneIcon className="w-4 h-4" />
            Record Meeting
          </button>
        </div>
      </div>

      {/* recent activity mock */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#071428] border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Recent Meetings</h2>

          <div className="space-y-3">
            <div className="p-4 bg-[#071a2b] border border-gray-800 rounded-lg flex justify-between items-start">
              <div>
                <div className="font-semibold">Product Strategy</div>
                <div className="text-xs text-gray-400 mt-1">Today • 45 min</div>
              </div>
              <div className="text-sm text-green-400 bg-green-900/20 px-3 py-1 rounded-full">
                Finalized
              </div>
            </div>

            <div className="p-4 bg-[#071a2b] border border-gray-800 rounded-lg flex justify-between items-start">
              <div>
                <div className="font-semibold">Engineering Weekly</div>
                <div className="text-xs text-gray-400 mt-1">Yesterday • 30 min</div>
              </div>
              <div className="text-sm text-yellow-400 bg-yellow-900/20 px-3 py-1 rounded-full">
                Draft
              </div>
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="space-y-4">
          <div className="bg-[#071428] border border-gray-800 rounded-xl p-4">
            <h3 className="font-medium">Quick Actions</h3>
            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => navigate("/upload")}
                className="text-left px-3 py-2 bg-[#0b1220] border border-gray-800 rounded-md"
              >
                Upload Meeting
              </button>
              <button
                onClick={() => navigate("/upload")}
                className="text-left px-3 py-2 bg-[#0b1220] border border-gray-800 rounded-md"
              >
                Record Meeting
              </button>
              <button
                onClick={() => navigate("/summary")}
                className="text-left px-3 py-2 bg-[#0b1220] border border-gray-800 rounded-md"
              >
                View Drafts
              </button>
            </div>
          </div>

          <div className="bg-[#071428] border border-gray-800 rounded-xl p-4">
            <h3 className="font-medium">Upcoming</h3>
            <div className="mt-2 text-sm text-gray-400">No upcoming meetings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
