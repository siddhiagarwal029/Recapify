import React from "react";
import { FaVideo, FaComments, FaBookOpen, FaCalendarAlt, FaBrain } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
      <div className="col-span-2 bg-[#1e1e1e] rounded-xl p-5 border border-gray-800 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Meetings</h2>

        <div className="space-y-4">
          <div className="bg-[#2a2a2a] p-4 rounded-lg flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium">Product Strategy Discussion</h3>
              <p className="text-sm text-gray-400 mt-1">about 2 hours ago</p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <FaCalendarAlt className="text-gray-400" /> 45 min • 5 action items
              </p>
            </div>
            <span className="text-green-500 text-sm bg-green-500/20 px-3 py-1 rounded-full">
              completed
            </span>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium">Engineering Team Sync</h3>
              <p className="text-sm text-gray-400 mt-1">1 day ago</p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <FaCalendarAlt className="text-gray-400" /> 30 min
              </p>
            </div>
            <span className="text-orange-400 text-sm bg-orange-500/20 px-3 py-1 rounded-full">
              processing
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#1e1e1e] rounded-xl p-5 border border-gray-800 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-[#2a2a2a] hover:bg-[#333] transition p-3 rounded-lg text-sm text-gray-300 text-left flex items-center gap-3">
              <FaVideo className="text-blue-400" /> Upload New Meeting Recording
            </button>
            <button className="w-full bg-[#2a2a2a] hover:bg-[#333] transition p-3 rounded-lg text-sm text-gray-300 text-left flex items-center gap-3">
              <FaComments className="text-green-400" /> Start Interview Practice
            </button>
            <button className="w-full bg-[#2a2a2a] hover:bg-[#333] transition p-3 rounded-lg text-sm text-gray-300 text-left flex items-center gap-3">
              <FaBookOpen className="text-purple-400" /> Continue Learning
            </button>
          </div>
        </div>

        <div className="bg-[#1e1e1e] rounded-xl p-5 border border-gray-800 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Today's Goals</h2>
          <div className="space-y-3">
            <div className="bg-[#2a2a2a] p-3 rounded-lg flex items-center gap-3">
              <FaCalendarAlt className="text-orange-400 text-lg" />
              <div>
                <p className="font-medium text-gray-200">
                  Review Q2 strategy meeting notes
                </p>
                <p className="text-xs text-gray-400 mt-1">Due: Today, 5:00 PM</p>
              </div>
            </div>

            <div className="bg-[#2a2a2a] p-3 rounded-lg flex items-center gap-3">
              <FaBrain className="text-pink-400 text-lg" />
              <div>
                <p className="font-medium text-gray-200">
                  Complete React performance quiz
                </p>
                <p className="text-xs text-gray-400 mt-1">Recommended</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
