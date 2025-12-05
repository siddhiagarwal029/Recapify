import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ArrowUpTrayIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const menu = [
  { name: "Dashboard", icon: HomeIcon, path: "/dashboard" },
  { name: "Upload / Record", icon: ArrowUpTrayIcon, path: "/upload" },
  { name: "Summary", icon: DocumentTextIcon, path: "/summary" },
  { name: "Tasks", icon: ListBulletIcon, path: "/tasks" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0b1220] border-r border-gray-800 fixed left-0 top-0 h-full z-40 px-6 py-6">
      <div className="mb-8">
        <div className="text-2xl font-semibold">Recapify</div>
      </div>

      <nav className="flex flex-col gap-2">
        {menu.map((m) => {
          const Icon = m.icon;
          return (
            <NavLink
              key={m.path}
              to={m.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#0ea5e9]/20 to-[#7c3aed]/10 text-white shadow"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              <Icon className="w-5 h-5 text-gray-300" />
              <span>{m.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto text-xs text-gray-500 pt-6 border-t border-gray-800">
        © {new Date().getFullYear()} Recapify
      </div>
    </aside>
  );
}
