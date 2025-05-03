import React, { useEffect, useState } from 'react';
import DashNavbar from "../../components/Navbar_dashboard";
import Footer from "../../components/Footer";
import axios from 'axios';
import { API } from "../../utils/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Video_manger = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filterTrending, setFilterTrending] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(API.VIDEO, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // setVideos(res.data);
        // setFilteredVideos(res.data);
        const withAnalytics = res.data.map(video => ({
          ...video,
          analytics: [
            { date: '2025-04-01', views: 120 },
            { date: '2025-04-03', views: 300 },
            { date: '2025-04-05', views: 600 },
            { date: '2025-04-07', views: 900 },
            { date: '2025-04-09', views: 1500 },
            { date: '2025-04-11', views: 2100 },
            { date: '2025-04-13', views: 3000 }
          ]
        }));
        
        setVideos(withAnalytics);
        setFilteredVideos(withAnalytics);
        
      } catch (err) {
        console.error("Failed to fetch videos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    let filtered = [...videos];

    if (search) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterTrending) {
      filtered = filtered.filter(video => video.isTrending);
    }

    if (sortOption === 'views') {
      filtered.sort((a, b) => b.views - a.views);
    } else if (sortOption === 'likes') {
      filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortOption === 'date') {
      filtered.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
    }

    setFilteredVideos(filtered);
  }, [search, sortOption, filterTrending, videos]);

  const topVideo = filteredVideos[0];

  if (loading) return <div className="text-center mt-10">Loading videos...</div>;

  return (
    <div className='bg-base-100 mt-24'>
      <DashNavbar />

      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-3xl font-bold">Your Videos</h1>
          <div className="flex gap-2">
            <select className="select select-bordered" onChange={(e) => setSortOption(e.target.value)}>
              <option value="">Sort by</option>
              <option value="views">Views</option>
              <option value="likes">Likes</option>
              <option value="date">Date Posted</option>
            </select>
            <input
              type="text"
              placeholder="Search videos..."
              className="input input-bordered"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label className="cursor-pointer label">
              <span className="label-text mr-2">Trending Only</span>
              <input
                type="checkbox"
                className="toggle toggle-info"
                checked={filterTrending}
                onChange={() => setFilterTrending(!filterTrending)}
              />
            </label>
          </div>
        </div>

        {/* Top Video Banner */}
        {topVideo && (
          <div className="card lg:card-side bg-gradient-to-r from-indigo-500 to-pink-400 text-white shadow-xl">
            <figure className="w-full lg:w-1/2">
              <img src={topVideo.thumbnail} alt={topVideo.title} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body w-full lg:w-1/2">
              <h2 className="card-title">Top Video This Week</h2>
              <p>{topVideo.title} gained {topVideo.views.toLocaleString()} views and {topVideo.likes?.toLocaleString() || 0} likes.</p>
              {topVideo.isTrending && <div className="badge badge-warning mt-2">🔥 Trending</div>}
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video._id} className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
              <figure><img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" /></figure>
              <div className="card-body">
                <h2 className="card-title">{video.title}</h2>
                <p>{video.views.toLocaleString()} views</p>
                <p>👍 {video.likes || 0}  💬 {video.comments || 0}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="badge badge-info">{video.collabPotential || 0} Collab</div>
                  {video.isTrending && <div className="badge badge-warning">🔥 Trending</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Chart */}
        <div className="card bg-base-100 shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-2">Video Growth Over Time</h2>
          {topVideo?.analytics?.length ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={topVideo.analytics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#4f46e5" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-gray-500 text-center h-32 flex items-center justify-center">
              No growth data available.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Video_manger;
