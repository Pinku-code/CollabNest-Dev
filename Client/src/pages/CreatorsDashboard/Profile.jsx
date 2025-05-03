import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../utils/api';
import DashNavbar from '../../components/Navbar_dashboard';
import Footer from '../../components/Footer';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(API.PROFILE_ME, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="bg-base-100 mt-20 min-h-screen">
      <DashNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Header Info */}
        <div className="card  bg-base-200 shadow-xl">
          <figure>
            <img
              className="w-30 h-30 object-cover rounded-full m-4"
              src={profile.avatar || 'https://placehold.co/150x150'}
              alt="Avatar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{profile.fullName}</h2>
            <p className="text-sm ">@{profile.handle}</p>
            <p className="mt-1">{profile.bio || "No bio available"}</p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="badge badge-info">{profile.followers} Followers</span>
              <span className="badge badge-success">{profile.following} Following</span>
              <span className="badge badge-warning">{profile.postsCount} Posts</span>
              <span className="badge badge-secondary">{profile.engagementRate || 0}% Engagement</span>
            </div>

            <div className="mt-4">
              <p className="text-sm ">Email: {profile.email}</p>
              <p className="text-sm ">Joined: {new Date(profile.createdAt).toLocaleDateString()}</p>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-sm">Edit Profile</button>
              {profile.mediaKitUrl && (
                <a href={profile.mediaKitUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-sm">
                  View Media Kit
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Niches */}
        <div className="card bg-base-200 shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Content Niches</h3>
          <div className="flex flex-wrap gap-2">
            {profile.niches.map((niche, idx) => (
              <div key={idx} className="badge badge-outline">{niche}</div>
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card bg-base-200 p-4 shadow">
            <p className="text-sm">Total Collabs</p>
            <h2 className="text-xl font-bold">{profile.totalcollabs}</h2>
          </div>
          <div className="card bg-base-200 p-4 shadow">
            <p className="text-sm">Pending Offers</p>
            <h2 className="text-xl font-bold">{profile.pending}</h2>
          </div>
          <div className="card bg-base-200 p-4 shadow">
            <p className="text-sm">Estimated Earnings</p>
            <h2 className="text-xl font-bold">{profile.earnings}</h2>
          </div>
          <div className="card bg-base-200 p-4 shadow">
            <p className="text-sm">Posts Created</p>
            <h2 className="text-xl font-bold">{profile.postsCount}</h2>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Profile;
