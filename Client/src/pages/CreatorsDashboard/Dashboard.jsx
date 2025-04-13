// import React, { useState } from "react";
// import DashNavbar from "../../components/Navbar_dashboard";
// import Footer from "../../components/Footer";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   BarChart, Bar,
// } from "recharts";

// const CreatorsDashboard = () => {
//   const [creatorInfo, setCreatorInfo] = useState({
//     name: "Manish Raj Pandey",
//     email: "manish@example.com",
//     niche: "Tech & Reviews",
//   });

//   const [editing, setEditing] = useState(false);

//   const handleChange = (e) => {
//     setCreatorInfo({ ...creatorInfo, [e.target.name]: e.target.value });
//   };

//   const chartData = [
//     { name: "Jan", videos: 4, earnings: 10000 },
//     { name: "Feb", videos: 6, earnings: 13000 },
//     { name: "Mar", videos: 5, earnings: 15000 },
//     { name: "Apr", videos: 7, earnings: 18000 },
//   ];

//   const recentActivities = [
//     "Uploaded sponsored video for XYZ Brand",
//     "Collaborated with Neha Tech",
//     "Script draft saved for ‘Smartwatch Review’",
//     "Responded to brand deal offer from ABC Corp",
//   ];

//   const stats = [
//     { title: "Total Videos", value: 124, icon: "🎥" },
//     { title: "Scripts Written", value: 58, icon: "✍️" },
//     { title: "Collabs", value: 22, icon: "🤝" },
//     { title: "₹ from Collabs", value: "₹34,000", icon: "💼" },
//     { title: "Sponsor Earnings", value: "₹56,200", icon: "💰" },
//     { title: "Pending Deals", value: 5, icon: "📋" },
//   ];

//   const topItems = [
//     { title: "How I Earned 50K in 3 Days", views: 38000, sponsors: "Nike" },
//     { title: "Best Mic under ₹5000", views: 25000, sponsors: "Blue Yeti" },
//   ];
  

//   return (
//     <div className="min-h-screen bg-base-200">
//       <DashNavbar />
//       <div className="max-w-7xl mx-auto px-4 py-28">
//         <h1 className="text-3xl font-bold text-center text-primary mb-8">
//           Creator Dashboard
//         </h1>

//         {/* Editable Creator Info */}
//         <div className="bg-base-100 p-5 rounded-xl mb-6 shadow-md">
//           <h2 className="text-xl font-bold mb-4">Creator Info</h2>
//           {editing ? (
//             <div className="space-y-3">
//               <input
//                 name="name"
//                 value={creatorInfo.name}
//                 onChange={handleChange}
//                 className="input input-bordered w-full"
//               />
//               <input
//                 name="email"
//                 value={creatorInfo.email}
//                 onChange={handleChange}
//                 className="input input-bordered w-full"
//               />
//               <input
//                 name="niche"
//                 value={creatorInfo.niche}
//                 onChange={handleChange}
//                 className="input input-bordered w-full"
//               />
//               <button
//                 className="btn btn-success mt-2"
//                 onClick={() => setEditing(false)}
//               >
//                 Save
//               </button>
//             </div>
//           ) : (
//             <div>
//               <p><strong>Name:</strong> {creatorInfo.name}</p>
//               <p><strong>Email:</strong> {creatorInfo.email}</p>
//               <p><strong>Niche:</strong> {creatorInfo.niche}</p>
//               <button
//                 className="btn btn-outline btn-sm mt-2"
//                 onClick={() => setEditing(true)}
//               >
//                 Edit Info
//               </button>
//             </div>
//           )}
//         </div>


        
//           {/* Top-Performing Videos */}
//         <div className="bg-base-100 pt-5 pb-5 rounded-xl shadow-md mt-10 mb-10">
//   <h3 className="text-xl font-semibold mb-4">🔥 Top-Performing Videos</h3>
//   <div className="space-y-3 p-3">
//     {topItems.map((item, i) => (
//       <div key={i} className="p-3 rounded-md border-l-4 border-primary bg-gray-100">
//         <h4 className="font-bold text-lg">{item.title}</h4>
//         <p className="text-sm text-gray-600">
//           Views: {item.views.toLocaleString()} | Sponsor: {item.sponsors}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>


