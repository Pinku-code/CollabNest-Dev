// pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setData(res.data);
      } catch (err) {
        toast.error("Unauthorized or session expired.");
      }
    };

    fetchDashboard();
  }, []);

  if (!data) return <p className="text-center mt-10">Loading dashboard...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="card bg-base-200 p-4">Posts: {data.data.dashboardStats.posts}</div>
        <div className="card bg-base-200 p-4">Followers: {data.data.dashboardStats.followers}</div>
        <div className="card bg-base-200 p-4">Following: {data.data.dashboardStats.following}</div>
        <div className="card bg-base-200 p-4">Earnings: {data.data.dashboardStats.earnings}</div>
      </div>
    </div>
  );
};

export default Dashboard;
