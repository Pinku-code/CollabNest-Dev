// pages/Dashboard.jsx
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-6 bg-gray-50 min-h-screen">
          <h2 className="text-3xl font-semibold mb-4">Welcome Back, Creator 👋</h2>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Scripts" count={12} />
            <Card title="Ideas" count={8} />
            <Card title="Brands" count={3} />
            <Card title="Upcoming" count={5} />
          </div>
        </main>
      </div>
    </div>
  );
}

function Card({ title, count }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="text-3xl font-bold mt-2">{count}</p>
    </div>
  );
}
