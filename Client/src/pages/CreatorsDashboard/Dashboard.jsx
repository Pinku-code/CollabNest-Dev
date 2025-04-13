// import React from "react";
// import DashNavbar from "../../components/Navbar_dashboard"
// import Footer from "../../components/Footer";

// const CreatorsDashboard = () => {
//   return (
//     <div>
//       <DashNavbar />

//       <div>
//         Dashboard
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CreatorsDashboard;









import React, { useEffect, useState } from "react";
import DashNavbar from "../../components/Navbar_dashboard";
import Footer from "../../components/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreatorsDashboard = () => {
  const [stats, setStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("You must be logged in");
        return navigate("/login");
      }

      try {
        const res = await axios.get("http://localhost:5000/api/auth/cr_dash", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(res.data.data.dashboardStats);
      } catch (err) {
        toast.error("Unauthorized or session expired");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <div>
      <DashNavbar />

      <div className="min-h-screen bg-base-200 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Creator Dashboard</h1>

        {!stats ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="card bg-base-100 shadow p-4">📄 Posts: {stats.posts}</div>
            <div className="card bg-base-100 shadow p-4">👥 Followers: {stats.followers}</div>
            <div className="card bg-base-100 shadow p-4">👤 Following: {stats.following}</div>
            <div className="card bg-base-100 shadow p-4">💰 Earnings: {stats.earnings}</div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CreatorsDashboard;
