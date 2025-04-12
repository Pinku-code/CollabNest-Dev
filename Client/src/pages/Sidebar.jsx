// components/Sidebar.jsx
import { LogOut, Calendar, FileText, Users, Lightbulb } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#111827] text-white h-screen fixed p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-8">ContentOS</h1>
        <nav className="flex flex-col gap-6">
          <NavLink to="/scripts" className="hover:text-indigo-400 flex gap-2">
            <FileText /> Scripts
          </NavLink>
          <NavLink to="/ideas" className="hover:text-indigo-400 flex gap-2">
            <Lightbulb /> AI Ideas
          </NavLink>
          <NavLink to="/calendar" className="hover:text-indigo-400 flex gap-2">
            <Calendar /> Calendar
          </NavLink>
          <NavLink to="/collabs" className="hover:text-indigo-400 flex gap-2">
            <Users /> Collabs & Brands
          </NavLink>
        </nav>
      </div>
      <button
        className="flex items-center gap-2 text-red-400 hover:text-red-500"
        onClick={() => {
          localStorage.removeItem('authToken');
          window.location.href = '/login';
        }}
      >
        <LogOut /> Logout
      </button>
    </div>
  );
}
