import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <header className="fixed left-64 right-0 top-0 h-16 bg-[#071028]/70 backdrop-blur-sm border-b border-gray-800 z-30 flex items-center px-6">
      <div className="flex items-center gap-3">
        <div className="text-lg font-medium">Recapify Dashboard:</div>
        <div className="text-sm text-gray-400">meetings to minutes, automated</div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center bg-[#0b1220] px-3 py-2 rounded-lg border border-gray-800 w-72">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
          <input
            placeholder="Search meetings or MoM"
            className="ml-3 bg-transparent outline-none text-sm w-full text-gray-200"
          />
        </div>

        <button className="p-2 rounded-md hover:bg-gray-800">
          <BellIcon className="w-5 h-5 text-gray-300" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-700" />
      </div>
    </header>
  );
}
