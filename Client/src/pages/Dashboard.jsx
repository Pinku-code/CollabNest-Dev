// import React from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const Dashboard = () => {
//   return (
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content text-center">
//           <div className="max-w-md">
//             <h1 className="text-5xl font-bold">Dashboard</h1>
//             <p className="py-6">Welcome to your dashboard Creator.</p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard







import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const modules = [
    { name: 'Content Calendar', path: '/calendar' },
    { name: 'Script Manager', path: '/scripts' },
    { name: 'Brand Deals', path: '/brands' },
    { name: 'Collab Tracker', path: '/collabs' },
    { name: 'Idea Bank', path: '/ideas' },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-6">🎬 CreatorHub Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => (
          <Link
            key={mod.name}
            to={mod.path}
            className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold">{mod.name}</h2>
            <p className="text-sm text-gray-500">Manage your {mod.name.toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
