import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../utils/api";
import DashNavbar from "../../components/Navbar_dashboard";
import Footer from "../../components/Footer";
import toast from "react-hot-toast";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");
  const [editOpen, setEditOpen] = useState(false);
  const [loading,setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    bio: "",
    handle: "",
    niches: "",
    avatar: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        fullName: profile.fullName || "",
        bio: profile.bio || "",
        handle: profile.handle || "",
        niches: profile.niches?.join(", ") || "",
        avatar: profile.avatar || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(
        API.PROFILE_ME,
        {
          ...formData,
        //   niches: formData.niches.split(",").map((n) => n.trim()),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLoading(false);
      setProfile(res.data);
      
      setEditOpen(false);
      toast.success("Profile Updated");
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  };

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

  if (!profile)
    return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="bg-base-100 mt-20 min-h-screen">
      <DashNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Header Info */}
        <div className="card  bg-base-200 shadow-xl">
          <figure>
            <img
              className="w-30 h-30 object-cover rounded-full m-4"
              src={profile.avatar || "https://placehold.co/150x150"}
              alt="Avatar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{profile.fullName}</h2>
            <p className="text-sm ">@{profile.handle}</p>
            <p className="mt-1">{profile.bio || "No bio available"}</p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="badge badge-info">
                {profile.followers} Followers
              </span>
              <span className="badge badge-success">
                {profile.following} Following
              </span>
              <span className="badge badge-warning">
                {profile.postsCount} Posts
              </span>
              <span className="badge badge-secondary">
                {profile.engagementRate || 0}% Engagement
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm ">Email: {profile.email}</p>
              <p className="text-sm ">
                Joined: {new Date(profile.createdAt).toLocaleDateString()}
              </p>
            </div>

            {editOpen && (
              <div className="fixed inset-0 bg-base-200 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-base-100 dark:bg-base-100 p-6 rounded-xl shadow-lg w-full max-w-lg relative">
                  <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      className="input input-bordered w-full"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                    <input
                      className="input input-bordered w-full"
                      name="handle"
                      value={formData.handle}
                      onChange={handleChange}
                      placeholder="Handle"
                    />
                    <input
                      className="input input-bordered w-full"
                      name="avatar"
                      value={formData.avatar}
                      onChange={handleChange}
                      placeholder="Avatar URL"
                    />
                    <textarea
                      className="textarea textarea-bordered w-full"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Bio"
                    ></textarea>
                    <input
                      className="input input-bordered w-full"
                      name="niches"
                      value={formData.niches}
                      onChange={handleChange}
                      placeholder="Niches (comma-separated)"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setEditOpen(false)}
                        className="btn btn-ghost"
                      >
                        Cancel
                      </button>
                      {loading ? (
                        <button
                        type="button"
                        disabled
                        className="btn btn-primary"
                      >
                        Saving...
                      </button>
                      ) : (
                        <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                      )

                      }
                      
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className="card-actions justify-end">
              <button
                onClick={() => setEditOpen(true)}
                className="btn btn-outline btn-sm"
              >
                Edit Profile
              </button>

              {profile.mediaKitUrl && (
                <a
                  href={profile.mediaKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-sm"
                >
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
              <div key={idx} className="badge badge-outline">
                {niche}
              </div>
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
