import React from 'react'
import DashNavbar from "../../components/Navbar_dashboard"
import Footer from "../../components/Footer";
const videos = [
  {
    id: 1,
    title: "Day in My Life Vlog",
    views: 120000,
    likes: 4500,
    collabPotential: "High",
    isTrending: true,
    thumbnail: "https://placehold.co/300x180?text=Video+1",
  },
  {
    id: 2,
    title: "Fitness Routine 2025",
    views: 75000,
    likes: 3000,
    collabPotential: "Medium",
    isTrending: false,
    thumbnail: "https://placehold.co/300x180?text=Video+2",
  },
  {
    id: 3,
    title: "Product Review - Smartwatch",
    views: 55000,
    likes: 2200,
    collabPotential: "High",
    isTrending: true,
    thumbnail: "https://placehold.co/300x180?text=Video+3",
  },
];




const Video_manger = () => {
  return (
    <div className='bg-base-100 mt-24'>
    <DashNavbar />

    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Your Videos</h1>
        <div className="flex gap-2">
          <select className="select select-bordered">
            <option>Sort by Views</option>
            <option>Trending</option>
            <option>Collab Potential</option>
          </select>
          <input type="text" placeholder="Search videos..." className="input input-bordered" />
        </div>
      </div>

      {/* Top Video Banner */}
      <div className="card lg:card-side bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-xl">
        <figure><img src="https://placehold.co/320x180?text=Top+Video" alt="Top Video" /></figure>
        <div className="card-body">
          <h2 className="card-title">Top Video This Week</h2>
          <p>"Day in My Life Vlog" gained 120K views and 4.5K likes.</p>
          <div className="badge badge-success badge-outline">Trending</div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
            <figure><img src={video.thumbnail} alt={video.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{video.title}</h2>
              <p>{video.views.toLocaleString()} views</p>
              <div className="flex justify-between items-center mt-2">
                <div className="badge badge-info">{video.collabPotential} Collab</div>
                {video.isTrending && <div className="badge badge-warning">🔥 Trending</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Insights Card */}
      <div className="card bg-base-100 shadow-md p-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">Video Insights</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>“Lifestyle” content gets 30% more engagement.</li>
          <li>Use hooks in the first 3 seconds of your videos.</li>
          <li>Post mid-week for better performance.</li>
        </ul>
      </div>
    </div>

      <Footer />
      </div>
  )
}

export default Video_manger

