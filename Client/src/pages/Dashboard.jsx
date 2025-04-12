import { useState, useEffect } from 'react';
import { FiMenu, FiLogOut, FiHome, FiFileText, FiUsers, FiBriefcase, FiCpu, FiCalendar, FiX } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

// Dummy page components
function DashboardHome() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-base-100 shadow rounded-lg p-4">📋 Tasks Overview</div>
        <div className="bg-base-100 shadow rounded-lg p-4">📈 Stats</div>
        <div className="bg-base-100 shadow rounded-lg p-4">📅 Next Deadlines</div>
      </div>
    </section>
  );
}

function Scripts() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Scripts / Ideas</h2>
      <div className="space-y-3">
        <div className="bg-base-100 shadow p-4 rounded-lg">🎥 YouTube: "React Tips for 2025"</div>
        <div className="bg-base-100 shadow p-4 rounded-lg">📹 Reel: "Behind the Scenes Day"</div>
        <div className="bg-base-100 shadow p-4 rounded-lg">💡 Idea: "AI for Creators"</div>
      </div>
    </section>
  );
}

function Collabs() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Collaborations</h2>
      <div className="space-y-3">
        <div className="bg-base-100 shadow p-4 rounded-lg">🤝 @Jane - Podcast Recording - In Progress</div>
        <div className="bg-base-100 shadow p-4 rounded-lg">🤝 @Mark - IG Live - Scheduled</div>
      </div>
    </section>
  );
}

function BrandDeals() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Brand Deals</h2>
      <div className="space-y-3">
        <div className="bg-base-100 shadow p-4 rounded-lg">💼 SkinGlow - ₹25,000 - Paid</div>
        <div className="bg-base-100 shadow p-4 rounded-lg">💼 TechX - ₹15,000 - Pending</div>
      </div>
    </section>
  );
}

function AIAssistant() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">AI Assistant</h2>
      <div className="bg-base-100 shadow p-4 rounded-lg">
        <p className="mb-2">Prompt: "Video ideas for finance niche"</p>
        <p className="italic text-gray-600">💡 "Top 5 Budgeting Tips That Actually Work"</p>
      </div>
    </section>
  );
}

function Calendar() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Content Calendar</h2>
      <div className="bg-base-100 shadow p-4 rounded-lg">
        📆 April 14 - YouTube Upload<br />📆 April 16 - Meeting with brand<br />📆 April 20 - Script Draft Due
      </div>
    </section>
  );
}

function Sidebar({ onNavigate, isOpen, active, onClose }) {
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: <FiHome /> },
    { key: 'scripts', label: 'Scripts', icon: <FiFileText /> },
    { key: 'collabs', label: 'Collabs', icon: <FiUsers /> },
    { key: 'brandDeals', label: 'Brand Deals', icon: <FiBriefcase /> },
    { key: 'ai', label: 'AI Assistant', icon: <FiCpu /> },
    { key: 'calendar', label: 'Calendar', icon: <FiCalendar /> },
  ];

  return (
    <div className={`h-full w-64 bg-base-100 shadow-lg z-40 transform transition-transform ease-in-out duration-500 fixed top-0 left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4">
        <button onClick={onClose} className="cursor-pointer"><FiMenu size={24} /></button>
        <Link to="/" className="text-xl font-bold text-primary cursor-pointer">CollabNest</Link>
      </div>

      <nav className="px-4 pt-2 space-y-2">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`w-full flex items-center gap-3 text-left px-3 py-2 rounded transition cursor-pointer ${active === item.key ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

function Topbar({ onToggleSidebar, sidebarOpen }) {
  const userAvatar = 'https://i.pravatar.cc/150?img=32';
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <header className="bg-base-100 shadow p-4 flex justify-between items-center sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {!sidebarOpen && (
          <>
            <button onClick={onToggleSidebar} className="cursor-pointer">
              <FiMenu size={24} />
            </button>
            <Link to="/" className="text-xl font-bold text-primary cursor-pointer">CollabNest</Link>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered hidden md:block w-64 rounded-full"
        />
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle cursor-pointer">
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z" /></svg>
          )}
        </button>
        <img src={userAvatar} alt="User" className="w-8 h-8 rounded-full border cursor-pointer" />
        <button className="btn btn-sm btn-outline flex items-center gap-2 cursor-pointer" onClick={() => {
          localStorage.removeItem('authToken');
          window.location.href = '/login';
        }}><FiLogOut /> Logout</button>
      </div>
    </header>
  );
}

export default function CreatorDashboard() {
  const [section, setSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = (target) => {
    setSection(target);
  };

  const renderSection = () => {
    switch (section) {
      case 'dashboard': return <DashboardHome />;
      case 'scripts': return <Scripts />;
      case 'collabs': return <Collabs />;
      case 'brandDeals': return <BrandDeals />;
      case 'ai': return <AIAssistant />;
      case 'calendar': return <Calendar />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="relative h-screen bg-base-200 flex">
      {/* Sidebar */}
      <Sidebar onNavigate={handleNavigation} isOpen={sidebarOpen} active={section} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-500 ease-in-out ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {<Topbar onToggleSidebar={() => setSidebarOpen(prev => !prev)} sidebarOpen={sidebarOpen} />}
        <main className="flex-1 overflow-y-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
