import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaServer, FaGlobe, FaPaintBrush, FaBrain, FaChartLine } from "react-icons/fa";

const domains = [
  {
    title: "Frontend Development",
    desc: "React, HTML, CSS, JavaScript",
    icon: <FaCode className="text-blue-500 text-2xl" />,
    key: "frontend",
  },
  {
    title: "Backend Development",
    desc: "APIs, Databases, Server",
    icon: <FaServer className="text-blue-500 text-2xl" />,
    key: "backend",
  },
  {
    title: "Full Stack",
    desc: "End-to-end development",
    icon: <FaGlobe className="text-blue-500 text-2xl" />,
    key: "fullstack",
  },
  {
    title: "UI/UX Design",
    desc: "User interface & experience",
    icon: <FaPaintBrush className="text-blue-500 text-2xl" />,
    key: "uiux",
  },
  {
    title: "AI & Machine Learning",
    desc: "ML models, algorithms",
    icon: <FaBrain className="text-blue-500 text-2xl" />,
    key: "ai_ml",
  },
  {
    title: "Data Science",
    desc: "Analytics, visualization",
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    key: "datascience",
  },
];

const Interview = () => {
  const navigate = useNavigate();

  const handleSelect = (domainKey) => {
    navigate(`/interview/live?domain=${domainKey}`);
  };

  return (
    <div className="text-white bg-[#0d1117] min-h-screen p-10">
      <h1 className="text-4xl font-semibold mb-2">Interview Practice</h1>
      <p className="text-gray-400 mb-8">
        Practice technical interviews with AI evaluation
      </p>

      <div className="bg-[#161b22] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Select Interview Domain</h2>
        <p className="text-gray-400 mb-6">
          Choose a technical area for your interview practice
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div
              key={d.key}
              onClick={() => handleSelect(d.key)}
              className="cursor-pointer flex flex-col justify-between border border-gray-700 rounded-xl p-6 bg-[#0d1117] hover:bg-[#1f2937] hover:border-blue-600 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                {d.icon}
                <h3 className="text-lg font-semibold">{d.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interview;
