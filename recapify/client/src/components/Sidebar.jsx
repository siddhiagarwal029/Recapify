import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Video, Mic, GraduationCap, Brain } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/", name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { path: "/meetings", name: "Meetings", icon: <Video size={18} /> },
    { path: "/interviews", name: "Interviews", icon: <Mic size={18} /> },
    { path: "/learning", name: "Learning", icon: <GraduationCap size={18} /> },
  ];

  return (
    <div className="h-screen bg-[#0f0f0f] border-r border-gray-800 w-64 flex flex-col p-5 text-gray-300">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-10">
        <Brain className="text-blue-500" size={24} />
        <h1 className="text-xl font-semibold text-white tracking-wide">
          AI Assistant
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              location.pathname === link.path
                ? "bg-blue-600 text-white"
                : "hover:bg-[#1e1e1e] text-gray-400 hover:text-white"
            }`}
          >
            {link.icon}
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-center text-xs text-gray-600 border-t border-gray-800 pt-4">
        © 2025 Productivity Hub
      </div>
    </div>
  );
}