//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           {stats.map((stat, idx) => (
//             <div
//               key={idx}
//               className="bg-base-100 p-5 rounded-2xl shadow hover:shadow-xl transition"
//             >
//               <div className="text-4xl mb-2">{stat.icon}</div>
//               <h3 className="text-lg font-semibold text-indigo-600">{stat.title}</h3>
//               <p className="text-2xl font-bold">{stat.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           <div className="bg-base-100 p-5 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Monthly Earnings</h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="earnings" stroke="#6366f1" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="bg-base-100 p-5 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Video Uploads</h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="videos" fill="#3b82f6" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-base-100 p-5 rounded-xl shadow-md">
//           <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
//           <ul className="list-disc list-inside space-y-2 text-gray-700">
//             {recentActivities.map((item, index) => (
//               <li key={index}>🟢 {item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CreatorsDashboard;








































import React, { useEffect, useState } from "react";
import DashNavbar from "../../components/Navbar_dashboard";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from "recharts";

const CreatorsDashboard = () => {
  const [creatorInfo, setCreatorInfo] = useState({
    name: "Manish Raj Pandey",
    email: "manish@example.com",
    niche: "Tech & Reviews",
  });

  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  // ✅ Auth check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setCreatorInfo({ ...creatorInfo, [e.target.name]: e.target.value });
  };

  const chartData = [
    { name: "Jan", videos: 4, earnings: 10000 },
    { name: "Feb", videos: 6, earnings: 13000 },
    { name: "Mar", videos: 5, earnings: 15000 },
    { name: "Apr", videos: 7, earnings: 18000 },
  ];

  const recentActivities = [
    "Uploaded sponsored video for XYZ Brand",
    "Collaborated with Neha Tech",
    "Script draft saved for ‘Smartwatch Review’",
    "Responded to brand deal offer from ABC Corp",
  ];

  const stats = [
    { title: "Total Videos", value: 124, icon: "🎥" },
    { title: "Scripts Written", value: 58, icon: "✍️" },
    { title: "Collabs", value: 22, icon: "🤝" },
    { title: "₹ from Collabs", value: "₹34,000", icon: "💼" },
    { title: "Sponsor Earnings", value: "₹56,200", icon: "💰" },
    { title: "Pending Deals", value: 5, icon: "📋" },
  ];

  const topItems = [
    { title: "How I Earned 50K in 3 Days", views: 38000, sponsors: "Nike" },
    { title: "Best Mic under ₹5000", views: 25000, sponsors: "Blue Yeti" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      <DashNavbar />
      <div className="max-w-7xl mx-auto px-4 py-28">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          Creator Dashboard
        </h1>

        {/* Editable Creator Info */}
        <div className="bg-base-100 p-5 rounded-xl mb-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Creator Info</h2>
          {editing ? (
            <div className="space-y-3">
              <input
                name="name"
                value={creatorInfo.name}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <input
                name="email"
                value={creatorInfo.email}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <input
                name="niche"
                value={creatorInfo.niche}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <button
                className="btn btn-success mt-2"
                onClick={() => setEditing(false)}
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              <p><strong>Name:</strong> {creatorInfo.name}</p>
              <p><strong>Email:</strong> {creatorInfo.email}</p>
              <p><strong>Niche:</strong> {creatorInfo.niche}</p>
              <button
                className="btn btn-outline btn-sm mt-2"
                onClick={() => setEditing(true)}
              >
                Edit Info
              </button>
            </div>
          )}
        </div>

        {/* Top-Performing Videos */}
        <div className="bg-base-100 pt-5 pb-5 rounded-xl shadow-md mt-10 mb-10">
          <h3 className="text-xl font-semibold mb-4">🔥 Top-Performing Videos</h3>
          <div className="space-y-3 p-3">
            {topItems.map((item, i) => (
              <div key={i} className="p-3 rounded-md border-l-4 border-primary bg-gray-100">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-600">
                  Views: {item.views.toLocaleString()} | Sponsor: {item.sponsors}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-5 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-600">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-base-100 p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Monthly Earnings</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="earnings" stroke="#6366f1" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-base-100 p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Video Uploads</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="videos" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-base-100 p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recentActivities.map((item, index) => (
              <li key={index}>🟢 {item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatorsDashboard;
