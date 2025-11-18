import React from "react";

export default function Learning() {
  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-2">AI Learning Hub</h1>
      <p className="text-gray-400 mb-6">
        Explore resources, summaries, and AI-curated learning materials.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Prompt Engineering", "Interview Prep", "AI Tools", "LLMs Overview", "Productivity", "Case Studies"].map(
          (topic) => (
            <div
              key={topic}
              className="bg-gray-900 border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{topic}</h3>
              <p className="text-gray-400 text-sm">
                Learn key concepts and AI-powered workflows for {topic.toLowerCase()}.
              </p>
              <button className="mt-4 px-3 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-700 text-sm">
                Explore
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
