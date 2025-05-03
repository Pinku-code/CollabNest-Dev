import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar_dashboard";
import Footer from "../../components/Footer";
import axios from 'axios';
import { API } from "../../utils/api";

const Collabs = () => {
  const [collabs, setCollabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCollabs = async () => {
      try {
        const res = await axios.get(API.COLLAB, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCollabs(res.data);
      } catch (err) {
        console.error("Error fetching collabs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollabs();
  }, []);

  // Optional stats logic
  const monthlyCount = collabs.length;
  const earnings = collabs
    .filter(c => c.status === "accepted")
    .reduce((sum, c) => sum + (c.offerAmount || 0), 0);

  const pending = collabs.filter(c => c.status === "pending").length;
  const accepted = collabs.filter(c => c.status === "accepted").length;

  if (loading) return <div className="text-center mt-10">Loading collabs...</div>;

  return (
    <div className='bg-base-100 mt-16'>
      <Navbar />

      <div className="p-6 space-y-6">
        {/* Header */}
        <h1 className="text-3xl font-bold">Your Collabs</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">This Month</h2>
              <p>{monthlyCount} Collabs</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Earnings</h2>
              <p>₹{earnings}</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Pending Offers</h2>
              <p>{pending} Deals</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Accepted</h2>
              <p>{accepted} Deals</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <input type="text" placeholder="Search by brand..." className="input input-bordered w-full md:w-64" />
          <select className="select select-bordered">
            <option disabled selected>Filter by status</option>
            <option>Accepted</option>
            <option>Rejected</option>
            <option>Pending</option>
          </select>
          <select className="select select-bordered">
            <option disabled selected>Sort by</option>
            <option>Date</option>
            <option>Amount</option>
          </select>
        </div>

        {/* Collab Deals Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full mt-4">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Offer</th>
                <th>Date</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {collabs.map((collab) => (
                <tr key={collab._id}>
                  <td>{collab.brandName}</td>
                  <td>₹{collab.offerAmount}</td>
                  <td>{new Date(collab.dateOffered).toLocaleDateString()}</td>
                  <td>
                    <span className={`badge ${
                      collab.status === "accepted" ? "badge-success" :
                      collab.status === "pending" ? "badge-warning" : "badge-error"
                    }`}>
                      {collab.status}
                    </span>
                  </td>
                  <td>{collab.deadline ? new Date(collab.deadline).toLocaleDateString() : "—"}</td>
                  <td>{collab.notes || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Monthly Analytics Chart Placeholder */}
        <div className="mt-6">
          <div className="card bg-base-100 shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Monthly Collab Analytics</h2>
            <div className="h-40 flex items-center justify-center text-gray-500">[Chart Placeholder]</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collabs;
