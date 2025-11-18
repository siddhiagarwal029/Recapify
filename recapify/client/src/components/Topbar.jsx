import { Moon } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[#121212]">
      <h2 className="text-lg font-medium text-gray-200">Welcome back</h2>

      <button className="flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#2a2a2a] transition px-4 py-2 rounded-lg text-gray-300 text-sm">
        <Moon size={16} />
      </button>
    </div>
  );
}
