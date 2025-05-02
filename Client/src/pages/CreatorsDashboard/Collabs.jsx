import React from 'react'
import Navbar from "../../components/Navbar_dashboard"
import Footer from "../../components/Footer";

const Collabs = () => {
  return (
    <div className='bg-base-100 mt-16'>
    <Navbar />
    <div className="p-6  space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold">Your Collabs</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">This Month</h2>
            <p>8 Collabs</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Earnings</h2>
            <p>$2,350</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Pending Offers</h2>
            <p>3 Deals</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Accepted</h2>
            <p>5 Deals</p>
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
            <tr>
              <td>Nike</td>
              <td>$500</td>
              <td>Apr 15, 2025</td>
              <td><span className="badge badge-success">Accepted</span></td>
              <td>Apr 30, 2025</td>
              <td>Instagram Reel</td>
            </tr>
            <tr>
              <td>Red Bull</td>
              <td>$300</td>
              <td>Apr 20, 2025</td>
              <td><span className="badge badge-warning">Pending</span></td>
              <td>May 5, 2025</td>
              <td>YouTube Short</td>
            </tr>
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
  )
}

export default Collabs
