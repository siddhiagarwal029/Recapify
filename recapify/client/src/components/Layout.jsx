import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    
    <div className="flex h-screen bg-[#121212] text-gray-100 overflow-hidden">
       <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
